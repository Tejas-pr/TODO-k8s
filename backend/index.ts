require("dotenv").config({
    file: "./secret/.env"
})

import express from "express"

const app = express();

app.use(express.json());

const BACKEND_PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "IM up!!",
        db: DATABASE_URL
    });
});

console.log("backend port is : ", BACKEND_PORT);
console.log("database port is : ", DATABASE_URL);

app.listen(BACKEND_PORT, () => {
    console.log(`app running in the port: ${BACKEND_PORT}`)
});