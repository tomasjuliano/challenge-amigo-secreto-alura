
//Creamos el array de los nombres
let nombresAmigos = [];
let lista = document.getElementById('listaAmigos');

console.log(nombresAmigos);

// ------------- Funciones -------------
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value; // Esto captura el texto introducido en el input, y lo pone en la variable "amigo"

    if(nombreAmigo === ''){ //Verificamos que el campo no quede vacio.
        alert('El campo está vacio. Por favor, inserte un nombre.'); //Alertamos al usuario de que el input quedó vacio.
        return;
    } else{
        nombresAmigos.push(nombreAmigo); //Ahora metemos el nombre en el array.
        console.log(nombresAmigos); //Esto claramente no es obligatorio, es para chequear.
        generarLista();
    }

    document.getElementById('amigo').value = ''; //Limpiamos la caja del input.
}

function generarLista(){
    asignarTextoElemento('listaAmigos', ''); //Limpio la lista.

    //Recorremos el array de amigos, y vamos introduciendolos en la lista.
    for(let i = 0; i < nombresAmigos.length; i++){
        let nuevoItem = document.createElement('li');
        nuevoItem.innerHTML = nombresAmigos[i];

        lista.append(nuevoItem);
    }
}

function sortearAmigo(){
    if(nombresAmigos.length === 0){
        alert('No hay amigos en la lista. Por favor, inserte un nombre.');
        return;
    } else{
        let posicionAmigoSorteado = Math.floor(Math.random() * nombresAmigos.length);
        let amigoSorteado = nombresAmigos[posicionAmigoSorteado];

        asignarTextoElemento('listaAmigos', '');
        asignarTextoElemento('resultado', `${amigoSorteado}`);
    }
}
