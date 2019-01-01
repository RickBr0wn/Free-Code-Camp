import { facts } from './facts'

const randomNumber = () =>
  Math.floor(Math.random() * Math.floor(facts.length))

const loop = () => {
  console.log('object')
  setInterval(
    () =>
      (document.getElementById('scroll-text').innerHTML =
        facts[randomNumber()]),
    4000
  )
}
