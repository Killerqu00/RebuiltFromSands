StartupEvents.registry('block', event => {
    event.create("oil_sand")
    .displayName("Oil Sand")
    .hardness(0.5)
    .resistance(0.5)
    .material("sand")
    .sandSoundType()
    .tagBlock('forge:sand')
    .tagBlock('minecraft:sand')
})