
// singleton using IIFE
const instance = (() =>{
    let value = 0
    return {
        get: () => value,
        set: (_value) => value = _value
    }
})()


console.log(instance.get()) // 0
instance.set(30)
console.log(instance.get())

const instance1 = instance
instance1.set(60)
console.log(instance1.get() === instance.get())
instance.set(90)
console.log(instance1.get() === instance.get())