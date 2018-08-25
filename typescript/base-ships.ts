class Spacecraft{
    constructor(public propulsor:string){

    }

    jumpToHyperSpace():void{
        console.log(`Entering the hyper space with ${this.propulsor}`)
    }
}

interface ContainerShip{
    cargoNumber:number
}

export {Spacecraft, ContainerShip}