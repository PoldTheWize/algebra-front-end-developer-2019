let num = 3;

while (num <= 20){
  if(num%9!=0){
    console.log(num);
    num++;
  }
  if(num%9==0){
    num++;
  };
}

//----------------------------
// 4 * 4

var varOne = 0;
for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
        varOne++;
    }
}

console.log(varOne);
