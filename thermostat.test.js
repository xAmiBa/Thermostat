const Thermostat = require('./thermostat')

describe('class Thermostat', () => {
    const thermostat = new Thermostat();
    test('should show current initial temp', () => {
        expect(thermostat.getTemparature()).toBe(20);
    });
    test('should increase temp by 1', () => {
        thermostat.up()
        expect(thermostat.getTemparature()).toBe(21);
    })
    test('should decrease temp by 2', () => {
        thermostat.down()
        thermostat.down()
        expect(thermostat.getTemparature()).toBe(19);
    })
    test('should change power saving mode', () => {
        thermostat.setPowerSavingMode(false)
        expect(thermostat.powerSavingMode).toBe(false)
    })
    test('reset temp to 20', () => {
        thermostat.up();
        thermostat.up();
        thermostat.reset()
        expect(thermostat.getTemparature()).toBe(20)
    })
    test('ask about energy usage status', () => {
        thermostat.temperature = 17
        expect(thermostat.energyUsageSatus()).toBe("low-usage")
        thermostat.temperature = 27
        expect(thermostat.energyUsageSatus()).toBe("high-usage")
        thermostat.temperature = 21
        expect(thermostat.energyUsageSatus()).toBe("medium-usage")
    })
    test('cant go below 10', () => {
        thermostat.temperature = 10
        thermostat.down()
        expect(thermostat.getTemparature()).toBe(10)
    })
    test('cant go above 25 degrees when power mode on', () => {
        thermostat.setPowerSavingMode(true)
        thermostat.temperature = 25
        thermostat.up()
        expect(thermostat.getTemparature()).toBe(25)
    })
    test('cant go above 32 degrees when power mode off', () => {
        thermostat.setPowerSavingMode(false)
        thermostat.temperature = 31
        thermostat.up()
        expect(thermostat.getTemparature()).toBe(32)
        thermostat.up()
        expect(thermostat.getTemparature()).toBe(32)
    })
});