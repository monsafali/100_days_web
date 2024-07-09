const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("lenght");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click',() =>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){return}

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert("password copied to clipboard")
})

generateEl.addEventListener('click', () =>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbols = symbolsEl.checked
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols,length)

})
  
function generatePassword(lower,upper,number, symbol, lenght){
    let generatedPassword = ''
    const typeCount = lower + upper + number + symbol
   const typeArr = [{lower}, {upper},{number},{symbol}].
   filter(item => Object.values(item)[0])
   
   if(typeCount === 0 ){
    return ''
   }

   for(let i =0; i<lenght; i += typeCount){
    typeArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
   }

   const
    finaPassword = generatedPassword.slice(0, lenght)
    return finaPassword


}





function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbol(){
     const symbols = '!@#$%^&*(){}[]=<>/,.'
     return symbols[Math.floor(Math.random() *symbols.length)]
}


console.log(getRandomLower())
console.log(getRandomUpper())
console.log(getRandomNumber())
console.log(getRandomSymbol())