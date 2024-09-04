document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.shop-the-look .dot');
    const productCards = document.querySelectorAll('.shop-the-look .product-card');
  
    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        const productId = dot.getAttribute('data-product-id');
  
        productCards.forEach(card => {
          card.style.display = 'none'; // Hide all product cards
        });
  
        document.getElementById(`product-${productId}`).style.display = 'block'; // Show the clicked product card
      });
    });
  });
  