import skyImage from "./imgs/sky.png"

export function homePage() {
    const img = document.createElement("img");
    img.src = skyImage;

    const home = document.createElement("div");
    home.className = "page";
    home.appendChild(img);
    document.body.querySelector("#content").appendChild(home);
}