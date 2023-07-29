const numbers = document.querySelectorAll('.numbers')
const result = document.querySelector('.result span')
const signs = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const percent = document.querySelector('.percent')
const negative = document.querySelector('.negative')
const comma = document.querySelector('.comma')


let firstValue = ''
let isFirstValue = false
let secondValue = ''
let isSecondValue = false;
let sign = ''
let resultValue = 0


for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (e) => {
    let atr = e.target.innerHTML
    if(isFirstValue === false){
      getFirstValue(atr)
    }
    if(isSecondValue == false){
      getSecondValue(atr)
    }
  })

}

const getFirstValue = (el) => {
  result.innerHTML = ''
  firstValue += el
  result.innerHTML = firstValue
  // firstValue = Number(firstValue)
  // console.log(`🚀 ~ getFirstValue ~ firstValue:`, firstValue)
}

const getSecondValue = (el) => {
  if (firstValue != '' && sign != '') {
    secondValue += el
    result.innerHTML = secondValue
    // secondValue = Number(secondValue)
  }
}

const getSign = () => {
  for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener('click', e => {
      sign = e.target.innerHTML
      isFirstValue = true
      firstValue = Number(firstValue)
      console.log('---------------------------')
      console.log(`🚀 ~ getSign ~ firstValue:`, firstValue)
    })
  }
}
getSign()

equals.addEventListener('click', () => {
  result.innerHTML = ''
  // firstValue = Number(firstValue)
  console.log(typeof(firstValue))
  secondValue = Number(secondValue)
  console.log('---------------------------')
  console.log(`🚀 ~ equals.addEventListener ~ secondValue:`, secondValue)

  switch (sign) {
    case '+':
      console.log(firstValue)
      console.log(secondValue)
      resultValue = firstValue + secondValue
      break;
    case '−':
      resultValue = firstValue - secondValue
      break;
    case 'x':
      resultValue = firstValue * secondValue
      break;
    case '/':
      resultValue = firstValue / secondValue
      break;
  
    default:
      break;
  }
  console.log('---------------------------')
  
  console.log(`🚀 ~ equals.addEventListener ~ resultValue:`, resultValue)
  
  result.innerHTML = resultValue
  firstValue = resultValue
  secondValue = ''
  checkResultLenght()
})

const checkResultLenght = () => {
  resultValue = JSON.stringify(resultValue)
  if(resultValue.length >= 5){
    resultValue = JSON.parse(resultValue)
    result.innerHTML = resultValue.toFixed(2)
  }
}

negative.addEventListener('click', () => {
  result.innerHTML = ''
  if(firstValue != ''){
    resultValue = -firstValue 
    firstValue = resultValue
  }
  if(firstValue != '' && secondValue != '' && sign != ''){
    resultValue = -resultValue
  }
  result.innerHTML = resultValue
})

percent.addEventListener('click', () => {
  result.innerHTML = ''
  if(firstValue != ''){
    resultValue = firstValue / 100
    firstValue = resultValue
  }
  if(firstValue != '' && secondValue != '' && sign != ''){
    resultValue = resultValue / 100
  }
  result.innerHTML = resultValue
})

clear.addEventListener('click', () => {
  result.innerHTML = 0
  firstValue = ''
  isFirstValue = false
  secondValue = ''
  isSecondValue = false;
  sign = ''
  resultValue = 0
})

comma.addEventListener('click', () => {
  // resultValue = result.innerHTML.toString()
  // resultValue = resultValue + '.'
  
  console.log(isFirstValue)
  isFirstValue ? getSecondValue('.') : getFirstValue('.')
  
  
})