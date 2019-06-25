// Random number utility funciton
const randomNumber = num => Math.floor(Math.random() * Math.floor(num))

// Constants
const width = 800
const height = 800
var canvas = document.getElementById('myCanvas')
var context = canvas.getContext('2d')
let x = randomNumber(width)
let y = randomNumber(height)
const RIGHT = 'RIGHT'
const LEFT = 'LEFT'

// The Bubble Class
class Bubble {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.velocity = 4
    this.direction = LEFT
  }

  draw() {
    context.beginPath()
    context.strokeStyle = '#eee'
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    context.stroke()
  }

  update() {
    this.y += this.velocity
    this.x += this.velocity
  }

  collision() {
    if (this.x > width - this.radius) {
      this.velocity = -4
    }
    if (this.y > height - this.radius) {
      this.velocity = -4
    }
    if (this.x < 0 + this.radius) {
      this.velocity = 4
    }
    if (this.y < 0 + this.radius) {
      this.velocity = 4
    }
  }
}

function clearCanvas(context) {
  context.fillStyle = '#000'
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  var w = canvas.width
  canvas.width = 1
  canvas.width = w
}

// const createRandomBubble = () => {
//   const x = randomNumber(width)
//   const y = randomNumber(height)
//   const r = 40

//   return new Bubble(x, y, r)
// }

const bubble = new Bubble(100, 150, 20)

const gameloop = () => {
  // context.clearRect(0, 0, canvas.width, canvas.height)
  clearCanvas(context, canvas)

  bubble.update()
  bubble.draw()
  bubble.collision()
  // bubbles[0] = bubble

  // bubbles.forEach(bubble => bubble.draw())
}

window.setInterval(gameloop, 50)
