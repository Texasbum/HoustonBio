// ============================
// Initialize Leaflet map
// ============================
var map = L.map('map').setView([32.9191, -118.5093], 7);

// Default OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add static markers
var markers = [
  { coords: [32.9191, -118.5093], popup: "Island Wildlife Biologist" },
  { coords: [47.1758, -113.4793], popup: "Catching Lynx in the Snow" },
  { coords: [48.7592, -114.2843], popup: "Camera Trapping a Mountain Range" },
  { coords: [37.1864, -118.7033], popup: "Backcountry Alpine Lake Restoration" },
  { coords: [35.7854, -78.6813], popup: "BHA Club President" },
  { coords: [44.5754, -118.4934], popup: "USFS Fisheries Technician" },
  { coords: [35.8563, -75.8629], popup: "Red Wolf/Quail Technician" },
  { coords: [35.7910, -78.7015], popup: "Microbiology Lab Technician" },
  { coords: [34.2224, -77.8684], popup: "Marine Biology Camper" },
];

markers.forEach(function(m) {
  L.marker(m.coords).addTo(map).bindPopup(m.popup);
});

// ============================
// Scrollama setup
// ============================
var steps = document.querySelectorAll('.step');
var scroller = scrollama();

// Handle step enter
function handleStepEnter(response) {
  // Remove active class from all steps
  steps.forEach(step => step.classList.remove('active'));

  // Add active class to current step
  response.element.classList.add('active');

  // Fly map to step's coordinates
  let loc = JSON.parse(response.element.dataset.loc);
  let zoom = parseInt(response.element.dataset.zoom);
  map.flyTo(loc, zoom, { duration: 1.2 });

  // Fade in all images in this step
  const imgs = response.element.querySelectorAll('.step-img');
  imgs.forEach((img, i) => {
    img.style.opacity = 0;
    img.style.transform = 'translateY(20px)';
    setTimeout(() => {
      img.style.opacity = '1';
      img.style.transform = 'translateY(0)';
    }, i * 150); // stagger each image
  });
}

// Responsive scroll offset
function getOffset() {
  return window.innerWidth < 992 ? 0.8 : 0.6;
}

// Initialize Scrollama
scroller.setup({
  step: '.step',
  offset: getOffset()
}).onStepEnter(handleStepEnter);

// Resize handler
window.addEventListener('resize', function() {
  scroller.resize();
});