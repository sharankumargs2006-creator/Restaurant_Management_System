public class Order {

    private String customerName;
    private String foodName;
    private double price;
    private int quantity;
    private double total;

    public Order(String customerName, String foodName, double price, int quantity, double total) {

        this.customerName = customerName;
        this.foodName = foodName;
        this.price = price;
        this.quantity = quantity;
        this.total = price * quantity;

    }

    public String getCustomerName() {
        return customerName;
    }

    public String getFoodName() {
        return foodName;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getTotal() {
        return total;
    }
}