import constructMain from "../construct.js"

export default function initMain(){
    document.getElementById("root").innerHTML = `
        <button id="1">clique</button>
    `
    document.getElementById('1').onclick = function changeVar(){var us = {teste: "teste"};constructMain(us)}
}