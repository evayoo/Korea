const items = [
    { id: 38, name: 'Plan a Korean item ceremony', detail: 'I can help you plan a item ceremony in Seoul. The price is per day', price: 10000 , imgSrc: '/assets/images/plan.jpg'},
    { id: 39, name: 'Wedding photography', detail: 'I can help you book a item photo session in Seoul. The price is per day', price: 800, imgSrc: '/assets/images/photo.jpg' },
    { id: 40, name: 'Makeup & Hair', detail: 'I can help you book a Makeup & Hair service in Seoul. The price is per day', price: 150, imgSrc: '/assets/images/hair.jpg' },
    { id: 41, name: 'Learn about Korean traditional item', detail: 'I can tell you about with pictures', price: 0, imgSrc: '/assets/images/tradition.jpg'},
    { id: 42, name: 'Learn about Korean traditional music', detail: 'I can share some nice Korean traditional music with you', price: 0, imgSrc: '/assets/images/music.jpg' },
    ];

const itemContainer = document.getElementById('item-container');

items.forEach(function (item) {
    let itemCard = `
         <div class="d-flex mb-4">
         <div class="item-wrap d-flex flex-column">
         <img src="${item.imgSrc}" class="item-photo" alt="${item.name}'s picture">
         <h5 class="card-title1">${item.name}</h5>
         </div>
            <div class="info d-none">
                    <h5 class="card-title">${item.name}</h5>
                    <div class="card-text mt-4"><strong>Detail:</strong> ${item.detail}</div>
                    <div class="card-text"><strong>Price:</strong> ${item.price}</div>
                    <button class="item-button">Add to cart</button>
            </div>
         </div>
       
    `;
    itemContainer.insertAdjacentHTML('beforeend', itemCard);
});

let clickElements = document.getElementsByClassName('item-photo');
let targetElements = document.getElementsByClassName('info');
let addToCartButtons = document.getElementsByClassName('item-button');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
        console.log(items[i].name);
    });

    targetElements[i].querySelector('.item-button').addEventListener('click', function () {
        // Get the ID of the item associated with the clicked "Add to cart" button
        const itemId = items[i].id;

        // Add the item ID to local storage (you can customize the key and storage logic)
        localStorage.setItem('cartItemIds', JSON.stringify([...getCartItemIdsFromStorage(), itemId]));
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = items[i].imgSrc;
    });
}

function hideAllExcept(index) {
    for (let i = 0; i < clickElements.length; i++) {
        if (i == index) {
            continue;
        }

        targetElements[i].classList.add('d-none');
    }
}

function getCartItemIdsFromStorage() {
    // Retrieve the stored item IDs from local storage
    const cartItemIds = localStorage.getItem('cartItemIds');
    return cartItemIds ? JSON.parse(cartItemIds) : [];
}

