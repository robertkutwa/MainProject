function myFunction() {
    var x = document.getElementsByClassName("navbar")[0];
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

$(function () {
    $("#datepicker").datepicker({ 
        minDate: 0,
        dateFormat: 'yy-mm-dd'
     }); 
});

$(document).ready(function() {
    $('form').on('submit', function(event) {  // Explicitly using .on('submit')
        event.preventDefault(); 

        var formData = $(this).serialize();

        console.log("Form Data:", formData);

        window.location.href = "thankyou.html"; 

    });
});