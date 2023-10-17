const cycles = [
    { name: 'Book "cycle the Silk Road"', detail: 'The book is about my 8-month cycle trip across 14 countries', time: 'upto 3 delivery days', price: '45 CHF including shipping fee within Switzerland', imgSrc: '/assets/images/cycling.jpg'},
    { name: 'Plan your cycle trip', detail: 'I can share tips for Eurasia route', time: '1 hour', price: '100 CHF', imgSrc: '/assets/images/route.png' },
    { name: 'How to find sponsors', detail: 'I can tell you how I got 20,000 EUR sponsorship from 13 companies', time: '1 hour', price: '100 CHF', imgSrc: '/assets/images/sponsor.jpeg' },
    { name: 'How to train yourself', detail: 'I trained myself in 3 months', time: '30 minutes', price: '30 CHF', imgSrc: '/assets/images/train.jpeg' },
     ];

const cycleContainer = document.getElementById('cycle-container');

cycles.forEach(function (cycle) {
    let cycleCard = `
         <div class="d-flex mb-4">
            <div class="cycle-wrap">
                <img src="${cycle.imgSrc}" class="cycle-photo" alt="${cycle.name}'s picture">
            </div>
            <div class="info d-none">
                    <h5 class="card-title">${cycle.name}</h5>
                    <div class="card-text mt-4"><strong>link:</strong> ${cycle.detail}</div>
                    <div class="card-text"><strong>Cooking time:</strong> ${cycle.time}</div>
                    <div class="card-text"><strong>Price:</strong> ${cycle.price}</div>
            </div>
         </div>
       
    `;
    cycleContainer.insertAdjacentHTML('beforeend', cycleCard);
});

let clickElements = document.getElementsByClassName('cycle-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = cycles[i].imgSrc;
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


