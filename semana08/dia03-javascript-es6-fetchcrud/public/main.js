import {renderMovies} from "./movies.js"
import { fecthMovies, updateMovie, createMovie } from "./service.js";

const moviesForm = document.getElementById('movies__form');

moviesForm.addEventListener('submit', async (event) =>{
    event.preventDefault()

    const movieForm = document.forms['movies__form']

    const id = movieForm.id.value
    const name = movieForm.name.value
    const image = movieForm.image.value
    const release = movieForm.release.value
    const genre = movieForm.genre.value
    const resumen = movieForm.resumen.value

    const newMovie = {
        name,
        image,
        release,
        genreId: Number(genre),
        resumen
    }

    const isNew = !Boolean(id)

    if (isNew) {
        const res = await createMovie(newMovie)

        if (res) {
        const movies = await fecthMovies()

        renderMovies(movies)

        moviesForm.reset()
        }
    } else {
        const res = await updateMovie(id, newMovie)

        if (res) {
        const movies = await fecthMovies()

        renderMovies(movies)

        moviesForm.reset()
        }
    }
})

document.addEventListener('DOMContentLoaded', async (event)=>{
    // fecthMovies()
    //     .then(response =>{
    //         renderMovies(response)
    //     })


    const movies = await fecthMovies()
    renderMovies(movies)
})