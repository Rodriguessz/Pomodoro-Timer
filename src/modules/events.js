import {controls, clockMinutes, sectionSound, sounds} from "./elements.js"
import state from "./stateTimer.js"
import * as actions from "./actions.js"
import { updateDisplay } from "./timer.js"
import * as soundsBg from "./sound.js"





export function registerControls(){
  controls.addEventListener("click", (event)=>{
    
    const action = event.target.dataset.action

  
    
    if(typeof actions[action] != "function"){
      return "Not a function"
    }

    actions[action]()
    
    return action
  })
}


export function setTime(){
  clockMinutes.addEventListener("focus", ()=>{

    clockMinutes.textContent = ""

    window.addEventListener("keydown", (e)=>{
      if(e.key === "Enter"){
        clockMinutes.blur()
      }
    })
   


    
  })

  clockMinutes.onkeypress = (event) => /\d/.test(event.key)

  clockMinutes.addEventListener("blur", (event)=>{
    

    let time = event.currentTarget.textContent
    console.log(time)

    time = time > 60 ? 60 : String(time).padStart(2, "0")

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    clockMinutes.removeAttribute("contenteditable")

  })
}

export function registerControlsSounds(){
  sectionSound.addEventListener("click" , (e)=>{

    const action = e.target.dataset.action
  
   
    sounds.forEach((sound)=>{

      if(sound != e.target){
        sound.classList.remove("active")
  
      }

      if(e.target == sound){

       state.isMute = !(sound.classList.toggle("active"))
       
       
      }

    })

  
      if(!state.isMute && action == "sound1"){
        actions.stopSound()
        soundsBg.arrayBgSounds[0].sound.play()
      }else if(!state.isMute && action == "sound2"){
        actions.stopSound()
        soundsBg.arrayBgSounds[1].sound.play()
      }else if(!state.isMute && action == "sound3"){
        actions.stopSound()
        soundsBg.arrayBgSounds[2].sound.play()
      }else if(!state.isMute && action == "sound4"){
        actions.stopSound()
        soundsBg.arrayBgSounds[3].sound.play()
      }else{
        console.log("Pausa")
        actions.stopSound();
      }

})
}