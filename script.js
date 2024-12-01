console.log("Empieza el programa.");
let suma = document.querySelector("#suma");
let resta = document.querySelector("#resta");
let producto = document.querySelector("#producto");
let division = document.querySelector("#division");
let potencia = document.querySelector("#potencia");
let raiz = document.querySelector("#raiz");
let factorial = document.querySelector("#factorial");
let logaritmo = document.querySelector("#logaritmo");
let resultado = document.querySelector("#resultado");
let input = document.querySelector("#inputcalc");
let label = document.querySelector("#label");
let reset = document.querySelector("#borrar");

let valor1 = null;
let valor2 = null;
let operacion = null;

suma.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor1 = parseFloat(input.value);
        operacion = "+";
        input.value = "";
        label.innerHTML = "Ingrese el segundo número";
    } else {
        label.innerHTML = "Por favor, ingrese un número válido.";
    }
});

resta.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor1 = parseFloat(input.value);
        operacion = "-";
        input.value = "";
        label.innerHTML = "Ingrese el segundo número";
    } else {
        label.innerHTML = "Por favor, ingrese un número válido.";
    }
});

producto.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor1 = parseFloat(input.value);
        operacion = "*";
        input.value = "";
        label.innerHTML = "Ingrese el segundo número";
    } else {
        label.innerHTML = "Por favor, ingrese un número válido.";
    }
});

division.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor1 = parseFloat(input.value);
        operacion = "/";
        input.value = "";
        label.innerHTML = "Ingrese el segundo número";
    } else {
        label.innerHTML = "Por favor, ingrese un número válido.";
    }
});

// Potencia
potencia.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor1 = parseFloat(input.value);
        operacion = "^";
        input.value = "";
        label.innerHTML = "Ingrese el exponente";
    } else {
        label.innerHTML = "Por favor, ingrese un número válido.";
    }
});

// Raíz
raiz.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor1 = parseFloat(input.value);
        operacion = "√";
        input.value = "";
        mostrarResultado(Math.sqrt(valor1));
    } else {
        label.innerHTML = "Por favor, ingrese un número válido.";
    }
});

// Factorial
factorial.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor1 = parseFloat(input.value);
        operacion = "!";
        input.value = "";
        mostrarResultado(calcularFactorial(valor1));
    } else {
        label.innerHTML = "Por favor, ingrese un número válido.";
    }
});

// Logaritmo
logaritmo.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor1 = parseFloat(input.value);
        operacion = "log";
        input.value = "";
        mostrarResultado(Math.log(valor1));
    } else {
        label.innerHTML = "Por favor, ingrese un número válido.";
    }
});

resultado.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        valor2 = parseFloat(input.value);
        let res = 0;
        switch(operacion) {
            case "+":
                res = valor1 + valor2;
                break;
            case "-":
                res = valor1 - valor2;
                break;
            case "*":
                res = valor1 * valor2;
                break;
            case "/":
                if (valor2 !== 0) {
                    res = valor1 / valor2;
                } else {
                    label.innerHTML = "Error: División por cero";
                    return;
                }
                break;
            case "^":
                res = Math.pow(valor1, valor2);
                break;
            default:
                label.innerHTML = "Por favor seleccione una operación...";
                return;
        }
        mostrarResultado(res);
    } else {
        label.innerHTML = "Ingrese una operación válida";
    }
});

reset.addEventListener("click", function (e) {
    e.preventDefault();
    input.value = "";
    valor1 = null;
    valor2 = null;
    operacion = null;
    label.innerHTML = "Ingresar operación";
});

function mostrarResultado(resultado) {
    console.log("El resultado es: " + resultado);
    label.innerHTML = "El resultado es: " + resultado;
    input.value = resultado;
}

// Función para calcular el factorial
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * calcularFactorial(numero - 1);
}
