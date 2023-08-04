import { fetchCountries } from './services.js'
import { renderCountries } from './utils.js'

const searchInput = document.querySelector('.app__search');
const filterSelect = document.querySelector('.app__filter');
const scrollTopY = document.querySelector('.app__scrolltop');

let countryData = [];

searchInput.addEventListener('input', (event) =>{

    const value = event.target.value.toLowerCase();
    const filteredCountries = countryData.filter(country => {
        return country.name.common.toLowerCase().includes(value) ||
            country.capital.join(',').toLowerCase().includes(value);
    })

    renderCountries(filteredCountries)
})


filterSelect.addEventListener('input',(event)=>{
    const value = event.target.value;
    const filteredCountries = countryData.filter(country => {
        return country.region.toLowerCase().includes(value);
    })
    renderCountries(filteredCountries);
})

document.addEventListener('DOMContentLoaded', async ()=>{
    const data = await fetchCountries();
    countryData = data;
    renderCountries(data);
    scrollTopY.style.visibility = 'hidden';
    scrollTopY.style.opacity = 0;

    const infoButtons = document.querySelectorAll('.country__info');
    const dialog = document.querySelector('.country__dialog');
    const dialogClose = document.querySelector('.dialog__close');
    const dialogBody = document.querySelector('.dialog__body');

    infoButtons.forEach(info =>{
        info.addEventListener('click', (event) =>{
            const {countryName} = event.target.dataset;

            const countryFound = countryData.find(
                country => country.name.common === countryName
            )

            const { flags: {svg}, name:{official}} = countryFound;

            console.log(svg, official)

            dialogBody.innerHTML = `
                <img src="${svg}" width="400" height="200">
                <h2> ${official} </h2>
            `

            dialog.showModal();
        })
    })

    dialogClose.addEventListener('click', (event)=>{
        dialog.close();
    })
})

document.addEventListener('scroll', () =>{
    if(window.scrollY>300){
        scrollTopY.style.visibility = 'visible';
        scrollTopY.style.opacity = 1;
    }
    else{ 
        scrollTopY.style.visibility = 'hidden';
        scrollTopY.style.opacity = 0;
    }
        
})