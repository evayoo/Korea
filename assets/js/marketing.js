const items = [
            { id: 28, name: 'Write a press release', detail: 'I will interview you on zoom, and write a PR', link: 'none', time: '2 hours', price: 100, imgSrc: '/assets/images/write.jpg'},
            { id: 29, name: 'Send a press release', detail: 'I will send PR to Etnews.com with 1.5 million readership', link: '.', time: '3 days', price: 500, imgSrc: '/assets/images/send.jpg' },
            { id: 30, name: 'Write a blog on Naver', detail: 'Naver, the most widespread blog platform in Korea, I have 500+ daily visits', link: '.', time: '1 hour', price: 100, imgSrc: '/assets/images/naver.png' },
            { id: 31, name: 'Film a YouTube', detail: '', link: '<a href="src="https://www.youtube.com/channel/UC3kgDVVTCt7vF2opmPGp0-w">YouTube channel Chaewon Yoo</a>.', time: '5 days', price: 500, imgSrc: '/assets/images/youtube.jpg' },
            { id: 32, name: 'Post on Facebook, X, Instagram, LinkedIn', detail: 'I will post a link/image on social media. I have 1200+ followers', link: '.', time: '3 hours', price: 300, imgSrc: '/assets/images/fb.jpg' },
            { id: 33, name: 'Translation', detail: 'I can translate Eng > Kor, Kor > Eng', link: '.', time: 'vary', price: 10, imgSrc: '/assets/images/trans.jpg' },
            { id: 34, name: 'Reaching out to companies', detail: 'I can link you with the right company/person', link: '.', time: '50 CHF/hour', price: 15, imgSrc: '/assets/images/biz.jpg' },
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
                            <div class="card-text mt-4"><strong>link:</strong> ${item.detail}</div>
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
        