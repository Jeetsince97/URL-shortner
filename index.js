const express = require("express");

const connectDB = require("./config/db");

const app = express();

//Connect to the Database here
connectDB();

app.use(express.json({ extented: false }));

//Defining the Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
