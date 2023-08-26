const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

export const fetchCountries = async()=>{
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('Error en el request: '+response.status);
        }
        return response.json();
    }
    catch (error){
        console.error(error);
    }
}

// export function fetchCountries (){
//     // const response = fetch(url);
//     // response.then(data=>{
//     //     const json = data.json();
//     //     console.log(json)
//     // })
//     return fetch(url)
//         .then(response => response.json())
//         .catch(err => console.log(err))
        
// }