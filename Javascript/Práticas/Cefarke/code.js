let celsius = document.getElementById('c');
let frn = document.getElementById('f');
let kelvin = document.getElementById('k');


function converte(id){
    let temperatura = document.getElementById('temp')
    let resultado = document.getElementById('res')

    let celsius=0;
    let kelvin=0;
    let faren=0;

    if(temperatura.value == null || temperatura.value == ""){
        alert("Insira uma temperatura válida")
        resultado.innerHTML = ''
        temperatura.focus();
    }
    else{
       temperatura = Number(temperatura.value);
        if(id == 'c'){
            celsius = temperatura;
            faren = (9*celsius + 160)/5
            kelvin = celsius + 273
        }
        else if( id == 'f'){
            faren = temperatura;
            celsius = (5*faren - 160)/9
            kelvin = (5*faren - 160  + 2457)/9
        }
        else if(id == 'k'){
            kelvin = temperatura;
            celsius = kelvin - 273
            faren = (9 * kelvin -2457 + 160)/5
        }

        resultado.innerHTML = `<p>Celsius: ${celsius.toFixed(1)}°</p> <p>Farenheit: ${faren.toFixed(1)}°</p> <p>Kelvin: ${kelvin.toFixed(1)}°</p>`
    }


}


