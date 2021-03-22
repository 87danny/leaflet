let mymap = L.map("mapid").setView([40.62335461753955, -73.98945600229465], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(mymap);

let marker = L.marker([40.62335461753955, -73.98945600229465]).addTo(mymap);
marker.bindPopup("Mapleton Library").openPopup();
