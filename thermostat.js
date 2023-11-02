class Thermostat {
    constructor() {
        this.temperature = 20
        this.powerSavingMode = true
        // // The Thermostat starts with an initial temperature of 20 degrees
        // // The Power saving mode is on by default but it can also be turned off
    }
    getTemparature () {
        // // get temperature now
        return this.temperature
    }
    up() {
        // If power saving mode is on, the maximum temperature is 25 degrees
        // If power saving mode is off, the maximum temperature is 32 degrees
        if (this.powerSavingMode === true) {
            if (this.temperature < 25) {
                this.temperature += 1;
            }
        } else {
            if (this.temperature < 32) {
                this.temperature += 1;
            }
        }
    }
    down() {
        // // You can decrease the temperature with a down method
        // // The minimum possible temperature is 10 degrees
        if (this.temperature <= 10) {
            this.temperature = 10
        }
        else {
            this.temperature -= 1
        }
    }
    setPowerSavingMode(choice) {
        this.powerSavingMode = choice
    }
    reset() {
        // // You can reset the temperature to 20 with a reset method
        this.temperature = 20
    }
    energyUsageSatus() {
        // // You can ask about the thermostat's current energy usage:
        // // < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
        if (this.temperature < 18) {
            return "low-usage"
        }
        else if (this.temperature >= 25) {
            return "high-usage"
        }
        else {
            return "medium-usage"
        }
    }
}

module.exports = Thermostat;