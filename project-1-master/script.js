async function fetchCharacters() {
    let response = await fetch(`https://api.genshin.dev/characters/`)
    let data = await response.json();
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
}

async function fetchCharacterDetails(name) {
    let response = await fetch(`https://api.genshin.dev/characters/${name}`)
    let data = await response.json();
    console.log(data)
}
// NOTE in case i want to swap to buttons
// async function createButton () {
//     let response = await fetch(`https://api.genshin.dev/characters/`)
//     let data = await response.json();
//     for (let i = 0; i < data.length; i++) {
//         const button = document.createElement('button')
//         button.innerHTML = data[i]
//         document.body.appendChild(button);
//     }
// }

async function renderSelect() {
    let response = await fetch(`https://api.genshin.dev/characters/`)
    let data = await response.json();
    select = document.getElementById('char');
    for (let i = 0; i < data.length; i++) {
        const option = document.createElement('option')
        option.value = data[i]
        option.innerHTML = data[i]
        select.appendChild(option);
    }
}

fetchCharacters()
fetchCharacterDetails('hu-tao')

async function renderSelect() {
    let response = await fetch(`https://api.genshin.dev/characters/`)
    let data = await response.json();
    select = document.getElementById('char');
    for (let i = 0; i < data.length; i++) {
        const option = document.createElement('option')
        option.value = data[i]
        option.innerHTML = data[i]
        select.appendChild(option);
    }
}
renderSelect()
// fetch(mainDomain)
// .then(res => res.json())
// .then(data => console.log(data))
// .then(data => console.log(charaters))



// for(let i = 0; i < json.length; i++){
//     ids.push(json[i].id);
//     dis_name.push(json[i].display_name);
//     email.push(json[i].email);
// }