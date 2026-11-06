import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb://localhost:27017/");
// const client = new MongoClient(process.env.MONGODB_URI);

export const db = client.db("2502E2");

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
}