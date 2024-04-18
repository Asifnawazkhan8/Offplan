const Express = require("express");
const MongoClient = require("mongodb").MongoClient; // Corrected variable name
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require("multer");

var app = Express();
app.use(bodyParser.json());
app.use(cors());

var CONNECTION_STRING ="mongodb+srv://admin:admin123@cluster0.mhjrqab.mongodb.net/?retryWrites=true&w=majority";

const url = 'mongodb://localhost:27017';
const DATABASENAME = 'offplan';
var database; // Define the 'database' variable here

app.listen(5038, () => {
    console.log('Server is listening on port 5038');
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error('Error connecting to MongoDB:', error);
            return;
        }
        database = client.db(DATABASENAME);
        console.log("Database connection successful");
    });
});

app.get('/api/offplan/GetNotes', (request, response) => {
    database.collection("dataentries").find({}).toArray((error, result) => {
        response.send(result);
    });
});

app.post('/api/offplan/AddNotes', multer().none(), async (request, response) => {
    console.log("Received POST request to /api/offplan/AddNotes");
    console.log("Inserting data into database");
    
    try {
        const name = request.body.name;
        const noOfDocs = await database.collection("dataentries").countDocuments();

        database.collection("dataentries").insertOne({
            id: (noOfDocs + 1).toString(),
            name: name,
            location: request.body.location,
            developer: request.body.developer,
            status: request.body.status,
            units: request.body.units,
            lunchdate: request.body.lunchdate,
            studio: request.body.studio,
            onebed: request.body.onebed,
            twobed: request.body.twobed,
            threebed: request.body.threebed,
            fourbed: request.body.fourbed,
            fivebed: request.body.fivebed,
            paymentyear: request.body.paymentyear,
            paymentplan: request.body.paymentplan,
            psfaverage: request.body.psfaverage,
            booking: request.body.booking,
            firstinstallment: request.body.firstinstallment,
            dld: request.body.dld,
            handover: request.body.handover,
            posthandover: request.body.posthandover,
            servicecharges: request.body.servicecharges,
            maidroom: request.body.maidroom,
            floors: request.body.floors,
            desp: request.body.desp,
            furnished:request.body.furnished,
            freehold: request.body.freehold,
            propertytype: request.body.select,
            select:request.body.select,
            stsize:request.body.stsize,
            stprice:request.body.stprice,
            obsize:request.body.obsize,
            obprice:request.body.obprice,
            twsize:request.body.twsize,
            twprice:request.body.twprice,
            thsize:request.body.thsize,
            thprice:request.body.thprice,
            fusize:request.body.fusize,
            fuprice:request.body.fuprice,
            fvsize:request.body.fvsize,
            fvprice:request.body.fvprice,
        });

        console.log("Data inserted successfully");
        response.json("Added Successfully");
    } catch (error) {
        console.error("Error reading request body:", error);
        response.status(500).json({ error: "Invalid request body" });
    }
});

MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    database = client.db(DATABASENAME);
    console.log("Connected to MongoDB");
});
