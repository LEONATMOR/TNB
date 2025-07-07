
document.addEventListener('DOMContentLoaded', () => {
  let cart = [];
  const buttons = document.querySelectorAll('.product button');
  const footer = document.querySelector('footer');

  const updateCartSummary = () => {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let itemCount = cart.length;
    const summary = document.querySelector('.cart-summary');
    if (!summary) {
      const newSummary = document.createElement('div');
      newSummary.className = 'cart-summary';
      newSummary.innerHTML = `
        <hr>
        <h4>🛒 עגלת קניות:</h4>
        <p>סה"כ פריטים: <span id="itemCount">${itemCount}</span></p>
        <p>סה"כ לתשלום: ₪<span id="totalPrice">${total.toFixed(2)}</span></p>
      `;
      footer.appendChild(newSummary);
    } else {
      summary.querySelector('#itemCount').textContent = itemCount;
      summary.querySelector('#totalPrice').textContent = total.toFixed(2);
    }
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.product');
      const title = product.querySelector('h3').textContent;
      const priceText = product.querySelector('strong').textContent.replace('₪', '');
      const price = parseFloat(priceText);
      cart.push({ title, price });
      updateCartSummary();
      alert(`המוצר "${title}" נוסף לעגלה.`);
    });
  });
});
