var change = 0;
var moneyInserted = 0;

var msg = "";

var sodas = ["Coke", "Sprite", "Lemon", "Stoney"];
const price = 1.3;

var messageEl = document.getElementById("message") 

var totalPaid = 0;

//setting prices for drinks
const currency_one = 0.50;
const currency_five = 1;
const currency_nickel = 2;
const currency_dime = 5;

//Adding the total amount
function getTotal(){
    var currency_ones = Number(document.getElementById("R0.50").value);
    var currency_fives = Number(document.getElementById("R1.00").value);
    var currency_nickels = Number(document.getElementById("R2.00").value);
    var currency_dimes = Number(document.getElementById("R5.00").value);
    

    if (currency_ones > 0) {
        currency_ones = currency_ones * currency_one;
    }

    if (currency_fives > 0) {
        currency_fives = currency_fives * currency_five;
    }

    if (currency_nickels > 0) {
        currency_nickels = currency_nickels * currency_nickel;
    }

    if (currency_dimes > 0) {
        currency_dimes = currency_dimes * currency_dime;
    }

   

    totalPaid = currency_ones + currency_fives + currency_nickels + currency_dimes; 

    return totalPaid.toFixed(2);
}

//Displaying the amount inseterted
function tally(){
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearTally(){
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm(){
    document.getElementById("R0.50").value = 0;
    document.getElementById("R1.00").value = 0;
    document.getElementById("R2.00").value = 0;
    document.getElementById("R5.00").value = 0;
    
}
//Clear the entire App
function cancel(){
    getTotal();

    if(totalPaid > 0){
        msg = "Transaction cancelled. R" + totalPaid.toFixed(2) + " has been returned.";

        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }else if(totalPaid == 0){
        msg = "Insert Money First >> Select a Drink."

        messageEl.innerHTML = msg;
    }  
}
//Calculating change
function calculateChange(){
    var tempChange = 0;

    if (getTotal() !=0){
        return (tempChange = (getTotal() - price).toFixed(2));
    }

    return tempChange.toFixed(2);
}
//Displaying message when drinks released
function dispenseSoda(soda){
  messageEl.innerHTML = "";
  change = 0;

  var selectSoda = sodas[soda];

  change = calculateChange();

  if (change < 0){
      msg = "You did not pay enough. R" + totalPaid.toFixed(2) + " has been returned to the coin return.";
       
      totalPaid = 0;
      change = 0;
      clearForm();
      clearTally();

      messageEl.innerHTML = msg;
  }else if(change > 0){
      msg = selectSoda + " has been dispensed. R" + change + " has been returned to the coin return.";

      totalPaid = 0;
      change = 0;
      clearForm();
      clearTally();

      messageEl.innerHTML = msg;
  }else if(totalPaid == 0){
      msg = "Please pay before selecting a Drink";
      messageEl.innerHTML = msg;
  }else if(change == 0){
      msg = selectSoda + " has been dispensed.";

      totalPaid = 0;
      change = 0;
      clearForm();
      clearTally();

      messageEl.innerHTML = msg;
  }
}













