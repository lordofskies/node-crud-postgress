const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const https = require("https");


dotenv.config({path: `./configs/.env.${process.env.NODE_ENV}`});


const options = {
   key: fs.readFileSync(process.env.SSL_KEY),
   cert: fs.readFileSync(process.env.SSL_CERT),
}

const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.send('App is running healthy! at port: ' + process.env.PORT);
});

https.createServer(options, app).listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})