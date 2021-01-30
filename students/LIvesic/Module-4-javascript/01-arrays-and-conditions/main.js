let from  = prompt("from");
let to = prompt ("to");

function countPrimeNumbers(from, to){

  let num = 0;
  
  for(i = from; i <= to; i++){

    let signal = false;

    for(j = 2; j <= i/2; j++){
      if(i%j == 0){
        signal = true;
      }
    }

    if(signal == false){
      num++;
    }
  }
  return num;
}

document.write(countPrimeNumbers(from, to));
