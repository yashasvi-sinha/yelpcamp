const map = L.map('map').setView([18.95225, 72.80453], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const shopicon = L.icon({
    iconUrl: './images/shop.jpg',
    iconSize: [30, 30],
})

const shop = L.marker([18.95225, 72.80453], { icon: shopicon })
const customer = L.marker([18.952163, 72.803736], { draggable: true })
customer.addTo(map).bindPopup('You are here').openPopup()

shop.addTo(map)


function locationofuser(event) {
    customer.bindPopup('You are here').openPopup()
    console.log(customer.getLatLng())
}

function addpopup() {
    customer.bindPopup('You are here').openPopup()
}

customer.addEventListener('dragend', locationofuser)
customer.addEventListener('click', addpopup)

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
