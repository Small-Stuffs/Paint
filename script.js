const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const colors = document.querySelectorAll('.colors')

// canvas Size
canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = 'black'
ctx.lineWidth = '2.5'

let painting = false

function startPainting() {
  painting = true
}
function stopPainting() {
  painting = false
}
function onMouseMove(e) {

  const x = e.offsetX 
  const y = e.offsetY
  
  if(!painting) {
    ctx.beginPath() 
    ctx.moveTo(x, y)
  }
  else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}
function onMouseDown(e) {
  painting = true
  console.log(e)
}

colors.forEach(color => color.addEventListener('click', changeColor))
function changeColor(e) {
  const color = e.target.style.backgroundColor
  console.log(color)
  ctx.strokeStyle = color
}

function onMouseUp(e) {
  stopPainting()
}

if(canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}
console.log(Array.from(colors))