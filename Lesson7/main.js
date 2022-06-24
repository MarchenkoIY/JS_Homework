var newsItems = {
        ItemOne: {
            name: 'User name',
            photo: 'img/photo1.jpg',
            status: 'Pro',
            counterComments: 0,
            when: 5,
            title: 'Item title 1',
            text: 'Suspendisse potenti. Duis imperdiet ex non leo condimentum efficitur. Sed rhoncus eleifend lacus sit amet faucibus. Nunc semper nisl' +
            ' a dolor pretium dapibus quis quis lacus. Nulla faucibus viverra laoreet. Fusce in scelerisque magna. Duis porta erat vitae lectus lacinia tempus.',
            tags: 'tag1, tag2, tag3',
        },
        ItemTwo: {
            name: 'User name',
            photo: 'img/photo2.jpg',
            status: 'Member',
            counterComments: 1,
            when: 10,
            title: 'Item title 2',
            text: 'Suspendisse potenti. Duis imperdiet ex non leo condimentum efficitur. Sed rhoncus eleifend lacus sit amet faucibus. Nunc semper nisl' +
            ' a dolor pretium dapibus quis quis lacus. Nulla faucibus viverra laoreet. Fusce in scelerisque magna. Duis porta erat vitae lectus lacinia tempus.',
            tags: 'tag1, tag2, tag3',
        },
        ItemThree: {
            name: 'User name',
            photo: 'img/photo3.jpg',
            status: 'Member',
            counterComments: 2,
            when: 13,
            title: 'Item title 3',
            text: 'Suspendisse potenti. Duis imperdiet ex non leo condimentum efficitur. Sed rhoncus eleifend lacus sit amet faucibus. Nunc semper nisl' +
            ' a dolor pretium dapibus quis quis lacus. Nulla faucibus viverra laoreet. Fusce in scelerisque magna. Duis porta erat vitae lectus lacinia tempus.',
            tags: 'tag1, tag2, tag3',
        },
        ItemFour: {
            name: 'User name',
            photo: 'img/photo4.jpg',
            status: 'Member',
            counterComments: 10,
            when: 20,
            title: 'Item title 4',
            text: 'Suspendisse potenti. Duis imperdiet ex non leo condimentum efficitur. Sed rhoncus eleifend lacus sit amet faucibus. Nunc semper nisl' +
            ' a dolor pretium dapibus quis quis lacus. Nulla faucibus viverra laoreet. Fusce in scelerisque magna. Duis porta erat vitae lectus lacinia tempus.',
            tags: 'tag1, tag2, tag3',
        }       
},
    itemsPlace = document.querySelector('.article > .newsItems'),
    searchButton = document.querySelector('.headerTop > .container > ul > li > .fa-search'),
    searchInArticle = document.querySelector('.search > input'),
    hamburger = document.querySelector('.headerTop > .container > i'),
    navigationList = document.querySelector('.navigation'),
    htmlAndText = '',
    inputSearch = document.createElement('input');

searchButton.before(inputSearch);
inputSearch.style.display = 'none';
inputSearch.type = 'text';
inputSearch.placeholder = 'Search...';
inputSearch.className = 'openSearch';
inputSearch.style.height = '100%';
inputSearch.style.width = '0';

function renderNewsItems() {
    for (var key in newsItems) {
        htmlAndText += `<div class="item">` +
        `<img src="${newsItems[key].photo}" alt="Фото ${newsItems[key].name}">` +
        `<div class="itemText">` +
            `<div class="textTop">` +
                `<p>${newsItems[key].name} <span>${newsItems[key].status}</span></p>` +
                `<p><span><i class="fa fa-comments"></i>${newsItems[key].counterComments}</span><span><i class="fa fa-clock-o"></i>${newsItems[key].when}m</span></p>` +
            `</div>` +
                `<h6>${newsItems[key].title}</h6>` +
                `<p>${newsItems[key].text}</p>` +
                `<p><i class="fa fa-tag"></i>${newsItems[key].tags}</p>` +
        `</div></div>`
    }

    itemsPlace.innerHTML = htmlAndText;
}

function showSearch() {
    if (document.documentElement.clientWidth > 500) {

        if (getComputedStyle(inputSearch).display === 'none') {
            inputSearch.style.display = 'inline-block';
            setTimeout(function () {
                inputSearch.style.width = '150px'
            }, 1);
        } else {
                inputSearch.style.width = '0';

                setTimeout(function () {
                    inputSearch.style.display = 'none';
                }, 500);
            }
    } else {
            searchInArticle.focus();
        }
}

function openNavigation() {
    if (getComputedStyle(navigationList).display === 'none') {
        hamburger.style.color = 'gray';
        navigationList.style.display = 'block';

        setTimeout(function () {
            navigationList.style.height = '143px';
        }, 1);
    } else {
        hamburger.style.color = 'white';
        navigationList.style.height = '0';

        setTimeout(function () {
            navigationList.style.display = 'none';
        }, 400);
    }
}

renderNewsItems();
hamburger.addEventListener('click', openNavigation);
searchButton.addEventListener('click', showSearch);