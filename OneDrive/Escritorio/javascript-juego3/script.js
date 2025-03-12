// Juego "Carrera de Dados"

 //se declara la variable  jugador 1 y 2 y la variable turno que determina quien juega//
let jugador1 = 0;
let jugador2 = 0;
let turno = 1; // 1 para jugador 1, 2 para jugador 2

//se pone un alert para mostrar un mensaje de bienvenida//

alert("Bienvenidos a la Carrera de Dados. El primer jugador en llegar a 20 puntos gana.");

//se crea un bucle while que se ejecutara mientras jugador 1 y jugador 2 sean menores a 20//
while (jugador1 < 20 && jugador2 < 20) {
    //se declara la avriable lanzar que es un prompt que le pide al jugador que presione enter para lanzar el dado//
    let lanzar = prompt(`Jugador ${turno}, presiona Enter para lanzar el dado.`);
    //se declara una variable dado con un math.floor y math.random genera 
    // un número aleatorio entre 1 y 6, simulando el lanzamiento de un dado//. 
    let dado = Math.floor(Math.random() * 6) + 1; // Número entre 1 y 6
    //se pone un alert que muestre el mensaje del jugador y su turno//
    alert(`Jugador ${turno} ha sacado un ${dado}`);
    //se usa el condicional if. donde Si el dado es 1, el jugador pierde el turno y no suma puntos.
    // de lo contrario si no es 1 se le suma los puntos//
    if (dado === 1) {
        alert(`Jugador ${turno} pierde el turno por sacar un 1.`);
    } else {
        if (turno === 1) {
            jugador1 += dado;
        } else {
            jugador2 += dado;
        }
    }
    
    // Mostrar puntuación actual
    alert(`Puntuación actual: Jugador 1: ${jugador1} Jugador 2: ${jugador2}`);
    
    // Cambiar de turno
    turno = (turno === 1) ? 2 : 1;
}

// Determinar ganador
if (jugador1 >= 20) {
    alert("¡Jugador 1 gana la partida!");
} else {
    alert("¡Jugador 2 gana la partida!");
}
