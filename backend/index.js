const express = require("express");

require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

const admin = require("firebase-admin");

var serviceAccount = require("./firebase_admin_sdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const verifyFirebaseToken = async (req, res, next) => {
  console.log(req.headers.authorization);

  if (!req.headers.authorization) {
    return res.status(401).send("sala vag , tui unauthorized");
  }

  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send("sala vag , tui unauthorized");
  }

  try {
    await admin.auth().verifyIdToken(token);
    next();
  } catch {
    return res.status(401).send("sala vag , tui unauthorized");
  }
};

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("aperture");
    const booksCollection = db.collection("Books");
    const usersCollection = db.collection("Users");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );

    app.get("/books", async (req, res) => {
      const result = await booksCollection.find().toArray();
      res.send(result);
    });

    app.get("/book/:id", verifyFirebaseToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await booksCollection.findOne(query);
      console.log(result);
      res.status(200).send(result);
    });

    // app.post("/create-user", async(req,res)=>{

    // })
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("You server api is running");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
