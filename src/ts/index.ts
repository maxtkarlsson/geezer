
import { createHTMLCartpage, totalCount } from "./functions";

//getLocalStorage();
createHTMLCartpage();
totalCount();

/*

let purchaseBtn = document.createElement("button") as HTMLButtonElement;
purchaseBtn.classList.add("purchaseBtn");
purchaseBtn.innerHTML = "Till betalning";
let cartBody = document.querySelector(".offcanvas-body") as HTMLDivElement;
cartBody.appendChild(purchaseBtn);

purchaseBtn.addEventListener("click", () => {
  window.location.replace("/pages/checkoutpage.html");
});*/
