// let splide = document.querySelector('.product-cards-slider');

// let hotspots = document.querySelectorAll('.hotspot');

// hotspots.forEach((hotspot) => {
//   // To add is-active class to hotspot
//   hotspot.addEventListener('click', function (e) {
//     removeActiveClassFromHotspot();

//     let i = e.target.dataset.index;
//     splide.splide.go(parseInt(i));
//     e.target.classList.add('is-active');
//   });

//   // To sync arrow buttons with hotspot
//   splide.splide.on('move', (newIndex) => {
//     removeActiveClassFromHotspot();

//     let currentHotspot = document.querySelector(`[data-index="${newIndex}"]`);
//     currentHotspot.classList.add('is-active');
//   });
// });

// function removeActiveClassFromHotspot() {
//   hotspots.forEach((hotspot) => {
//     if (hotspot.classList.contains('is-active')) {
//       hotspot.classList.remove('is-active');
//     }
//   });
// }




document.addEventListener('DOMContentLoaded', () => {
    // Select the Splide slider and hotspots
    const splideElement = document.querySelector('.product-cards-slider');
    const hotspots = document.querySelectorAll('.hotspot');
  
    // Check if Splide and hotspots exist
    if (!splideElement || hotspots.length === 0) return;
  
    // Initialize Splide
    const splide = new Splide('.product-cards-slider', {
      pagination: false, // Disable pagination
      // You can include other options here if needed
    }).mount();
    // Add click event listeners to hotspots
    hotspots.forEach((hotspot) => {
      hotspot.addEventListener('click', function (e) {
        // Remove the 'is-active' class from all hotspots
        removeActiveClassFromHotspot();
  
        // Get the index of the clicked hotspot
        const index = parseInt(e.target.dataset.index, 10);
  
        // Go to the slide corresponding to the hotspot index
        splide.go(index);
  
        // Add 'is-active' class to the clicked hotspot
        e.target.classList.add('is-active');
      });
    });
  
    // Update active hotspot when slider changes
    splide.on('move', (newIndex) => {
      removeActiveClassFromHotspot();
  
      // Add 'is-active' class to the hotspot corresponding to the new slide index
      const currentHotspot = document.querySelector(`[data-index="${newIndex}"]`);
      if (currentHotspot) {
        currentHotspot.classList.add('is-active');
      }
    });
  
    // Function to remove 'is-active' class from all hotspots
    function removeActiveClassFromHotspot() {
      hotspots.forEach((hotspot) => {
        hotspot.classList.remove('is-active');
      });
    }
  });