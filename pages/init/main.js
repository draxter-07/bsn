function changeVar(){
    us = 1;
    constructMain(us)
}

function initMain(us){
    document.getElementById("root").innerHTML = `
        <button onclick=changeVar()>clique</button>
    `
}