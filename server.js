const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.use((req,res)=>res.json({ "slackUsername": 'stilkinging', "backend": true, "age": 22, "bio": "The greatest software developer in the making" }))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server running on Port " + PORT))