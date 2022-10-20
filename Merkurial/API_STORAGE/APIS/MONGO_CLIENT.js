import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const MONGO_CLIENT = async (locationCalled) => {
  // locationCalled & console.log("LOCATION CALLED: ", locationCalled);
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  const collection = client.db("portfolio").collection("blogs");
  return { collection: collection, client: client, ObjectId: ObjectId };
};

export default MONGO_CLIENT;
