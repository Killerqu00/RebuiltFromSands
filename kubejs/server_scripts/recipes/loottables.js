LootJS.modifiers((event) => {
    event.addLootTableModifier("minecraft:blocks/grass").randomChance(0.05).addLoot('minecraft:pumpkin_seeds')
    event.addLootTableModifier("minecraft:blocks/grass").randomChance(0.05).addLoot('minecraft:melon_seeds')
    event.addLootTableModifier("minecraft:blocks/grass").randomChance(0.05).addLoot('minecraft:beetroot_seeds')
    event.addLootTableModifier("minecraft:blocks/grass").randomChance(0.05).addLoot('farmersdelight:cabbage_seeds')
    event.addLootTableModifier("minecraft:blocks/grass").randomChance(0.05).addLoot('farmersdelight:tomato_seeds')
    event.addLootTableModifier("minecraft:entities/zombie").randomChance(0.5).addLoot("minecraft:bone")
})