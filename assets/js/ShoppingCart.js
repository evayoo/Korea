// Function to create a cart item element
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
  img.src = item.img;
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
const cart = document.getElementById("cart");
let item = {
  id: 1,
  img: "../../assets/images/bibim.jpg",
  name: "Bibimbap",
  price: 30 // Add item detail
};
const checkedItems = [];
const quantity = 1;

console.log(item);
handleCheckChange = function () {};
handleQuantityChange = function () {};
handleDelete = function () {};
const cartItem = createCartItemElement(
  item,
  checkedItems,
  handleCheckChange,
  handleQuantityChange,
  handleDelete,
  quantity
);
cart.appendChild(cartItem);

// Order summary

function updateOrderSummary(totalQty, total) {
  const totalQtyElement = document.getElementById("totalQty");
  const totalAmountElement = document.getElementById("totalAmount");

  if (totalQtyElement && totalAmountElement) {
    totalQtyElement.textContent = totalQty + " Items";
    totalAmountElement.textContent = total + " CHF";
  }
}

// Usage:
const totalQty = 5; // Replace with your actual totalQty
const total = 50; // Replace with your actual total

updateOrderSummary(totalQty, total);

// Existing code for rendering the cart items, handling checkboxes, etc.
