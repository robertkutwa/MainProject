$(document).ready(function () {
    $("#bookingForm").submit(function (event) {
        event.preventDefault();
        var bookingDate = $("#datepicker").val();
        alert("Booking date: " + bookingDate);
    });
});
function myFunction() {
    var x = document.getElementsByClassName("navbar")[0];
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

$(function () {
    $("#datepicker").datepicker({ minDate: 0 }); // minDate: 0 makes past dates disabled
});