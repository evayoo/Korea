const foods = [
    { name: 'Bibimbap', aka: 'mixed rice with meat and assorted vegetables', cookingTime: '1 hour', price: '30 CHF', imgSrc: '/assets/images/bibim.jpg'},
    { name: 'Kimbap', aka: 'cooked rice, vegetables, and meat rolled in dried seaweed', cookingTime: '1 hour', price: '30 CHF', imgSrc: '/assets/images/kimbap.jpg' },
    { name: 'Kimchi', aka: 'fermented vegetables, most commonly using napa cabbage', cookingTime: '1 hour', price: '30 CHF', imgSrc: '/assets/images/kimchi.jpg' },
    { name: 'Kimchijeon', aka: 'kimchi pancake', cookingTime: '20 min', price: '30 CHF', imgSrc: '/assets/images/kimchijeon.jpg' },
    { name: 'Korean BBQ', aka: 'grilled meat wrapped with lettuce', cookingTime: '20 min', price: '30 CHF', imgSrc: '/assets/images/bbq.jpg' },
    { name: 'Tteokbokki', aka: 'spicy rice cakes', cookingTime: '40 min', price: '30 CHF', imgSrc: '/assets/images/thuk.jpg' },
    { name: 'Curry and rice', aka: 'rice with vegetable curry', cookingTime: '30 min', price: '15 CHF', imgSrc: '/assets/images/curry.jpg' },
    { name: 'Deonjangguk', aka: 'soybean paste soup', cookingTime: '30 min', price: '15 CHF', imgSrc: '/assets/images/deonjang.jpg' },
    { name: 'Miyeokguk', aka: 'seaweed soup', cookingTime: '10 min', price: '8 CHF', imgSrc: '/assets/images/miyeok.jpg' },
    { name: 'Budaejjigae', aka: 'spicy soup made with a variety of ingredients', cookingTime: '30 min', price: '15 CHF', imgSrc: '/assets/images/budae.jpg' },
];

const foodContainer = document.getElementById('food-container');

foods.forEach(function (food) {
    let foodCard = `
         <div class="d-flex mb-4">
            <div class="food-wrap">
                <img src="${food.imgSrc}" class="food-photo" alt="${food.name}'s picture">
            </div>
            <div class="info d-none">
                    <h5 class="card-title">${food.name}</h5>
                    <div class="card-text mt-4"><strong>aka:</strong> ${food.aka}</div>
                    <div class="card-text"><strong>Cooking time:</strong> ${food.cookingTime}</div>
                    <div class="card-text"><strong>Price:</strong> ${food.price}</div>
            </div>
         </div>
       
    `;
    foodContainer.insertAdjacentHTML('beforeend', foodCard);
});

let clickElements = document.getElementsByClassName('food-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = foods[i].imgSrc;
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
