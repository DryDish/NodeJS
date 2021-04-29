const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "moviesDB";


MongoClient.connect(url,{useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw error;
    }

    const db = client.db(dbName);
    const movies = db.collection("movie");

    movies.find({name : "Titanic"}).toArray((error, data) => {
        console.log(data);
        client.close();
    });

});