document.body.style.backgroundColor = "black";

/* Practice Chapter 1 Page 26 */

/* Write a program to calculate the total price of your phone pur‐
chase. You will keep purchasing phones (hint: loop!) until you
run out of money in your bank account. You'll also buy accesso‐
ries for each phone as long as your purchase amount is below
your mental spending threshold.
• After you've calculated your purchase amount, add in the tax,
then print out the calculated purchase amount, properly for‐
matted.
• Finally, check the amount against your bank account balance to
see if you can afford it or not.
• You should set up some constants for the 'tax rate,' 'phone
price,' 'accessory price,' and 'spending threshold,' as well as a
variable for your 'bank account balance'.
• You should define functions for calculating the tax and for for‐
matting the price with a '$' and rounding to two decimal
places.
• Bonus Challenge: Try to incorporate input into this program,
perhaps with the prompt(..) covered in 'Input' on page 6. You
may prompt the user for their bank account balance, for exam‐
ple. Have fun and be creative!
 */



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

  


    