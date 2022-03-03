const colors = ['#F26DF8', '#FF5C00', '#FFE500', '#00FF29', '#00FFF0', '#4B3BFF']
const particlesQuantity = [6, 7, 8, 9]


const circleTypes = [ 
    ['ch1',     210, 220,  2, 4],
    ['ch2',     210, 220,  2, 4],
    ['ch3',     210, 220,  2, 4],
    ['ch4',     210, 220,  2, 4],
    ['ch5',     210, 220,  2, 4],
    ['ch6',     210, 220,  2, 4],
    ['ch7',     210, 220,  2, 4],
    ['ch8',     210, 220,  2, 4],
    ['ch9',     210, 220,  2, 4],
    ['ch10',     210, 220,  2, 4],
    ['ch11',     210, 220,  2, 4],
    ['ch12',     210, 220,  2, 4],
    ['ch13',     210, 220,  2, 4],
    ['ch14',     210, 220,  2, 4],
    ['ch15',     210, 220,  2, 4],
    ['ch16',     210, 220,  2, 4],
    ['ch17',     210, 220,  2, 4],
    ['ch18',     210, 220,  2, 4],
    ['ch19',     210, 220,  2, 4],
    ['ch20',     210, 220,  2, 4],
    ['ch21',     210, 220,  2, 4],
    ['ch22',     210, 220,  2, 4],
    ['ch23',     210, 220,  2, 4],
    ['ch24',     210, 220,  2, 4],
    ['ch25',     210, 220,  2, 4],
    ['ch26',     210, 220,  2, 4],
    ['ch27',     210, 220,  2, 4],
    ['ch28',     210, 220,  2, 4],
    ['ch29',     210, 220,  2, 4],
    ['ch30',     210, 220,  2, 4],
    ['ch31',     210, 220,  2, 4],
    ['ch32',     210, 220,  2, 4],
    ['ch33',     210, 220,  2, 4],
    ['ch34',     210, 220,  2, 4],
    ['ch35',     210, 220,  2, 4],
    ['ch36',     210, 220,  2, 4],
    ['ch37',     210, 220,  2, 4],


  ]
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }
  
  function sample(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  function changeSVGColor(color) {
    var svg = document.getElementByClassName("circle").contentDocument;
    var elements = svg.getElementsByClassName("circle");
    for (var i = 0; i < elements.length; i++) elements[i].style.fill = color;
    console.log('changed')
  }
  
  function createCircle(frame) {
    const circleElement = document.createElement('div')
    const circleType = sample(circleTypes)
    circleElement.classList.add('circle')
    
  
    const top = getRandomArbitrary(0, 640)
    const left = getRandomArbitrary(0, 640)
    const size = getRandomArbitrary(circleType[1], circleType[2])
  
    circleElement.style.top = [top, 'px'].join('')
    circleElement.style.left = [left, 'px'].join('')
    circleElement.style.width = [size, 'px'].join('')
    circleElement.style.height = [size, 'px'].join('')
  
    circleElement.style.zIndex = Math.floor(
      getRandomArbitrary(circleType[3], circleType[4])
    )
  
    circleElement.style.transform = `rotate(${getRandomArbitrary(10, 350)}deg)`
    circleElement.classList.add(circleType[0])
  
    frame.appendChild(circleElement)
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementsByClassName('prototype_6')[0]
    const frame = document.createElement('div')
    frame.classList.add('frame')
    container.appendChild(frame)
  
    for (var i = 0; i < sample(particlesQuantity); i++) {
      createCircle(frame)
    }
  })
  