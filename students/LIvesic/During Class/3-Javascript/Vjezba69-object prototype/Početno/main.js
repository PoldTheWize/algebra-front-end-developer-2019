function Dog(name){
    this.name = name || 'Kal kal';
    this.bark = "Wof";
}

Dog.prototype.getName = function(){
    return this.name;
}

Dog.prototype.myBark = function(){
    var barksArr = ['Wau', 'mau', 'vau vau'];
    var barksRandom = [];
    var barksString;
    for(i = 1; i <= 3; i++){
        barksRandom.push(barksArr[Math.floor(Math.random() * 3)]);
        barksString = barksRandom.join(' ');
    }
    return barksString;
}

Dog.prototype.mastersBark = function(){
    var result = this.bark;
    var count = Math.random() * 3;

    for(i = 0; i < count; i++){
        result += " " + this.bark;
    }
    return result;
}

var dog = new Dog();

console.log(dog.myBark());
console.log(dog.mastersBark());
console.log(dog.mastersBark());

