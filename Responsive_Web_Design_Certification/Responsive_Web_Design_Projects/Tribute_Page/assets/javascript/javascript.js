export const randomNumber = () => Math.floor(Math.random() * Math.floor(facts.length))

export const loop = () => {
  console.log('object');
  setInterval(() => (document.getElementById('scroll-text').innerHTML = facts[randomNumber()]), 4000)
}