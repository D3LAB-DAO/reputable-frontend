/* express */
var express = require('express');
var app = express();
const PORT = 8080;

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.get('/testget', function (req, res) {
    get(req, res);
});

app.get('/testset', function (req, res) {
    set(req, res);
});

app.listen(PORT, function () {
    console.log("start! express server on port ", PORT)
});

/* APIs */
app.post('/api/foo', foo);
app.post('/api/get', get);
app.post('/api/set', set);


/* firebase */
var admin = require("firebase-admin");
var serviceAccount = require("./key.json");

// Initialize the app with a custom auth variable, limiting the server's access
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // The database URL depends on the location of the database
    databaseURL: "https://reputable-a3bec-default-rtdb.firebaseio.com/",
    databaseAuthVariableOverride: {
        uid: "my-service-worker" // todo
    }
});

// The app only has access as defined in the Security Rules
var db = admin.database();
var ref = db.ref("/some_resource");

function foo(req, res) {
    res.send('hello world');
};

function get(req, res) {
    ref.once("value", function (snapshot) {
        res.send(snapshot.val());
        console.log(snapshot.val());
    });
}

function set(req, res) {
    ref.child('alanisawesome').set({
        date_of_birth: 'June 23, 1912',
        full_name: 'Alan Turing'
    });
    res.send("done");
    console.log("done");
}

async function test() {
    // fire storage test
    db.collection("test").doc("1234").set({
        name: "Los Angeles 2",
        state: "CA 2",
        country: "USA 2"
    });
}