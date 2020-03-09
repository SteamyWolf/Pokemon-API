
// let pokeBtn = () => {
//     let pokeIdValue = document.getElementById('pokemonInput').value
//     let pokeTest = document.querySelector('#test')
//     pokeTest.textContent = pokeIdValue
//     console.log(pokeTest) 
//     return pokeIdValue
// }


// const pokeInput = document.querySelector('#pokemonInput')
// const log = document.querySelector('#test')
// let pokeValue = pokeInput.addEventListener('input', updateValue)


// function updateValue(e) {
//     log.textContent = e.target.value
// }

function pokeBtn(x) {
    x = prompt(`Input a number to get a Pokemon`)
    pokeData['id'] = x
    console.log(x)
}


let pokeData = {
    url: `https://pokeapi.co/api/v2/`,
    type: 'pokemon',
    id: 1,
}

pokeBtn()
    


const pokeUrl = `${pokeData.url}${pokeData.type}/${pokeData.id}`

fetch(pokeUrl)
    .then(data => data.json())
    .then(pokemon => generateHtml(pokemon))

const generateHtml = (data) => {
    console.log(data)

    let image = document.createElement('img')
    image.src = `${data.sprites.front_default}`
    document.querySelector('.pokeImg').appendChild(image)
    document.querySelector('.height').textContent = `Height: ${data.height}`
    document.querySelector('.weight').textContent = `Weight: ${data.weight}`
    document.querySelector('.type').textContent = `Type: ${data.types[0].type.name}`

    let pokeNameSlice = data.name.slice(1)
    console.log(pokeNameSlice)

    let pokeName1 = data.name.charAt(0).toUpperCase() + pokeNameSlice
    console.log(pokeName1)

    document.querySelector('.name').textContent = pokeName1
}





