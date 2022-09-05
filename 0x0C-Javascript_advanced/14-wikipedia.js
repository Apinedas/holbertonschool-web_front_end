function createElement(data) {
    let paragraph = document.createElement('p');
    let text = document.createTextNode(data);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

function reqListener () {
    console.log(this.responseText);
}

function queryWikipedia(callback) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    oReq.send();
    console.log(oReq);
}
