const koreans = [
    { name: 'Learn Hangul, Korean alphabet', detail: 'We will learn how to read and write Korean', price: '50 CHF/hour', imgSrc: '/assets/images/bibim.jpg'},
    { name: 'Learn Korean language (any level)', detail: 'You will learn how to speak Korean elegantly', price: '50 CHF/hour', imgSrc: '/assets/images/kimbap.jpg' },
    { name: 'Learn Korean with K-pop', detail: 'You can bring any K-pop song you like', price: '50 CHF/hour', imgSrc: '/assets/images/kimchi.jpg' },
    { name: 'Learn Korean with K-drama', detail: 'You can bring any K-drama/Korean film you like', price: '50 CHF/hour', imgSrc: '/assets/images/kimchijeon.jpg' },
    ];

const koreanContainer = document.getElementById('korean-container');

koreans.forEach(function (korean) {
    let koreanCard = `
         <div class="d-flex mb-4">
            <div class="korean-wrap">
                <img src="${korean.imgSrc}" class="korean-photo" alt="${korean.name}'s picture">
            </div>
            <div class="info d-none">
                    <h5 class="card-title">${korean.name}</h5>
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
