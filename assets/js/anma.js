const items = [
    { id: 15, name: 'Shoulder and back', time: '20 min', price: 20, imgSrc: '/assets/images/back.jpg'},
    { id: 16, name: 'Neck, scalp and face', time: '20 min', price: 20, imgSrc: '/assets/images/neck.jpg' },
    { id: 17, name: 'Feet', time: '20 min', price: 20, imgSrc: '/assets/images/feet.jpg' },
    { id: 18, name: 'Hand and arm', time: '10 min', price: 10, imgSrc: '/assets/images/hand.jpg' },
    { id: 19, name: 'Whole body massage', time: '30 min', price: 30, imgSrc: '/assets/images/whole.jpg' },
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
                    <div class="card-text"><strong>Time:</strong> ${item.time}</div>
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
