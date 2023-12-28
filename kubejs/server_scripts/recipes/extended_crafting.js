ServerEvents.recipes(event => {
    event.remove({output: 'extendedcrafting:handheld_table'})
    event.shaped(
        'extendedcrafting:handheld_table',
        [
            ' W',
            'S '
        ],
        {
            W: 'immersiveengineering:craftingtable',
            S: '#forge:rods/treated_wood'
        }
    )
})