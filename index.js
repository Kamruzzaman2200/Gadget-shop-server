const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json())

//mongodb connection

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1aopg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  const dbConnect = async () => {
    try{
        client.connect();
        console.log('Database connected');

    }
    catch(err){
        console.log(error.name,error.message);
        
    }
    }
    dbConnect();

//api
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on Port , ${port}`)    
});

