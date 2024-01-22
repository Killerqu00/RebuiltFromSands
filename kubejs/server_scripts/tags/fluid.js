ServerEvents.tags('fluid', event => {
    event.remove('minecraft:water','ad_astra:fuel')
    event.remove('minecraft:water','ad_astra:flowing_fuel')
    event.remove('minecraft:water','ad_astra:oil')
    event.remove('minecraft:water','ad_astra:flowing_oil')
    event.remove('minecraft:water','ad_astra:cryo_fuel')
    event.remove('minecraft:water','ad_astra:flowing_cryo_fuel')
})