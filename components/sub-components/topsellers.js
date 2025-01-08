import { item } from "./itemCard.js"

export function topSellers(){
    const topseller = document.createElement('div')
    topseller.innerHTML = `<h1 style = "padding : 20px;">Top sellers</h1>`
    
    const list = document.createElement('div')
    list.style.width = "96%"
    list.style.height = "fit-content"
    list.style.padding = "2%"
    list.style.display = "flex"
    list.style.backgroundColor = "rgba(255,215,0,1)"

    for(var i = 0;i <= 10;i++){
        list.appendChild(item())
    }
    topseller.appendChild(list)
    return topseller
}