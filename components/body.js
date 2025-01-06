import { createFeaturedDesc } from "./sub-components/featuredDescription.js"
export function createBody(){
    const featured = document.createElement('div')
    featured.style.width  = "100%"
    // featured.style.backgroundColor = "white"
    const featImg = document.createElement('img')
    featImg.src = "./../assets/realme-14pro-plus-11.jpg"
    featImg.style.width = "100%"
    featImg.style.borderBottomLeftRadius = "10%"
    featImg.style.borderBottomRightRadius = "30%"

    
    const desc = createFeaturedDesc()

    featured.appendChild(featImg)
    featured.appendChild(desc)
    featured.style.borderBottomLeftRadius = "20%"
    featured.style.borderBottomRightRadius = "20%"

    const body = document.createElement('div')
    body.style.width = "100%"
    body.style.height = "150vh"
    body.style.backgroundColor = "yellow"

    body.appendChild(featured)
    return body
}