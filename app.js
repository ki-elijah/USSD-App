
const express = recquire("express");
const ussdRoute = recquire("./index");
const bodyParser = recquire("body-parser");

const app = express();
const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log('running on localhost:${PORT}'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));