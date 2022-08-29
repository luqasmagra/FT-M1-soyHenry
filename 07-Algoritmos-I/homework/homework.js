'use strict'
// No cambies los nombres de las funciones.

function factorear(num, arr) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(!arr){
    var arr = [];
  }
  if(num % 2 === 0){
    arr.push(2);
    num = num / 2;
    factorear(num, arr);
  }
  if(num % 3 === 0){
    arr.push(3);
    num = num / 2;
    factorear(num, arr);
  }
  if(num % 5 === 0){
    arr.push(5);
    num = num / 2;
    factorear(num, arr);
  }
  if(num % 7 === 0){
    arr.push(7);
    num = num / 2;
    factorear(num, arr);
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // PARA NO HACER TODO EL RECORRIDO SIN NECESIDAD !!!
  let swap = true; // variable bandera, centinela
  while(swap){ // mientras swap sea true
    swap = false;  // inicio del recorrido ( no hice cambios )
    for(let i = 0; i < array.length - 1; i++)
    if(array[i] > array[i + 1]){
      var temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swap = true;  // hice un cambio por tanto vuelvo a entrar al while
    }
  }
  return array;

  // HAGO EL RECORRIDO INCLUSO EN EL ULTIMO CASO DE QUE TODOS ESTEN ORDENADOS !!!
  // for(let j = 0; j < array.length - 1; j++) {
  //   for(let i = 0; i < array.length - 1; i++) {
  //       if(array[i] > array[i + 1]) {
  //           var temp = array[i];
  //           array[i] = array[i + 1];
  //           array[i + 1] = temp;
  //       }
  //   }
  // }      
  // return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let index = 0
  for (let i = 0; i < array.length; i++) {
    index = i;
    for (let j = i + 1; j >= 0; j--) {
      if (array[j] >= array[i]) {
        break;
      }
      if (array[j] < array[i]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i--;
      }
    }
    i = index;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++){
    let j = i - 1;
    let aux = array[i];
    while(j >= 0 && array[j] > aux){
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  } 
  return array;
  // for (let i = 0; i < array.length; i++) {
  //   // encontrar el indice del mas chico
  //   let small = i;
  //   for (let j = i; j <= array.length - 1; j++) {
  //     if (array[j] < array[small]) { 
  //       small = j;
  //     }
  //   }
  //   // si no es mas chico
  //   if (array[i] > array[small]) {
  //     let temp = array[i];
  //     array[i] = array[small];
  //     array[small] = temp;
  //   }
  // }

  // return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
