var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkavailability = function() {
  return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elname.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
