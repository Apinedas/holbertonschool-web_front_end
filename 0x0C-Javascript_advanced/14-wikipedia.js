function createElement(data) {
    let paragraph = document.createElement('p');
    let text = document.createTextNode(data);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let oReq = new XMLHttpRequest();
    oReq.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    oReq.addEventListener("load", () => { 
        const jsonResponse = JSON.parse(oReq.response);
        callback(jsonResponse.query.pages['21721040'].extract);
     });
    oReq.send();
}

queryWikipedia(createElement);
