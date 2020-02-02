window.addEventListener('DOMContentLoaded', () => {

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "../db.json");
    xmlHttp.responseType = 'json';

    xmlHttp.onload = function () {

        let response = xmlHttp.response;
        window['xml'] = response;
        
    };

    xmlHttp.send();
});

