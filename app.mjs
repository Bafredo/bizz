import { createNavbar } from './components/header.js';
import { createBody } from './components/body.js';


document.body.style.margin = "0";
document.body.style.padding = "0";
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";

const viewbox = document.getElementById('view');
viewbox.appendChild(createNavbar())
viewbox.appendChild(createBody())
