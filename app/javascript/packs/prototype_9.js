const colors = ['#F26DF8', '#FF5C00', '#FFE500', '#00FF29', '#00FFF0', '#4B3BFF']
const numFaces = 1000
const sizeMin = 140
const sizeMax = 220
 

let occupated = []

  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  } 
  
  function sample(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  function changeSVGColor(circle, color) {
    var ob = circle.querySelector(".face")
    let w;
    let h;
    if (createHat(circle) || (createItem(circle))) {
        h = 0.6 * circle.clientHeight
        w = 0.6 * circle.clientWidth
        ob.style.left ='20%'
        createEyes(circle, 'eyesSm')
        createEyeBrows(circle, 'eyeBrowsSm')
        createNose(circle, 'noseSm')
        createMouth(circle, 'mouthSm')

    }
    else {
        h = circle.clientHeight
        w = circle.clientWidth
        createEyes(circle, 'eyes')
        createEyeBrows(circle, 'eyeBrows')
        createNose(circle, 'nose')
        createMouth(circle, 'mouth')
    }
    
    ob.onload = function() {
        var svg = ob.contentDocument.querySelector("svg")
        svg.setAttribute("width", w)
        svg.setAttribute("height", h)
        svg.querySelector("path").setAttribute("fill", color)
    }
   

    console.log('changed')
  } 
  
  function dist(x1,y1,x2,y2){
    return Math.floor( Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2)))
  }
  function createCircle(frame, i) {
    const circleElement = document.createElement('div')
    circleElement.classList.add('circle')

    let overlap =false;
  
    let top = getRandomArbitrary(0, 700)
    let left = getRandomArbitrary(0,1100)
    let size = getRandomArbitrary(sizeMin, sizeMax)
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
    
      frame.appendChild(circleElement)



        const face = document.createElement('object')
    
        face.setAttribute('data', `/assets/ch${Math.floor(getRandomArbitrary(1,10))}.svg`)
        face.classList.add('face')
        face.setAttribute('type', "image/svg+xml")
        circleElement.appendChild(face)
        changeSVGColor(circleElement, sample(colors))

      
      //circleElement.style.transform = `rotate(${getRandomArbitrary(10, 350)}deg)`
    }
  
console.log('circle')



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
    if (randomChance(80) == 1) {
        const hat = document.createElement('img')
    
        hat.setAttribute('src', `/assets/hat${Math.floor(getRandomArbitrary(1,10))}.svg`)
        hat.classList.add('hat')
        circleElement.appendChild(hat)
        return true
    }
    return false
}

  function createEyeBrows(circleElement, cl) {
    const eyeBrows = document.createElement('img')
    
    eyeBrows.setAttribute('src', `/assets/eyebrows${Math.floor(getRandomArbitrary(1,13))}.svg`)
    eyeBrows.classList.add(cl)
  
    circleElement.appendChild(eyeBrows)
}

  function createEyes(circleElement, cl) {
      const eyes = document.createElement('img')
      
      eyes.setAttribute('src', `/assets/eye${Math.floor(getRandomArbitrary(1,35))}.svg`)
      eyes.classList.add(cl)
    
      circleElement.appendChild(eyes)
  }

  function createNose(circleElement, cl) {
    if (randomChance(15) == 1) {
        const nose = document.createElement('img')
    
        nose.setAttribute('src', `/assets/nose${Math.floor(getRandomArbitrary(1,9))}.svg`)
        nose.classList.add(cl)
        circleElement.appendChild(nose)
    }
}

  function createMouth(circleElement, cl) {
    const mouth = document.createElement('img')
    
    mouth.setAttribute('src', `/assets/mouth${Math.floor(getRandomArbitrary(1,31))}.svg`)
    mouth.classList.add(cl)
  
    circleElement.appendChild(mouth)
}

function createItem(circleElement) {
    let chance = randomChance2(50,50)
    if (chance == 1) {
        const item = document.createElement('img')
    
        item.setAttribute('src', `/assets/itemLeft${Math.floor(getRandomArbitrary(1,4))}.svg`)
        item.classList.add('itemLeft')
        circleElement.appendChild(item)
        return true
    }

    else if (chance == 2){
        const item = document.createElement('img')
    
        item.setAttribute('src', `/assets/itemRight${Math.floor(getRandomArbitrary(1,4))}.svg`)
        item.classList.add('itemRight')
        circleElement.appendChild(item)
        return true
    }
else { return false;}
    
    
}
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementsByClassName('prototype_10')[0]
    const frame = document.createElement('div')
    frame.classList.add('frame')
    container.appendChild(frame)
  
    

      for (var i = 0; i < numFaces; i++) {
        createCircle(frame, i)
      }
    
  })
  