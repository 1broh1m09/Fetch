let box = document.getElementById('box')
let API = "https://jsonplaceholder.typicode.com/users"
let allUsers = []

fetch(API)
    .then(res => res.json())
    .then(data => {
        allUsers = data
        renderdatas(allUsers)
    })

function renderdatas(datas) {
    box.innerHTML = ""
    datas.map((item) => {
        box.innerHTML += `
        <div class='card'>
            <p>Name: ${item.name}</p>
            <p>Username: ${item.username}</p>
            <p>Pochta: ${item.address.city}, ${item.address.street}</p>
            <p>Email: ${item.email}</p>
        </div>
        `
    })
}

let body = document.getElementById('body')
let dark = document.getElementById('dark')
let light = document.getElementById('light')
let searchput = document.getElementById('searchput')

dark.addEventListener("click", () => {
    body.style.background = 'black'
    dark.style.background = 'black'
    dark.style.color = 'white'
})

light.addEventListener("click", () => {
    body.style.background = 'white'
    dark.style.background = 'black'
    dark.style.color = 'white'
})

function filterusers() {
    let keyword = searchput.value.toLowerCase()
    let filtered = allUsers.filter((item) => {
        let filtername = item.name.toLowerCase().includes(keyword)
        let filterusername = item.username.toLowerCase().includes(keyword)
        let filteraddress = item.address.city.toLowerCase().includes(keyword)
        let filteremail = item.email.toLowerCase().includes(keyword)
        return filtername || filterusername || filteraddress || filteremail
    })
    renderdatas(filtered)
}

searchput.addEventListener("input", filterusers)
