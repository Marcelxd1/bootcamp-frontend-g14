const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital'

export function fetchCountries (){
    // const response = fetch(url);
    // response.then(data=>{
    //     const json = data.json();
    //     console.log(json)
    // })
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err))
        
}