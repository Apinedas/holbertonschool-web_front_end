function changeMode (size, weight, transform, background, color) {
    return function () {
        const root =  document.documentElement;
        root.style.fontSize = size;
        root.style.fontWeight = weight;
        root.style.textTransform = transform;
        root.style.backgroundColor = background;
        root.style.color = color;
    }
};

function main () {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    const paragraph = document.createElement('p');
    const text = document.createTextNode('Welcome Holberton!');
    const buttonSpooky = document.createElement('button');
    const spookyText = document.createTextNode('Spooky');
    const buttonDark = document.createElement('button');
    const darkText = document.createTextNode('Dark');
    const buttonScream = document.createElement('button');
    const screamText = document.createTextNode('Scream');
    paragraph.appendChild(text);
    buttonSpooky.appendChild(spookyText); 
    buttonDark.appendChild(darkText);
    buttonScream.appendChild(screamText);
    document.body.appendChild(paragraph);
    document.body.appendChild(buttonSpooky);
    document.body.appendChild(buttonDark);
    document.body.appendChild(buttonScream);
    buttonSpooky.addEventListener('click', function () { spooky(); });
    buttonDark.addEventListener('click', function () { darkMode(); });
    buttonScream.addEventListener('click', function () { screamMode(); });
};

main();
