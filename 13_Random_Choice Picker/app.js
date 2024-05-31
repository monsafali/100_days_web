let tagsEl = document.getElementById('tags');
let textarea = document.getElementById('textarea');

textarea.focus()
textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)

        randomSelect()
    }
})



function createTags(input){
    const tags = input.split(',').filter( tag => tag.trim() !== '').map(tag => tag.trim())
   tagsEl.innerHTML = ''


   tags.forEach(tag => {
    const tagEl = document.createElement('span')    
    tagEl.classList.add('tag')
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
   });
}


function randomSelect(){
   const times = 30;

   const interval = setInterval(()=>{
    const randomtag = pickRandomTag()

    hightlighttag(randomtag);

    setTimeout(()=>{
        unhighlight(randomtag);
    },100)
   },100);

   setTimeout(()=>{
    clearInterval(interval)
    setTimeout(()=>{
        const randomtag = pickRandomTag()

    },100)
   },100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()* tags.length)]
}


function hightlight(tag){
    tag.classList.add('highlight')
}

function unhighlight(tag){
    tag.classList.remov('highlight')
} 



