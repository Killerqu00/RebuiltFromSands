ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:mesh', '{Damage:0}'),
        [
            'SW',
            'WS'
        ],
        {
            S: 'farmersdelight:straw',
            W: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('kubejs:iron_mesh', '{Damage:0}'),
        [
            'ISI',
            'SSS',
            'ISI'
        ],
        {
            I: '#forge:ingots/iron',
            S: '#forge:string'
        }
    )
    event.shapeless(
        'kubejs:pebble',
        [
            '#forge:sand',
            'kubejs:mesh'
        ]
    ).damageIngredient('kubejs:mesh')
    event.shapeless(
        'kubejs:pebble',
        [
            '#forge:sand',
            'kubejs:iron_mesh'
        ]
    ).damageIngredient('kubejs:iron_mesh')
    event.shapeless(
        'kubejs:scrap',
        [
            '#forge:sand',
            '#forge:sand',
            'kubejs:mesh'
        ]
    ).damageIngredient('kubejs:mesh')
    event.shapeless(
        'kubejs:scrap',
        [
            '#forge:sand',
            '#forge:sand',
            'kubejs:iron_mesh'
        ]
    ).damageIngredient('kubejs:iron_mesh')
    event.shapeless(
        'kubejs:broken_circuit',
        [
            '#forge:sand',
            '#forge:sand',
            '#forge:sand',
            '#forge:sand',
            'kubejs:iron_mesh'
        ]
    ).damageIngredient('kubejs:iron_mesh')
    event.blasting('chemlib:iron_dust', 'kubejs:scrap')
    event.blasting('chemlib:copper_dust', 'kubejs:broken_circuit')
    event.smelting('chemlib:iron_dust', 'kubejs:scrap')
    event.smelting('chemlib:copper_dust', 'kubejs:broken_circuit')
    event.shapeless(
        'minecraft:redstone',
        [
            'kubejs:broken_circuit'
        ]
    )
    event.remove({output: 'immersiveengineering:blastbrick'})
    event.shaped(
        '3x immersiveengineering:blastbrick',
        [
            'CBC',
            'BSB',
            'CBC'
        ],
        {
            C: '#forge:ingots/copper',
            B: '#forge:ingots/brick',
            S: '#forge:sandstone'
        }
    )
})