const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const buttonSave = document.querySelector("#button-save");
const buttonCancel = document.querySelector("#button-cancel");
const productList = document.querySelector("#product-list");
const totalOutput = document.querySelector("#total");

total = 0;

const createNewProduct = (name, price) => {
  const ionCard = document.createElement('ion-card');
  const newProductItem = document.createElement("ion-card-content");
  ionCard.appendChild(newProductItem)
  newProductItem.textContent = name + ": $" + price;
  productList.appendChild(ionCard);
};

const clearInputs = () => {
  productName.value = "";
  productPrice.value = "";
};

const presentAlert = () => {
  const alert = document.createElement("ion-alert");
  alert.header = "Invalid Data";
  alert.subHeader = "Please verify your input";
  alert.message = "Incorrect Name or Price";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  return alert.present();
};

const isEmpty = str => !str.trim().length;

buttonCancel.addEventListener("click", clearInputs);

buttonSave.addEventListener("click", async () => {
  const name = productName.value;
  const price = productPrice.value;

  if (isEmpty(name) || price <= 0 || isEmpty(price)) {
    presentAlert();
    return;
  }

  createNewProduct(name, price);
  total += +price;
  totalOutput.textContent = total;
  clearInputs();
});
