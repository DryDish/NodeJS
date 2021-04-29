const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "moviesDB";


MongoClient.connect(url, {useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw error;
    }

    const db = client.db(dbName);
    const movies = db.collection("movie");

    const movie = {name: "inserted Movie eleven"};

    movies.insertOne(movie, (error, result) => {
        if (error) {
            throw error;
        }

        console.log(result.result);
        console.log(result.ops);
        client.close();
    });
});
