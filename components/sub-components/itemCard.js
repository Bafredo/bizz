export function item(){
    const card = document.createElement('div')
    card.style.width = "fit-content"
    card.style.textAlign = "center"
    card.style.backgroundColor = "white"
    card.style.borderRadius = "10px"
    card.style.margin = "2%"
    const phoneDisplay = document.createElement('div')
    phoneDisplay.style.height = '250px'
    phoneDisplay.style.width = '220px'
    phoneDisplay.style.backgroundImage = "url('./../../assets/1.jpeg')"
    phoneDisplay.style.backgroundSize = "cover"
    phoneDisplay.style.backgroundPosition = "center"
    phoneDisplay.style.borderRadius = "10px"
    
    const desc = document.createElement('div')
    const name = document.createElement('h2')
    name.textContent = "Realme 14 pro plus"
    name.style.fontWeight = '600'
    name.style.fontSize = "20px"
    name.style.padding = "7px"
    const price = document.createElement('p')
    price.textContent = "KES 42,000"
    const add = document.createElement('button')
    add.textContent = "Add to Cart"
    add.style.color = "white"
    add.style.padding = "6%"
    add.style.backgroundColor = "black"
    add.style.border = "1px solid black"
    add.style.borderRadius = "10px"
    add.style.margin = "7px"
    add.style.width = "170px"
    

    desc.appendChild(name)
    desc.appendChild(price)
    desc.appendChild(add)

    card.appendChild(phoneDisplay)
    card.appendChild(desc)
    return card
}