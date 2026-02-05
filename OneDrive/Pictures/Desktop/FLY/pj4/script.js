gsap.registerPlugin(ScrollTrigger)

const cursor = document.querySelector('.cursor')
const menu = document.querySelector('.menu')
const toggle = document.querySelector('.menu-toggle')
const menuLinks = document.querySelectorAll('.menu-link')

let menuOpen = false

window.addEventListener('mousemove', e => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15
  })
})

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 1.6 }))
  el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1 }))
})

const menuTl = gsap.timeline({ paused: true })
menuTl
  .to(menu, { opacity: 1, pointerEvents: 'all', duration: 0.4 })
  .from(menuLinks, { y: 60, opacity: 0, stagger: 0.08, ease: 'power4.out' })

toggle.addEventListener('click', () => {
  menuOpen ? menuTl.reverse() : menuTl.play()
  menuOpen = !menuOpen
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuTl.reverse()
    menuOpen = false
  })
})

document.querySelectorAll('.hero-title span').forEach((line, i) => {
  gsap.fromTo(
    line,
    { y: 120 },
    { y: 0, duration: 1.2, delay: i * 0.15, ease: 'power4.out' }
  )
})

document.querySelectorAll('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top 60%',
    onEnter: () => {
      document.body.style.background = section.dataset.bg
      document.documentElement.style.setProperty('--accent', section.dataset.accent)
    },
    onEnterBack: () => {
      document.body.style.background = section.dataset.bg
      document.documentElement.style.setProperty('--accent', section.dataset.accent)
    }
  })
})
