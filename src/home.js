import bckgnd from "./imgs/bckgnd.png"

export const homePage = function() {
    const home = document.createElement("div");
    home.className = "page";

    const title = document.createElement("h1");
    title.textContent = "Welcome!";

    const img = document.createElement("img");
    img.src = bckgnd;
    title.textContent = "Welcome!";

    home.append(title, img);
    document.querySelector("#content").append(home);
};