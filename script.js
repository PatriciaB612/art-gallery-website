// hover buttons states
const btn = document.querySelector('.btn')
const btnText = document.querySelector('.btn-text')
const arrowHolder = document.querySelector('.arrow-holder')

btn.addEventListener('mouseover', function () {
  btnText.style.backgroundColor = '#d5966c'
  arrowHolder.style.backgroundColor = 'black'
})

btn.addEventListener('mouseout', function () {
  btnText.style.backgroundColor = 'black'
  arrowHolder.style.backgroundColor = '#d5966c'
})

// location map

const map = L.map('location-map', { zoomControl: false }).setView(
  [41.48342, -71.31051],
  17
)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

const locationIcon = L.icon({
  iconUrl: 'assets/icon-location.svg',
  iconSize: [66, 88],
  iconAnchor: [35, 80],
  popupAnchor: [-3, -85],
})

L.marker([41.483425, -71.310517], { icon: locationIcon })
  .addTo(map)
  .bindPopup('Modern Art Gallery, 66 king street')
  .openPopup()
