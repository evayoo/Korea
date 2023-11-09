// Function to create a cart item element . object of item
function createCartItemElement(
  item,
  checkedItems,
  handleCheckChange,
  handleQuantityChange,
  handleDelete,
  quantity
) {
  const cartItem = document.createElement("li");
  cartItem.className = "cart-item-body";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "cart-item-checkbox";
  checkbox.addEventListener("change", (e) => {
    handleCheckChange(e.target.checked, item.id);
  });
  checkbox.checked = checkedItems.includes(item.id);

  const thumbnail = document.createElement("div");
  thumbnail.className = "cart-item-thumbnail";

  const img = document.createElement("img");
  img.src = item.imgSrc;
  img.alt = item.name;

  thumbnail.appendChild(img);

  const info = document.createElement("div");
  info.className = "cart-item-info";

  const title = document.createElement("div");
  title.className = "cart-item-title";
  title.setAttribute("data-testid", item.name);
  title.textContent = item.name;

  const price = document.createElement("div");
  price.className = "cart-item-price";
  price.textContent = item.price + " CHF";

  // Add item details to the cart item
  const detail = document.createElement("div");
  detail.className = "cart-item-detail";
  detail.textContent = item.detail;

  info.appendChild(title);
  info.appendChild(price);
  info.appendChild(detail);

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.min = 1;
  quantityInput.className = "cart-item-quantity";
  quantityInput.value = quantity;
  quantityInput.addEventListener("input", (e) => {
    handleQuantityChange(Number(e.target.value), item.id);
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "cart-item-delete";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    handleDelete(item.id);
  });

  cartItem.appendChild(checkbox);
  cartItem.appendChild(thumbnail);
  cartItem.appendChild(info);
  cartItem.appendChild(quantityInput);
  cartItem.appendChild(deleteButton);

  return cartItem;
}

const checkedItems = [];
const quantity = 1;

const cart = document.getElementById("cart");

console.log(localStorage.getItem('cartItemIds'), 'cartItemIds');

let listOFId = JSON.parse(localStorage.getItem('cartItemIds'));

let items = [
    { id: 1, name: 'Bibimbap', detail: 'mixed rice with meat and assorted vegetables', cookingTime: '1 hour', price: 30, imgSrc: '/assets/images/bibim.jpg'},
    { id: 2, name: 'Kimbap', detail: 'cooked rice, vegetables, and meat rolled in dried seaweed', cookingTime: '1 hour', price: 30, imgSrc: '/assets/images/kimbap.jpg' },
    { id: 3, name: 'Kimchi', detail: 'fermented vegetables, most commonly using napa cabbage', cookingTime: '1 hour', price: 30, imgSrc: '/assets/images/kimchi.jpg' },
    { id: 4, name: 'Kimchijeon', detail: 'kimchi pancake', cookingTime: '20 min', price: 30, imgSrc: '/assets/images/kimchijeon.jpg' },
    { id: 5, name: 'Korean BBQ', detail: 'grilled meat wrapped with lettuce', cookingTime: '20 min', price: 30, imgSrc: '/assets/images/bbq.jpg' },
    { id: 6, name: 'Tteokbokki', detail: 'spicy rice cakes', cookingTime: '40 min', price: 30, imgSrc: '/assets/images/thuk.jpg' },
    { id: 7, name: 'Curry and rice', detail: 'rice with vegetable curry', cookingTime: '30 min', price: 15, imgSrc: '/assets/images/curry.jpg' },
    { id: 8, name: 'Deonjangguk', detail: 'soybean paste soup', cookingTime: '30 min', price: 15, imgSrc: '/assets/images/deonjang.jpg' },
    { id: 9, name: 'Miyeokguk', detail: 'seaweed soup', cookingTime: '10 min', price: 8, imgSrc: '/assets/images/miyeok.jpg' },
    { id: 10, name: 'Budaejjigae', detail: 'spicy soup made with a variety of ingredients', cookingTime: '30 min', price: 15, imgSrc: '/assets/images/budae.jpg' },
  { id: 11, name: 'Learn Hangul, Korean alphabet', detail: 'We will learn how to read and write Korean', price: 50, imgSrc: '/assets/images/hangul1.jpg'},
  { id: 12, name: 'Learn Korean language (any level)', detail: 'You will learn how to speak Korean elegantly', price: 50, imgSrc: '/assets/images/hangul.jpg' },
  { id: 13, name: 'Learn Korean with K-pop', detail: 'You can bring any K-pop song you like', price: 50, imgSrc: '/assets/images/kpop.jpg' },
  { id: 14, name: 'Learn Korean with K-drama', detail: 'You can bring any K-drama/Korean film you like', price: 50, imgSrc: '/assets/images/drama.jpg' },
  { id: 15, name: 'Shoulder and back massage', time: '20 min', price: 20, imgSrc: '/assets/images/back.jpg'},
  { id: 16, name: 'Neck, scalp and face massage', time: '20 min', price: 20, imgSrc: '/assets/images/neck.jpg' },
  { id: 17, name: 'Feet massage', time: '20 min', price: 20, imgSrc: '/assets/images/feet.jpg' },
  { id: 18, name: 'Hand and arm massage', time: '10 min', price: 10, imgSrc: '/assets/images/hand.jpg' },
  { id: 19, name: 'Whole body massage', time: '30 min', price: 30, imgSrc: '/assets/images/whole.jpg' },
  { id: 20, name: 'Book "item the Silk Road"', detail: 'The book is about my 8-month item trip across 14 countries. The price is including shipping fee within Switzerland', time: 'upto 3 delivery days', price: 45, imgSrc: '/assets/images/cycling.jpg'},
  { id: 21, name: 'Plan your item trip', detail: 'I can share tips for Eurasia route', time: '1 hour', price: 100, imgSrc: '/assets/images/route.png' },
  { id: 22, name: 'How to find sponsors', detail: 'I can tell you how I got 20,000 EUR sponsorship from 13 companies', time: '1 hour', price: 100, imgSrc: '/assets/images/sponsor.jpeg' },
  { id: 23, name: 'How to train yourself', detail: 'I trained myself in 3 months', time: '30 minutes', price: 30, imgSrc: '/assets/images/train.jpeg' },
  { id: 24, name: 'Modern item', price: 50, imgSrc: '/assets/images/modern.jpeg'},
  { id: 25, name: 'Summer item', price: 40, imgSrc: '/assets/images/dress.jpeg' },
  { id: 26, name: 'Summer blouse', price: 30, imgSrc: '/assets/images/blouse.jpeg' },
  { id: 27, name: 'Couple item', price: 100, imgSrc: '/assets/images/hanbok3.jpg' },
  { id: 28, name: 'Write a press release', detail: 'I will interview you on zoom, and write a PR', link: 'none', time: '2 hours', price: 100, imgSrc: '/assets/images/write.jpg'},
            { id: 29, name: 'Send a press release', detail: 'I will send PR to Etnews.com with 1.5 million readership', link: '.', time: '3 days', price: 500, imgSrc: '/assets/images/send.jpg' },
            { id: 30, name: 'Write a blog on Naver', detail: 'Naver, the most widespread blog platform in Korea, I have 500+ daily visits', link: '.', time: '1 hour', price: 100, imgSrc: '/assets/images/naver.png' },
            { id: 31, name: 'Film a YouTube', detail: '', link: '<a href="src="https://www.youtube.com/channel/UC3kgDVVTCt7vF2opmPGp0-w">YouTube channel Chaewon Yoo</a>.', time: '5 days', price: 500, imgSrc: '/assets/images/youtube.jpg' },
            { id: 32, name: 'Post on Facebook, X, Instagram, LinkedIn', detail: 'I will post a link/image on social media. I have 1200+ followers', link: '.', time: '3 hours', price: 300, imgSrc: '/assets/images/fb.jpg' },
            { id: 33, name: 'Translation', detail: 'I can translate Eng > Kor, Kor > Eng', link: '.', time: 'vary', price: 10, imgSrc: '/assets/images/trans.jpg' },
            { id: 34, name: 'Reaching out to companies', detail: 'I can link you with the right company/person', link: '.', time: '50 CHF/hour', price: 15, imgSrc: '/assets/images/biz.jpg' },
            { id: 35, name: 'Set up Korea item plan', detail: 'I can help you set up a customized Korea trip. The price is based on hour', price: 50, imgSrc: '/assets/images/korea.jpg'},
            { id: 36, name: 'Hire a Korean guide', detail: 'English speaking guide will acompany you. The price is based on hour', price: 30, imgSrc: '/assets/images/guide.jpg' },
            { id: 37, name: 'Hire a driver', detail: 'A professional driver will acompany you with a SUV with maximum passengers of 6 people. The price is based on hour', price: 30, imgSrc: '/assets/images/driver.jpg' },
            { id: 38, name: 'Plan a Korean item ceremony', detail: 'I can help you plan a item ceremony in Seoul. The price is per day', price: 10000 , imgSrc: '/assets/images/plan.jpg'},
            { id: 39, name: 'Wedding photography', detail: 'I can help you book a item photo session in Seoul. The price is per day', price: 800, imgSrc: '/assets/images/photo.jpg' },
            { id: 40, name: 'Makeup & Hair', detail: 'I can help you book a Makeup & Hair service in Seoul. The price is per day', price: 150, imgSrc: '/assets/images/hair.jpg' },
            { id: 41, name: 'Learn about Korean traditional item', detail: 'I can tell you about with pictures', price: 0, imgSrc: '/assets/images/tradition.jpg'},
            { id: 42, name: 'Learn about Korean traditional music', detail: 'I can share some nice Korean traditional music with you', price: 0, imgSrc: '/assets/images/music.jpg' },
           
];
let result = removeDupl (listOFId)
function removeDupl(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
  }
handleCheckChange = function () {};
handleQuantityChange = function () {};
handleDelete = function () {};

result.forEach(idFromLocalStorage =>{
  items.forEach((service) => {
     if( service.id === idFromLocalStorage){
      let cartItem = createCartItemElement(
        service,
        checkedItems,
        handleCheckChange,
        handleQuantityChange,
        handleDelete,
        quantity
      );
      cart.appendChild(cartItem);
     }
  })

})

function updateOrderSummary(totalQty, totalAmount) {
  const totalQtyElement = document.getElementById("totalQty");
  const totalAmountElement = document.getElementById("totalAmount");

  if (totalQtyElement && totalAmountElement) {
    totalQtyElement.textContent = totalQty + " Items";
    totalAmountElement.textContent = totalAmount + " CHF";
  }
}
let totalQty = result.length;
let totalAmount = 0;
for (let i = 0; i < result.length; i++) {
  console.log(items[result[i]].price)
  totalAmount += items[result[i]].price;
}
console.log(totalQty, totalAmount)
console.log(result)

updateOrderSummary(totalQty, totalAmount);