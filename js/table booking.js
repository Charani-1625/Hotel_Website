document.addEventListener("DOMContentLoaded",function(){

const form=document.getElementById("tableBookingForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("customerName").value.trim();

let email=document.getElementById("customerEmail").value.trim();

let phone=document.getElementById("customerPhone").value.trim();

let date=document.getElementById("bookingDate").value;

let time=document.getElementById("bookingTime").value;

let guests=document.getElementById("tableGuests").value;

let table=document.getElementById("tableType").value;

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

if(date===""){

alert("Please select a reservation date.");

return;

}

if(time===""){

alert("Please select a reservation time.");

return;

}

if(guests===""){

alert("Please enter the number of guests.");

return;

}

if(table===""){

alert("Please select a table type.");

return;

}

alert("🎉 Your restaurant table has been reserved successfully!\n\nWe look forward to serving you at Royal Paradise Hotel.");

form.reset();

});

});