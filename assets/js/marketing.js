const marketings = [
            { name: 'Write a press release', detail: 'I will interview you on zoom, and write a PR', link: 'none', time: '2 hours', price: '100 CHF', imgSrc: '/assets/images/bibim.jpg'},
            { name: 'Send a press release', detail: 'I will send PR to Etnews.com with 1.5 million readership', link: '.', time: '3 days', price: '500 CHF', imgSrc: '/assets/images/kimbap.jpg' },
            { name: 'Write a blog on Naver', detail: 'Naver, the most widespread blog platform in Korea, I have 500+ daily visits', link: '.', time: '1 hour', price: '100 CHF', imgSrc: '/assets/images/kimchi.jpg' },
            { name: 'Film a YouTube', detail: '', link: '<a href="src="https://www.youtube.com/channel/UC3kgDVVTCt7vF2opmPGp0-w">YouTube channel Chaewon Yoo</a>.', time: '5 days', price: '500 CHF', imgSrc: '/assets/images/kimchijeon.jpg' },
            { name: 'Post on Facebook, X, Instagram, LinkedIn', detail: 'I will post a link/image on social media. I have 1200+ followers', link: '.', time: '3 hours', price: '300 CHF', imgSrc: '/assets/images/bbq.jpg' },
            { name: 'Translation', detail: 'I can translate Eng > Kor, Kor > Eng', link: '.', time: 'vary', price: '10 CHF/page', imgSrc: '/assets/images/thuk.jpg' },
            { name: 'Reaching out to companies', detail: 'I can link you with the right company/person', link: '.', time: '50 CHF/hour', price: '15 CHF', imgSrc: '/assets/images/curry.jpg' },
            ];
        
        const marketingContainer = document.getElementById('marketing-container');
        
        marketings.forEach(function (marketing) {
            let marketingCard = `
                 <div class="d-flex mb-4">
                    <div class="marketing-wrap">
                        <img src="${marketing.imgSrc}" class="marketing-photo" alt="${marketing.name}'s picture">
                    </div>
                    <div class="info d-none">
                            <h5 class="card-title">${marketing.name}</h5>
                            <div class="card-text mt-4"><strong>link:</strong> ${marketing.link}</div>
                            <div class="card-text"><strong>Cooking time:</strong> ${marketing.time}</div>
                            <div class="card-text"><strong>Price:</strong> ${marketing.price}</div>
                    </div>
                 </div>
               
            `;
            marketingContainer.insertAdjacentHTML('beforeend', marketingCard);
        });
        
        let clickElements = document.getElementsByClassName('marketing-photo');
        let targetElements = document.getElementsByClassName('info');
        
        for (let i = 0; i < clickElements.length; i++) {
            clickElements[i].addEventListener('click', function () {
                hideAllExcept(i);
                targetElements[i].classList.toggle('d-none');
            });
        
            clickElements[i].addEventListener('mouseout', function () {
                clickElements[i].src = marketings[i].imgSrc;
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
        