/*
0     1     2     3     4     5     6     7     8     9  
....  ****  ****  ....  ....  *...  *..*  .*..  .**.  ****
....  ....  ....  ****  ****  *...  *..*  .*..  .**.  ****
....  ....  ....  ....  ****  *...  *..*  .*..  .**.  ****
....  ....  ****  ....  ....  *...  *..*  .*..  .**.  ****
*/

let input = [
    [
        [ '****', '****' ],
        [ '****', '....' ],
        [ '****', '....' ],
        [ '****', '****' ],
    ],
    [
        [ '....' ],
        [ '****' ],
        [ '****' ],
        [ '....' ],
    ]
]

function getAncientNumbers(input){
    
    let zero = ['....','....','....','....'];
    let one = ['****','....','....','....'];
    let two = ['****','....','....','****'];
    let three = ['....','....','****','....']; 
    let four = ['....','****','****','....'];
    let five = ['*...','*...','*...','*...'];
    let six = ['*..*','*..*','*..*','*..*'];
    let seven = ['.*..','.*..','.*..','.*..'];
    let eight = ['.**.','.**.','.**.','.**.'];
    let nine = ["****","****","****","****"];

    let nums = [
        zero,
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine    
    ]

    let numsArr = [];
    let orderedArr = [];

    for(i = 0; i < input.length; i++){
        for(j = 0; j < input[i].length; j++){
            numsArr.push(input[i][j]);
        }
        for (var k = 0; k < numsArr[0].length; k++) {
            for (var l = 0; l < numsArr.length; l++) {
                orderedArr.push(numsArr[l][k]);
            }
        }
    }
    
    return numsArr;
}

console.log(getAncientNumbers(input));