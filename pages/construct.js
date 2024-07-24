import initMain from "./init/main.js"
import homeMain from "./home/main.js"

export default function constructMain(us){
    document.getElementById("root").innerHTML = ""
    if(us == null){
        initMain()
    }
    else{
        homeMain(us)
    }
}