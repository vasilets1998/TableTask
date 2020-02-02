const input = document.getElementById('input');
const form = document.getElementById('form');

input.addEventListener('keyup', (event) => {
    let inputData = event.srcElement.value;
    let searchTitle = [];

    for (i = 0; i <= newData.length - 1; i++) {
        let product = newData[i];

        if (product.title.toLowerCase().indexOf(inputData.toLowerCase()) != -1) {
            searchTitle.push(newData[i]);
        };

    };
    
    clearTable();
    printNewTable(searchTitle);
});

function printNewTable(newTable) {

    for (i = 0; i < newTable.length; i++) {
        const tr = document.createElement('tr');
        tr.classList.add('tr');
        table.append(tr);

        const td = document.createElement('td');
        td.classList.add('td');
        td.innerHTML = newTable[i].id;

        const td2 = document.createElement('td');
        td2.innerHTML = newTable[i].title;

        const td3 = document.createElement('td');
        td3.innerHTML = newTable[i].price;

        const td4 = document.createElement('td');
        td4.innerHTML = newTable[i].color;

        const td5 = document.createElement('td');
        td5.innerHTML = newTable[i].department;

        tr.append(td);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
    }
}

function clearTable() {
    let allTd = document.querySelectorAll('td');
    
    if (allTd) {

        for (i = 0; i <= allTd.length - 1; i++) {
            allTd[i].remove();
        };
        
    };
};


