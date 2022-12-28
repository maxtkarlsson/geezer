import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { Item } from "./models/item";


export let cart: ShoppingCartItem[] = []; //Samla sådana object i den listan
export let cartFromLS: ShoppingCartItem[] = [];


export function addToCart(product: Item) {
    //Skapar ett shoppingCartItem med produkten vi klickat på.
    let cartItem: ShoppingCartItem = new ShoppingCartItem(1, product);
    //Pushar till carten och sätter den i LS
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  
  }

  export function getLocalStorage() {
    cartFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
    //Map
    cart = cartFromLS.map((item) => {
        return new ShoppingCartItem(item.quantity, item.cartItem);
    });
    console.log(cart);
  
  }
  
  export function createHTMLCartpage(cart:ShoppingCartItem[]){
    let cartContainer = document.querySelector(".offcanvas-body")as HTMLDivElement;
    cartContainer.innerHTML="";
    for(let i=0;i<cart.length;i++){
      //Creates the HTML elements we need:
      let itemContainer = document.createElement("div") as HTMLDivElement;
      let itemImg = document.createElement("img") as HTMLImageElement;
      let itemTitle = document.createElement("h1") as HTMLHeadElement;
      let itemPrice = document.createElement("p") as HTMLParagraphElement;
      let itemQuantity = document.createElement("p") as HTMLParagraphElement;
  
      //Adds classes to the elements:
      itemContainer.classList.add("itemCard--small");
      itemImg.classList.add("itemCard__image--small");
      itemTitle.classList.add("itemCard__title--small");
      itemPrice.classList.add("itemCard__price--small");
      itemQuantity.classList.add("itemCard__quantity--small");
  
        //Adds content to the elements
        itemImg.src = cart[i].cartItem.imageUrl;
        itemImg.alt = "";
        itemTitle.innerText = cart[i].cartItem.title;
        itemPrice.innerText = cart[i].cartItem.price.toString() + " kr";
        itemQuantity.innerText = "Antal: " + cart[i].cartItem.quantity.toString();
  
        //Adds elements to page
        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemQuantity);
        cartContainer.appendChild(itemContainer);
  
    }
  }
  
  