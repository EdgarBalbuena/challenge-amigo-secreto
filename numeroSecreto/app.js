let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

/* Crear funcion */
function asignarTextoElemento(elemento, texto)
{
    /* Vincular los elementos del HTML al JS (document.querySelector) */
    let elementoHTML = document.querySelector(elemento);
    
    /* innerHTML -> Ingresar valor al objeto */
    elementoHTML.innerHTML = texto;

    return;
}


function verificarIntento()
{
    /* input */
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
        {
            if (numeroDeUsuario > numeroSecreto)
            {
                asignarTextoElemento('p', 'El numero secreto es menor')
            }
            else
            {
                asignarTextoElemento('p', 'El numero secreto es mayor')
            }

            intentos += 1;

            limpiarCaja();
        }
    return;
}


function generarNumeroSecreto() 
{
    let numeroGenerado = (Math.floor(Math.random()*numeroMaximo) + 1);
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }
    else
    {
        // Verificar si el numero Generado ya esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja()
{
    // El # sirve para buscar por ID
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales()
{
    limpiarCaja();
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();