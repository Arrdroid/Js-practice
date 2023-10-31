document.body.style.backgroundColor = "black";

/* Practice Chapter 1 Page 26 */
// const bankAccount = 379;
let bankAccount = parseFloat(prompt("Set your bank account balance!"));
const phonePrice = 85;
const phoneAccessory = 12.50;
const taxRate = 0.12;
let totalPrice = 0;

function addPhone() {
  totalPrice += phonePrice;
  console.log("Added phone. Total Price is: $" + totalPrice.toFixed(2));
}

function addAccessory() {
  totalPrice += phoneAccessory;
  console.log("Added accessory. Total Price is: $" + totalPrice.toFixed(2));
}

function payTaxes() {
  totalPrice = totalPrice + (totalPrice * taxRate);
  console.log("After taxes were paid: $" + totalPrice.toFixed(2));
}

function updateAndShowBankBalance() {
  bankAccount -= totalPrice;
  console.log("Your bank account balance is: $" + (bankAccount.toFixed(2)));
}

  while (totalPrice < bankAccount) {

    if (bankAccount < phonePrice) {
      console.log("Not enough money to purchase a phone!");
      break;
    }

    if (((totalPrice + phonePrice) * taxRate) + (totalPrice + phonePrice) <= bankAccount) {
      addPhone();
      payTaxes();
      updateAndShowBankBalance();
    } if (((totalPrice + phoneAccessory) * taxRate) + totalPrice + phoneAccessory <= bankAccount) {
      addAccessory();
      payTaxes();
      updateAndShowBankBalance();
    } 
      
      if (totalPrice > bankAccount) {
      console.log("You can not afford this purchase! You have to pay: " + (totalPrice.toFixed(2)));
      break;
      }
  };

  


    