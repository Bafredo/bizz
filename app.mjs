import { createNavbar } from './components/header.js';


document.body.style.margin = "0";
document.body.style.padding = "0";
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";

const viewbox = document.getElementById('view');
viewbox.append(createNavbar())
