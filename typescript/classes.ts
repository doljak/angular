
import {Spacecraft, ContainerShip} from './base-ships'
import MilleniumFalcon from './starfighters';

import * as $ from 'jquery'
import * as _ from 'lodash'

console.log(_.pad("Typescripts Examples", 40, "="))



const ship = new Spacecraft('hyperdrive')
ship.jumpToHyperSpace()

const falcon = new MilleniumFalcon()
falcon.jumpToHyperSpace()



const isGoodForTheJob = (ship:ContainerShip) => ship.cargoNumber > 2

console.log(`is falcon good for the job? ${isGoodForTheJob(falcon)? 'yes':'no'}`)
