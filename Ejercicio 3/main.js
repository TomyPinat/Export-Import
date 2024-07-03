// Importar la clase Calculadora desde calculadora.js
import Calculadora from './calculadora.js';

// Crear una instancia de la clase Calculadora
const calculadora = new Calculadora();

// Usar los métodos de la clase Calculadora
let resultadoMultiplicacion = calculadora.multiplicar(6, 7);
console.log(`Resultado de la multiplicación: ${resultadoMultiplicacion}`); // Resultado de la multiplicación: 42

let resultadoDivision = calculadora.dividir(42, 7);
console.log(`Resultado de la división: ${resultadoDivision}`); // Resultado de la división: 6