const items = [
        { id: 1, name: 'Bibimbap', detail: 'mixed rice with meat and assorted vegetables', cookingTime: '1 hour', price: 30, imgSrc: '/assets/images/bibim.jpg'},
        { id: 2, name: 'Kimbap', detail: 'cooked rice, vegetables, and meat rolled in dried seaweed', cookingTime: '1 hour', price: 30, imgSrc: '/assets/images/kimbap.jpg' },
        { id: 3, name: 'Kimchi', detail: 'fermented vegetables, most commonly using napa cabbage', cookingTime: '1 hour', price: 30, imgSrc: '/assets/images/kimchi.jpg' },
        { id: 4, name: 'Kimchijeon', detail: 'kimchi pancake', cookingTime: '20 min', price: 30, imgSrc: '/assets/images/kimchijeon.jpg' },
        { id: 5, name: 'Korean BBQ', detail: 'grilled meat wrapped with lettuce', cookingTime: '20 min', price: 30, imgSrc: '/assets/images/bbq.jpg' },
        { id: 6, name: 'Tteokbokki', detail: 'spicy rice cakes', cookingTime: '40 min', price: 30, imgSrc: '/assets/images/thuk.jpg' },
        { id: 7, name: 'Curry and rice', detail: 'rice with vegetable curry', cookingTime: '30 min', price: 15, imgSrc: '/assets/images/curry.jpg' },
        { id: 8, name: 'Deonjangguk', detail: 'soybean paste soup', cookingTime: '30 min', price: 15, imgSrc: '/assets/images/deonjang.jpg' },
        { id: 9, name: 'Miyeokguk', detail: 'seaweed soup', cookingTime: '10 min', price: 8, imgSrc: '/assets/images/miyeok.jpg' },
        { id: 10, name: 'Budaejjigae', detail: 'spicy soup made with a variety of ingredients', cookingTime: '30 min', price: 15, imgSrc: '/assets/images/budae.jpg' },
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
                    <div class="card-text"><strong>Cooking time:</strong> ${item.cookingTime}</div>
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

        // Add the item ID to local storage
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
