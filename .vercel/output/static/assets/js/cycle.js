const items = [
    { id: 20, name: 'Book "Cycle the Silk Road"', detail: 'The book is about my 8-month item trip across 14 countries. The price is including shipping fee within Switzerland', time: 'upto 3 delivery days', price: 45, imgSrc: '/assets/images/cycling.jpg'},
  { id: 21, name: 'Plan your cycling trip', detail: 'I can share tips for Eurasia route', time: '1 hour', price: 100, imgSrc: '/assets/images/route.png' },
  { id: 22, name: 'How to find sponsors', detail: 'I can tell you how I got 20,000 EUR sponsorship from 13 companies', time: '1 hour', price: 100, imgSrc: '/assets/images/sponsor.jpeg' },
  { id: 23, name: 'How to train yourself', detail: 'I trained myself in 3 months', time: '30 minutes', price: 30, imgSrc: '/assets/images/train.jpeg' },
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
                    <div class="card-text"><strong>Time:</strong> ${item.time}</div>
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

