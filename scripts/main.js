/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {

let handA=[];
  let handTotalA = 0
  let handTotalC = 0
  let handTotalH = 0
  let handTotalF = 0
  let output = 0;



  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "A") {
      handA.push(hand[i]);
    }else if  (hand[i]   === "K" || hand[i] === "J" || hand[i] === "Q") {
     hand[i] = 10;
        handTotalH + hand[i];


  } else  {
    handTotalC += (parseInt(hand[i], 10));
  }
}

handTotalF = (handTotalH + handTotalA);

for (let q = 0; q < handA.length; q++) {
  if (handTotalF >= 11) {
    handA[q] = 11;
}else{
    handTotalA += handA[q];
  }
}
output = (handTotalA + handTotalF)


console.log(output);
return (output);
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
