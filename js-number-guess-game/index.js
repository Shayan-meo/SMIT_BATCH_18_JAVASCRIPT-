var i = 0;
while(i < 100){
    i++;
    var ramdamNum = Math.floor(Math.random() * 5 ) +1;
    console.log(ramdamNum);    
}

var randam = +prompt("Guess a number between 1 and 10: ")
var  result = false;
if(randam < ramdamNum){
      alert ("Too low! The number was " + ramdamNum);
      
}else if (randam > ramdamNum){ 
      alert("Too high! The number was " + ramdamNum);
      
}else {
      alert("Congratulations! You guessed the number " + ramdamNum);
       result = true; 
}
  console.log("Game Result:", result);

var ok = confirm("Do you want to play again?");
console.log(ok);

if(ok){
    window.location.reload();
}


// var ramdamNum = Math.floor(Math.random() * 5) + 1;
// console.log("Random Number:", ramdamNum);

// var randam = +prompt("Guess a number between 1 and 5:");

// var isWin = false;

// if (randam < ramdamNum) {
//     alert("Too low! The number was " + ramdamNum);
// } 
// else if (randam > ramdamNum) { 
//     alert("Too high! The number was " + ramdamNum);
// } 
// else {
//     alert("Congratulations! You guessed the number " + ramdamNum);
//     isWin = true;
// }

// console.log("Game Result:", isWin);

// var ok = confirm("Do you want to play again?");
// console.log("Play Again:", ok);

// if (ok) {
//     window.location.reload();
// }
