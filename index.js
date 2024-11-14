const { createServer } = require('node:http');
//const FileHander=require("./modules/filehandler");
const express=require("express");
const bodyParser=require("body-parser");
const main_routes=require("./routes")
const swaggerjsonFilePath = require("./swagger.json");
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const mangoose=require("mongoose");
const { error } = require('node:console');
require("dotenv").config();
const app=express();
app.use(cors());
app.use(bodyParser.json());

const server=createServer(app);
const hostname = '127.0.0.1';
const port = 3000;
console.log("================",process.env.DATABASE_URL);
var database=mangoose.connect(process.env.DATABASE_URL,{family:4});
database.then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerjsonFilePath, { explorer: true }));
app.use("/api",main_routes);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
