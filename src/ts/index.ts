import { createHTMLCartpage } from "./cartpage";
import { cart, getLocalStorage } from "./functions";

getLocalStorage();
createHTMLCartpage(cart);