document.body.innerHTML = '<h1>Hello World!</h1>';

class Dog {
    constructor(){
        this.barkAudio = 'woof';
    }

    bark(){
        return this.barkAudio;
    }
}

const nero = new Dog();

console.log(nero.bark());