import { getLocalStorage } from "./functions";
import { ShoppingCartItem } from "./models/ShoppingCartItem";

function createHTMLConfirmationpage() {
  let cart: ShoppingCartItem[] = getLocalStorage();
  let totalSum: number = 0;

  //Creates HTML elements
  let confirmationContainer = document.getElementById(
    "flexContainerConfirmation"
  );
  let confirmationHeading = document.createElement("h1") as HTMLHeadingElement;
  let confirmationText = document.createElement("p") as HTMLParagraphElement;

  //Adds classes to HTML elements

  confirmationHeading.classList.add("confirmation__header");
  confirmationText.classList.add("confirmation__text");

  for (let i = 0; i < cart.length; i++) {
    totalSum += cart[i].quantity * cart[i].cartItem.price;
  }

  confirmationHeading.innerText = "Tack för ditt köp!";
  confirmationText.innerText =
    "Din order på " +
    totalSum.toString() +
    " kr är skickad och betalningen har genomförts.";

  //Appends HTML elements
  confirmationContainer?.appendChild(confirmationHeading);
  confirmationContainer?.appendChild(confirmationText);
}

createHTMLConfirmationpage();

localStorage.clear();


