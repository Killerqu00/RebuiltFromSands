Platform.mods.kubejs.name = 'Rebuilt From Sands'
StartupEvents.registry('item', event => {
    event.create('mesh').maxDamage(100)
    event.create('iron_mesh').maxDamage(250)
    event.create('pebble')
    event.create('scrap')
    event.create('broken_circuit')

    event.create('flint_axe', 'axe').tier('flint')
    event.create('flint_pickaxe', 'pickaxe').tier('flint')
    event.create('flint_hoe', 'hoe').tier('flint')
    event.create('flint_shovel', 'shovel').tier('flint')
})