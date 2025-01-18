const express = require("express");
const crypto = require("crypto");
const Data = require("./mongo/models/data");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static("src"));

app.post("", function(req, res) {

    const password = String(req.body.password);
    console.log("password:" + password);

    const iv = crypto.randomBytes(16);
    console.log("iv: " + iv.toString("hex"));

    const key = crypto.createHash('sha256').update(password).digest().slice(0, 16);
    console.log("Key: " + key.toString("hex"));

    const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
    console.log("cipher: " + cipher);

    let ciphertext = cipher.update(req.body.data, "utf8", "hex");
    ciphertext += cipher.final("hex");

    console.log("ciphertext: " + ciphertext);

    const data = new Data({
        data: ciphertext,
        dateTime: new Date(Date.now())
    });

    data.save()
        .then(() => res.status(201).send("data added successfully"))
        .catch(error => res.status(500).send("Error adding data: " + error.message))
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});