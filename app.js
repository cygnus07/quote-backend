import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()

app.use(cors())
app.get('/get-quote', async (req,res) => {
    try {
        const response = await fetch("https://zenquotes.io/api/random")
        const data = await response.json()
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Error fething quote"})
    }
})

const port = process.env.PORT || 7004

app.listen(7004, () => {
    console.log(`Server is listening on port: ${port}`)
})

