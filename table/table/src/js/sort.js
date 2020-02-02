let clickPrice = 0;
let clickId = 0;
let clickTitle = 0;
let clickColor = 0;
let clickDepartment = 0;

table.addEventListener('click', (event) => {
    let target = event.target;
    let value = target.innerHTML.toLowerCase();
    let allTd = document.querySelectorAll('td');

    if (allTd) {

        for (i = 0; i <= allTd.length - 1; i++) {
            allTd[i].remove()
        }

        if (target.tagName == "TH") {

            switch (value) {

                case ('id'):

                    if (clickId == 0) {
                        clickId++
                        newData.sort(function (a, b) {
                            return a.id - b.id;
                        }).reverse();
                    } else {
                        clickId = 0;
                        newData.sort(function (a, b) {
                            return a.id - b.id;
                        })
                    }
                    break;
                case ('price'):

                    if (clickPrice == 0) {
                        forNumber(clickPrice);
                        clickPrice++;
                    } else if (clickPrice == 1) {
                        forNumber(clickPrice);
                        clickPrice++;
                    } else {
                        normal();
                    }
                    break;
                case ('title'):

                    if (clickTitle == 0) {
                        forTitle(clickTitle);
                        clickTitle++;
                    } else if (clickTitle == 1) {
                        forTitle(clickTitle);
                        clickTitle++;
                    } else {
                        normal();
                    }
                    break;
                case ('color'):

                    if (clickColor == 0) {
                        forColor(clickColor);
                        clickColor++;
                    } else if (clickColor == 1) {
                        forColor(clickColor);
                        clickColor++;
                    } else {
                        normal();
                    }
                    break;
                case ('department'):

                    if (clickDepartment == 0) {
                        forDepartment(clickDepartment)
                        clickDepartment++;
                    } else if (clickDepartment == 1) {
                        forDepartment(clickDepartment);
                        clickDepartment++;
                    } else {
                        normal();
                    }
                    break;
            };
        };
    };
    printTable();
});

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

function forNumber(clicks) {
    if (clicks == 0) {
        newData.sort(function (a, b) {
            return a.price - b.price;
        });
    } else {
        newData.sort(function (a, b) {
            return a.price - b.price;
        }).reverse();
    };
};

function forTitle(clicks) {
    if (clicks == 0) {
        newData.sort(function (a, b) {
            let nameA = a.title.toUpperCase();
            let nameB = b.title.toUpperCase();
            
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
    } else {
        newData.sort(function (a, b) {
            let nameA = a.title.toUpperCase();
            let nameB = b.title.toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            return 0;
        });
    };
};

function forColor(clicks) {
    if (clicks == 0) {
        newData.sort(function (a, b) {
            let nameA = a.color.toUpperCase();
            let nameB = b.color.toUpperCase();
            
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
    } else {
        newData.sort(function (a, b) {
            let nameA = a.color.toUpperCase();
            let nameB = b.color.toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            return 0;
        });
    };
};

function forDepartment(clicks) {
    if (clicks == 0) {
        newData.sort(function (a, b) {
            let nameA = a.department.toUpperCase();
            let nameB = b.department.toUpperCase();
            
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
    } else {
        newData.sort(function (a, b) {
            let nameA = a.department.toUpperCase();
            let nameB = b.department.toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            return 0;
        });
    };
};


function normal() {
    clickPrice = 0;
    clickTitle = 0;
    clickColor = 0;
    clickDepartment = 0;

    newData.sort(function (a, b) {
        return a.id - b.id;
    });
};
