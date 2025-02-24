//ACTIVIDAD EJERCICIOS EN JAVASCRIPT
/*1 ejercicio*/

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

/*ejercicio 2*/

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

/*ejercicio 3*/

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

/*ejercicio 4*/

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

/*ejercicio 5*/

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

/*ejercicio 6*/

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

/*ejercicio 7*/

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

/*ejercicio 9*/

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

/*ejercicio 10*/

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







