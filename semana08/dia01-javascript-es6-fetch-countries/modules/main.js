import { fetchCountries } from './services.js'
import { renderCountries } from './utils.js'


document.addEventListener('DOMContentLoaded', function(){
    console.log('El DOM se cargo totalmente');
    fetchCountries()
        .then(response => renderCountries(response));
})