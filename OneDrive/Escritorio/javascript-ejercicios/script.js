//ACTIVIDAD EJERCICIOS EN JAVASCRIPT
/*1 ejercicio

// Definir el precio original de la compra
let precioOriginal = 600000; // Precio original  

// Definir el porcentaje de descuento
let porcentajeDescuento = 25;

// Calcular el monto del descuento
let descuento = (precioOriginal * porcentajeDescuento) / 100;

// Calcular el precio final
let precioFinal = precioOriginal - descuento;

// Mostrar los resultados en consola
console.log("Precio original: $" + precioOriginal);
console.log("Descuento: $" + descuento);
console.log("Precio final a pagar: $" + precioFinal);
*/
/*ejercicio 2

// Definir el capital inicial de la inversión
let capitalInicial = 100000; // 

// Definir la tasa de interés mensual
let tasaInteresMensual = 2;

// Calcular la ganancia después de un mes
let ganancia = (capitalInicial * tasaInteresMensual) / 100;

// Calcular el capital final después de un mes
let capitalFinal = capitalInicial + ganancia;

// Mostrar los resultados en consola
console.log("Capital inicial: $" + capitalInicial);
console.log("Ganancia después de un mes: $" + ganancia);
console.log("Capital final después de un mes: $" + capitalFinal);
*/
/*ejercicio 3

// Definir las calificaciones parciales
let parcial1 = 85;
let parcial2 = 90;
let parcial3 = 88;

// Definir la calificación del examen final y del trabajo final
let examenFinal = 92;
let trabajoFinal = 85;

// Calcular el promedio de los parciales
let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

// Calcular la calificación final con los respectivos porcentajes
let calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

// Mostrar los resultados en consola
console.log("Promedio de parciales: " + promedioParciales.toFixed(2));
console.log("Examen final: " + examenFinal);
console.log("Trabajo final: " + trabajoFinal);
console.log("Calificación final en Algoritmos: " + calificacionFinal.toFixed(2));
*/
/*ejercicio 4

// Definir el precio de compra del artículo
let precioCompra = 15000; 

// Definir el porcentaje de ganancia
let porcentajeGanancia = 30;

// Calcular la ganancia
let gana = (precioCompra * porcentajeGanancia) / 100;

// Calcular el precio de venta
let precioVenta = precioCompra + ganancia;

// Mostrar los resultados en consola
console.log("Precio de compra: $" + precioCompra);
console.log("Ganancia esperada: $" + ganancia);
console.log("Precio de venta: $" + precioVenta);
*/
/*ejercicio 5

// Definir el costo por kilómetro y por minuto
let costoPorKilometro = 15000; // en pesos
let costoPorMinuto = 2000; // en pesos

// Definir la distancia recorrida y el tiempo de la carrera
let kilometrosRecorridos = 14; 
let minutosTranscurridos = 20 ; 

// Calcular el monto total a pagar
let montoPagar = (kilometrosRecorridos * costoPorKilometro) + (minutosTranscurridos * costoPorMinuto);

// Mostrar los resultados en consola
console.log("Kilómetros recorridos: " + kilometrosRecorridos);
console.log("Minutos transcurridos: " + minutosTranscurridos);
console.log("Monto total a pagar: $" + montoPagar);
*/
/*ejercicio 6/*

// Leer tres números
let numero1 = 4; 
let numero2 = 6; 
let numero3 = 9; 

// Calcular el cuadrado de cada número
let cuadrado1 = Math.pow(numero1, 2);
let cuadrado2 = Math.pow(numero2, 2);
let cuadrado3 = Math.pow(numero3, 2);

// Mostrar los resultados en consola
console.log("Número 1: " + numero1 + ", su cuadrado: " + cuadrado1);
console.log("Número 2: " + numero2 + ", su cuadrado: " + cuadrado2);
console.log("Número 3: " + numero3 + ", su cuadrado: " + cuadrado3);

/*ejercicio 7

// Definir el monto del presupuesto anual
let presupuestoAnual = 1000000; 

// Definir los porcentajes de cada área
let porcentajeGinecologia = 40;
let porcentajeTraumatologia = 30;
let porcentajePediatria = 30;

// Calcular el monto asignado a cada área
let montoGinecologia = (presupuestoAnual * porcentajeGinecologia) / 100;
let montoTraumatologia = (presupuestoAnual * porcentajeTraumatologia) / 100;
let montoPediatria = (presupuestoAnual * porcentajePediatria) / 100;

// Mostrar los resultados en consola
console.log("Presupuesto Anual: $" + presupuestoAnual);
console.log("Ginecología recibe: $" + montoGinecologia);
console.log("Traumatología recibe: $" + montoTraumatologia);
console.log("Pediatría recibe: $" + montoPediatria);
*/
/*ejercicio 9/*

// Definir la inversión de cada persona
let inversion1 = 50000; 
let inversion2 = 30000; 
let inversion3 = 20000; 

// Calcular el total invertido
let totalInvertido = inversion1 + inversion2 + inversion3;

// Calcular el porcentaje de inversión de cada persona
let porcentaje1 = (inversion1 / totalInvertido) * 100;
let porcentaje2 = (inversion2 / totalInvertido) * 100;
let porcentaje3 = (inversion3 / totalInvertido) * 100;

// Mostrar los resultados en consola
console.log("Total invertido: $" + totalInvertido);
console.log("Persona 1 invierte: " + porcentaje1.toFixed(2) + "%");
console.log("Persona 2 invierte: " + porcentaje2.toFixed(2) + "%");
console.log("Persona 3 invierte: " + porcentaje3.toFixed(2) + "%");

/*ejercicio 10/*

// Función para realizar operaciones básicas
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            return num2 !== 0 ? num1 / num2 : 'Error: División por cero';
        default:
            return 'Operación no válida';
    }
}

// Definir dos números de ejemplo
let num1 = 18;
let num2 = 6;

// Mostrar los resultados en consola
console.log("Suma: " + calculadora(numero1, numero2, 'suma'));
console.log("Resta: " + calculadora(numero1, numero2, 'resta'));
console.log("Multiplicación: " + calculadora(numero1, numero2, 'multiplicacion'));
console.log("División: " + calculadora(numero1, numero2, 'division'));
  
//estructuras de controls

//declarar dos variables una que sea nombre y la otra la edad y  mostrar si es mayor de edad o no

/*
el usuario digite nombre y edad con la siguiente de verificacion
1 a 18 años es joven
19 a 40 años es adulto
41 a 60 años es maduro
61 en adelante es anciano


let nombre = prompt ("ingrese su nombre");
let edad = parseInt(prompt("ingrese su edad"));

if (edad <= 18) {

    alert("hola: " + nombre + " eres una persona joven");
} else if (edad <=40){

    alert("hola: " + nombre + " eres una persona adulta");
} else if (edad <=60){

  alert("hola: " + nombre + " eres una persona madura");
}else{
    alert("hola: " + nombre + " eres una persona anciana");
}

*/

//ciclo while

/*declarar una variable numerica que nuestre la cuenta regresiva a llegar a 0



let cuentaAtras = 5
while (cuentaAtras > 0) {
  document.write(cuentaAtras+'<br>')
  cuentaAtras --
}

console.write('¡Despegue! 🚀') 
 
//DO WHILE

/* imprimir 5 edades de diferentes personas y determiar si son mayores de edad

let persona = 0

do{
    let nombre = (prompt("ingrese su nombre"));
    let edad = (parseInt("ingrese su nombre"));
    if(edad>=18){
        alert(nombre + "eres amyor de edad " );
    }else{
        alert(nombre + "eres amyor de edad " );
    }
    persona++;

}while(persona<5)

    alert ("se registraron" + persona + "personas");
    alert ("fin del programa");
    

    //for

    /*imprimir las tablas de multiplicar del numero que el usuario ingrese hasta el numero 10,
    utilizando el ciclo for mostrar en pantalla la siguiente sintaxis

    5x1=5
    5x2=10
    5x3=15
    5x4=20
    5x5=25
    5x6=30
    5x7=35
    5x8=40
    5x9=45
    5x10=50
    

let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write (numero + "x" + i + "=" + resultado + "<br>");
  }
    */   

  /*imprime por consola un mensaje  si el usuario y contraseña concide con unos establecidos*/


//switch
/* realizar un programa que determine el dia de la semana corresponde hoy, utilizando la funcion prompt

const dia = new Date().getDay()

switch (dia) {
  case 1:
    console.log("¡Hoy es lunes formacion con Gonzalo!😢")
    break  

 case 2:
        console.log("¡Hoy es Martes formacion con Jesus! 😢")
        break

 case 3:
            console.log("¡Hoy es Miercoles formacion con Gonzalo! 😢")
            break

 case 4:
             console.log("¡Hoy es jueves formacion con el abogado! 😢")
            break
 case 5:
             console.log("¡Hoy es Viernes formacion con Jesus!  😢")
              break
 case 6:
            console.log("¡Hoy es Sabado de descanso! 😢")
             break

case 0:
             console.log("¡Hoy es Domingo de descanso! 😢")
             break
  default:
    console.log("No corresponde al dia de la semana! 🚀")
    break
}
/* utilizando la estructura switch realizar el siguiente ejercicio

el usuario digite nombre y edad con la siguiente de verificacion
1 a 18 años es joven
19 a 40 años es adulto
41 a 60 años es maduro
61 en adelante es anciano

let nombre = prompt ("ingrese su nombre");
let edad = parseInt(prompt("ingrese su edad"));

switch (true) {
    case (edad <= 18):
        alert("Hola " + nombre + ", eres una persona joven");
        break;
    case (edad <= 40):
        alert("Hola " + nombre + ", eres una persona adulta");
        break;
    case (edad <= 60):
        alert("Hola " + nombre + ", eres una persona madura");
        break;
    default:
        alert("Hola " + nombre + ", eres una persona anciana");
}
*/


//ejercicio numero 1//
/*Programa que dada la edad de una persona indique si es mayor o menor de
edad. Se considera mayor de edad a partir de los 18 años.*/

let edad = parseInt(prompt("Ingrese su edad"));

if (!isNaN(edad)) {
    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
} else {
    alert("Por favor, ingresa un número válido.");
}

//ejercicio numero 3//
/*Dado dos números A y B, determinar si A es mayor, menor o igual que B*/

function compararNumeros(a, b) {
    if (a > b) {
        return "A es mayor que B.";
    } else if (a < b) {
        return "A es menor que B.";
    } else {
        return "A es igual a B.";
    }
}

let a = parseFloat(prompt("Ingrese el primer número (A):"));
let b = parseFloat(prompt("Ingrese el segundo número (B):"));

if (!isNaN(a) && !isNaN(b)) {
    alert(compararNumeros(a, b));
} else {
    alert("Por favor, ingresa números válidos.");
}

//ejrcicio numero 5//
/*Dado el peso de una persona:
a) Si el peso es menor o igual a 40 Kg. Muestre mensaje: Persona Baja de
Peso;
b) Si el peso es entre 41 y 70 Kg. Muestre el mensaje: Persona peso
promedio;
c) Si el peso es mayor a 71 Kg. Muestre el mensaje: “Persona con sobrepeso”*/

function clasificarPeso(peso) {
    if (peso <= 40) {
        return "Persona Baja de Peso";
    } else if (peso >= 41 && peso <= 70) {
        return "Persona peso promedio";
    } else {
        return "Persona con sobrepeso";
    }
}
let peso = parseFloat(prompt("Ingrese su peso en Kg:"));

if (!isNaN(peso)) {
    alert(clasificarPeso(peso));
} else {
    alert("Por favor, ingresa un peso válido.");
}

//ejercicio numero 7//
/*En un almacén se hace un 20% de descuento a los clientes cuya compra
supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál
será la cantidad que pagara una persona por su compra?*/



