const table = document.getElementById('table');
const conteiner = document.getElementById('conteiner')
let newData = [];
let currentPage = 1;

function printTable() {

    for (i = 0; i < newData.length; i++) {
        const tr = document.createElement('tr');
        tr.classList.add('tr');
        table.append(tr);

        const td = document.createElement('td');
        td.classList.add('td');
        td.innerHTML = newData[i].id;

        const td2 = document.createElement('td');
        td2.innerHTML = newData[i].title;

        const td3 = document.createElement('td');
        td3.innerHTML = newData[i].price;

        const td4 = document.createElement('td');
        td4.innerHTML = newData[i].color;

        const td5 = document.createElement('td');
        td5.innerHTML = newData[i].department;

        tr.append(td);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);

    }
}

function pagination() {

    let total = xml.length;
    let take = 20;
    let maxPage = total / take;

    if (currentPage <= maxPage && currentPage > 0) { 
        let skip = (currentPage - 1) * take;

        newData = xml.slice(skip, take + skip);
        window['newData'] = newData;

        let allTd = document.querySelectorAll('td');

        if (allTd) {

            for (i = 0; i <= allTd.length - 1; i++) {
                allTd[i].remove()
            }

        }

        printTable()

    }
}

conteiner.addEventListener('click', (event) => {

    event.preventDefault()

    let target = event.target;

    if (target.innerHTML == 'Перейти на следующую') {
        currentPage += 1;
    }

    if (target.innerHTML == 'Веруться на предидущую страницу') {
        currentPage -= 1;
    }

    pagination();
})



window.addEventListener('load', () => {

    setTimeout(() => {
        pagination();

    }, 100)

});

