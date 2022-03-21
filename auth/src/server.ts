import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(express.urlencoded({ extended: true }));

app.post("/auth", function (req, res) {
  const streamKey = req.body.key;

  /* You can make a database of users instead :) */
  if (streamKey === process.env.STREAM_KEY) {
    res.status(200).send();
    return;
  }

  /* Reject the stream */
  res.status(403).send();
});

app.listen(8000, function () {
  console.log("Listening on port 8000!");
});
