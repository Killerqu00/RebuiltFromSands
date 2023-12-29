ServerEvents.recipes(event => {
    event.remove({output: 'cookingforblockheads:crafting_book'})
    event.smelting('cookingforblockheads:crafting_book', 'cookingforblockheads:recipe_book')
    event.remove({output: 'nutritionalbalance:lunchbox'})
    event.shaped(
        'nutritionalbalance:lunchbox',
        [
            'CCC',
            'C C',
            'CCC'
        ],
        {
            C: 'farmersdelight:canvas'
        }
    )
})