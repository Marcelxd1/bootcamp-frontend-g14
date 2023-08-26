export const fecthMovies = async () =>{
    const url = 'http://localhost:3000/0'

    const response =  await fetch(url)

    const data = await response.json()

    return data
}

export const createMovie = async(form) =>{
    const url = 'http://localhost:3000/0'

    const options = {
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(form)
    }
    const response = await fetch(url, options)

    return response.json()
}

export const deleteMovie = async(id) =>{
    const url = `http://localhost:3000/0/${id}`

    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)

    return response.json()
}

export const getMovie = async (id) => {
    try {
      const url = `http://localhost:3000/0/${id}`
  
      const response = await fetch(url)
  
      return response.json()
    } catch(error) {
      console.log(error)
    }
}

export const updateMovie = async (id, form) => {
    try {
      const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }
      
      const url = `http://localhost:3000/0/${id}`
  
      const response = await fetch(url, options)
      
      return response.json()
    } catch(error) {
      console.log(error)
    }
  }