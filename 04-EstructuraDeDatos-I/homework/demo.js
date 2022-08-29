// 5! => 5 * 4!
// 4! => 4 * 3!
// 3! => 3 * 2!
// 2! => 2 * 1!
// 1! => 1 * 1
// 0! => 1

function factorial(n) {
  if (n === 1 || n === 0) return 1;
  else if (n < 0) return 0;
  return n * factorial(n - 1);
}

function secuencia(n) {
  if (n > 10) return 0;
  else {
    console.log(n);
    return secuencia(n + 1);
  }
}

console.log(secuencia(0));

//******************************************************** */

// const persona = {
//   nombre: "Jorge",
//   apellido: "Vega",
//   familia: {
//     padre: {
//       nombre: "Jorge",
//       apellido: "Vega",
//       familia: {
//         padre: "Jorge Vega",
//         madre: "Erica Gomez",
//       },
//     },
//     madre: "Erica Gomez",
//   },
// };

const miArray = [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 1, 5, 10];

console.log(miArray);
console.log(miArray[5]);

const miSet = new Set(miArray);
console.log(miSet);

console.log(miSet.delete(5));
console.log(miSet);
miSet.add("Hola");
console.log(miSet);
