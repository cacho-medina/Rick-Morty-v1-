// Declaramos una URL base que es la de la API
const baseURL = "https://rickandmortyapi.com/api";

// Creamos la función asíncrona para ir a buscar un único personaje
const getCharacter = async (id) => {
    const res = await fetch(`${baseURL}/character/${id}`);
    const data = await res.json(); // sacamos el body de la respuesta
    return data;
};

// Creamos la función asíncrona para ir a buscar todos los personajes
const getCharacters = async (page) => {
    const res = await fetch(`${baseURL}/character/?page=${page}`);
    const data = await res.json(); // sacamos el body de la respuesta
    return data;
};

export { getCharacter, getCharacters };
