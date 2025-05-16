import { homePage } from "./home.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
    if(document.body.querySelector(".page"))
        document.body.querySelector(".page").remove();
    homePage();
});
menuBtn.addEventListener("click", () => {
    if(document.body.querySelector(".page"))
        document.body.querySelector(".page").remove();
    menuPage();
});
aboutBtn.addEventListener("click", () => {
    if(document.body.querySelector(".page"))
        document.body.querySelector(".page").remove();
    aboutPage();
});