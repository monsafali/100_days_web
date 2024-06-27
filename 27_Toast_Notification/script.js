const button = document.getElementById ("button");
const toasts = document.getElementById("toasts");

const messages = [
    "message One",
    "message two",
    "message Three",
    "message four"
]
const types = ['info','success','error']

button.addEventListener("click", ()=>{
    creatNotification()
})


function creatNotification( message=null, type = null) {
    const notif = document.createElement("div")
    notif.classList.add("toast")
    notif.classList.add(type ? type: getRandomtype())

    notif.innerText = message ? message: getRandomMessage()
    toasts.appendChild(notif)
    setTimeout(()=>{
        notif.remove()
    },3000)
}


function getRandomMessage(){
    return messages[Math.floor(Math.random()* messages.length)]
}

function getRandomtype (){
    return types[Math.floor(Math.random()* types.length)]
    
}