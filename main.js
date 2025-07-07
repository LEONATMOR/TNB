
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "דשא סינטטי 1.5×3 מ׳",
      price: "89.9 ש" + '״ח',
      oldPrice: "120 ש" + '״ח',
      image: "grass.jpg"
    },
    {
      name: "מתלה כביסה איטלקי",
      price: "129.9 ש" + '״ח',
      oldPrice: "179 ש" + '״ח',
      image: "dryer.jpg"
    },
    {
      name: "מצלמה לילדים",
      price: "49.9 ש" + '״ח',
      oldPrice: "69.9 ש" + '״ח',
      image: "camera.jpg"
    },
    {
      name: "מראה בגימור זהב",
      price: "199.9 ש" + '״ח',
      oldPrice: "299.9 ש" + '״ח',
      image: "mirror.jpg"
    }
  ];

  const container = document.getElementById("productContainer");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p><s>${product.oldPrice}</s> <strong>${product.price}</strong></p>
      <a href="#" class="buy-button">לרכישה</a>
    `;
    container.appendChild(card);
  });
});
