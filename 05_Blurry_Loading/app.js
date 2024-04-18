let load_text = document.querySelector('.loading-text');
let background = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30)

function blurring (){
    load++
    if (load > 99) {
        clearInterval(int)
    }

    load_text.innerText = `${load}%`
    load_text.style.opacity =  scale(load, 0, 100, 1, 0)
    
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
   
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}