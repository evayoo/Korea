const travels = [
    { name: 'Set up Korea travel plan', detail: 'I can help you set up a customized Korea trip', price: '50 CHF/hour', imgSrc: '/assets/images/korea.jpg'},
    { name: 'Hire a Korean guide', detail: 'English speaking guide will acompany you', price: '100 CHF/day', imgSrc: '/assets/images/guide.jpg' },
    { name: 'Hire a driver', detail: 'A professional driver will acompany you with a SUV', price: '100 CHF/day', imgSrc: '/assets/images/driver.jpg' },
    ];

const travelContainer = document.getElementById('travel-container');

travels.forEach(function (travel) {
    let travelCard = `
         <div class="d-flex mb-4">
            <div class="travel-wrap d-flex flex-column">
                <img src="${travel.imgSrc}" class="travel-photo" alt="${travel.name}'s picture">
                <h5 class="card-title1">${travel.name}</h5>
            </div>
            <div class="info d-none">
                    <h5 class="card-title">${travel.name}</h5>
                    <div class="card-text mt-4"><strong>Detail:</strong> ${travel.detail}</div>
                    <div class="card-text"><strong>Price:</strong> ${travel.price}</div>
            </div>
         </div>
       
    `;
    travelContainer.insertAdjacentHTML('beforeend', travelCard);
});

let clickElements = document.getElementsByClassName('travel-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = travels[i].imgSrc;
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
