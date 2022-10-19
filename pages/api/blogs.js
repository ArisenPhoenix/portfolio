import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

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
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  const collection = client.db("portfolio").collection("blogs");

  if (method === "POST") {
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
    collection
      .find({})
      .then((result) => {
        if (result.acknowledged) {
          return result.toArray();
        }
      })
      .then((data) => {
        res.status(200);
        res.send(data);
      });
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
