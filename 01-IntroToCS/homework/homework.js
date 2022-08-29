'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split('').reverse();
  var sum = 0;
  for(var i = 0; i < array.length; i++){                 
    sum = sum + (array[i] * Math.pow(2, i));                   
  }
  return sum;
}
console.log(BinarioADecimal("10101"));

function DecimalABinario(num) {
  // tu codigo aca
  var array = [];
  while(num !== 0){
    array.unshift(num % 2);
    var num = Math.floor(num / 2);
  }
  return array.join('');
}
console.log(DecimalABinario(125))



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}