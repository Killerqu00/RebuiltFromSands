ServerEvents.recipes(event => {
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "custommachines:sand_drill",
        "time": 20,
        "requirements": [
            {
                "type": "custommachinery:energy",
                "mode": "input",
                "amount": 2000,
            },
            {
                "type": "custommachinery:item",
                "mode": "output",
                "item": "minecraft:sand",
                "amount": 1
            }
        ]
    })
})