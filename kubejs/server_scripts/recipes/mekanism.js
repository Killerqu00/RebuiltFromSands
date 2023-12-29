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
})