const textEl = document.getElementById("text")
const speedel = document.getElementById("speed")


const text = "We Love Programing"
let idx = 1;
let speed = 300 / speedel.value


writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if( idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedel.addEventListener("input", (e) =>speed = 300/ e.target.value)