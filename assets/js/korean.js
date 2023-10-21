const koreans = [
    { name: 'Learn Hangul, Korean alphabet', detail: 'We will learn how to read and write Korean', price: '50 CHF/hour', imgSrc: '/assets/images/hangul1.jpg'},
    { name: 'Learn Korean language (any level)', detail: 'You will learn how to speak Korean elegantly', price: '50 CHF/hour', imgSrc: '/assets/images/hangul.jpg' },
    { name: 'Learn Korean with K-pop', detail: 'You can bring any K-pop song you like', price: '50 CHF/hour', imgSrc: '/assets/images/kpop.jpg' },
    { name: 'Learn Korean with K-drama', detail: 'You can bring any K-drama/Korean film you like', price: '50 CHF/hour', imgSrc: '/assets/images/drama.jpg' },
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
            </div>
         </div>
       
    `;
    koreanContainer.insertAdjacentHTML('beforeend', koreanCard);
});

let clickElements = document.getElementsByClassName('korean-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = koreans[i].imgSrc;
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
