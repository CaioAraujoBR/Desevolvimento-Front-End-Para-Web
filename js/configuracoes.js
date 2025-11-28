
const cidadeImaginaria = [-15.7801, -47.9292]


const map = L.map('map').setView(cidadeImaginaria, 13); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Mapa fictício com Leaflet & OpenStreetMap', 
}).addTo(map); 


L.marker(cidadeImaginaria) 
  .addTo(map) 
  .bindPopup('<b>Rua Sem Número</b><br>Centro da Cidade Imaginária.') 
  .openPopup(); 