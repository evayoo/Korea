const items = [
    { "id": 1, name: 'Learn Hangul, Korean alphabet', detail: 'We will learn how to read and write Korean', price: 50 , imgSrc: '/assets/images/hangul1.jpg'},
    { "id": 2, name: 'Learn Korean language (any level)', detail: 'You will learn how to speak Korean elegantly', price: 50 , imgSrc: '/assets/images/hangul.jpg' },
    { "id": 3, name: 'Learn Korean with K-pop', detail: 'You can bring any K-pop song you like', price: 50 , imgSrc: '/assets/images/kpop.jpg' },
    { "id": 4, name: 'Learn Korean with K-drama', detail: 'You can bring any K-drama/Korean film you like', price: 50 , imgSrc: '/assets/images/drama.jpg' },
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

// 만약에 앞서 선택한 항목을 한 번 더 클릭하면, 카드가 추가 되지 않는다. 


