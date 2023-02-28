// CHATBOX

const contact = document.querySelector(".contact__consultant");
const contactMessage = document.querySelector(".contact__consultant--message");
const chatBox = document.querySelector(".chatbox");
const closeTab = document.querySelector(".chatbox__header--close-tab");
const closeMessage = document.querySelector(".contact__consultant--close");

contact.addEventListener("click", function (){
    contact.classList.add("display-none");
    chatBox.classList.add("display-flex");
    closeMessage.classList.add("display-none");
});

closeTab.addEventListener("click", function() {
    chatBox.classList.remove("display-flex");
    contact.classList.remove("display-none");
    contactMessage.classList.add("display-none");
});

closeMessage.addEventListener("click", function() {
    contactMessage.classList.add("display-none");
    closeMessage.classList.add("display-none");
});