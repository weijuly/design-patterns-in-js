// create a wrapper object and call the appropriate method
// if required, parameters can be transformed
const target = {
    call: (person) => console.log(`calling... ${person}`),
    kill: (person) => console.log(`killing... ${person}`)
}

const german_adapter = (target) => ({
    anruf: (person) => target.call(person),
    toten: (person) => target.kill(person)
})

german_adapter(target).anruf('Le Chiffre')
german_adapter(target).toten('Ernst Stavro Blofeld')

const korean_adapter = (target) => ({
    jeonhwa: (person) => target.call(person),
    jugim:(person) => target.kill(person)
})

korean_adapter(target).jeonhwa('Franz Sanchez')
korean_adapter(target).jugim('Alec Trevelyan')
