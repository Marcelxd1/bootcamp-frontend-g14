// console.log('hello')

const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const button = document.getElementById('boton');
const textResult = document.getElementById('resultado');

// inputPeso.addEventListener(TIPO_DE_EVENTO, FUNCION)
// inputPeso.addEventListener('input', function (event) {
//     console.log(event.target.value);
// })

// inputAltura.addEventListener('input', function (event) {
//     console.log(event.target.value);
// })

button.addEventListener('click', function (event){
    const peso = inputPeso.value;
    const altura = inputAltura.value;
    const IMC = peso/((altura/100)**2);
    let result = "";
    
    if(IMC<18.5)
        result = "Baja";
    else if(IMC<=24.9)
        result = "Normal";
    else if(IMC<=29.9)
        result = "Sobrepeso";
    else 
        result = "Obeso";

    console.log(IMC);
    console.log(result);
    textResult.innerText = "Tu índice de Masa Corporal es " + result; 
})