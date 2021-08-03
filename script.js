const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const colors = document.querySelectorAll('.colors')
const size = document.querySelector('.range')
const mode = document.querySelector('.fill')
// canvas Size
canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = 'black'
ctx.fillStyle = 'black'
ctx.lineWidth = '2.5'

let painting = false
let filling = false


if(mode) {
  mode.addEventListener('click' , startFilling)
}
function startFilling() {
  if(filling === true) {
    filling = false
    mode.innerHTML = 'Fill'
  }
  else {
    filling = true
    mode.innerHTML = 'Paint'
    ctx.fillStyle = ctx.strokeStyle
  }

}
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
function changeBrushSize(e) {
  console.log(e.target.value)
  const brushSize = e.target.value
  ctx.lineWidth = brushSize
}

if(size) {
  size.addEventListener('input', changeBrushSize)
}
function fillCanvas() {
  if(filling) {
    ctx.fillRect(0,0, canvas.height, canvas.width)
  }
  
}

if(canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
  canvas.addEventListener('click' ,fillCanvas)
}
console.log(Array.from(colors))