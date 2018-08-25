import {Spacecraft, ContainerShip} from './base-ships'

export default class MilleniumFalcon extends Spacecraft implements ContainerShip{
    
    cargoNumber:number

    constructor(){
        super('hyperdrive')
        this.cargoNumber = 2
    }

    jumpToHyperSpace(){
        if(Math.random() * 1 > 0.5){
            super.jumpToHyperSpace()
        }else{
            console.log('Failed to enter the hyperspace')
        }
    }
}