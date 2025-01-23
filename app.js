
let listaDeAmigos = [];

const listaAmigos = document.getElementById('listaAmigos');
const amigoSorteado = document.getElementById('resultado');

function agregarAmigo(){
    const amigo = document.getElementById('amigo').value; //.value toma el valor de la caja 
    if (amigo !== ''){ //!Verificar que no este vacio el cuadro de texto
        listaDeAmigos.push(amigo);
        console.log(listaDeAmigos)
    }
    else{
        alert('Por favor, inserte un nombre')
    }
    listaAmigos.innerHTML += "<li>" + amigo + "</li>";
    limpiarCaja();
}

function sortearAmigo(){
    if (listaDeAmigos.length > 0){
        let indiceRandom = Math.floor(Math.random()*(listaDeAmigos.length));
        amigoSorteado.innerHTML = '<li>' + listaDeAmigos[indiceRandom] + '</li>'
        listaAmigos.innerHTML = ''  //Limpia los nombres previamente ingresados para mostrar solo el nombre sorteado
    }
    else{
        alert('No hay amigos para sortear')
    }    
}

function limpiarCaja(){
    let vaciarCaja = document.getElementById('amigo');
    vaciarCaja.value = '';
}

