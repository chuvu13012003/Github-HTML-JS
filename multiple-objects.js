function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this,checkAvailability = function() {
    return this.rooms - this booked;
  };
};

var quayhotel = new hotel('Quay', 40, 25);
var parkhotel = new hotel('Park', 120, 77);

var details1 = quayHotel.name + ' rooms ';
    details1 += quay hotel.checkAvailability();
var elHotel1 = document.getElementById('hotel');
elhotel1.textContent = details1;

var details2 = parkHotel.name + 'rooms';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

