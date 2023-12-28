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
})