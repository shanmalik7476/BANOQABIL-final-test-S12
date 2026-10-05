/* ==========================================================================
   MEA'S SHOELLE - INTERACTIVE THEME JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;
  const cartBadge = document.querySelector('.cart-count-badge');
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  document.body.appendChild(toast);

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2800);
  }

  // Add to cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn, .btn-primary-purple, .btn-black-pill');
  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cartCount++;
      if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);
      }
      const productCard = btn.closest('.product-card');
      const title = productCard ? productCard.querySelector('.product-title').textContent.trim() : 'Item';
      showToast(`Added "${title}" to your cart!`);
    });
  });

  // Wishlist toggle
  const wishlistButtons = document.querySelectorAll('.wishlist-btn');
  wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('active');
      const isFavorited = btn.classList.contains('active');
      const heartSvg = btn.querySelector('svg path');
      if (isFavorited) {
        btn.style.color = '#e11d48';
        if (heartSvg) heartSvg.setAttribute('fill', '#e11d48');
        showToast('Saved to your wishlist! ♥');
      } else {
        btn.style.color = '#726e7e';
        if (heartSvg) heartSvg.setAttribute('fill', 'none');
        showToast('Removed from wishlist');
      }
    });
  });

  // Category pills click
  const categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      categoryItems.forEach(c => c.style.background = 'transparent');
      item.style.background = 'var(--lavender-soft)';
      const label = item.querySelector('.category-label').textContent.trim();
      showToast(`Browsing ${label} collection...`);
    });
  });

  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      if (input && input.value.trim() !== '') {
        showToast(`Thank you! 10% discount code sent to ${input.value}`);
        input.value = '';
      } else {
        showToast('Please enter a valid email address');
      }
    });
  }

  // Watch video button
  const watchVideoBtn = document.querySelector('.btn-video-watch');
  if (watchVideoBtn) {
    watchVideoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Opening 360° product video preview...');
    });
  }
});
