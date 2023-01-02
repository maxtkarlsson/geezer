/*export class Item {
  articleNumber: string;
  title: string;
  imageUrl: string;
  desc: string;
  price: Number;
  size: string;
  sizeValue: number;
  infoBtn: string;
  addBtn: string;

  constructor(
    articleNumber: string,
    title: string,
    imageUrl: string,
    desc: string,
    price: number,
    size: string,
    sizeValue: number,
    infoBtn: string,
    addBtn: string
  ) {
    this.articleNumber = articleNumber;
    this.title = title;
    this.imageUrl = imageUrl;
    this.desc = desc;
    this.price = price;
    this.size = size;
    this.sizeValue = sizeValue;
    this.infoBtn = infoBtn;
    this.addBtn = addBtn;
  }
}*/

// New version down below, old version up above
// Changed the constructor to public to make them globally accessible

export class Item {
  constructor(
    public articleNumber: string,
    public title: string,
    public imageUrl: string,
    public imageUrlLarge: string,
    public desc: string,
    public descLong: string,
    public price: number,
    public size: string,
    public sizeValue: number,
    public infoBtn: string,
    public addBtn: string,
    public quantity: number
  ) {}
}

//Gammal kod product page:

//export let selectedItem:Item;

//import { createHTMLCartpage } from "./cartpage"; BUG

//let cart: ShoppingCartItem[] = []; //Samla sådana object i den listan

//let cartFromLS: ShoppingCartItem[] = [];
//let cartItemsLS: ShoppingCartItem[] = [];
/*
const sortDesc: HTMLButtonElement = document.getElementById("#sort-desc") as HTMLButtonElement;
sortDesc.addEventListener("click", () => {
  let sortedItemsDesc= products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1); // Sorts items from size large to small
  console.log(JSON.stringify(sortedItemsDesc));
});*/

// Sort desc
/*let sortedItemsDesc= products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1); // Sorts items from size large to small
console.log(JSON.stringify(sortedItemsDesc));*/

// sort asc
/*
let sortedItemsAsc = products.sort((a: Item, b: Item) => (a.sizeValue < b.sizeValue) ? -1 : 0);
console.log(JSON.stringify(sortedItemsAsc));
*/

/*
const sortDesc = (products: Item[], desc: boolean = true) => {
  return products.sort((a: Item, b: Item) => {
    if (desc) {
      if (a.sizeValue > b.sizeValue) return 1;
      if (a.sizeValue < b.sizeValue) return -1;

      return 0;
    }
  })*/

/*

function sortProductsAsc (products: Item[]) {
  products.sort((a: Item, b: Item) => (a.sizeValue < b.sizeValue) ? 1: -1);
};*/

//let cart = new ShoppingCartItem (0, []);

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

//I eventlistenet:

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

/*
let sortDesc: HTMLButtonElement = document.getElementById("sort-desc") as HTMLButtonElement;
sortDesc.addEventListener("click", () => {
  
  let sortListToDesc = sortList(products);
  createHTMLProductlist(sortListToDesc);
}); */
/*
sortDesc.addEventListener("click", () => {
  products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1); // Sorts items from size large to small
  console.log(products);
});*/
/*
function sortList (products: Item[]) {
  let sortedDesc = products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1); // Sorts items from size large to small
  console.log("sortlist function has been run");
  return sortedDesc;
  
}*/

/*sortDesc.addEventListener("click", () => {
  let sortedDesc = products.sort((a: Item, b: Item) => {
    let sizeValueOne: number = a.sizeValue;
    let sizeValueTwo: number = b.sizeValue;
    if(sizeValueOne > sizeValueTwo) {
      return -1;
    }

  
    createHTMLProductlist(sortedDesc);
  }); 
  createHTMLProductlist(sortedDesc);
  console.log(sortedDesc);
  });*/

//createHTMLProductlist(sortedDesc);
/*
sortDesc.onclick = function () {
  let sortedItemsDesc = products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1);
  

  
  return createHTMLProductlist(sortedItemsDesc);
};*/

//Product details page:

//let getProduct: string = localStorage.getItem("products");
/*function getCurrentObject (getCurrentProduct: string) {
  let getCurrentProduct: null = localStorage.getItem("product");
  return getCurrentProduct;
}
getCurrentObject(value as string)*/
//let getCurrentProduct = localStorage.getItem("product");

//JSON.parse(getCurrentProduct);
//createHTMLExtendedProductInfo(selectedItem);
/*
function clickForInfo(clickedProduct: Item) {
  let infoArray: Item = new Item()
}*/
/*
function getClickedObject (product: Item) {
  let i: number = 0;
  let currentItem: Item = new Item(products.);
  let currentItemObject = JSON.parse(localStorage.getItem("product") || "{}");
  currentItem.push(currentItemObject);
  console.log(currentItem);
  console.log(currentItemObject);
}
getClickedObject();*/

//Functions.ts:
/*
function decreaseQuantity(product: ShoppingCartItem) {
  for (let i = 0; i < cart.length; i++) {
    if (
      cart[i].cartItem.articleNumber === product.cartItem.articleNumber &&
      cart[i].quantity > 1
    ) {
      cart[i].quantity = cart[i].quantity - 1;
    } else {
      removeItem(product);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(
    "Function decreaseQuantity run with product:" +
      JSON.stringify(product.cartItem.title)
  );
}
*/

/*
  export function createHTMLExtendedProductInfo(product: Item) {
    let selectedItem: Item = new Item(products[i].articleNumber,products[i].title,products[i].imageUrl, products[i].imageUrlLarge, products[i].desc,products[i].descLong, products[i].price, products[i].size, products[i].sizeValue, products[i].infoBtn,products[i].addBtn, products[i].quantity);

  
  }*/
