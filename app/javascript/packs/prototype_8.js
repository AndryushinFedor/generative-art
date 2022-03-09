const colors = ['#F26DF8', '#FF5C00', '#FFE500', '#00FF29', '#00FFF0', '#4B3BFF']
const particlesQuantity = [6, 7, 8, 9]


 

let occupated = []

const circleTypes = [ 
    ['ch1',     120, 220,  2, 4],
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
    ['ch38',     210, 220,  2, 4],
    ['ch39',     210, 220,  2, 4],
    ['ch40',     210, 220,  2, 4],


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
  
  function dist(x1,y1,x2,y2){
    return Math.floor( Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2)))
  }
  function createCircle(frame, i) {
    const circleElement = document.createElement('div')
    const circleType = sample(circleTypes)
    circleElement.classList.add('circle')

    let overlap =false;
    let n=0
  do {
    n++
    let top = getRandomArbitrary(0, 700)
    let left = getRandomArbitrary(0,1100)
    let size = getRandomArbitrary(80, circleType[2])
    for (let i=0; i< occupated.length; i++){
      console.log(dist(left,top,occupated[i][0],occupated[i][1]))
      if (dist(left,top,occupated[i][0],occupated[i][1]) < Math.max(size,occupated[i][2])) {
        overlap = true;
        break;
      }  
    }
    if (!overlap) {
      occupated.push([left,top,size])
      circleElement.style.top = [top, 'px'].join('') 
      circleElement.style.left = [left, 'px'].join('')
      circleElement.style.width = [size, 'px'].join('')
      circleElement.style.height = [size, 'px'].join('')
      circleElement.style.zIndex = Math.floor(
      getRandomArbitrary(circleType[3], circleType[4])
     )
    
      circleElement.classList.add(circleType[0])
    
      frame.appendChild(circleElement)
      createEyeBrows(circleElement)
      createEyes(circleElement)
      createMouth(circleElement)
      createHat(circleElement)
      createNose(circleElement)
      createItem(circleElement)
      //circleElement.style.transform = `rotate(${getRandomArbitrary(10, 350)}deg)`
    }
  
console.log('while')
} while ((overlap) & ( n< 100))


  }

  function randomChance(crit){
      const number = Math.floor(Math.random()*100) + 1
      switch (true) {
          case number<crit:
            return 1
      
          default:
              return 0
      }
  }

  function randomChance2(crit,crit2){
    const number = Math.floor(Math.random()*100) + 1
    switch (true) {
        case number<crit:
          return 1

        case number<(crit + crit2):
            return 2
    
        default:
            return 0
    }
}

  function createHat(circleElement) {
    if (randomChance(10) == 1) {
        const hat = document.createElement('img')
    
        hat.setAttribute('src', `/assets/hat${Math.floor(getRandomArbitrary(1,10))}.svg`)
        hat.classList.add('hat')
        circleElement.appendChild(hat)
    }
}

  function createEyeBrows(circleElement) {
    const eyeBrows = document.createElement('img')
    
    eyeBrows.setAttribute('src', `/assets/eyebrows${Math.floor(getRandomArbitrary(1,13))}.svg`)
    eyeBrows.classList.add('eyeBrows')
  
    circleElement.appendChild(eyeBrows)
}

  function createEyes(circleElement) {
      const eyes = document.createElement('img')
      
      eyes.setAttribute('src', `/assets/eye${Math.floor(getRandomArbitrary(1,35))}.svg`)
      eyes.classList.add('eyes')
    
      circleElement.appendChild(eyes)
  }

  function createNose(circleElement) {
    if (randomChance(15) == 1) {
        const nose = document.createElement('img')
    
        nose.setAttribute('src', `/assets/nose${Math.floor(getRandomArbitrary(1,9))}.svg`)
        nose.classList.add('nose')
        circleElement.appendChild(nose)
    }
}

  function createMouth(circleElement) {
    const mouth = document.createElement('img')
    
    mouth.setAttribute('src', `/assets/mouth${Math.floor(getRandomArbitrary(1,31))}.svg`)
    mouth.classList.add('mouth')
  
    circleElement.appendChild(mouth)
}

function createItem(circleElement) {
    let chance = randomChance2(5,5)
    if (chance == 1) {
        const item = document.createElement('img')
    
        item.setAttribute('src', `/assets/itemLeft${Math.floor(getRandomArbitrary(1,4))}.svg`)
        item.classList.add('itemLeft')
        circleElement.appendChild(item)
    }

    else if (chance == 2){
        const item = document.createElement('img')
    
        item.setAttribute('src', `/assets/itemRight${Math.floor(getRandomArbitrary(1,4))}.svg`)
        item.classList.add('itemRight')
        circleElement.appendChild(item)
    }
    
    
}
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementsByClassName('prototype_8')[0]
    const frame = document.createElement('div')
    frame.classList.add('frame')
    container.appendChild(frame)
  
    

      for (var i = 0; i < 100; i++) {
        createCircle(frame, i)
      }
    
  })
  