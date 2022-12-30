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
document.body.appendChild(formContainer);

payBtn.addEventListener("click", ()=>{
    window.location.replace("/src/pages/confirmationpage.html");
})




