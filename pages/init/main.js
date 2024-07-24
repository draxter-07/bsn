import constructMain from "../construct.js"
import topoDiv from "./comps/top/main.js";

export default function initMain(){
    document.getElementById("root").innerHTML = topoDiv()
    document.getElementById('1').onclick = function changeVar(){var us = {teste: "teste"};constructMain(us)}
}