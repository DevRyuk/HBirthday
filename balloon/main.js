var palette = ['#eb4d4b', '#badc58', '#f9ca24', '#22a6b3']

function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateColor() {
  let index = random(0, palette.length - 1)
  return palette[index]
}

function cleanUp(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}

function partyTime() {
  // remove exisiting elements before creaitng new ones
 const container = document.querySelector('.living-room')
  cleanUp(container)

  let numberOfBalloons = (window.innerWidth / 80) * 3

  for (var i = 0; i < numberOfBalloons; i++) {
   
    const template = document.querySelector('template').content.cloneNode(true)

    let thisColor = generateColor()
    let transform = {
      rotate: Math.floor(random(-15, 15) * 1.25) + 'deg',
      translateX: random(-window.innerWidth / 2, window.innerWidth / 2) + 'px',
      translateY: random(-100, 100) + 'px',
    }

    template.querySelector('.helium').style.transform = Object.keys(transform)
      .map(prop => `${prop}(${transform[prop]})`).join(' ')
    template.querySelector('.balloon').style.background = thisColor
    template.querySelector('.knot').style.borderBottomColor = thisColor

    container.appendChild(document.importNode(template, true))
  }

  document.querySelectorAll('.helium').forEach(e => e.addEventListener('click', function(ev) {
    Object.assign(ev.target.style, {
      width: `.${random(50, 75)}rem`,
      height: '3px',
      transform: `translateY(${window.innerHeight * 0.9}px) skew(20deg,0deg) rotate(${random(0, 100)}deg)`,
      transition: 'transform 1s ease-out',
    })
    ev.target.classList.add('popped')

    ev.target.querySelector('.string').style.opacity = 0
    ev.target.querySelector('.knot').style.borderBottomWidth = '3px'
    ev.target.querySelector('.knot').style.animationPlayState = 'paused'
  }))
}

partyTime()
setTimeout(function(){ window.location.replace("https://DevRyuk.github.io/HBirthday/anim/"); }, 10000);
