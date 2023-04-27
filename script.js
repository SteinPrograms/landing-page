const comingSoon = document.querySelector("p");
const comingSoonText = comingSoon.textContent;

// This allows to put the content for search engine optimization
comingSoon.textContent = "";
comingSoon.style.visibility = "visible";

var previousDelay = 0;

setTimeout(() => {
    for (let i = 0; i < comingSoonText.length; i++) {
        const delay = Math.floor(Math.random() * (250 - 25)) + 25;
        setTimeout(() => {
            comingSoon.append(comingSoonText[i]);
        }, delay + previousDelay);
        previousDelay += delay;
    }
}, 1500);
