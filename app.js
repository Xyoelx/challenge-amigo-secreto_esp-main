// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Generacion de variables y Array.
let nomAmigos = [];


//Validacion de Informacvión

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo == "") {
        alert ('Ingresa un nombre por favor');
    } else {
        nomAmigos.push (nuevoAmigo);
        crearLista();
        let limpiezaCaja =document.getElementById('amigo');
    limpiezaCaja.value = "";
    }
}

//Funcion para limpiar Campos y Listados.

function limpieza() {
    nomAmigos.splice (0, nomAmigos.length);

    return;
    
}

// Esta Funcion crea el listado de amigos.

function crearLista () {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    let contAmigos = nomAmigos.length;
    let generaLi = "";
    let totalLi = "";
    for (var i = 0; i < contAmigos; i++) {
        generaLi = `<li>${nomAmigos[i]}</li>`;
        totalLi = totalLi + generaLi;
    }
    lista.innerHTML = totalLi;
    let amigoelejido = document.querySelector('#resultado');
    amigoelejido.innerHTML = "";
    return
}
function sortearAmigo() {
    let amigoelejido = document.querySelector('#resultado');
    let totalAmigos = nomAmigos.length;
    amigoSorteado = Math.floor(Math.random()*totalAmigos);
    amigoelejido.innerHTML = `<li>Tu amigo Secreto es ${nomAmigos[amigoSorteado]} </li>`;
    limpieza();
    return
}