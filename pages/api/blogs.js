import { ObjectId } from "mongodb";
import MONGO_CLIENT from "../../Merkurial/API_STORAGE/APIS/MONGO_CLIENT";

const handleBlogAction = async (req, res) => {
  const method = req.method;
  const d = req.body;
  const author = d.author;
  const title = d.title;
  const body = d.body;
  const _id = d._id;
  const date = Date.now();

  const filter = {
    _id: ObjectId(_id),
  };

  const data = {
    author: author,
    title: title,
    body: body,
    date: date,
  };

  if (method === "POST") {
    const { collection, client } = await MONGO_CLIENT();
    // client.connect(process.env.MONGO_URI);

    collection
      .insertOne({ ...data })
      .then((response) => {
        return response;
      })
      .then((info) => {
        if (info.acknowledged) {
          res.status(200);
          res.json(info);
        } else {
          res.status(400);
          res.send(info);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.send({ err: err });
      });
    client.close();
  } else if (method === "GET") {
    const { collection, client } = await MONGO_CLIENT("BLOGS GET");
    const cursor = await collection.find({});

    const array = await cursor.toArray();
    if (array.length > 0) {
      const data = JSON.stringify(array);
      res.status(200);
      res.send(data);

      // res.json(cursor);
    } else {
      const message = "THERE ARE NO BLOGS AVAILABLE";
      res.status(400);
      res.send({ err: message });
    }

    client.close();
  } else if (method === "PUT") {
    data._id = ObjectId(_id);
    collection.updateOne(filter, data, { upsert: false }).then((response) => {
      res.send(response);
    });
  } else if (method === "DELETE") {
    data._id = ObjectId(_id);
    collection.deleteOne(filter).then((response) => {
      if (response.deletedCount > 0) {
        res.status(200);
        res.send(response);
      } else {
        res.status(400);
        res.send(response);
      }
    });
  } else {
    res.send({ err: "Fix Your CRUD METHOD!" });
  }
};

export default handleBlogAction;
