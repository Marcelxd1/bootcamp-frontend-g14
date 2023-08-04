export const renderCountries = function (countries){
    const countryListElement = document.querySelector('.app__list');

    let countryList = '';
    if(countries.length ===0){
        countryListElement.classList.add('country__null');
        countryListElement.innerHTML = `
            <div class="message">
                <img src="./images/sad-circle-svgrepo-com (1).svg" height="100" width="100">
                No se encontraron países con los datos ingresados
            </div>
        `
        return;
    }
    countryListElement.classList.remove('country__null');

    countries.forEach(country => {
        countryList += `
        <div class= "country">
            <img class = "country__flag" src="${country.flags.png}" alt="${country.name.common}"/>
            <div class= "country__wrapper">
                <h2 class= "country__title"> ${country.name.common} </h2>
                
                <div class= "country__description"> 
                    <strong> Population: </strong> ${formatNumber(country.population)}
                </div>

                <div class= "country__description"> 
                    <strong> Region: </strong> ${country.region}
                </div>

                <div class= "country__description"> 
                    <strong> Capital: </strong> ${country.capital}
                </div>

                <button class="country__info" data-country-name="${country.name.common}"> More info </button>

            </div>
        </div>
    
     `
    });

    countryListElement.innerHTML = countryList;
}

export const formatNumber = (number) => {
    return new Intl.NumberFormat('es-PE').format(number)
}