var prices = [33, 26, 99, 120, 12, 45];
var sum = 0

for (let i=0; i< 6;i++){
  sum= sum + prices [i];
}
console.log("the sum:",sum);

for (let i = 99; i >= 1; i--) {
  if (i !== 1) {
    console.log(i + ' crows on the wall. ' + i + ' crows. ' + ' 1 fell down and become a wight. ' + (i - 1) + ' crows on the wall. ');
  }
    else {
    console.log ('1 single crow. It fell down and became a wignt. There is no one left to defend Westeros now. ');
}
}

// let j = 99;
//
// while (j > 0) {
//   if (j > 2) {
//     console.log(j + " crows on the wall. " + j + " crows.");
//     console.log("1 fell down and became a wight.");
//     console.log(j-1 + " crows on the wall");
//     j--;
//   }else if (j === 2){
//     console.log(j + " crows on the wall. " + j + " crows.");
//     console.log("1 fell down and became a wight.");
//     console.log(j-1 + " crow on the wall");
//     j--;
//   }else {
//     console.log("1 crow on the wall. 1 single crow.");
//     console.log("It fell down and became a wight.");
//     console.log("There's no one left to defend Westeros now.");
//     j--;
//   }
// }
//
