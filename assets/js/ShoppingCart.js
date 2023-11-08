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

// Usage:

const checkedItems = [];
const quantity = 1;

const cart = document.getElementById("cart");

console.log(localStorage.getItem('cartItemIds'));

let listOFId = JSON.parse(localStorage.getItem('cartItemIds'));

const items = [
  { id: 1, name: 'Learn Hangul, Korean alphabet', detail: 'We will learn how to read and write Korean', price: 50, imgSrc: '/assets/images/hangul1.jpg'},
  { id: 2, name: 'Learn Korean language (any level)', detail: 'You will learn how to speak Korean elegantly', price: 50, imgSrc: '/assets/images/hangul.jpg' },
  { id: 3, name: 'Learn Korean with K-pop', detail: 'You can bring any K-pop song you like', price: 50, imgSrc: '/assets/images/kpop.jpg' },
  { id: 4, name: 'Learn Korean with K-drama', detail: 'You can bring any K-drama/Korean film you like', price: 50, imgSrc: '/assets/images/drama.jpg' },
  ];

//console.log(item);
handleCheckChange = function () {};
handleQuantityChange = function () {};
handleDelete = function () {};
const cartItem = createCartItemElement(
  items,
  checkedItems,
  handleCheckChange,
  handleQuantityChange,
  handleDelete,
  quantity
);
cart.appendChild(cartItem);

listOFId.forEach(idFromLocalStorage =>{
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

// let idGroup = listOFId.reduce((acc, cur) => {
//   acc[cur] += 1;
// }, []);

// console.log(idGroup);


// Order summary

function updateOrderSummary(totalQty, totalAmount) {
  const totalQtyElement = document.getElementById("totalQty");
  const totalAmountElement = document.getElementById("totalAmount");

  if (totalQtyElement && totalAmountElement) {
    totalQtyElement.textContent = totalQty + " Items";
    totalAmountElement.textContent = totalAmount + " CHF";
  }
}
// Usage:
// const totalQty = 5; // Replace with your actual totalQty
// const totalAmount = 50; // Replace with your actual totalAmount

let totalQty = listOFId.length;
let totalAmount = 0;
for (let i = 0; i < listOFId.length; i++) {
  console.log(items[listOFId[i]].price)
  totalAmount += items[listOFId[i]].price;
}
console.log(totalQty, totalAmount)
console.log(listOFId)

updateOrderSummary(totalQty, totalAmount);
// Existing code for rendering the cart items, handling checkboxes, etc.
