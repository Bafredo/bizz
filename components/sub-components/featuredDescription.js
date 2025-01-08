export function createFeaturedDesc(){
    const featuredDescription = document.createElement('div')
    featuredDescription.style.width = "fit-content"
    featuredDescription.style.position = "absolute"
    featuredDescription.style.left = "7vw"
    featuredDescription.style.top = "45vh"
    featuredDescription.style.display = "flex"
    featuredDescription.style.alignItems = "center"


    const featBuy = document.createElement('button')
    featBuy.textContent = "Buy Now"
    featBuy.style.position = "relative"
    featBuy.style.padding = "5%"
    featBuy.style.width = "220px"
    featBuy.style.border = "2px solid white"
    featBuy.style.backgroundColor = "rgba(0,0,0,0.1)"
    featBuy.style.color = "white"
    featBuy.style.fontSize = "22px"
    featBuy.style.borderRadius  = "20px"

    const featPrice = document.createElement('p')
    featPrice.textContent = "KES 54,000"
    featPrice.style.margin = "7px"
    featPrice.style.color = "black"
    featPrice.style.fontSize = "26px"
    featPrice.style.fontWeight = "bold"

    featuredDescription.appendChild(featBuy)
    featuredDescription.appendChild(featPrice)
    const specs = `
    Camera : lorem2
    Storage : 256GB
    Ram : 12GB
    `
    return featuredDescription
}