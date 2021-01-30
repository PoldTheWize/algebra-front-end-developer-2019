var names = ['John', 'Jane', 'Bob',, 'Mike'];

//1
names.forEach(function(value){
    console.log(value);
});

//2
names.push("Leopold"); 

//3
names.forEach(function(value){
    if(value == "Jane"){
        break;
    }else{
        continue;
    }
});

//4
names = names.filter(function(item){
    return item !== undifined;
});