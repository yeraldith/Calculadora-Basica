// conección de DOM con JS
const buttonNumber = document.getElementsByName("number");
const buttonOperation = document.getElementsByName("operation");
const buttonClear = document.getElementsByName("clear")[0];
const buttonEqual = document.getElementsByName("equal")[0];
let result = document.getElementById("displayinput");
//Declaración de variables para usar en funciones
let operationActual = "";
let operationBefore = "";
let operation = undefined;

//funionamiento del boton igual, relizar operaciones
buttonEqual.addEventListener("click", function () {
  calcular();
  updateDisplay();
});

//funcionamiento del boton borrar
buttonClear.addEventListener("click", function () {
  clearDate();
  updateDisplay();
});
//función para el funcionamiento de los botones números
buttonNumber.forEach(function (boton) {
  boton.addEventListener("click", function () {
    addNumber(boton.innerText);
  });
});
//función para el funcionamiento de los botones para realizar operaciones
buttonOperation.forEach(function (btn) {
  btn.addEventListener("click", function () {
    selectOperation(btn.innerText);
  });
});

//función que evalua  las operaciones
function selectOperation(op) {
  if (operationActual === "") return;
  if (operationBefore !== "") {
    calcular();
  }
  operation = op.toString();
  operationBefore = operationActual;
  operationActual = "";
}

//función calcular
function calcular() {
  let calculo;
  const anterior = parseFloat(operationBefore);
  const actual = parseFloat(operationActual);
  if (isNaN(anterior) || isNaN(actual)) {
    return;
  } else {
    switch (operation) {
      case "+":
        calculo = anterior + actual;
        break;
      case "-":
        calculo = anterior - actual;
        break;
      case "X":
        calculo = anterior * actual;
        break;
      case "/":
        calculo = anterior / actual;
        break;
      default:
        return;
    }
  }
  operationActual = calculo;
  operationEqual = undefined;
  operationBefore = "";
}

//función que permite que los números se vayan poniendo en pantalla
//toString permite que se sumen como cadenas de texto

addNumber = (num) => {
  operationActual = operationActual.toString() + num.toString();
  updateDisplay();
};

//función que permite borrar la pantalla
clearDate = () => {
  operationActual = "";
  operationBefore = "";
  operationEqual = undefined;
};

//función que permite actualizar la pantalla
updateDisplay = () => {
  result.value = operationActual;
};

//función que borra la pantalla cada vez que se refresca
clearDate();
