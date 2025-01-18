const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/reactdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.log("failed to connect to MongoDB:", err));
module.exports = mongoose;