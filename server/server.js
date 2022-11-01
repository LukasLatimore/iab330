const data = require("../client/src/mockdata.json")
const data2 = require("../client/src/data.json")
const express = require('express')
const app = express()

//staff data
app.get("/api", (req, res) => {
    res.json(data)
})

//heatmap data
app.get("/heatmapapi", (req, res) => {

    res.json(data2)
})

app.listen('5000', () => {console.log("server starting on port 5000")})

