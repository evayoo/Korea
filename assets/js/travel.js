const items = [
    { id: 35, name: 'Set up Korea item plan', detail: 'I can help you set up a customized Korea trip. The price is based on hour', price: 50, imgSrc: '/assets/images/korea.jpg'},
    { id: 36, name: 'Hire a Korean guide', detail: 'English speaking guide will acompany you. The price is based on hour', price: 30, imgSrc: '/assets/images/guide.jpg' },
    { id: 37, name: 'Hire a driver', detail: 'A professional driver will acompany you with a SUV with maximum passengers of 6 people. The price is based on hour', price: 30, imgSrc: '/assets/images/driver.jpg' },
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
