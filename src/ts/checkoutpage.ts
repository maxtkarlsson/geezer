import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { getLocalStorage } from "./functions";


let container = document.querySelector(".flexContainer") as HTMLDivElement;


function createHTMLPurchasedItems() {
  let cart: ShoppingCartItem[] = getLocalStorage();
  for (let i = 0; i < cart.length; i++) {
    //Creates the HTML elements we need:
    let itemContainer = document.createElement("div") as HTMLDivElement;
    let itemImg = document.createElement("img") as HTMLImageElement;
    let itemTitle = document.createElement("h1") as HTMLHeadElement;
    let itemPrice = document.createElement("p") as HTMLParagraphElement;
    let itemQuantity = document.createElement("p") as HTMLParagraphElement;

    //Adds classes to the elements:
    itemContainer.classList.add("itemCardCheckout--small");
    itemImg.classList.add("itemCardCheckout__image--small");
    itemTitle.classList.add("itemCardCheckout__title--small");
    itemPrice.classList.add("itemCardCheckout__price--small");
    itemQuantity.classList.add("itemCardCheckout__quantity--small");

    //Adds content to the elements
    itemImg.src = cart[i].cartItem.imageUrl;
    itemImg.alt = "";
    itemTitle.innerText = cart[i].cartItem.title;
    itemPrice.innerText = cart[i].cartItem.price.toString() + " kr";
    itemQuantity.innerText = "Antal: " + cart[i].quantity.toString();

    //Adds elements to page
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemQuantity);

    container.appendChild(itemContainer);
    
  }

  sumCart(); 
}

export function sumCart() {
  let totalSum: number = 0;
  let cart: ShoppingCartItem[] = getLocalStorage();
  

  let cartSum = document.createElement("p") as HTMLParagraphElement;
  cartSum.classList.add("cartSum");
  container.appendChild(cartSum);
  for (let i = 0; i < cart.length; i++) {
    totalSum += cart[i].cartItem.price * cart[i].quantity;
    cartSum.innerHTML = "Totalt: " + totalSum.toString() + "kr";
    container.appendChild(cartSum);
    localStorage.setItem("cart", JSON.stringify(cart) || "[]");
    cart;
  }
  
}

createHTMLPurchasedItems();


let formContainer = document.createElement("div") as HTMLDivElement;

let form = document.createElement("form") as HTMLFormElement;
let firstnameInput = document.createElement("input") as HTMLInputElement;
firstnameInput.setAttribute("type", "text");
firstnameInput.setAttribute("placeholder", "Förnamn");
let lastnameInput = document.createElement("input") as HTMLInputElement;
lastnameInput.setAttribute("type", "text");
lastnameInput.setAttribute("placeholder", "Efternamn");
let phoneInput = document.createElement("input") as HTMLInputElement;
phoneInput.setAttribute("type", "number");
phoneInput.setAttribute("placeholder", "Telefonnummer");

let paymentContainer = document.createElement("div") as HTMLDivElement;
let cardRadio = document.createElement("input") as HTMLInputElement;
cardRadio.setAttribute("type", "radio");
cardRadio.setAttribute("name", "payment");
let payWithCard = document.createElement("p") as HTMLParagraphElement;
payWithCard.innerHTML = "Betala med kort";
let cardInput = document.createElement("input") as HTMLInputElement;
cardInput.setAttribute("type", "number");
cardInput.setAttribute("placeholder", "Kortnummer");
payWithCard.appendChild(cardInput);
let swishRadio = document.createElement("input") as HTMLInputElement;
let payWithSwish = document.createElement("p") as HTMLParagraphElement;
payWithSwish.innerHTML = "Betala med swish";
swishRadio.setAttribute("type", "radio");
swishRadio.setAttribute("name", "payment");
let swishInput = document.createElement("input") as HTMLInputElement;
swishInput.setAttribute("type", "number");
swishInput.setAttribute("placeholder", "Telefonnummer");
payWithSwish.appendChild(swishInput);
let payBtn = document.createElement("button") as HTMLButtonElement;
payBtn.innerHTML = "Betala";

//Adds classes to elements
formContainer.classList.add("formContainer");
form.classList.add("formContainer__form");
firstnameInput.classList.add("formContainer__firstname");
lastnameInput.classList.add("formContainer__lastname");
phoneInput.classList.add("formContainer__phone");
paymentContainer.classList.add("formContainer__paymentContainer");
payBtn.classList.add("formContainer__payBtn");
cardInput.classList.add("input__card--hidden");
swishInput.classList.add("input__swish--hidden");


form.appendChild(firstnameInput);
form.appendChild(lastnameInput);
form.appendChild(phoneInput);
form.appendChild(paymentContainer);
paymentContainer.appendChild(cardRadio);
paymentContainer.appendChild(payWithCard);
paymentContainer.appendChild(swishRadio);
paymentContainer.appendChild(payWithSwish);

container.appendChild(form);
formContainer.appendChild(payBtn);
container.appendChild(formContainer);

payBtn.addEventListener("click", () => {
  window.location.replace("/pages/confirmationpage.html");
  
});

function createHTMLForm() {
  cardRadio.addEventListener("click", () => {
    if ((cardRadio.checked = true)) {
      cardInput.classList.remove("input__card--hidden");
      cardInput.classList.add("input__card--show");
      swishInput.classList.add("input__swish--hidden");
      swishInput.classList.remove("input__swish--show");
    }
  });

  swishRadio.addEventListener("click", () => {
    if ((swishInput.checked = true)) {
      cardInput.classList.remove("input__card--show");
      cardInput.classList.add("input__card--hidden");
      swishInput.classList.remove("input__swish--hidden");
      swishInput.classList.add("input__swish--show");
    }
  });
}

createHTMLForm();
