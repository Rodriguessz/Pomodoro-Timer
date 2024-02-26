
import state from "./stateTimer.js"
import { clockMinutes, clockSeconds} from "./elements.js"
import { resetTimer } from "./actions.js"
import { alert } from "./sound.js"



export function timerCountDown(){
  clearTimeout(state.idCountDown)

    
    if(!state.isRunning){
        return
    }

   let currentMinute = Number(clockMinutes.textContent)
   let currentSeconds = Number(clockSeconds.textContent)

   currentSeconds = currentSeconds - 1


   if(currentSeconds < 0){
    currentMinute = currentMinute - 1
    currentSeconds = 59;
   }

   if(currentMinute < 0){
        alert.play()
        resetTimer()
        return
   }

    updateDisplay(currentMinute, currentSeconds)


   state.idCountDown = setTimeout(()=>{
        timerCountDown()
    }, 1000)

}

export function updateDisplay(minutes, seconds){

    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds


    clockMinutes.textContent = String(minutes).padStart(2, "0")

    clockSeconds.textContent = String(seconds).padStart(2, "0")

    
}