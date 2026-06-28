// Booking Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            let name = document.getElementById("name").value.trim();

            let email = document.getElementById("email").value.trim();

            let phone = document.getElementById("phone").value.trim();

            let checkin = document.getElementById("checkin").value;

            let checkout = document.getElementById("checkout").value;

            let guests = document.getElementById("guests").value;

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (email === "") {
                alert("Email is required.");
                return;
            }

            if (phone === "") {
                alert("Phone number is required.");
                return;
            }

            if (checkin === "") {
                alert("Please select the check-in date.");
                return;
            }

            if (checkout === "") {
                alert("Please select the check-out date.");
                return;
            }

            if (guests === "") {
                alert("Please enter the number of guests.");
                return;
            }

            alert("Room booked successfully! Thank you for choosing Royal Paradise Hotel.");

            form.reset();

        });

    }

});