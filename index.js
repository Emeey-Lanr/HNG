const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())



const days = ["Sunday","Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday" ]
let date  = new Date()

app.get("/api", async (req, res) => {
    try {
        res.status(200).json({
          slack_name: req.query.slack_name,
          current_day: days[date.getDay()],
          utc_time: date.toUTCString(),
          track: req.query.track,
          github_file_url:
            "https://github.com/Emeey-Lanr/HNG/blob/master/index.js",
          github_repo_url: "https://github.com/Emeey-Lanr/HNG.git",
          status_code: 200,
        });
    } catch (error) {
        res.status(400).json({message:error.message, status:400})
    }
   
})







app.listen(process.env.PORT, () => {
    console.log("app has started")
})