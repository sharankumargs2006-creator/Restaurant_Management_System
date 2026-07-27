function calculateBill(){

    var foodPrice =
    document.getElementById("food").value;

    var qty =
    document.getElementById("qty").value;

    var total = foodPrice * qty;

    var gst = total * 0.05;

    var grand = total + gst;

    document.getElementById("result").innerHTML =
    "Total = ₹" + total +
    "<br>GST (5%) = ₹" + gst +
    "<br>Grand Total = ₹" + grand;

}