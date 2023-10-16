const anmas = [
    { name: 'Shoulder and back', time: '20 min', price: '20 CHF', imgSrc: '../assets/css/anma.jpg'},
    { name: 'Neck, scalp and face', time: '20 min', price: '20 CHF', imgSrc: '../assets/css/anma.jpg' },
    { name: 'Feet', time: '20 min', price: '20 CHF', imgSrc: '../assets/css/anma.jpg' },
    { name: 'Hand and arm', time: '10 min', price: '10 CHF', imgSrc: '../assets/css/anma.jpg' },
    { name: 'Whole body massage', time: '30 min', price: '30 CHF', imgSrc: '../assets/css/anma.jpg' },
    ];

const anmaContainer = document.getElementById('anma-container');

anmas.forEach(function (anma) {
    let anmaCard = `
         <div class="d-flex mb-4">
            <div class="anma-wrap">
                <img src="${anma.imgSrc}" class="anma-photo" alt="${anma.name}'s picture">
            </div>
            <div class="info d-none">
                    <h5 class="card-title">${anma.name}</h5>
                    <div class="card-text"><strong>Cooking time:</strong> ${anma.time}</div>
                    <div class="card-text"><strong>Price:</strong> ${anma.price}</div>
            </div>
         </div>
       
    `;
    anmaContainer.insertAdjacentHTML('beforeend', anmaCard);
});

let clickElements = document.getElementsByClassName('anma-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = anmas[i].imgSrc;
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
