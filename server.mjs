import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const apiKey = process.env.NYT_API_KEY
// New York Times API
const nyTimesApi = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
// API route
app.get("/data", async (req, res) => {
    const { query } = req.query;
    const response = await fetch(`${nyTimesApi}?q=${query}&api-key=${apiKey}`)
    const data = await response.json();
    res.json(data)
})

app.listen(5000, () => console.log("Server is running on port 5000")); 