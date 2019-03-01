const express = require(`express`);
const MongoClient = require('mongodb').MongoClient;
const server = express();



MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(err);
    }
    const db = client.db('local');
    server.get('/', (req, res) => {
        db.collection('user').deleteMany({}).then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(400).send(err)
        })
    });
    server.listen(3000, () => { console.log('listen') })
})

