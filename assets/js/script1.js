
 function changeColor(event) {
   event.target.style.backgroundColor = 'black'
 }

document.getElementById('blue').addEventListener('click', changeColor)
document.getElementById('red').addEventListener('click', changeColor)
document.getElementById('green').addEventListener('click', changeColor)
document.getElementById('yellow').addEventListener('click', changeColor)

let color = '';

function changeKeyColor() {
    document.getElementById('key').style.backgroundColor = color
}

window.addEventListener('keydown', function(event) {
    
    if (event.key === 'a') {
        color = 'pink'
    } else if (event.key === 's') {
        color = 'orange'
    } else if (event.key === 'd') {
        color = 'lightblue'
    } else if (event.key === 'q') {
        color = 'purple'
    } else if (event.key === 'w') {
        color = 'gray'
    } else if (event.key === 'e') {
        color = 'brown'
    }
  
    changeKeyColor()
})