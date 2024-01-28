const ele = document.getElementById("ele1");

let defaultColor = "green";

function pintar(elemento, color = defaultColor) {
    
    ele.style.backgroundColor = color
    defaultColor=defaultColor === "green" ? "yellow" : "green";
}

ele.addEventListener("click", pintar)