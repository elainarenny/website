const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const cartCount = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const newsletterForm = document.querySelector('.newsletter-form');

let currentCartCount = 0;

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle('active', item === button));

    productCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentCartCount += 1;
    cartCount.textContent = String(currentCartCount);
    button.textContent = 'Added';

    setTimeout(() => {
      button.textContent = 'Add to cart';
    }, 1200);
  });
});

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = newsletterForm.querySelector('input');
  const button = newsletterForm.querySelector('button');

  if (!emailInput.value.trim()) {
    emailInput.focus();
    return;
  }

  button.textContent = 'Subscribed';
  button.disabled = true;
  emailInput.value = '';
});
