const colors = ['#F26DF8', '#FF5C00', '#FFE500', '#00FF29', '#00FFF0', '#4B3BFF']

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }
  
  function sample(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
  
  function createCircle(frame) {
    const circleElement = document.createElement('div')
    circleElement.classList.add('circle')
  
    const top = getRandomArbitrary(0, 694)
    const left = getRandomArbitrary(0, 694)
    const size = getRandomArbitrary(90, 110)
  
    circleElement.style.top = [top, 'px'].join('')
    circleElement.style.left = [left, 'px'].join('')
    circleElement.style.width = [size, 'px'].join('')
    circleElement.style.height = [size, 'px'].join('')
    circleElement.style.backgroundColor = sample(colors)
  
    frame.appendChild(circleElement)
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementsByClassName('prototype_5')[0]
    const frame = document.createElement('div')
    frame.classList.add('frame')
    container.appendChild(frame)
  
    for (var i = 0; i < 7; i++) {
      createCircle(frame)
    }
  })