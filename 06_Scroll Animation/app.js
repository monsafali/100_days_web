// let boxex = document.querySelectorAll('.box');

// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes(){
//     // const trigger_Botton = window.innerHeight /5 *4.1
//     const trigerButton = window.innerHeight /5 *4.1

//     boxex.forEach(box =>{
//         const boxTop = getBoundingClientRect().top
        


//       if (boxTop < trigerButton){
//         box.classList.add('show')
//       } else {
//         box.classList.remove('show')
//       }
        
//     })
// }


let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerButton = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

