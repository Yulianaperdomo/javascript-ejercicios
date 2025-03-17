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
edad. Se considera mayor de edad a partir de los 18 años.

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
*/
//ejercicio numero 3//
/*Dado dos números A y B, determinar si A es mayor, menor o igual que B

const compararNumeros = (a, b) => {
    if (a > b) {
        return "A es mayor que B.";
    } else if (a < b) {
        return "A es menor que B.";
    } else {
        return "A es igual a B.";
    }
};

let a = parseFloat(prompt("Ingrese el primer número (A):"));
let b = parseFloat(prompt("Ingrese el segundo número (B):"));

if (!isNaN(a) && !isNaN(b)) {
    alert(compararNumeros(a, b));
} else {
    alert("Por favor, ingresa números válidos.");
}
*/
//ejrcicio numero 5//
/*Dado el peso de una persona:
a) Si el peso es menor o igual a 40 Kg. Muestre mensaje: Persona Baja de
Peso;
b) Si el peso es entre 41 y 70 Kg. Muestre el mensaje: Persona peso
promedio;
c) Si el peso es mayor a 71 Kg. Muestre el mensaje: “Persona con sobrepeso”

const clasificarPeso = (peso) => {
    if (peso <= 40) {
        return "Persona Baja de Peso";
    } else if (peso >= 41 && peso <= 70) {
        return "Persona peso promedio";
    } else {
        return "Persona con sobrepeso";
    }
};

let peso = parseFloat(prompt("Ingrese su peso en Kg:"));

if (!isNaN(peso)) {
    alert(clasificarPeso(peso));
} else {
    alert("Por favor, ingresa un peso válido.");
}
*/

//ejercicio numero 7//
/*En un almacén se hace un 20% de descuento a los clientes cuya compra
supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál
será la cantidad que pagara una persona por su compra?

const calcularDescuento = (monto) => {
    let descuento = monto > 1000 ? 0.20 : 0.05;
    let totalPagar = monto - (monto * descuento);
    return `Total a pagar: $${totalPagar.toFixed(2)}`;
};

let monto = parseFloat(prompt("Ingrese el monto de su compra:"));

if (!isNaN(monto) && monto > 0) {
    alert(calcularDescuento(monto));
} else {
    alert("Por favor, ingresa un monto válido.");
}
*/

//ejercicio numero 9//
/*Programa que lea los nombres y edades de dos personas e imprima cuál de
ellas tiene más edad.

const compararEdades = (nombre1, edad1, nombre2, edad2) => {
    if (edad1 > edad2) {
        return `${nombre1} es mayor que ${nombre2}.`;
    } else if (edad1 < edad2) {
        return `${nombre2} es mayor que ${nombre1}.`;
    } else {
        return `${nombre1} y ${nombre2} tienen la misma edad.`;
    }
};

let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));
let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));

if (!isNaN(edad1) && !isNaN(edad2) && edad1 > 0 && edad2 > 0) {
    alert(compararEdades(nombre1, edad1, nombre2, edad2));
} else {
    alert("Por favor, ingrese edades válidas.");
}
*/

//ejercicio 11//
/*Leer 2 números; si son iguales que los multiplique, si el primero es mayor
que el segundo que los reste y si no que los sume.

const operarNumeros = (num1, num2) => {
    if (num1 === num2) {
        return `Los números son iguales, su multiplicación es: ${num1 * num2}`;
    } else if (num1 > num2) {
        return `El primer número es mayor, la resta es: ${num1 - num2}`;
    } else {
        return `El segundo número es mayor, la suma es: ${num1 + num2}`;
    }
};

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (!isNaN(num1) && !isNaN(num2)) {
    alert(operarNumeros(num1, num2));
} else {
    alert("Por favor, ingrese números válidos.");
}
*/
//ejercico 13//

/*13.Escribe un programa que determine si un número ingresado por el usuario
es par o impar.

const verificarParidad = (num) => {
    if (num % 2 === 0) {
        return `El número ${num} es par.`;
    } else {
        return `El número ${num} es impar.`;
    }
};
let num = parseInt(prompt("Ingrese un número:"));
if (!isNaN(num)) {
    alert(verificarParidad(num));
} else {
    alert("Por favor, ingrese un número válido.");
}
*/

//ejercicio 15//
/*Crea un programa que solicite un número y verifique si es positivo, negativo
o igual a cero.

const verificarNumero = (numero) => {
    if (numero > 0) {
        return `El número ${numero} es positivo.`;
    } else if (numero < 0) {
        return `El número ${numero} es negativo.`;
    } else {
        return `El número es cero.`;
    }
};
let numero = parseFloat(prompt("Ingrese un número:"));
if (!isNaN(numero)) {
    alert(verificarNumero(numero));
} else {
    alert("Por favor, ingrese un número válido.");
}
*/
//ejercicio 17//
/*Escribe un programa que permita al usuario seleccionar una figura
geométrica (triángulo y cuadrado) y luego calcule el área de esa figura
ingresando los datos necesarios para cada caso.

const calcularArea = () => {
    let figura = prompt("Elige una figura geométrica: triángulo o cuadrado").toLowerCase();
    
    if (figura === "triángulo") {
        let base = parseFloat(prompt("Ingresa la base del triángulo:"));
        let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
        
        if (base > 0 && altura > 0) {
            let area = (base * altura) / 2;
            alert(`El área del triángulo es: ${area}`);
        } else {
            alert("Por favor, ingresa valores válidos.");
        }
    } else if (figura === "cuadrado") {
        let lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
        
        if (lado > 0) {
            let area = lado * lado;
            alert(`El área del cuadrado es: ${area}`);
        } else {
            alert("Por favor, ingresa un valor válido.");
        }
    } else {
        alert("Figura no reconocida. Por favor, elige triángulo o cuadrado.");
    }
};
calcularArea();
*/

//ejercicio 19//
/*Diseña un programa que solicite el nombre de un usuario y su contraseña. Si
el nombre es "admin" y la contraseña es "12345", muestra un mensaje de
acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.

const verificarAcceso = () => {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let contrasena = prompt("Ingrese su contraseña:");
    
    if (usuario === "admin" && contrasena === "12345") {
        alert("Acceso concedido");
    } else {
        alert("Acceso denegado");
    }
};

verificarAcceso();



if (edad <= 18) {
    alert("Eres menor de edad");
}

*/

//funciones//
/*
function saludar() {
    alert("Hola probando las funciones");
}

saludar();


function sumar() {
    return 2 + 2
  }
  const resultado = sumar()

  alert (sumar()) */

  /*
  function getRandomNumber() {
    // recuperamos un número aleatorio entre 0 y 1
    const random = Math.random() // por ejemplo: 0.6803487380457318
  
    // lo multiplicamos por 10 para que esté entre 0 y 10
    const multiplied = random * 10 // -> 6.803487380457318
  
    // redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied) // -> 6
  
    // le sumamos uno para que esté entre 1 y 10
    const result = rounded + 1 // -> 7
  
    // devolvemos el resultado
    return result
  } */



/*EVIDENCIA JAVASCIPT AVANZADA
FUNCIONES:
¿Que es una funcion?
Una función es un bloque de código que se ejecuta cuando se llama. 
Puede recibir parámetros y devolver un valor.

DEFINIR FUNCIONES:
Para definir una función en JavaScript, se utiliza la palabra clave function, seguida de un nombre, 
 una lista de parámetros entre paréntesis y un bloque de código entre llaves { ... }.
 EJEMPLO:*/

    function saludar(nombre) {
        alert("Hola " + nombre);
      }

      console.log(saludar("Carlos")); // Hola, Carlos

/*tipos de funciones:

1.Funciones Declarativas:
Las funciones declarativas se definen con la palabra clave function., 
seguidas de un nombre y un conjunto de parámetros dentro de paréntesis. 
Su código está encerrado entre llaves {} y se ejecuta cuando la función es invocada.

EJEMPLO:*/

function calcularCuadrado(numero) {
    return numero * numero;
}

console.log(calcularCuadrado(4)); // 16
console.log(calcularCuadrado(7)); // 49

/*2.Funciones Expresivas:
Las funciones expresivas se definen mediante una variable. No se pueden llamar antes de ser definidas.

EJEMPLO:*/

const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
};
console.log(despedir("Ana")); // Adiós, Ana!

/*3.Funciones Flecha:
Las funciones flecha son una forma más simple de escribir funciones expresivas.
Se definen con una flecha => entre los parámetros y el bloque de código.

EJEMPLO:*/

const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // 8

/*FUNCIONES ANONIMAS:
Una función anónima es una función sin nombre.
Se pueden asignar a una variable o pasar como argumento a otra función.

EJEMPLO:*/

const mensaje = function() {
    console.log("Este es un mensaje desde una función anónima.");
};

mensaje(); // "Este es un mensaje desde una función anónima."

/*FUNCIONES AUTOINVOCADAS:
Una función autoinvocada es una función que se ejecuta inmediatamente después de ser definida.
Se encapsulan entre paréntesis (function(){})() para evitar conflictos con otras variables y proteger su ámbito.

EJEMPLO:*/

(function() {
    console.log("Hola desde una función autoinvocada.");
})();


/*FUNCIONES DE ORDEN SUPERIOR:
 son aquellas que pueden recibir otra función como argumento o devolver una función como resultado.
Este tipo de funciones son fundamentales en la programación funcional y permiten construir código más reutilizable y flexible.

EJEMPLO:*/

function operar(a, b, operacion) {
    return operacion(a, b);
}
console.log(operar(4, 2, (x, y) => x * y)); 
console.log(operar(6, 3, (x, y) => x / y)); 

/*FUNCIONES RECURSIVAS:
Las funciones recursivas son aquellas que se llaman a sí mismas dentro de su ejecución.
Se utilizan para resolver problemas que pueden descomponerse en casos más pequeños y similares.
Para evitar un bucle infinito, estas funciones deben incluir una condición de salida que termine la recursión cuando se cumpla cierto criterio.

EJEMPLO:*/

function contarHastaDiez(numero) {
    if (numero <= 10) {
        console.log(numero);
        contarHastaDiez(numero + 1);
    }
}
contarHastaDiez(1);

/*FUNCIONES GENERADORAS:
Las funciones generadoras son funciones que pueden pausar su ejecución
y devolver un valor intermedio utilizando la palabra clave yield.

EJEMPLO:*/

function* contador() {
    for (let i = 1; i <= 5; i++) {
        yield i;
    }
}
const gen = contador();
console.log(gen.next().value); // 1 

/*FUNCIONES ASINCRONAS:
Las funciones asíncronas son funciones que trabajan de forma no bloqueante.
Cuando una función se declara con async, siempre devuelve una Promise. 
Dentro de una función asíncrona, se puede usar await para esperar el resultado de una Promise antes de continuar con la ejecución del código.

EJEMPLO:*/

async function obtenerDatos() {
    return "Datos obtenidos";
}
obtenerDatos().then(console.log); 


/*ARREGLOS:
¿Que es un arreglo?

Un arreglo en JavaScript es una estructura de datos que permite almacenar múltiples valores en una sola variable.
 Los arreglos son objetos especiales que mantienen el orden de inserción y permiten acceder a sus elementos mediante índices numéricos, comenzando desde 0.

TIPOS DE ARREGLOS:
1.Arreglos Unidimensionales:
Un arreglo unidimensional es una lista de elementos almacenados en una sola dimensión.
Se accede a cada elemento mediante un índice numérico.

EJEMPLO:*/

const frutas = ["manzana", "pera", "uva", "fresa"];
console.log(frutas[0]); 

/*2.Arreglos Multidimensionales:
Un arreglo multidimensional es un arreglo que contiene otros arreglos como elementos.
Se utilizan para representar estructuras de datos más complejas, como matrices o tablas.

EJEMPLO:*/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(matriz[1][2]); 

/*3.Arreglos de Objetos:
Un arreglo de objetos es un arreglo que contiene objetos como elementos.
Cada objeto puede tener sus propias propiedades y métodos.

EJEMPLO:*/

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 22 }
  ];
  console.log(personas[2].nombre); 

/*4.Arreglo asociativo:
Un arreglo asociativo es un objeto que utiliza cadenas de texto como índices en lugar de números.
Se utilizan para almacenar pares clave-valor.

EJEMPLO:*/

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "México"
  };
  console.log(persona["nombre"]);


/*5. Arreglo vacio o dinamico:
Un arreglo vacío es un arreglo que no contiene elementos.
Se puede inicializar sin elementos y agregarlos dinámicamente.

EJEMPLO:*/

let colores = [];
colores.push("verde");
colores.push("blanco");
console.log(colores); 

/*Programación Orientado a objetos.
¿Que es la programación orientada a objetos?
La programación orientada a objetos (POO) es un paradigma de programación que se basa en el concepto de "objetos".
Estos objetos pueden contener datos en forma de atributos y código en forma de métodos.
La POO se basa en cuatro conceptos fundamentales: abstracción, encapsulamiento, herencia y polimorfismo.

Características de la POO Reduce los errores, Promueve la reutilización del código, Permite detectar errores con mayor facilidad, Es modular, 
Es flexible gracias al polimorfismo. 

Lenguajes de programación orientada a objetos 
Java y C++
PHP, Python y Ruby
ADA

Ventajas de la POO 
Permite reutilizar código y ahorrar tiempo
Permite mejorar las estructuras de datos
Permite escribir un código mejor, más limpio y reutilizable

Cómo funciona la POO
Se centra en cómo dividir los requisitos en clases simples y reutilizables 
Las clases pueden heredar atributos de una superclase 
La clase hija incorpora automáticamente todas las características y comportamientos de la clase padre 

Ejemplo:
1. Clases y Objetos:*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear un objeto de la clase Persona
const persona1 = new Persona("Carlos", 30);
persona1.saludar();

/*2. Herencia:*/

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    mostrarCurso() {
        console.log(`${this.nombre} está en el curso de ${this.curso}.`);
    }
}

// Crear un objeto de la clase Estudiante
const estudiante1 = new Estudiante("Ana", 22, "JavaScript Avanzado");
estudiante1.saludar();
estudiante1.mostrarCurso();

/*3. Encapsulamiento:*/

class CuentaBancaria {
    #saldo; // Propiedad privada

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(monto) {
        this.#saldo += monto;
        console.log(`Depósito exitoso. Nuevo saldo: ${this.#saldo}`);
    }

    retirar(monto) {
        if (monto > this.#saldo) {
            console.log("Fondos insuficientes.");
        } else {
            this.#saldo -= monto;
            console.log(`Retiro exitoso. Nuevo saldo: ${this.#saldo}`);
        }
    }

    verSaldo() {
        console.log(`Saldo disponible: ${this.#saldo}`);
    }
}

// Crear una cuenta bancaria
const cuenta1 = new CuentaBancaria("Luis", 500);
cuenta1.depositar(300);
cuenta1.retirar(200);
cuenta1.verSaldo();

/*4. Polimorfismo:*/

class Animal {
    hacerSonido() {
        console.log("El animal hace un sonido.");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau guau!");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau miau!");
    }
}

// Crear objetos de diferentes clases
const perro = new Perro();
const gato = new Gato();

perro.hacerSonido(); // Guau guau!
gato.hacerSonido();  // Miau miau!


/*Manejo de evento y el DOM (Document Object Model).
permite interactuar con el contenido de una página web, como responder a acciones del usuario o hacer animaciones
 ¿Qué es el DOM?
 es una representación estructurada de una página web en forma de árbol.
 JavaScript permite manipular el DOM para modificar, eliminar o agregar elementos en la página de forma dinámica.
 ¿Qué es un Evento?
es cualquier interacción del usuario con la página web, como hacer clic en un botón, mover el mouse, 
presionar una tecla, entre otros.

Ejemplo:*/

let box = document.getElementById("box");
let y = 0;
let speed = 2;
let gravity = 0.2;

function bounce() {
    speed += gravity;
    y += speed;

    if (y > window.innerHeight - 50) {
        y = window.innerHeight - 50;
        speed *= -0.7;
    }

    box.style.top = y + "px";
    requestAnimationFrame(bounce);
}

bounce();

/*Modulos
¿Qué es un módulo?
son archivos de código reutilizables que permiten organizar mejor el desarrollo dividiendo el código en diferentes archivos. 
Esto facilita el mantenimiento, la reutilización y la encapsulación del código.

Ventajas de los módulos
Facilitan la organización del código
Permiten reutilizar código
Mejoran la legibilidad del código
Facilitan el mantenimiento del código

Ejemplo:*/

//Modules (ESM) - ECMAScript Modules

// Módulo Exportado
export function sumar(a, b) {
    return a + b;
}

export const PI = 3.1416;

// Módulo Importado

import { sumar, PI } from './operaciones.js';

console.log(sumar(5, 3)); // 8
console.log(PI); // 3.1416

//CommonJS (CJS) - Módulos en Node.js

//module.exports

function multiplicar(a, b) {
    return a * b;
}

module.exports = { multiplicar };

//require

const { multiplicar } = require('./operaciones');

console.log(multiplicar(4, 2)); // 8

/*Programación Asíncrona.
es una técnica que permite que un programa ejecute varias tareas simultáneamente, 
sin tener que esperar a que se complete una de ellas

Características
Permite que un programa inicie una tarea de larga duración y siga respondiendo a otros eventos. 
Es una arquitectura sin bloqueo, lo que significa que no bloquea la ejecución mientras una o más operaciones están en curso. 
Evita retrasos o tiempos de espera a la hora de ejecutar un programa. 
Mejora el rendimiento del lenguaje, ya que permite aprovechar al máximo las capacidades del equipo. 

Cómo funciona
El programa asíncrono usa hilos de ejecución del procesador para que pueda ejecutar más de un proceso a la vez. 
El programa asíncrono empuja ciertas operaciones a una cola de actividades, para que no bloqueen la ejecución de código mientras terminan. 
El programa asíncrono reanuda la ejecución de una operación cuando esta termina. 

ventajas
Mejora la eficiencia y el rendimiento del programa.
Permite que un programa realice múltiples tareas simultáneamente.
Evita bloqueos y retrasos en la ejecución del programa.
Permite que un programa responda a eventos y solicitudes de forma más rápida.

Ejemplo:*/

// Función asíncrona que obtiene datos de una API
async function obtenerDatos() {
    try {
        console.log("Solicitando datos...");

        // Simulamos una petición a una API con fetch
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        
        // Convertimos la respuesta a JSON
        let datos = await respuesta.json();

        console.log("Datos recibidos:", datos);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Llamamos a la función
obtenerDatos();

console.log("Esto se ejecuta mientras se espera la respuesta de la API...");










  

  