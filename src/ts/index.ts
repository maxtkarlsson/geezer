import { createHTMLCartpage } from "./functions";
import { cart, getLocalStorage } from "./functions";

getLocalStorage();
createHTMLCartpage(cart);