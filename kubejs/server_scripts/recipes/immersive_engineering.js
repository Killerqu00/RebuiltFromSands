ServerEvents.recipes(event => {
    event.remove({output: /immersiveengineering:plate_.+/, input: 'immersiveengineering:hammer'})
    event.recipes.farmersdelight.cutting(
        '#forge:storage_blocks/iron',
        '#forge:tools/axes',
        [
            '4x immersiveengineering:plate_iron'
        ]
    )
    event.recipes.farmersdelight.cutting(
        '#forge:storage_blocks/copper',
        '#forge:tools/axes',
        [
            '4x immersiveengineering:plate_copper'
        ]
    )
    event.recipes.farmersdelight.cutting(
        '#forge:storage_blocks/steel',
        '#forge:tools/axes',
        [
            '4x immersiveengineering:plate_steel'
        ]
    )
    event.remove({output: 'immersiveengineering:conveyor_basic'})
    event.shaped(
        'immersiveengineering:conveyor_basic',
        [
            'FFF',
            'IRI'
        ],
        {
            F: 'immersiveengineering:hemp_fabric',
            I: '#forge:plates/iron',
            R: '#forge:dusts/redstone'
        }
    )
    event.remove({output: 'immersiveengineering:heavy_engineering'})
    event.shaped(
        'immersiveengineering:heavy_engineering',
        [
            'SCS',
            'CPC',
            'SCS'
        ],
        {
            S:'immersiveengineering:sheetmetal_steel',
            P:'#forge:plates/copper',
            C:'immersiveengineering:component_steel'
        }
    )
    event.remove({output: 'immersiveengineering:dynamo'})
    event.shaped(
        'immersiveengineering:dynamo',
        [
            'SRS',
            'RCR',
            'SRS'
        ],
        {
            S: '#forge:ingots/steel',
            R: '#forge:dusts/redstone',
            C: 'immersiveengineering:coil_lv'
        }
    )
    event.remove({output: 'immersiveengineering:light_engineering'})
    event.shaped(
        'immersiveengineering:light_engineering',
        [
            'SCS',
            'CUC',
            'SCS'
        ],
        {
            S: 'immersiveengineering:sheetmetal_iron',
            C: 'immersiveengineering:component_iron',
            U: '#forge:ingots/copper'
        }
    )
    event.remove({output: 'immersiveengineering:rs_engineering'})
    event.shaped(
        'immersiveengineering:rs_engineering',
        [
            'SCS',
            'CRC',
            'SCS'
        ],
        {
            S: 'immersiveengineering:sheetmetal_iron',
            C: 'immersiveengineering:component_iron',
            R: 'minecraft:repeater'
        }
    )
    event.remove({output: 'immersiveengineering:graphite_electrode'})
    event.custom(
    {
        type: 'immersiveengineering:metal_press',
        mold: 'immersiveengineering:mold_rod',
        input: '4x immersiveengineering:ingot_hop_graphite',
        result: 'immersiveengineering:graphite_electrode',
        energy: 2400})
    event.remove({output: 'minecraft:cauldron'})
    event.shaped(
        'minecraft:cauldron',
        [
            'S S',
            'S S',
            'RSR'
        ],
        {
            S: '#forge:plates/steel',
            R: 'immersiveengineering:stick_steel'
        }
    )
    event.custom(
        {
            type: 'immersiveengineering:coke_oven',
            input: '#forge:charcoal',
            result: 'minecraft:coal',
            creosote: 250,
            time: 600
        }
    )
    event.custom(
        {
            type: 'immersiveengineering:squeezer',
            fluid: {
                fluid: 'immersivepetroleum:crudeoil',
                amount: 50
            },
            input: 'kubejs:oil_sand',
            energy: 6400
        }
    )
    event.custom(
        {
            type: 'immersiveengineering:crusher',
            input: 'kubejs:scrap',
            secondaries: [
                {
                    chance: 0.25,
                    output: {item:'chemlib:tin_dust'}
                },
                {
                    chance: 0.15,
                    output: {item:'mekanism:dust_osmium'}
                },
                {
                    chance: 0.05,
                    output: {item:'mekanism:dust_lead'}
                }
            ],
            result: 'chemlib:iron_dust',
            energy: 6000
        }
    )
    event.custom(
        {
            type: 'immersiveengineering:crusher',
            input: 'kubejs:broken_circuit',
            secondaries: [
                {
                    chance: 1.0,
                    output: {item:'minecraft:redstone'}
                },
                {
                    chance: 0.2,
                    output: {item:'chemlib:silver_dust'}
                },
                {
                    chance: 0.1,
                    output: {item:'chemlib:gold_dust'}
                }
            ],
            result: 'chemlib:copper_dust',
            energy: 6000
        }
    )
    event.remove({output:'minecraft:glass'})
    event.custom(
        {
            type: "immersiveengineering:arc_furnace",
            additives: [],
            secondaries: [],
            results: ['minecraft:glass'],
            input: {tag:'forge:sand'},
            time: 200,
            energy: 50000
        }
    )
    event.remove({output:/immersiveengineering:mold_.+/, type:'immersiveengineering:blueprint'})
    event.shaped(
        'immersiveengineering:mold_plate',
        [
            'N N',
            '   ',
            'N N'
        ],
        {
            N: '#forge:nuggets/steel'
        }
    )
    event.shaped(
        'immersiveengineering:mold_gear',
        [
            'N N',
            ' N ',
            'N N'
        ],
        {
            N: '#forge:nuggets/steel'
        }
    )
    event.shaped(
        'immersiveengineering:mold_rod',
        [
            'NN ',
            'N N',
            ' NN'
        ],
        {
            N: '#forge:nuggets/steel'
        }
    )
    event.shaped(
        'immersiveengineering:mold_bullet_casing',
        [
            '  N',
            ' N ',
            'N N'
        ],
        {
            N: '#forge:nuggets/steel'
        }
    )
    event.shaped(
        'immersiveengineering:mold_wire',
        [
            'N N',
            'N N',
            'N N'
        ],
        {
            N: '#forge:nuggets/steel'
        }
    )
    event.shaped(
        'immersiveengineering:mold_packing_4',
        [
            ' N ',
            'NNN',
            ' N '
        ],
        {
            N: '#forge:nuggets/steel'
        }
    )
    event.shaped(
        'immersiveengineering:mold_packing_9',
        [
            ' N ',
            'N N',
            ' N '
        ],
        {
            N: '#forge:nuggets/steel'
        }
    )
    event.shaped(
        'immersiveengineering:mold_unpacking',
        [
            'N N',
            ' N ',
            ' N '
        ],
        {
            N: '#forge:nuggets/steel'
        }
    )
    event.remove({output:'immersiveengineering:circuit_board'})
    event.shaped(
        'immersiveengineering:circuit_board',
        [
            'CCC',
            'RRR'
        ],
        {
            C:'#forge:plates/copper',
            R:'immersiveengineering:plate_duroplast'
        }
    )
    event.remove({output:'immersiveengineering:electron_tube'})
    event.shaped(
        'immersiveengineering:electron_tube',
        [
            ' G ',
            ' W ',
            'SSS'
        ],
        {
            G: '#forge:glass_panes/colorless',
            W: '#forge:wires/copper',
            S: '#forge:nuggets/steel'
        }
    )
    event.remove({output:'immersivepetroleum:gas_generator'})
    event.shaped(
        'immersivepetroleum:gas_generator',
        [
            'PPP',
            'PGP',
            'R R'
        ],
        {
            R: '#forge:rods/steel',
            G: 'immersiveengineering:generator',
            P: '#forge:plates/steel'
        }
    )
})