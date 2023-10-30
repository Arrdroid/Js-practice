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
}

function addAccessory() {
  totalPrice += phoneAccessory;
}

function payTaxes() {
  totalPrice = totalPrice + (totalPrice * taxRate);
}

while (totalPrice < bankAccount) {
  if (bankAccount < phonePrice) {
    console.log("Not enough money to purchase a phone!");
    break;
  }

  if (((totalPrice + phonePrice)* taxRate) + (totalPrice + phonePrice) <= bankAccount) {
    addPhone();
    console.log("Added phone. Total Price: $" + totalPrice.toFixed(2));
  } else if (((totalPrice + phoneAccessory)* taxRate) + totalPrice + phoneAccessory <= bankAccount) {
    addAccessory();
    console.log("Added accessory. Total Price: $" + totalPrice.toFixed(2));
  } else {
    payTaxes();
    console.log("After taxes were paid: $" + totalPrice.toFixed(2));
    break; // Exit the loop after taxes are paid
  }

  if (totalPrice > bankAccount) {
    console.log("You can not afford this purchase!");
    break;
  }
};

    