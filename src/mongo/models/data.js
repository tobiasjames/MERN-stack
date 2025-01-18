const db = require("../db");

const Data = db.model("Data", {
    data: String,
    datetime: Date
}, "datas");

module.exports = Data