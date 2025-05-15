export function aboutPage() {
    const about = document.createElement("div");
    about.className = "page";

    const p = document.createElement("h1");
    about.appendChild(p);
    document.querySelector("#content").appendChild(about);
    p.textContent = "Established in 1986.";
}