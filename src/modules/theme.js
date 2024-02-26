import * as element from "./elements.js"

let lightMode = true

element.toggleMode.addEventListener("click", (event)=>{
    const mode = lightMode ? "Light" : "dark"

    element.html.classList.toggle("dark")
    event.currentTarget.querySelector("span").textContent = `Ativar ${mode} mode!`


    lightMode = !lightMode
})
