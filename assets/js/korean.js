const koreans = [
    { "id": 1, name: 'Learn Hangul, Korean alphabet', detail: 'We will learn how to read and write Korean', price: '50 CHF/hour', imgSrc: '/assets/images/hangul1.jpg'},
    { "id": 2, name: 'Learn Korean language (any level)', detail: 'You will learn how to speak Korean elegantly', price: '50 CHF/hour', imgSrc: '/assets/images/hangul.jpg' },
    { "id": 3, name: 'Learn Korean with K-pop', detail: 'You can bring any K-pop song you like', price: '50 CHF/hour', imgSrc: '/assets/images/kpop.jpg' },
    { "id": 4, name: 'Learn Korean with K-drama', detail: 'You can bring any K-drama/Korean film you like', price: '50 CHF/hour', imgSrc: '/assets/images/drama.jpg' },
    ];

const koreanContainer = document.getElementById('korean-container');

koreans.forEach(function (korean) {
    let koreanCard = `
         <div class="d-flex mb-4">
         <div class="korean-wrap d-flex flex-column">
         <img src="${korean.imgSrc}" class="korean-photo" alt="${korean.name}'s picture">
         <h5 class="card-title1">${korean.name}</h5>
         </div>
            <div class="info d-none">
                    <h5 class="card-title">${korean.name}</h5>
                    <div class="card-text mt-4"><strong>Detail:</strong> ${korean.detail}</div>
                    <div class="card-text"><strong>Price:</strong> ${korean.price}</div>
                    <button className="item-button">Add to cart</button>

</div>
         </div>
       
    `;
    
    koreanContainer.insertAdjacentHTML('beforeend', koreanCard);
});

// Existing code ...

let clickElements = document.getElementsByClassName('korean-photo');
let targetElements = document.getElementsByClassName('info');
let addToCartButtons = document.getElementsByClassName('item-button');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
        console.log(koreans[i].name);
    });

    addToCartButtons[i].addEventListener('click', function () {
        // Get the ID of the item associated with the clicked "Add to cart" button
        const itemId = koreans[i].id;

        // Add the item ID to local storage (you can customize the key and storage logic)
        localStorage.setItem('cartItemIds', JSON.stringify([...getCartItemIdsFromStorage(), itemId]));
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = koreans[i].imgSrc;
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



