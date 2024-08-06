import initMain from "./init/main.js"

export default async function constructMain(goTo){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(goTo == null){
        initMain()
    }
}