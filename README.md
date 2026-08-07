# Restaurant Management System

A simple and attractive **Restaurant Management System** developed using **HTML, CSS, JavaScript, Java, and MySQL**.
This project helps manage restaurant menu items, customer orders, billing, and order history through a web-based interface.

---

## Features

* User Login & Registration
* Restaurant Home Page
* Food Menu Display
* Add to Cart
* Place Orders
* Generate Bill
* Order History Page
* Responsive UI Design
* Java Backend Integration
* MySQL Database Support

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Java

### Database

* MySQL

---

## Project Structure

```text
Restaurant_Management_System/
│-- index.html
│-- login.html
│-- register.html
│-- menu.html
│-- cart.html
│-- order.html
│-- bill.html
│-- history.html
│-- style.css
│-- script.js
│-- bill.js
│-- Database.java
│-- Order.java
│-- images/
│   ├── logo.png
│   ├── restaurant.jpg
│   ├── burger.jpg
│   ├── masala-dosa.jpg
│   ├── paneer-pizza.jpg
│   ├── veg-biryani.jpg
│   └── cold-drink.jpg
```

---

## Screens Included

* Home Page
* Login Page
* Registration Page
* Menu Page
* Cart Page
* Order Page
* Bill Page
* Order History Page

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sharankumargs2006-creator/Restaurant_Management_System.git
```

### 2. Open Frontend

Open `index.html` in your browser or use **VS Code Live Server**.

### 3. Setup MySQL Database

Create a MySQL database and required tables.

Example:

```sql
CREATE DATABASE restaurant_db;
USE restaurant_db;
```

### 4. Configure Java Database Connection

Edit `Database.java` and update:

```java
String url = "jdbc:mysql://localhost:3306/restaurant_db";
String user = "root";
String password = "your_password";
```

### 5. Compile Java Files

```bash
javac Database.java
javac Order.java
```

Run according to your project setup.

---

## Validation Implemented

* Required field validation
* Email validation
* Password validation
* Mobile number validation
* Quantity validation

---

## Future Improvements

* Admin Dashboard
* Online Payment Gateway
* Food Category Management
* Customer Feedback System
* Email Notifications
* Order Tracking

---

## Author

**Sharankumar G Shigganvi**

* GitHub: https://github.com/sharankumargs2006-creator

---

## License

This project is created for **educational and academic purposes**.

---

## Repository

GitHub Repository: https://github.com/sharankumargs2006-creator/Restaurant_Management_System
