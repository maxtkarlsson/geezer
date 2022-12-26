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

//anchorConfirmationPage.appendChild(payBtn);
form.appendChild(firstnameInput);
form.appendChild(lastnameInput);
form.appendChild(phoneInput);
form.appendChild(cardRadio);
form.appendChild(payWithCard);
form.appendChild(swishRadio);
form.appendChild(payWithSwish);

document.body.appendChild(form);
//document.body.appendChild(anchorConfirmationPage);
document.body.appendChild(payBtn);

payBtn.addEventListener("click", ()=>{
    window.location.replace("/src/pages/confirmationpage.html");
})




