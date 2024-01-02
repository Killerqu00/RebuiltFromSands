ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),
        [
            Item.of('woodenbucket:wooden_bucket'),
            'minecraft:hanging_roots',
            'minecraft:hanging_roots',
            'minecraft:hanging_roots'
        ]
    )
    event.shapeless(
        'minecraft:dirt',
        [
            Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),
            'minecraft:bone_meal',
            '#minecraft:sand',
            'kubejs:pebble'
        ]
    )
    event.shapeless(
        Item.of('minecraft:cobblestone'),
        [
            'kubejs:pebble',
            'kubejs:pebble',
            'kubejs:pebble',
            'kubejs:pebble',
            'kubejs:pebble',
            'kubejs:pebble',
            'kubejs:pebble',
            'kubejs:pebble',
            'kubejs:pebble'
        ]
    )
    event.shapeless(
        Item.of('minecraft:flint'),
        [
            'kubejs:pebble',
            'kubejs:pebble',
            'kubejs:pebble'
        ]
    )
    event.shaped(
        'minecraft:campfire',
        [
            '   ',
            'SSS',
            'WWW'
        ],
        {
            S: 'minecraft:stick',
            W: '#minecraft:logs_that_burn'
        }
    )
    event.campfireCooking('minecraft:clay', 'minecraft:mud')
    event.campfireCooking('minecraft:brick', '#forge:clay')
    event.remove({output: 'minecraft:furnace'})
    event.remove({output: 'minecraft:campfire'})
    event.shaped(
        'minecraft:furnace',
        [
            ' C ',
            'C C',
            'BBB'
        ],
        {
            C: '#minecraft:stone_crafting_materials',
            B: '#forge:ingots/brick'
        }
    )
    event.shaped(
        'minecraft:grass_block',
        [
            'RRR',
            'RSR',
            'RRR'
        ],
        {
            S: 'farmersdelight:rich_soil',
            R: 'minecraft:hanging_roots'
        }
    )
    event.remove({output: 'minecraft:crafting_table'})
    event.shapeless(
        'minecraft:crafting_table',
        [
            '#minecraft:logs',
            Item.of('farmersdelight:flint_knife', '{Damage:0}'),
            Item.of('kubejs:flint_axe', '{Damage:0}')
        ]
    )
    event.remove({output: 'minecraft:piston'})
    event.shaped(
        'minecraft:piston',
        [
            'SSS',
            'CIC',
            'CRC'
        ],
        {
            S: '#minecraft:wooden_slabs',
            C: '#forge:cobblestone',
            I: '#forge:rods/iron',
            R: '#forge:dusts/redstone'
        }
    )
    event.remove({output: 'minecraft:hopper'})
    event.shaped(
        'minecraft:hopper',
        [
            'S S',
            'SCS',
            ' S '
        ],
        {
            S: '#forge:plates/steel',
            C: '#forge:chests/wooden'
        }
    )
    event.remove({output: 'minecraft:bucket'})
    event.shaped(
        'minecraft:bucket',
        [
            'S S',
            ' S '
        ],
        {
            S: '#forge:plates/steel'
        }
    )
})