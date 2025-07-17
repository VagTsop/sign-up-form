// script.js

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const fields = ["first-name", "last-name", "email", "password"];

  fields.forEach((id) => {
    const input = document.getElementById(id);
    const errorMsg = input.nextElementSibling.nextElementSibling;

    input.classList.remove("error");
    errorMsg.classList.remove("visible");

    if (!input.value.trim()) {
      input.classList.add("error");
      errorMsg.textContent = `${input.placeholder} cannot be empty`;
      errorMsg.classList.add("visible");
    } else if (
      id === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
    ) {
      input.classList.add("error");
      errorMsg.textContent = "Looks like this is not an email";
      errorMsg.classList.add("visible");
    }
  });
});
