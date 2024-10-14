const menu = document.querySelector(".menu");
const arrow = document.querySelector(".arrow");
const menutext = document.querySelector(".menu p");
const socialList = document.querySelector(".list");
const liElems = document.querySelectorAll(".list li");
console.log(menutext);

menu.addEventListener("click", () => {
  socialList.classList.toggle("hide");
  arrow.classList.toggle("rotate");
});

liElems.forEach((liElem) => {
  liElem.addEventListener("click", () => {
    menutext.innerHTML = liElem.textContent;
    socialList.classList.toggle("hide");
  });
});
