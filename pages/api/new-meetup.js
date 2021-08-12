import { MongoClient } from "mongodb";
// api/new-meetup
// Post /api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://kirillginko:3zw7HhACoBNKZVkL@cluster0.irwbz.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const results = await meetupsCollection.insertOne(data);
    console.log(results);
    client.close();

    res.status(201).json({ message: "Data added!" });
  }
}

export default handler;
