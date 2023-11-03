function createCartItemElement(item, checkedItems, handleCheckChange, handleQuantityChange, handleDelete, quantity) {
  const cartItem = document.createElement('li');
  cartItem.className = 'cart-item-body';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'cart-item-checkbox';
  checkbox.addEventListener('change', (e) => {
    handleCheckChange(e.target.checked, item.id);
  });
  checkbox.checked = checkedItems.includes(item.id);

  const thumbnail = document.createElement('div');
  thumbnail.className = 'cart-item-thumbnail';

  const img = document.createElement('img');
  img.src = item.img;
  img.alt = item.name;

  thumbnail.appendChild(img);

  const info = document.createElement('div');
  info.className = 'cart-item-info';

  const title = document.createElement('div');
  title.className = 'cart-item-title';
  title.setAttribute('data-testid', item.name);
  title.textContent = item.name;

  const price = document.createElement('div');
  price.className = 'cart-item-price';
  price.textContent = item.price + ' CHF';

  info.appendChild(title);
  info.appendChild(price);

  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.min = 1;
  quantityInput.className = 'cart-item-quantity';
  quantityInput.value = quantity;
  quantityInput.addEventListener('input', (e) => {
    handleQuantityChange(Number(e.target.value), item.id);
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'cart-item-delete';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
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
const cart = document.getElementById('cart');
let item = {
  id: 1,
  img: '../../assets/images/bibim.jpg',
  name: 'Bibimbap',
  price: 30,
};
const checkedItems = [];
const quantity = 1;

console.log(item);
handleCheckChange = function(){};
handleQuantityChange = function(){};
handleDelete = function(){};
const cartItem = createCartItemElement(item, checkedItems, handleCheckChange, handleQuantityChange, handleDelete, quantity);
cart.appendChild(cartItem);





// Order summary 

function updateOrderSummary(totalQty, total) {
  const totalQtyElement = document.getElementById('totalQty');
  const totalAmountElement = document.getElementById('totalAmount');

  if (totalQtyElement && totalAmountElement) {
    totalQtyElement.textContent = totalQty + ' Items';
    totalAmountElement.textContent = total + ' CHF';
  }
}

// Usage:
const totalQty = 5; // Replace with your actual totalQty
const total = 50;   // Replace with your actual total

updateOrderSummary(totalQty, total);


//
document.addEventListener('DOMContentLoaded', function () {
  const selectAllCheckbox = document.getElementById('selectAllCheckbox');
  const totalQtyElement = document.getElementById('totalQty');
  const totalAmountElement = document.getElementById('totalAmount');
  const cartItemList = document.getElementById('cart-item-list');

  const cartItems = [
    // Replace with your cart items
  ];

  const items = [
    // Replace with your items
  ];

  const checkedItems = cartItems.map((el) => el.itemId);

  selectAllCheckbox.addEventListener('change', function () {
    const isChecked = selectAllCheckbox.checked;
    updateCheckboxes(isChecked);
  });

  function updateCheckboxes(isChecked) {
    const checkboxes = cartItemList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
    checkedItems.length = 0;

    if (isChecked) {
      cartItems.forEach(function (item) {
        checkedItems.push(item.itemId);
      });
    }
  }

  function updateTotal() {
    let totalQty = 0;
    let totalAmount = 0;

    cartItems.forEach(function (cartItem) {
      if (checkedItems.includes(cartItem.itemId)) {
        const item = items.find((item) => item.id === cartItem.itemId);
        if (item) {
          totalQty += cartItem.quantity;
          totalAmount += cartItem.quantity * item.price;
        }
      }
    });

    totalQtyElement.textContent = totalQty + ' Items';
    totalAmountElement.textContent = totalAmount + ' CHF';
  }

  function handleCheckChange(e, id) {
    const isChecked = e.target.checked;
    if (isChecked) {
      checkedItems.push(id);
    } else {
      const index = checkedItems.indexOf(id);
      if (index !== -1) {
        checkedItems.splice(index, 1);
      }
    }
    updateTotal();
  }

  function renderCartItem(item, quantity) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    // Create and append elements for the cart item, including checkboxes, quantity input, delete button, etc.
    // Add event listeners for checkboxes, quantity input, and delete button
    // Append cartItem to cartItemList
  }

  // Render cart items
  cartItems.forEach(function (cartItem) {
    const item = items.find((item) => item.id === cartItem.itemId);
    if (item) {
      renderCartItem(item, cartItem.quantity);
    }
  });

  // Initialize the total
  updateTotal();
});








