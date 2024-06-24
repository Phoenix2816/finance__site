const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--showcase__carusel-elements-displayed");
const marqueeContent = document.querySelector("ul.showcase__carusel");

root.style.setProperty("--showcase__carusel-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}