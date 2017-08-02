/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

// var hand = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

function ace(hand) {
  var aceHand = [];
  var noAce = [];

  for (let j = 0; j < hand.length; j++) {
    if (hand[j] === "A") {
      aceHand.push(hand[j]);
    } else {
      noAce.push(hand[j]);
    }
  }
  return noAce.concat(aceHand);
}


function handValue(hand) {
  var valueOfHand = 0;

  hand = ace(hand);
  for (let i = 0; i < hand.length; i++) {
    switch (hand[i]) {
      case "J":
      case "Q":
      case "K":
        valueOfHand += 10;
        break;
      case "A":
        if (valueOfHand + 11 > 21) {
          valueOfHand = valueOfHand += 1;
        } else {
          valueOfHand += 11;
        }
        break;
      default:
        valueOfHand += Number(hand[i]);
        break;
    }
  }
  return valueOfHand;
}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/