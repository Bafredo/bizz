
export function createNavbar() {
    const logo = document.createElement("div");
    logo.textContent = "Wundershop";
    logo.style.fontWeight = "bold";
    logo.style.marginRight = "auto";
    logo.style.fontSize = "24px"

    const navItems = document.createElement("div");
    navItems.innerHTML = `
        <ul style="list-style: none; display: flex; gap: 15px; margin: 0; padding: 0;">
            <li style="cursor: pointer;">Phones</li>
            <li style="cursor: pointer;">Laptops</li>
            <li style="cursor: pointer;">Accessories</li>
        </ul>
    `;

    const navOptions = document.createElement("div");
    const cartIcon = document.createElement('img')
    cartIcon.src = "./../assets/cart.svg"
    const profileIcon = document.createElement('img')
    profileIcon.src = "./../assets/profile.svg"
    profileIcon.style.marginLeft = "10px"
    profileIcon.style.scale = "1.5"
    cartIcon.style.scale = "1.4"
    navOptions.appendChild(cartIcon)
    navOptions.appendChild(profileIcon)
    navOptions.style.marginLeft = "auto";
    navOptions.style.cursor = "pointer";

    const navbar = document.createElement("div");
    navbar.id = "navbar";
    navbar.style.display = "flex";
    navbar.style.alignItems = "center";
    navbar.style.justifyContent = "space-between";
    navbar.style.padding = "20px 25px";
    navbar.style.backgroundColor = "#f8f9fa";
    navbar.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
    navbar.style.width = "98%";
    navbar.style.boxSizing = "border-box"; 
    navbar.style.margin = "1%"
    navbar.style.position = "fixed"
    navbar.style.borderRadius = "25px"
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    navbar.style.color = "white"

    navbar.appendChild(logo);
    navbar.appendChild(navItems);
    navbar.appendChild(navOptions);

    return navbar;
}
