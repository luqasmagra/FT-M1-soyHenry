'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array;
  }
  let pivot = array[0]
  let left = [];
  let right = [];
  for(let i = 1; i < array.length; i++){
    if(array[i] === pivot){
      left.push(array[i]);
    }
    if(array[i] > pivot){
      right.push(array[i])
    }
    if(array[i] < pivot){
      left.push(array[i])
    }

  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array;
  }
  let mid = parseInt(array.length / 2);
  let left = array.slice(0, mid).mergeSort();
  let right = array.slice(mid).mergeSort();

  let newArray = [];
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
