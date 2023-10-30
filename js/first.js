document.body.style.backgroundColor = "black";

/* Practice Chapter 1 Page 26 */
const bankAccount = 379;
const phonePrice = 85;
const phoneAccesory = 12.50;
const taxRate = 0.12;
let totalPrice = 0;

function addPhone() {
  return totalPrice += phonePrice;
};
function addAccessory() {
  return totalPrice += phoneAccesory;
};
function payTaxes() {
  return totalPrice = totalPrice + (totalPrice * taxRate);
}


while (bankAccount > 0) {
  if (totalPrice < bankAccount) {
    addPhone();
    console.log("Phone price: " + totalPrice);
  }

  if (totalPrice < bankAccount) {
    addAccessory();
    console.log("Accessory price added " + totalPrice);
  }

  /* Pay the Taxes of straight to jail xD: */
  payTaxes()
  console.log("After taxes were payed: "+ "$" + (totalPrice.toFixed(2)));

}