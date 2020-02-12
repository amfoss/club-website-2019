import React, { useEffect } from "react"
import amFOSSLogo from "../../../../../src/images/amfoss_logo.png"
import amritaLogo from "../../../../../src/images/amrita_logo.png"

const Header = () => {
  useEffect(() => {
    let canvas = document.querySelector("#opentalks"),
      ctx = canvas.getContext("2d"),
      particles = [],
      amount = 0,
      mouse = { x: 0, y: 0 },
      radius = 1.0

    let colors = ["#FFFF00"]

    let copy = "Open Talks"

    let ww = (canvas.width = window.innerWidth)
    let wh = (canvas.height = window.innerHeight)

    function Particle(x, y) {
      this.x = Math.random() * ww
      this.y = Math.random() * wh
      this.dest = {
        x: x,
        y: y,
      }
      this.r = Math.random() + 1
      this.vx = 20
      this.vy = 20
      this.accX = 0.05
      this.accY = 0.05
      this.friction = Math.random() * 0.05 + 0.88

      this.color = colors[0]
    }

    Particle.prototype.render = function() {
      this.accX = (this.dest.x - this.x) / 300
      this.accY = (this.dest.y - this.y) / 300
      this.vx += this.accX
      this.vy += this.accY
      this.vx *= this.friction
      this.vy *= this.friction

      this.x += this.vx
      this.y += this.vy

      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false)
      ctx.fill()

      let a = this.x - mouse.x
      let b = this.y - mouse.y

      let distance = Math.sqrt(a * a + b * b)
      if (distance < radius * 70) {
        this.accX = (this.x - mouse.x) / 100
        this.accY = (this.y - mouse.y) / 100
        this.vx += this.accX
        this.vy += this.accY
      }
    }

    function onTouchEnd(e) {
      mouse.x = -9999
      mouse.y = -9999
    }

    function initScene() {
      ww = canvas.width = window.innerWidth
      wh = canvas.height = window.innerHeight

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.font = "bold " + ww / 10 + "px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(copy, ww / 2, wh / 2.7)

      let data = ctx.getImageData(0, 0, ww, wh).data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "screen"

      particles = []
      for (let i = 0; i < ww; i += Math.round(ww / 250)) {
        for (let j = 0; j < wh; j += Math.round(ww / 250)) {
          if (data[(i + j * ww) * 4 + 3] > 0) {
            particles.push(new Particle(i, j))
          }
        }
      }
      amount = particles.length
    }

    function render(a) {
      requestAnimationFrame(render)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < amount; i++) {
        particles[i].render()
      }
    }

    window.addEventListener("resize", initScene)
    window.addEventListener("touchend", onTouchEnd)
    initScene()
    requestAnimationFrame(render)
  })
  return (
    <>
      <div id="header-area">
        <div id="top-bar" className="row m-0 p-3">
          <div className="col-6">
            <a href="https://amfoss.in">
              <img alt="amFOSS Logo" className="amFOSSLogo" src={amFOSSLogo} />
            </a>
          </div>
          <div className="col-6 text-right">
            <a href="https://www.amrita.edu/">
              <img alt="Amrita Logo" className="amritaLogo" src={amritaLogo} />
            </a>
          </div>
        </div>
        <div className="header-title">
          <div className="row m-0 w-100">
            <div id="particle-container">
              <canvas id="opentalks" />
            </div>
            <div className="col-sm-12">
              <div className="d-flex align-items-center text-lg-left text-center justify-content-center h-100">
                <div>
                  <h3 className="d-flex align-items-center text-center justify-content-center h-100">
                    February 15th 2020
                  </h3>
                  <div className="text-center">
                    <button
                      className="button"
                      style={{ backgroundColor: "white" }}
                    >
                      <a
                        href="#registration-form"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        REGISTER NOW
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
