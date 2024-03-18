
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


const http = require("http");

const app = require("./src/app.js"); 

const server = http.createServer(app);

server.listen(process.env.PORT, process.env.HOST, (err) => {
  if (err) {
    console.log(
      "\x1b[31mError encountered while listening to the port:",
      err,
      "\x1b[0m"
    );
    return;
  }
  console.log(
    "Listening successfully\n" +
      "Port: \x1b[36m" +
      process.env.PORT +
      "\x1b[0m\n" +
      "Host: \x1b[32m" +
      process.env.HOST +
      "\x1b[0m"
  );
});
