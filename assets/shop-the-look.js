// document.addEventListener('DOMContentLoaded', function() {
//     const dots = document.querySelectorAll('.shop-the-look .dot');
//     const productCards = document.querySelectorAll('.shop-the-look .product-card');
  
//     dots.forEach(dot => {
//       dot.addEventListener('click', function() {
//         const productId = dot.getAttribute('data-product-id');
  
//         productCards.forEach(card => {
//           card.style.display = 'block'; // Hide all product cards
//         });
  
//         document.getElementById(`product-${productId}`).style.display = 'block'; // Show the clicked product card
//       });
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Splide
    var splide = new Splide('.shop-the-look__product-info.splide', {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      arrows: true,
      pagination: false,
    }).mount();
  
    // Handle Hotspot Click
    document.querySelectorAll('.shop-the-look__hotspot').forEach(function(hotspot) {
      hotspot.addEventListener('click', function() {
        var index = parseInt(hotspot.getAttribute('data-index'), 10) - 1;
        splide.go(index);
        document.querySelectorAll('.shop-the-look__hotspot').forEach(function(h) {
          h.classList.remove('lg-hotspot--selected');
        });
        hotspot.classList.add('lg-hotspot--selected');
      });
    });
  });
  