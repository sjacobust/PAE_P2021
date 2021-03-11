const MongoClient = require("mongodb").MongoClient;
const dotenv = require('dotenv');

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

let db;
let isConnecting = false;

class Database {

    collectionName;
    db;
    collection;

    constructor() {
        if (isConnecting) return;

        isConnecting = true;

        MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
            if(err) {
                console.log('Failed to connect to MongoDB');
                return;
            }
        
            db = client.db();
            console.log('Successfully connected to MongoDB');
        });
    }

    useCollection(name) {
        this.collectionName = name;
    }

    find(filters, cb)  {
        const collection = db.collection(this.collectionName);
        return collection.find(filters).toArray(cb);

    }

    findOne(filters) {

    }

    insertOne(document, cb) {
        const collection = db.collection(this.collectionName);
        return collection.insertOne(document, cb);
    }
}

module.exports = Database;