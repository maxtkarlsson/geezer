//import { createHTMLCartpage } from "./cartpage";
import { addToCart, getLocalStorage } from "./functions";
import { Item } from "./models/item";
import { products } from "./models/itemArray";
import { cart } from "./functions";
import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { createHTMLCartpage } from "./cartpage";

//import { createHTMLCartpage } from "./cartpage"; BUG


//let cart: ShoppingCartItem[] = []; //Samla sådana object i den listan

//let cartFromLS: ShoppingCartItem[] = [];
//let cartItemsLS: ShoppingCartItem[] = [];


//let cart = new ShoppingCartItem (0, []);

getLocalStorage();
/*
function addToCart(product:Item){

  let r = cart.itemList.push(product);

  //console.log(r);

}*/
/*
let cartItemsLS: ShoppingCart[] = [];
/*let retrievedItemsFromLS = localStorage.getItem("itemsToLS");
JSON.parse(localStorage.getItem("itemsToLS") || "[{}]");
console.log(retrievedItemsFromLS);
JSON.stringify(retrievedItemsFromLS);*/
/*
export function retrieveCartItemsFromLS(): ShoppingCart[] {
  cartItemsLS = JSON.parse(localStorage.getItem("itemsToLS") || "{}");
  let cartItems = cartItemsLS.map((painting)) => {
    return new ShoppingCart()
  }
}
*/
/*
if (typeof retrievedItemsFromLS === "string") {
  const paintings = JSON.parse(retrievedItemsFromLS);
  JSON.parse(localStorage.getItem("itemsToLS") || "{}");
  console.log(paintings);
 
  
}
*/







//let cartItemsLS: ShoppingCart[] = [];

function createHTMLProductlist(products: Item[]) {
  for (let i = 0; i < products.length; i++) {
    //Creates the HTML elements we need:
    let itemContainer = document.createElement("div") as HTMLDivElement;
    let itemImg = document.createElement("img") as HTMLImageElement;
    let itemTitle = document.createElement("h1") as HTMLHeadingElement;
    let itemDesc = document.createElement("p") as HTMLParagraphElement;
    let itemArticleNumber = document.createElement("p") as HTMLParagraphElement;
    let itemSize = document.createElement("p") as HTMLParagraphElement;
    let itemPrice = document.createElement("p") as HTMLParagraphElement;
    let addBtn = document.createElement("button") as HTMLButtonElement;

    //Adds classes to the elements
    itemContainer.classList.add("itemCard");
    itemImg.classList.add("itemCard__image");
    itemTitle.classList.add("itemCard__title");
    itemDesc.classList.add("itemCard__desc");
    itemArticleNumber.classList.add("itemCard__articleNumber");
    itemPrice.classList.add("itemCard__price");
    itemSize.classList.add("itemCard__size");
    addBtn.classList.add("itemCard__addBtn");

    //Eventlistener for adding to cart
    addBtn.addEventListener("click", () => {
      //addToCart(products[i]);
      /*const cartItem: ShoppingCartItem = new ShoppingCartItem(1, products[i]);
      

    
      cartItemsLS.push(cartItem);
      //cartItemsLS.push(products[i]);
      localStorage.setItem("itemsToLS", JSON.stringify(cartItemsLS) || "");
      //console.log(products[i]);
      console.log(cartItemsLS);
      
      let cartItems = cartItemsLS.map((itemInCart) => {
        return new ShoppingCartItem(itemInCart.quantity, itemInCart.cartItem);
        
      }); 
      return cartItemsLS;
      //createHTMLCartpage(cartItemsLS); BUG*/

      addToCart(products[i]);
      getLocalStorage();
      createHTMLCartpage(cart);
      //createHTMLCartpage(cart);
      
    });
    

    //Adds id

    //Adds content to the elements
    itemImg.src = products[i].imageUrl;
    itemImg.alt = "";
    itemTitle.innerText = products[i].title;
    itemDesc.innerText = products[i].desc;
    itemPrice.innerText = products[i].price.toString() + " kr";
    itemArticleNumber.innerText =
      "Artikel nummer: " + products[i].articleNumber;
    itemSize.innerText = "Storlek: " + products[i].size;
    addBtn.innerHTML = "Köp";

    //Adds elements to page
    let flexContainer = document.getElementById(
      "flexContainer"
    ) as HTMLDivElement;

    flexContainer.appendChild(itemContainer);
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemDesc);
    itemContainer.appendChild(itemArticleNumber);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemSize);
    itemContainer.appendChild(addBtn);
  }
}

createHTMLProductlist(products);
createHTMLCartpage(cart);


