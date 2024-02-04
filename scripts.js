const myButtom = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

async function converValues() {
  const valueInput = document.querySelector(".input-currency").value;
  const convertBrValue = document.querySelector(".brvalue"); //valor box 1
  const convertValue = document.querySelector(".dolarvalue"); // valor box 2
  const libraValue = 6.04;

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const dolarValue = data.USDBRL.high;
  const euroValue = data.EURBRL.high;

  if (currencySelect.value === "Dolar") {
    convertValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valueInput / dolarValue);
  }
  if (currencySelect.value === "Euro") {
    convertValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(valueInput / euroValue);
  }
  if (currencySelect.value === "Libra") {
    convertValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP",
    }).format(valueInput / libraValue);
  }

  convertBrValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valueInput);
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-dolar");
  const currencyImage = document.querySelector(".dolar-img");

  if (currencySelect.value === "Dolar") {
    currencyName.innerHTML = "US$ Dólar Americano";
    currencyImage.src = "./img/estados-unidos.png";
  }
  if (currencySelect.value === "Euro") {
    currencyName.innerHTML = "€ Euro";
    currencyImage.src = "./img/euro.png";
  }
  if (currencySelect.value === "Libra") {
    currencyName.innerHTML = "£ Libra";
    currencyImage.src = "./img/libra.png";
  }
  converValues();
}

myButtom.addEventListener("click", converValues);
currencySelect.addEventListener("change", changeCurrency);
