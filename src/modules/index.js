import * as event from "./events.js"
import * as timer from "./timer.js"

export function start(){
  event.registerControls()
  timer.updateDisplay()
  event.setTime()
  event.registerControlsSounds()
}