
function updateCart() {
    const rows = document.querySelectorAll("tbody tr");
    let subtotal = 0;
  
    rows.forEach((row) => {
      const priceElement = row.querySelector("td:nth-child(2)");
      const quantityElement = row.querySelector(".qty span");
      const totalElement = row.querySelector("td:nth-child(4)");
  
      const price = parseFloat(priceElement.textContent.replace("R$ ", "").replace(",", "."));
      const quantity = parseInt(quantityElement.textContent);
      const total = price * quantity;
  
      totalElement.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  
      subtotal += total;
    });
  
    document.querySelector("aside .info div span:last-child").textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
    document.querySelector("aside footer span:last-child").textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
  }
  
  
  function changeQuantity(button, delta) {
    const quantityElement = button.parentElement.querySelector("span");
    let quantity = parseInt(quantityElement.textContent);
  
    quantity += delta;
  

    quantityElement.textContent = quantity;
    updateCart();
  }
  
  
  function removeProduct(button) {
    const row = button.closest("tr");
    row.remove();
    updateCart();
  }
  
  
  document.querySelectorAll(".qty button").forEach((button) => {
    button.addEventListener("click", function () {
      const delta = this.querySelector("i").classList.contains("bx-plus") ? 1 : -1;
      changeQuantity(this, delta);
    });
  });
  
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", function () {
      removeProduct(this);
    });
  });
  
  