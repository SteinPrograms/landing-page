

function add_text() {
    const title = document.querySelector('.title');
    const textLogo = document.createElement('p');
    textLogo.className = 'text-logo';
    const strong = document.createElement('strong');
    strong.append('tein');
    const light = document.createElement('p');
    light.append('Programs');

    textLogo.style = `
    animation : title 1s ease-in-out;
    margin:0;
    color: rgb(var(--font-color));
    animation-fill-mode: forwards;
    will-change: transform;
    opacity: 0;
    font-size: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`

textLogo.append(strong,light);
title.append(textLogo);

}
// setTimeout(function() { add_text(); }, 2000);