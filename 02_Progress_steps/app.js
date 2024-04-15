let progress = document.getElementById('progress')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let circle = document.querySelectorAll('.circle')


let current_active = 1;

next.addEventListener('click', ()=>{
    current_active++

    if(current_active > circle.length){
        current_active = circle.length;
    }
    update();
})

prev.addEventListener('click', ()=>{
    current_active--

    if(current_active < 1){
        current_active = 1
    }

    update();
})

function update() {
    circle.forEach( (circle, idx)=>{
        if(idx < current_active) {
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    }) 
    let actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length -1)/ (circle.length -1)*100+'%'

    if(current_active === 1){
        prev.disabled = true
    }else if (current_active === circle.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}