ServerEvents.recipes(event => {
    event.remove({output: 'ad_astra:steel_ingot'})
    event.remove({output: /ad_astra:.+_plate/, type:'minecraft:crafting'})
    event.remove({output: /ad_astra:.+_plate/, type:'ad_astra:hammering'})
})