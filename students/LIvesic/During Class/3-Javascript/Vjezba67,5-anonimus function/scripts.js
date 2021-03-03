// 1.
var x = "John Doe";
var name = "Leo";

function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}

var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

console.log(y);
console.log(z);
