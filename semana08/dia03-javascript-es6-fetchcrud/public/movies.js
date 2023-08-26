import {fecthMovies, deleteMovie, getMovie} from './service.js'

export const renderMovies = (movies) =>{
    const movieList = document.querySelector('.movies__list')
    
    let elements = ''

    movies.forEach(movie => {
        elements += `
        <tr>
            <td>${movie.id}</td>
            <td>
                <img src="${movie.image? movie.image : "https://placehold.co/300x450"}" width="100" height="250"/>
            </td>
            <td>
                <strong>${movie.name}</strong>
                <div class="fs-small">
                    <strong>Release:</strong> ${movie.release}
                </div>
                <div class="fs-small">
                    <strong>Gender:</strong> ${movie.genreId}
                </div>
                <div class="fs-small">
                    <strong>Resume:</strong> ${movie.resumen}
                </div>
            </td>
            <td>
                <div class="flex gap-0.5">
                    <button class="movie__edit" data-id="${movie.id}">🖋️</button>
                    <button class="movie__delete" data-id="${movie.id}">❌</button>
                </div>
            </td>
        </tr>
        `
    });

    movieList.innerHTML = elements

    const removeButtons = document.querySelectorAll('.movie__delete')

    removeButtons.forEach(button => {
        button.addEventListener('click', async(event)=>{
            const id = event.target.dataset.id

            console.log(id)
            const res = await deleteMovie(id)

            if(res){
                const movies = await fecthMovies()
                renderMovies(movies)
            }
        })
    })

    const updateButtons = document.querySelectorAll('.movie__edit')

    updateButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            const id = event.target.dataset.id

            const res = await getMovie(id)

            if (res) {
                const movieForm = document.forms['movies__form']

                console.log(movieForm)

                movieForm.id.value = res.id
                movieForm.name.value = res.name
                movieForm.image.value = res.image
                movieForm.release.value = res.release
                movieForm.genre.value = res.genreId
                movieForm.resumen.value = res.resumen
            }
        })
    })
}
