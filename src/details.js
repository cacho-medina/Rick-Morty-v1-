// Aquí necesitamos traer el personaje solicitado, por eso importamos getCharacter.
import { getCharacter } from "./services/getData.js";

// Guardamos en variables los elementos del DOM que vamos a utilizar
const container = document.querySelector("#character");
const loader = document.getElementById("lds-ring");

// Leemos el ID guardado en el localStorage, nos va a servir para traer los datos de este personaje.
const getID = localStorage.getItem("charID");

const loadCharacter = async (id) => {
    loader.style.display = "grid";
    const data = await getCharacter(id);
    loader.style.display = "none";

    const article = document.createElement("article");
    article.setAttribute("class", "character");
    article.innerHTML = `
            <img src="${data.image}" alt="">
            <h2>${data.name}</h2>
            <p class="data"><span>Origen:</span> ${data.origin.name}</p>
            <p class="data"><span>Locación Actual:</span> ${
                data.location.name
            }</p>
            <div>
                <p class="data"><span>Especie:</span> ${data.species}</p>
                <p class="${data.status.toLowerCase()}"></p>
            </div>
    `;
    container.appendChild(article);
};

loadCharacter(getID);
