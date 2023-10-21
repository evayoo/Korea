const hanboks = [
    { name: 'Modern hanbok', price: '50 CHF/hour', imgSrc: '/assets/images/modern.jpeg'},
    { name: 'Summer hanbok', price: '40 CHF/hour', imgSrc: '/assets/images/dress.jpeg' },
    { name: 'Summer blouse', price: '30 CHF/hour', imgSrc: '/assets/images/blouse.jpeg' },
    { name: 'Couple hanbok', price: '100 CHF/hour', imgSrc: '/assets/images/hanbok3.jpg' },
    ];

const hanbokContainer = document.getElementById('hanbok-container');

hanboks.forEach(function (hanbok) {
    let hanbokCard = `
         <div class="d-flex mb-4">
         <div class="hanbok-wrap d-flex flex-column">
         <img src="${hanbok.imgSrc}" class="hanbok-photo" alt="${hanbok.name}'s picture">
         <h5 class="card-title1">${hanbok.name}</h5>
         </div>
            <div class="info d-none">
                    <h5 class="card-title">${hanbok.name}</h5>
                    <div class="card-text"><strong>Price:</strong> ${hanbok.price}</div>
            </div>
         </div>
       
    `;
    hanbokContainer.insertAdjacentHTML('beforeend', hanbokCard);
});

let clickElements = document.getElementsByClassName('hanbok-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = hanboks[i].imgSrc;
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
