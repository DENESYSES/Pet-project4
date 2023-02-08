const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeL = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#FBCEB1', '#B5B8B1', '#7FFFD4', '#FF2400', '#78DBE2', '#E32636', 
'#ED3CCA', '#CD2682', '#AFEEEE', '#ACB78E', '#98FB98', '#F984E5', '#2F4F4F', '#9966CC', '#44944A', '#990066']
let time = 0
let score = 0



startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')

})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})


board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}


function decreaseTime () {
    if (time === 0) {
        finishGame()
    }   else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
    
}

   function setTime(value) {
    timeL.innerHTML = `00:${value}`
}

function finishGame() {
    timeL.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счет: <span class='primary'>${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = randomColor()

    board.append(circle)

    
    
}

function randomColor() {
    let c = "#";
    for (let i = 0; i < 6; i++) {
        c += (Math.random() * 16 | 0).toString(16);
    } 
    return c;
}

function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min)
}





