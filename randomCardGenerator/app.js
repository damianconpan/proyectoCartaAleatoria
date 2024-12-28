const numeroDeCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

const simbolos = [
    { simbolo: "♥", color: "red" },
    { simbolo: "♦", color: "red" },
    { simbolo: "♣", color: "black" },
    { simbolo: "♠", color: "black" }
];

function generarCarta () {
    const numeroAleatorio = numeroDeCarta[Math.floor(Math.random() * numeroDeCarta.length)];
    const simboloAleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];


    let arriba = document.querySelector(".arriba");
    let medio = document.querySelector(".medio");
    let bajo = document.querySelector(".bajo");


    arriba.innerHTML = `${simboloAleatorio.simbolo}`;
    bajo.innerHTML = `${simboloAleatorio.simbolo}`;
    medio.innerHTML = `${numeroAleatorio}`;





    const simbolo = simboloAleatorio.simbolo;

    // Crear un elemento de texto para aplicar clases
    const simboloElemento = document.createElement('span');
    simboloElemento.textContent = simbolo;

    // Cambiar color de los símbolos ♥ y ♦
    if (simbolo === "♥" || simbolo === "♦") {
        simboloElemento.classList.add('rojo');
    } else {
        simboloElemento.classList.add('negro');
    }

    // Asignar el símbolo al contenido de la carta
    arriba.innerHTML = '';
    arriba.appendChild(simboloElemento);

    bajo.innerHTML = '';
    bajo.appendChild(simboloElemento.cloneNode(true));

    medio.innerHTML = numeroAleatorio;

}





    
generarCarta();