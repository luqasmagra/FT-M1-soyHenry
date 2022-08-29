"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique 
    por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
  // if(value === this.value){ // caso de existir value previamente
  //   return true;
  // }
  if(value > this.value){ // mayores hacia la derecha
    if(this.right){ // existe derecha?
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } else if(value < this.value){ // menores hacia la izquierda
    if(this.left){ // existe izquierda ?
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
      }
    }
  }
//
BinarySearchTree.prototype.size = function(){
  // if(this.left && this.right){
  //   return 1 + this.left.size() + this.right.size();
  // }
  // else if(this.left){
  //   return 1 + this.left.size()
  // }                                                         
  // else if(this.right){
  //   return 1 + this.right.size();
  // }
  // return 1;
  let count = 0;
  count++;           // primero se suma a si mismo
  if(this.left){
    count += this.left.size(); // sumale a mi contador todo lo que tnego a mi izquierda
  }
  if(this.right){
    count+= this.right.size(); // todo lo que tengo a mi izquierda
  }
  return count;
}
//
BinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true;
  }
  if(value < this.value && this.left){ // si el value es menor y tengo a la izq
    if(this.left.contains(value)){
      return true;
    } // si la ejecucion 
  }
  if(value > this.value && this.right){ // si es mayor y tengo a la derecha
    if(this.right.contains(value)){
      return true;
    }
  }
  return false;
}
//
BinarySearchTree.prototype.depthFirstForEach = function(cb, type){
  switch(type){
    case "pre-order":
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, type);
      if(this.right) this.right.depthFirstForEach(cb, type);
      break;
    case "post-order":
      if(this.left) this.left.depthFirstForEach(cb, type);
      if(this.right) this.right.depthFirstForEach(cb, type);
      cb(this.value);
      break;
    default:
      if(this.left) this.left.depthFirstForEach(cb, type);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, type);
      break;
  }
}

//
BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
  if(!arr){ // si no tengo ningun arr lo declaro vacio, asi en la recursividad no entre aqui por lo que no se reinicia el arr
    var arr = [];
  }
  cb(this.value);
  if(this.left){
    arr.push(this.left); /// ir guardando en array a sus hijos apenas termino de procesarme el mismo
  }
  if(this.right){
    arr.push(this.right); /// ir guardando en array a sus hijos apenas termino de procesarme el mismo
  }
  if(arr.length > 0){
    arr.shift().breadthFirstForEach(cb, arr); // saco el primer elemento ejecutandolo al instante, pasandole el arr con sus hijos 
  }
}
//

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
