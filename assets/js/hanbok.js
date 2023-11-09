const items = [
    { id: 24, name: 'Modern item', price: 50, imgSrc: '/assets/images/modern.jpeg'},
    { id: 25, name: 'Summer item', price: 40, imgSrc: '/assets/images/dress.jpeg' },
    { id: 26, name: 'Summer blouse', price: 30, imgSrc: '/assets/images/blouse.jpeg' },
    { id: 27, name: 'Couple item', price: 100, imgSrc: '/assets/images/hanbok3.jpg' },
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
                    <div class="card-text"><strong>Price:</strong> ${item.price}</div>
                    <button className="item-button">Add to cart</button>
            </div>
         </div>
       
    `;
    itemContainer.insertAdjacentHTML('beforeend', itemCard);
});

let clickElements = document.getElementsByClassName('item-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = items[i].imgSrc;
    });
}

function hideAllExcept(index) {
    for (let i = 0; i < clickElements.length; i++) {
        if(i == index) {
            continue;
        }

        targetElements[i].classList.add('d-none');
    } 
}
