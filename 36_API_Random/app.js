let btn = document.getElementById("btn")

let img = document.getElementById("img")
let country = document.getElementById("country")
let fullname = document.getElementById("fullname")
let gender = document.getElementById("gender")
let email = document.getElementById("email")
let username = document.getElementById("UserName")




btn.addEventListener("click", showdata());

function showdata(){
    const xhr = new XMLHttpRequest();
    const requesturl = "https://randomuser.me/api/"
    xhr.open("GET",requesturl)
    // Continuolsy track
    xhr.onreadystatechange = function() {
        // console.log(xhr.readyState)
        if( xhr.readyState === 4){
            const data = JSON.parse(this.responseText)



            // fetching Data from Api
            let pic = data.results[0].picture.large;
            let randomgender = data.results[0].gender
            let f_name = data.results[0].name.first
            let L_name = data.results[0].name.last
            let name = f_name + " "+ L_name
            let randomemail = data.results[0].email
            let randomusername = data.results[0].login.username
            let countrydata = data.results[0].location.country
            

            // Adding into html codee
            img.src = `${pic}`
            country.innerText = `${countrydata}`
            fullname.innerText = `${name}`
            gender.innerText = `${randomgender}`
            email.innerText = `${randomemail}`
            username.innerText = `${randomusername}`

        }
        
    }
    xhr.send()
}
