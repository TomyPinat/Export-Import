// Importar la clase Persona desde persona.js
import { Persona } from './persona.js';

// Crear instancias de la clase Persona
const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('Ana', 25);

// Ejecutar el método mostrarInformacion para cada instancia
persona1.mostrarInformacion(); // Nombre: Juan, Edad: 30
persona2.mostrarInformacion(); // Nombre: Ana, Edad: 25