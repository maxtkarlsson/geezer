import { createHTMLCartpage } from "./functions";
import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { getLocalStorage } from "./functions";

let container = document.querySelector(".flexContainer") as HTMLDivElement;
//let container = document.getElementById("#checkoutContainer")as HTMLDivElement;



function createHTMLPurchasedItems() {
    let cart: ShoppingCartItem[] = getLocalStorage();
    for (let i = 0; i < cart.length; i++) {
      //Creates the HTML elements we need:
      let itemContainer = document.createElement("div") as HTMLDivElement;
      let itemImg = document.createElement("img") as HTMLImageElement;
      let itemTitle = document.createElement("h1") as HTMLHeadElement;
      let itemPrice = document.createElement("p") as HTMLParagraphElement;
      let itemQuantity = document.createElement("p") as HTMLParagraphElement;
  /*
      let purchaseBtn = document.createElement("button") as HTMLButtonElement; /////
      let cartBody = document.querySelector(".offcanvas-body") as HTMLDivElement;///////
  
  */
  
      //Adds classes to the elements:
      itemContainer.classList.add("itemCardCheckout--small");
      itemImg.classList.add("itemCardCheckout__image--small");
      itemTitle.classList.add("itemCardCheckout__title--small");
      itemPrice.classList.add("itemCardCheckout__price--small");
      itemQuantity.classList.add("itemCardCheckout__quantity--small");
      //purchaseBtn.classList.add("purchaseBtn"); //////
  
  
    
  
      //Adds content to the elements
      itemImg.src = cart[i].cartItem.imageUrl;
      itemImg.alt = "";
      itemTitle.innerText = cart[i].cartItem.title;
      itemPrice.innerText = cart[i].cartItem.price.toString() + " kr";
      itemQuantity.innerText = "Antal: " + cart[i].quantity.toString();
     // purchaseBtn.innerHTML = "Till betalning"; /////
  
      //Adds elements to page
      itemContainer.appendChild(itemImg);
      itemContainer.appendChild(itemTitle);
      itemContainer.appendChild(itemPrice);
      itemContainer.appendChild(itemQuantity);

      container.appendChild(itemContainer);
     // cartBody.appendChild(purchaseBtn); ///////
    }
    sumCart(); ///////////////////Ska denna verkligen vara här?? Tar inte ändringar om flera i quntity eller delete i cart
  }
  
  export function sumCart (){
    let totalSum:number = 0;
    let cart: ShoppingCartItem[] = getLocalStorage();
    console.log("sumcart has been run");
    
    let cartSum = document.createElement("p")as HTMLParagraphElement;
    let cartBody = document.querySelector(".offcanvas-body") as HTMLDivElement;
    for (let i=0;i<cart.length;i++){
      totalSum += cart[i].cartItem.price * cart[i].quantity;
      cartSum.innerHTML = "Totalt:" + totalSum.toString() + "kr";
      container.appendChild(cartSum);
      localStorage.setItem("cart", JSON.stringify(cart) || "[]");
      cart
      
    }
    //return sumCart;
    console.log(totalSum);
  }
  

createHTMLPurchasedItems();
  
  
  
  



//////////////////

let formContainer = document.createElement("div")as HTMLDivElement;

let form = document.createElement("form")as HTMLFormElement;
let firstnameInput = document.createElement("input")as HTMLInputElement;
firstnameInput.setAttribute("type", "text");
firstnameInput.setAttribute("placeholder", "Förnamn");
let lastnameInput = document.createElement("input")as HTMLInputElement;
lastnameInput.setAttribute("type", "text")
lastnameInput.setAttribute("placeholder", "Efternamn");
let phoneInput = document.createElement("input")as HTMLInputElement;
phoneInput.setAttribute("type", "number");
phoneInput.setAttribute("placeholder", "Telefonnummer");

let paymentContainer = document.createElement("div")as HTMLDivElement;
let cardRadio = document.createElement("input") as HTMLInputElement;
cardRadio.setAttribute("type", "radio");
let payWithCard = document.createElement("p") as HTMLParagraphElement;
payWithCard.innerHTML="Betala med kort";
let swishRadio = document.createElement("input") as HTMLInputElement;
let payWithSwish = document.createElement("p") as HTMLParagraphElement;
payWithSwish.innerHTML="Betala med swish";
swishRadio.setAttribute("type", "radio");

//let anchorConfirmationPage = document.createElement("anchor")as HTMLAnchorElement;
//anchorConfirmationPage.setAttribute("url", "/src/pages/confirmationpage.html");
let payBtn = document.createElement("button") as HTMLButtonElement;
payBtn.innerHTML="Betala";

//Adds classes to elements
formContainer.classList.add("formContainer");
form.classList.add("formContainer__form");
firstnameInput.classList.add("formContainer__firstname");
lastnameInput.classList.add("formContainer__lastname");
phoneInput.classList.add("formContainer__phone");
paymentContainer.classList.add("formContainer__paymentContainer");
payBtn.classList.add("formContainer__payBtn");

//anchorConfirmationPage.appendChild(payBtn);
form.appendChild(firstnameInput);
form.appendChild(lastnameInput);
form.appendChild(phoneInput);
form.appendChild(paymentContainer);
paymentContainer.appendChild(cardRadio);
paymentContainer.appendChild(payWithCard);
paymentContainer.appendChild(swishRadio)
paymentContainer.appendChild(payWithSwish);
//form.appendChild(payWithSwish)

formContainer.appendChild(form);
//document.body.appendChild(anchorConfirmationPage);
formContainer.appendChild(payBtn);
//document.body.appendChild(formContainer);
container.appendChild(formContainer)

payBtn.addEventListener("click", ()=>{
    window.location.replace("/src/pages/confirmationpage.html");
})




