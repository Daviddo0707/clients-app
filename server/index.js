const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const usersRoute = require("./routes/usersRoute");
const cors = require("cors");
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.json({ info: "Humanz app is runnig!" });
});
app.listen(port, () => {
  console.log(`app runnig on port ${port}.`);
});
app.use(cors());
app.use("/", usersRoute);
