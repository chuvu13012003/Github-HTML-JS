(function() {
    var hotel = {
        name: 'Park',
        roomrate: 240,
        discount: 15,
        offerPrice: function(){
            var offerRate = this.roomRate * ((100 - this.discount)/100);
        }
    };
    var hotelName, roomRate, specitalRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    hotelName.textContent = hotel.name;
    roomRate.textConent = '$' + hotel.roomRate.toFixed(2);

    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekFromTodday, day, date, month, year, dayNames, monthNames;

        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        day = dayNames[weeFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMoth()];
        year = weekFromToday.getFullYear();

        exiryMsg = 'Offer exoires next ';
        expiryMsg += day + ' <br />(' + date +'' + moth +'' + year +' )';
        return expiryMsg;
    }

    todya = new Date();
    elEnd = document.getElementById('offerEnds');
    elEnd.innerHTML = odderExpires(today);
}())