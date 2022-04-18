var hotel = {
  name : 'Quay',
  rooms : 40,
  booked : 25,
  function(){
    return this.rooms - this.booked;
  }
};
var elName = doccument.getElementById('hotelname');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
