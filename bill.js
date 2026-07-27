var subtotal = 300;

var gst = subtotal * 0.05;

var grand = subtotal + gst;

document.getElementById("gst").innerHTML = "₹" + gst;

document.getElementById("grandtotal").innerHTML = "₹" + grand;

document.getElementById("billno").innerHTML =
Math.floor(Math.random()*10000);

document.getElementById("date").innerHTML =
new Date().toLocaleDateString();