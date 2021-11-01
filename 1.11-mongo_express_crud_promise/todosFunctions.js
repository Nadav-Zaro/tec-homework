const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const mongoURL = "mongodb://localhost:27017";
const dbName = "jasonplaceholder"
const collName = "todos"

function showDocs(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        dbo = db.db(dbName)
        dbo.collection(collName).find({}).toArray((error, docs) => {
            if (error) throw error;
            res.send(docs);
            db.close()
        })
    })
}

function showDocsAsync(req, res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            dbo = db.db(dbName)
            dbo.collection(collName).find({}).toArray().then((docs) => {
                res.send(docs);
                db.close()
            })
        })
        .catch((err) => {
            console.error()
        })
}

function showById(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const objId = { _id: mongoDB.ObjectId(req.params.id) };
        dbo = db.db(dbName)
        dbo.collection(collName).find(objId).toArray((error, docs) => {
            if (error) throw error;
            res.send(docs);
            db.close()
        })
    })
}

function showByIdAsync(req, res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            const objId = { _id: mongoDB.ObjectId(req.params.id) };
            dbo = db.db(dbName)
            dbo.collection(collName)
                .find(objId)
                .toArray()
                .then((docs) => {
                    res.send(docs)
                    db.close()
                })
                .catch((err) => {
                    throw err
                })
        })
}

function postDoc(req, res) {
    const client = req.body
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        dbo = db.db(dbName)
        dbo.collection(collName).insertOne(client, (err, doc) => {
            if (err) throw err;
            res.send(doc)
            db.close()
        })
    })
}

function postDocAsync(req, res) {
    const client = req.body
    MongoClient.connect(mongoURL)
        .then((db) => {
            dbo = db.db(dbName)
            dbo.collection(collName)
                .insertOne(client).then((doc) => {
                    res.send(doc)
                    db.close()
                })
        })
        .catch((err) => {
            throw err
        })
}

function deleteDoc(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const objId = { _id: mongoDB.ObjectId(req.params.id) };
        dbo = db.db(dbName)
        dbo.collection(collName).deleteOne(objId, (err, doc) => {
            if (err) throw err;
            res.sendStatus(200)
            db.close()
        })
    })
}

function deleteDocAsync(req, res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            const objId = { _id: mongoDB.ObjectId(req.params.id) }
            dbo = db.db(dbName)
            dbo.collection(collName).deleteOne(objId)
                .then((doc) => {
                    res.sendStatus(200)
                    db.close()
                })
        })
        .catch((err) => {
            throw err
        })
}

function updateDoc(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const objId = { _id: mongoDB.ObjectId(req.params.id) };
        const update = req.body
        dbo = db.db(dbName)
        dbo.collection(collName).updateOne(objId, { $set: update }, (err, doc) => {
            if (err) throw err;
            res.send(doc)
            db.close()
        })
    })
}

function updateDocAsync(req, res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            const objId = { _id: mongoDB.ObjectId(req.params.id) };
            const update = req.body
            dbo = db.db(dbName)
            dbo.collection(collName).updateOne(objId, { $set: update }).then((doc) => {
                res.send(doc)
                db.close()
            })
        })
        .catch((err) => {
            throw error;
        })
}

module.exports = { showDocs, showById, postDoc, deleteDoc, updateDoc, showDocsAsync, updateDocAsync, showByIdAsync, postDocAsync, deleteDocAsync }
// module.exports.showById = showById
// module.exports.postDoc = postDoc
// module.exports.deleteDoc = deleteDoc
// module.exports.updateDoc = updateDoc