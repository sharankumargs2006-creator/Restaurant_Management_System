```javascript
function calculateBill(){

    // Food price
    var foodPrice = parseFloat(
        document.getElementById("food").value
    );

    // Quantity
    var qty = parseInt(
        document.getElementById("qty").value
    );

    // Validation
    if(isNaN(foodPrice) || isNaN(qty) || qty <= 0){

        document.getElementById("result").innerHTML =
            "Please select food and enter valid quantity";

        return;
    }

    // Total
    var total = foodPrice * qty;

    // GST 5%
    var gst = total * 0.05;

    // Grand total
    var grand = total + gst;

    // Show result
    document.getElementById("result").innerHTML =
        "<b>Quantity:</b> " + qty +
        "<br><b>Food Price:</b> ₹" + foodPrice +
        "<br><b>Total:</b> ₹" + total.toFixed(2) +
        "<br><b>GST (5%):</b> ₹" + gst.toFixed(2) +
        "<br><b>Grand Total:</b> ₹" + grand.toFixed(2);
}
```
