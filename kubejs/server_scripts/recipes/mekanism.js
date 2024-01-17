ServerEvents.recipes(event => {
    event.remove({output:'mekanism:basic_control_circuit'})
    event.shapeless(
        'mekanism:basic_control_circuit',
        [
            'immersiveengineering:circuit_board',
            'immersiveengineering:electron_tube',
            '#forge:wires/electrum',
            '#forge:dusts/redstone'
        ]
    )
    event.shaped(
        Item.of('custommachinery:custom_machine_item', '{machine:"custommachines:sand_drill"}'),
        [
            'PCP',
            'RFR',
            'PDP'
        ],
        {
            P: '#forge:plates/steel',
            C: 'mekanism:basic_control_circuit',
            R: '#forge:dusts/redstone',
            F: 'mekanism:steel_casing',
            D: 'immersiveengineering:drillhead_steel'
        }
    )
    event.remove({output:'mekanism:steel_casing'})
    event.shaped(
        'mekanism:steel_casing',
        [
            'SRS',
            'RCR',
            'SRS'
        ],
        {
            S:'#forge:ingots/steel',
            R:'#forge:rods/steel',
            C:'#forge:circuits/basic'
        }
    )
    event.remove({output:'mekanism:metallurgic_infuser'})
    event.shaped(
        'mekanism:metallurgic_infuser',
        [
            'ORO',
            'FBF',
            'OOO'
        ],
        {
            O:'#forge:ingots/osmium',
            R:'#forge:rods/gold',
            F:'minecraft:furnace',
            B:'minecraft:bucket'
        }
    )
    event.remove({output:'mekanism:advanced_control_circuit'})
    event.shapeless(
        'mekanism:advanced_control_circuit',
        [
            '#forge:circuits/basic',
            '#forge:alloys/advanced',
            '#forge:alloys/advanced',
            '#forge:alloys/advanced',
            '#forge:alloys/advanced',
            '#forge:wires/electrum',
            '#forge:wires/electrum',
            '#forge:wires/electrum',
            '#forge:wires/electrum'
        ]
    )
})