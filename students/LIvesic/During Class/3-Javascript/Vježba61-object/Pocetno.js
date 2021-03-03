let speed = 5;
var auto = {
    model: 'citroen',
    year: '2015',
    speed: 0,
    driver: null,
    faster(speed = Number){
        this.speed += speed;
        this.speed += 1;
    },
    break(){
        this.speed = 0;
    },
    slower(){
        this.speed -= 1;
    },
    start(){
        let sound = "brrrrrrrrrmm!";
        console.log(sound);
        return sound;
    },
    enterCar(){
        this.driver = 'You are driving';
    },
    showSpeed(){
        console.log(this.speed);
    }
};

//
/*auto.enterCar();
auto.start();
auto.faster();
auto.faster();
auto.break();
*/
auto.faster(34);
auto.showSpeed();
console.log("ff");
//
/*
for(var key in auto){
    if(auto.propertyIsEnumerable(key)) {
        console.log(key, ';', auto[key]);
    }
}
*/
//
/*
console.log("im driving " + auto.model + " it goes " + auto.start())
*/
//
let json = JSON.stringify(auto);