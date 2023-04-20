/* 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese
numero de la siguiente forma:
para valor 6
1
12
123
1234
12356*/
console.log("NUMBER 1")

function pyramid(number){
    // validate that the input is a number and it is not 0
    try {
        if (isNaN(number) == true || number == 0) {
        throw new Error("Cannot work with that sorry mate");
    }
    } catch(error) {
        return error;
    }

    // pyramid maker
    let results = [];
    let current_numbers = [];
    for (let counter = 1; counter <= number; counter++){
        current_numbers = current_numbers + counter
        results = results + current_numbers + "\n";
    }
    return results;
}

console.log("successful cases")
console.log(pyramid(6))
console.log(pyramid(3))

console.log("error cases")
console.log(pyramid(0))
console.log(pyramid("test"))
console.log(pyramid())


/* 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos
que coinciden entre ellos
Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']
Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true] */
console.log("NUMBER 2")

let array1 = ['rojo', 'azul', 'amarillo']
let array2 = ['blanco', 'negro', 'rojo']
let array3 = [4, 3, true, 'manzana']
let array4 = ['pera', 3, false, true, 3, true]

function arraySeeker(arrayLeft, arrayRight){
    let results = []
    // removes duplicates
    arrayRight = [...new Set(arrayRight)]
    arrayLeft = [...new Set(arrayLeft)]
    
    //iterates left array
    for (let counterLeft = 0; counterLeft < arrayLeft.length; counterLeft++) { 
        //iterates right array
        for (let counterRight = 0; counterRight < arrayRight.length; counterRight++) {
            // finds matches
            if (arrayLeft[counterLeft] === arrayRight[counterRight]) {
                results.push(arrayLeft[counterLeft])

            }
        }
    }
    return results;
}


console.log(arraySeeker(array4,array3));
console.log(arraySeeker(array1,array2));

/* 3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado. */

/* 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}


Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}*/

/* 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el
item ya existe “ya existe xxx con yyy unidades”*/