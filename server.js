const app = require("./app");

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

const DB_HOST =
  "mongodb+srv://alaina:89DpPJvhtPdjOvlh@cluster0.g5rwq.mongodb.net/db-contacts?retryWrites=true&w=majority";

const mongoose = require("mongoose");

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error.message));
