ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:flint_axe', '{Damage:0}'),
        [
            '#forge:rods/wooden',
            'minecraft:flint',
            '#kubejs:tool_binding',
            '#kubejs:tool_binding'
        ]
    )
    event.shapeless(
        Item.of('kubejs:flint_pickaxe', '{Damage:0}'),
        [
            '#forge:rods/wooden',
            '#forge:rods/wooden',
            'minecraft:flint',
            '#kubejs:tool_binding'
        ]
    )
    event.shapeless(
        Item.of('kubejs:flint_hoe', '{Damage:0}'),
        [
            '#forge:rods/wooden',
            'minecraft:flint',
            '#kubejs:tool_binding'
        ]
    )
    event.shapeless(
        Item.of('kubejs:flint_shovel', '{Damage:0}'),
        [
            '#forge:rods/wooden',
            'minecraft:flint',
            'minecraft:flint',
            '#kubejs:tool_binding'
        ]
    )
})