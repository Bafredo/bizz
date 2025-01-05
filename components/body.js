export function createBody(){
    const featured = document.createElement('div')
    featured.style.width  = "100%"
    featured.style.backgroundColor = "white"
    const featImg = document.createElement('img')
    featImg.src = "./../assets/realme-14pro-plus-11.jpg"
    featImg.style.width = "100%"
    featImg.style.borderBottomLeftRadius = "10%"
    featImg.style.borderBottomRightRadius = "30%"

    const featBuy = document.createElement('button')
    featBuy.textContent = "Buy Now"
    featBuy.style.position = "absolute"
    featBuy.style.left = "5%"
    featBuy.style.bottom = "30vh"
    featBuy.style.padding = "20px"
    featBuy.style.width = "220px"
    featBuy.style.border = "2px solid white"
    featBuy.style.backgroundColor = "rgba(0,0,0,0.1)"
    featBuy.style.color = "white"
    featBuy.style.fontSize = "22px"


    featured.appendChild(featImg)
    featured.appendChild(featBuy)
    featured.style.borderBottomLeftRadius = "20%"
    featured.style.borderBottomRightRadius = "20%"

    const body = document.createElement('div')
    body.style.width = "100%"
    body.style.height = "150vh"
    body.style.backgroundColor = "yellow"

    body.appendChild(featured)
    return body
}