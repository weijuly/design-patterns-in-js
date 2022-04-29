// JS is all about functions. A higher order function can be used
// to decorate a function

const add = (x, y) => x + y
const sub = (x, y) => x - y
const mul = (x, y) => x * y
const div = (x, y) => x / y

const logger = f => (...args) => {
    console.log(`args are: ${args}`)
    const res = f(...args)
    console.log(`result is: ${res}`)
    return res
}

const logger_decorated_add = logger(add)
console.log(logger_decorated_add(2, 3))

// validate if all the arguments to the functions are numeric
const validator = f => (...args) => {
    if (!args.reduce((acc, arg) => acc ? !isNaN(arg) : false, true)) {
        console.log(`args are invalid: ${args}`)
        return 0
    }
    return f(...args)
}

const validator_decorated_mul = validator(mul)
console.log(validator_decorated_mul(4,5))
console.log(validator_decorated_mul("ant",5))
