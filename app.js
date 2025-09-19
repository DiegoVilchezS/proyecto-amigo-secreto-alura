// Empezamos declarando el array el cual almacenará
//la lista de amigos a ingresar

let amigos=[];

//creamos función que agregue a los amigos dentro de la lista usando el boton añadir

function agregarAmigo(){
    let inputAmigo=document.getElementById('amigo');
    let nombreAmigo=inputAmigo.value

//validación de entradas
if (nombreAmigo === ""){
    alert ("Por favor ingrese un nombre en el recuadro");
    return; //buena práctica 
}

if (amigos.includes(nombreAmigo)){
    alert ("Este nombre ya se encuentra en la lista de amigos");
    inputAmigo.value= "";
    return;
}

amigos.push(nombreAmigo); //actualiza el array que contiene los nombres de los amigos 
actualizarLista(); //actualiza lista amigos
inputAmigo.value=""; //limpia campo donde se ingresa el nombre

};


function actualizarLista(){
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML="";
    for (let i=0; i<amigos.length;i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
};

function sortearAmigo(){ //sortea amigos lista
    if (amigos.length<2){
        alert ("Debes agregar al menos dos amigos a la lista para poder realizar el sorteo");
        return;
    }
    let indiceAleatorio=Math.floor(Math.random()*amigos.length);
    //obtiene el nombre sorteado
    let amigoSecreto=amigos[indiceAleatorio];
    //muestra el amigo secreto
    let resultado=document.getElementById("resultado");
    resultado.innerHTML=`El amigo secreto escogido es: ${amigoSecreto}`;
    document.getElementById("reiniciar").removeAttribute("disabled");
};


function reiniciarJuego() {
    amigos = []; // vacia el array de lista de amigos
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpia la lista en el .HTML
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpia el resultado del sorteo realizado
    
    //pone en marcha el botón de Reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    
}

