var auto = {
    model: 'citroen',
    year: '2015',
    speed: 0,
    driver: null,
    faster(){
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
};

//
auto.enterCar();
auto.start();
auto.faster();
auto.faster();
auto.break();

//
for(var key in auto){
    if(auto.propertyIsEnumerable(key)) {
        console.log(key, ';', auto[key]);
    }
}

//
console.log("im driving " + auto.model + " it goes " + auto.start())

//
let json = JSON.stringify(auto);