// const { default: axios } = require("axios")
const express = require("express")
const axios = require("axios")
const PORT = 8000
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.get("/city", (req, res) => {
    let city = req.query.city
    if (req.query.city == "") {
        res.send(`<h3 style="font">error:you must provide a city name!</h3>`)
    }
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2e837091050ee24d7cd43b4de062d61`)
        .then(function (response) {
            if (response.status == 200 ) {
                res.send(`<h1>${response.data.name}</h1>
                <p>latitude: ${response.data.coord.lat}</p>
                <p>longitude: ${response.data.coord.lon}</p>`)
            }
        })
        .catch(function (err) {
            console.log(err);
        });
})
app.listen(PORT, () => {
    console.log(`server listens on port : ${PORT}`);
})