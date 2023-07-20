export const renderCountries = function (countries){
    const countryListElement = document.querySelector('.app__list');

    let countryList = '';

    countries.forEach(country => {
        countryList += `
        <div class= "country">
            
    
     `
    });

    countryListElement.innerHTML = countryList;
}