import { createFeaturedDesc } from "./sub-components/featuredDescription.js"
import { topSellers } from "./sub-components/topsellers.js"
export function createBody(){
    const featured = document.createElement('div')
    featured.style.width  = "100%"
    featured.style.backgroundImage = "url('./../assets/realme-14pro-plus-11.jpg')"
    featured.style.height = (window.innerWidth)
    featured.style.height = "60vh"
    featured.style.backgroundRepeat = "no-repeat"
    featured.style.backgroundSize = "cover"
    featured.style.backgroundPosition = "center"
    // featured.style.backgroundColor = "white"
    // const featImg = document.createElement('img')
    // featImg.src = "./../assets/realme-14pro-plus-11.jpg"
    // featImg.id = "featImg"
    // featImg.style.width = "100%"
    // featImg.style.maxHeight = "80vh"
    // featImg.style.display = "fit"
    // featImg.style.borderBottomLeftRadius = "10%"
    // featImg.style.borderBottomRightRadius = "30%"

    
    const desc = createFeaturedDesc()

    // featured.appendChild(featImg)
    featured.appendChild(desc)
    featured.style.borderBottomLeftRadius = "20%"
    featured.style.borderBottomRightRadius = "30%"

    const body = document.createElement('div')
    body.style.width = "100%"
    body.style.height = "150vh"
    // body.style.backgroundColor = "yellow"

    body.appendChild(featured)
    body.appendChild(topSellers())
    return body
}