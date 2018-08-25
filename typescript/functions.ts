let isGreatThen12 = (valor:number):boolean => valor > 12

const thisNumber = 14

console.log(`${thisNumber} é maior do que 12?${isGreatThen12(thisNumber)?'sim':'não'}`)

const call = (name:string) => `Do you copy me ${name}?`
console.log(call('R2'))

const inc = (speed:number, inc:number = 1):number => speed + inc
console.log(`in(5,1)=${inc(5,1)}`)
console.log(`in(5)=${inc(5)}`)