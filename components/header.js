export function createNavbar() {
    const logo = document.createElement("div");
    logo.textContent = "Wundershop";
    logo.style.fontWeight = "bold";
    logo.style.marginRight = "auto";

    const navItems = document.createElement("div");
    navItems.innerHTML = `
        <ul style="list-style: none; display: flex; gap: 15px; margin: 0; padding: 0;">
            <li style="cursor: pointer;">Phones</li>
            <li style="cursor: pointer;">Laptops</li>
            <li style="cursor: pointer;">Accessories</li>
        </ul>
    `;

    const navOptions = document.createElement("div");
    navOptions.textContent = "Login | Cart";
    navOptions.style.marginLeft = "auto";
    navOptions.style.cursor = "pointer";

    const navbar = document.createElement("div");
    navbar.id = "navbar";
    navbar.style.display = "flex";
    navbar.style.alignItems = "center";
    navbar.style.justifyContent = "space-between";
    navbar.style.padding = "10px 20px";
    navbar.style.backgroundColor = "#f8f9fa";
    navbar.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
    navbar.style.width = "100%";
    navbar.style.boxSizing = "border-box"; 

    navbar.appendChild(logo);
    navbar.appendChild(navItems);
    navbar.appendChild(navOptions);

    return navbar;
}
