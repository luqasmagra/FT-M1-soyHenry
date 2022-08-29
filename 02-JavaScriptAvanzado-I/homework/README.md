
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undef
console.log(baz); // baz not defined
foo(); // nada
function foo() { 
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco <VARIABLES LET SOLO EXISTEN DENTRO DE LAS LLAVES, ES DECIR QUE TIENEN ALCANCE DENTRO DE SUS LLAVES>
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript /////// DE IZQUIERA A DERECHA !!!!!!!!!!
6 / "3" // 2 <interpreta al "3"como numero por el ooperador de division>
"2" * "3" // 6 <igual que arriba>
4 + 5 + "px" // 9px < 4 + 5 = 9, 9 + px = "9px">
"$" + 4 + 5 // $4 + 5 => $45
"4" - 2 // 2
"4px" - 2 // NaN <not a number>
7 / 0 // infinito
{}[0] // undefined <porque pregunta por la propiedad [0] de un array>
parseInt("09") // 9 <string a numero>
5 && 2 // 2 <por la forma que se lee (izq a derecha)> VERDADERO Y VERDADERO 
2 && 5 // 5 <              ""                       > VERDADERO Y VERDADERO
5 || 0 // 5 VERDADERO O FALSO
0 || 5 // 5 FALSO O VERDADERO 
[3]+[3]-[10] // 23 < [3] + [3] = 33 - [10] = 23> concatena con el + y resta en operacion matematica con el -
3>2>1 // false < 3 > 2=(true) / true > 1 = (false) >
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio de la rosa

var test = obj.prop.getFullname; 

console.log(test()); // juan perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);

   // orden: CS(1), CS(4), CS(3), CS(2);
}

printing();
```
