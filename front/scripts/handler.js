const renderFilms = require("./renderFilms")

const getFilms = () => {
    $.get("https://students-api.up.railway.app/movies", (data)=> data.map(renderFilms).fail(()=>alert("Error al traer las peliculas")))
}

module.exports = getFilms;