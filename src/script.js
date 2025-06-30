const cardHTML = document.querySelector(".card-container");

if (cardHTML) {
  cardHTML.addEventListener("click", () => {
    window.location.href = "coming-soon.html";
  });
}
const userNameElement = document.querySelector(".user-name");
const userNameInput = document.querySelector(".user-input");

if (userNameElement && userNameInput) {
  userNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      userNameElement.textContent = userNameInput.value;
      userNameInput.value = "";
    }
  });
}
