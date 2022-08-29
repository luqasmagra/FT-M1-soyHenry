String.prototype.repeatify = function(x){
    if(x > 0){
        return this.repeat(x);
    }
    return "";
} 
console.log('hola'.repeatify(3));
console.log('hola'.repeatify(0));


String.prototype.repeatify = function(x){
    var str = "" + this;
    var sumador = "";
    if(n <= 0) return "";
    for(let i = 0; i <= n; i++){
        sumador = sumador + str;
    }
    return sumador;
}

/////////////////////////////////

Shape = {
    type: this.type,
    getType: function(){
        return this.type;
    }
}

function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "Triangle";
}

Triangle.prototype = Shape;
Triangle.constructor = Triangle;
Triangle.prototype.getPerimeter = function (){
    return this.a + this.b + this.c;
}



var t = new Triangle(1, 2, 3);
t instanceof Triangle
// true
Shape.prototype.isPrototypeOf(t);
// true
t.getPerimeter();
// 6
t.getType();
// "Triangle"


