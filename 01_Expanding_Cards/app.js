const pannels = document.querySelectorAll('.pannel');
pannels.forEach(panel => {
    panel.addEventListener('click', () => {
        RemoveActiveClassess()
        panel.classList.add('active')  
    })
})

function RemoveActiveClassess() {
    pannels.forEach(panel => {
        panel.classList.remove('active')
    })    
}