const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");


// jokeBtn.addEventListener("click", generateJoke)

// generateJoke();

// function generateJoke(){
//     const config = {
//         headers:{
//             "Accept": "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data)=>{
//         jokeEl.innerText = data.joke
//     })
// }





// using Async await

const url = "https://icanhazdadjoke.com/";

const generateJoke = async () => {
    try {
        console.log('Fetching Data');
        let resp = await fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        let data = await resp.json();
        const jokeEl = document.getElementById('joke'); // Ensure there's an element with id="joke" in your HTML
        jokeEl.innerText = data.joke;
    } catch (error) {
        console.error('Error fetching data', error);
    }
};

// Example: Call the function to fetch and display a joke
generateJoke();


jokeBtn.addEventListener("click", generateJoke)
