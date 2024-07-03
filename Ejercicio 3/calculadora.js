// Definición de la clase Calculadora
class Calculadora {
    // Método para multiplicar dos números
    multiplicar(a, b) {
        return a * b;
    }

    // Método para dividir dos números
    dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }
}

// Exportar la clase Calculadora por defecto
export default Calculadora;