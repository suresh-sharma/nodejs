const { createServer } = require('node:http');
const FileHander=require("./modules/filehandler");
const express=require("express");
const bodyParser=require("body-parser");
const main_routes=require("./routes")
const swaggerjsonFilePath = require("./swagger.json");
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   console.log("Error:=====",FileHander());
//   res.end('Hello World');
// });
const app=express();
app.use(cors());
app.use(bodyParser.json());

const server=createServer(app);
const hostname = '127.0.0.1';
const port = 3000;
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerjsonFilePath, { explorer: true }));
app.use("/api",main_routes);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
