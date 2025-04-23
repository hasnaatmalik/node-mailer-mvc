const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mailRoutes = require("./routes/mailRoutes");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", mailRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
