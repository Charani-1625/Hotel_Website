// ===============================
// Calculate Booking Cost
// ===============================

function calculateCost() {

    let room = document.getElementById("room").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let guests = document.getElementById("guests").value;

    let totalCost = document.getElementById("totalCost");
    let summary = document.getElementById("bookingSummary");

    if (room === "" || checkin === "" || checkout === "") {

        totalCost.value = "";

        summary.innerHTML = "<p>Select your room and dates to see the booking summary.</p>";

        return;
    }

    let price = parseInt(room);

    let checkInDate = new Date(checkin);
    let checkOutDate = new Date(checkout);

    let nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    if (nights <= 0) {

        totalCost.value = "";

        summary.innerHTML = "<p style='color:red;'>Check-out date must be after check-in date.</p>";

        return;
    }

    let total = price * nights;

    totalCost.value = "₹" + total;

    let roomName = "";

    if (room == "3500") {

        roomName = "Deluxe Room";

    } else if (room == "5000") {

        roomName = "Executive Room";

    } else {

        roomName = "Luxury Suite";

    }

    summary.innerHTML = `

        <h4>Booking Summary</h4>

        <p><strong>Room:</strong> ${roomName}</p>

        <p><strong>Price per Night:</strong> ₹${price}</p>

        <p><strong>Nights:</strong> ${nights}</p>

        <p><strong>Guests:</strong> ${guests || 1}</p>

        <hr>

        <h3 style="color:#002147;">
            Total Amount: ₹${total}
        </h3>

    `;
}

// ===============================
// Booking Form Validation
// ===============================

document.addEventListener("DOMContentLoaded",function(){

const form=document.getElementById("bookingForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let checkin=document.getElementById("checkin").value;

let checkout=document.getElementById("checkout").value;

let room=document.getElementById("room").value;

let guests=document.getElementById("guests").value;

if(name===""){

alert("Please enter your name.");

return;

}

if(email===""){

alert("Please enter your email.");

return;

}

if(phone===""){

alert("Please enter your phone number.");

return;

}

if(checkin===""){

alert("Please select check-in date.");

return;

}

if(checkout===""){

alert("Please select check-out date.");

return;

}

if(room===""){

alert("Please select a room.");

return;

}

if(guests===""){

alert("Please enter number of guests.");

return;

}

alert("Booking Confirmed!\n\nThank you for choosing Royal Paradise Hotel.");

form.reset();

document.getElementById("totalCost").value="";

document.getElementById("bookingSummary").innerHTML="Select your room and dates to see the booking summary.";

});

});