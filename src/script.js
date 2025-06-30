const cardHTML = document.querySelector(".card-container");

if (cardHTML) {
  cardHTML.addEventListener("click", () => {
    window.location.href = "coming-soon.html";
  });
}
const userNameElement = document.querySelector(".user-name");
const userNameInput = document.querySelector(".user-input");

if (userNameElement && userNameInput) {
  setTimeout(() => {
    userNameElement.textContent = "";
  }, 5000);
  userNameInput.addEventListener("keydown", (event) => {
    if (
      event.key === "Backspace" ||
      event.key === "Delete" ||
      event.key === "Escape" ||
      event.key === "Enter" ||
      event.key === "Tab" ||
      event.key === "Shift" ||
      event.key === "Control" ||
      event.key === "Alt"
    ) {
      userNameElement.textContent = userNameElement.textContent.slice(0, -1);
      return;
    }
    userNameElement.textContent += event.key;
  });
}
