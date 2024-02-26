export const arrayBgSounds = [
  {
    sound : new Audio("./assets/interstellar.mp3"),
    name: "interstellar main soundtrack"

// Deixa tudo em loop  
  }, 


  {
    sound : new Audio("./assets/Oppenheimer.wav"),
    name: "Oppenheimer Soundtrack"
  }, 

  {
    sound : new Audio("./assets/lofi.mp3"),
    name: "Lofi for study soundtrack"
  },

  {
    sound : new Audio("./assets/Chuva.wav"),
    name: "Rain sound"
  }

]

arrayBgSounds.map(sound =>{
  sound.sound.loop = true
})


export const btnPressSound = new Audio("./assets/button-press.wav")
export const plusAndMinusSound = new Audio("./assets/minecraft_click.mp3")
export const alert = new Audio("./assets/kichen-timer.mp3")





