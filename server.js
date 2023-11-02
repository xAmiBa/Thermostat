const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
    // let temperature = ('Thermostat is set to: ' + thermostat.getTemparature().toString() +' degrees');
    let response = thermostat.getTemparature()
    let temperature = JSON.stringify(response)
    res.send('Thermostat is set to: ' + temperature +' degrees');
});

app.post('/up', (req, res) => {
    thermostat.up();
    res.send("Thermostat is set 1 degree higher.")
})

app.post('/down', (req, res) => {
    thermostat.down();
    res.send("Thermostat is set 1 degree lower.")
})

app.delete('/temperature', (req, res) => {
    thermostat.reset();
    res.send("Thermostat is set to default temperature.")
})

app.post('/power-saving', (req, res) => {
    // get argument from query parameter
    let choice = req.query.choice;

    if (choice === 'true') {
        thermostat.setPowerSavingMode(true);
        res.send("Power saving mode is turned on.");
    }
    else if (choice === 'false') {
        thermostat.setPowerSavingMode(false);
        res.send("Power saving mode is turned off.");
    }
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);