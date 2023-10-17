const weddings = [
    { name: 'Plan a Korean wedding ceremony', detail: 'I can help you plan a wedding ceremony in Seoul', price: '10,000 CHF/day', imgSrc: '/assets/images/plan.jpg'},
    { name: 'Wedding photo', detail: 'I can help you book a wedding photo session in Seoul', price: '800 CHF/day', imgSrc: '/assets/images/photo.jpg' },
    { name: 'Makeup & Hair', detail: 'I can help you book a Makeup & Hair service in Seoul', price: '150 CHF/day', imgSrc: '/assets/images/hair.jpg' },
    { name: 'Learn about Korean traditional wedding', detail: 'I can tell you about with pictures', price: 'free', imgSrc: '/assets/images/music.jpg'},
    { name: 'Learn about Korean traditional music', detail: 'I can share some nice Korean traditional music with you', price: 'free', imgSrc: '/assets/images/tradition.jpg' },
    ];

const weddingContainer = document.getElementById('wedding-container');

weddings.forEach(function (wedding) {
    let weddingCard = `
         <div class="d-flex mb-4">
            <div class="wedding-wrap">
                <img src="${wedding.imgSrc}" class="wedding-photo" alt="${wedding.name}'s picture">
            </div>
            <div class="info d-none">
                    <h5 class="card-title">${wedding.name}</h5>
                    <div class="card-text mt-4"><strong>Detail:</strong> ${wedding.detail}</div>
                    <div class="card-text"><strong>Price:</strong> ${wedding.price}</div>
            </div>
         </div>
       
    `;
    weddingContainer.insertAdjacentHTML('beforeend', weddingCard);
});

let clickElements = document.getElementsByClassName('wedding-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = weddings[i].imgSrc;
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

