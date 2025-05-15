export function menuPage() {
    const menu = document.createElement("div");
    menu.className = "page";

    const p = document.createElement("h1");
    menu.appendChild(p);
    document.querySelector("#content").appendChild(menu);
    p.textContent = "This is a menu"
}