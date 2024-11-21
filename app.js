import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());

// Endpoint to fetch a random quote
app.get('/get-quote', async (req, res) => {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();

        // Ensure data contains the expected structure
        if (Array.isArray(data) && data.length > 0) {
            res.json(data);
        } else {
            throw new Error("Invalid response structure from ZenQuotes API");
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
        res.status(500).json({ error: "Error fetching quote" });
    }
});

// Keep-alive endpoint to prevent server from sleeping
app.get('/ping', (req, res) => {
    res.status(200).send("Server is alive");
});

const port = process.env.PORT || 7004;

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
