const express = require('express')
const app = express()
const PORT = 3001  // change to 3001 cuz our front-end is running at 3000

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.send(jobs);
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}!`)
})