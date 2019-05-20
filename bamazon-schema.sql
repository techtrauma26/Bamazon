DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT PRIMARY KEY,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL
);

INSERT INTO products VALUES
(1, 'Brother Laser Printer', 'Electronics', 119, 2023),
(2, 'Yoga Mat', 'Health & Fitness', 25, 435),
(3, 'Iphone X Case', 'Cellphone Accessories', 21, 650),
(4, 'Celing Fan', 'Home & Kitchen', 140, 200),
(5, 'Office Chair', 'Office Furniture', 275, 37),
(6, 'LED Light Blubs', 'Home Improvement', 12, 7920),
(7, 'Espresso Machine', 'Kitchen Appliances', 240, 49),
(8, 'Protein Powder', 'Workout Supplements', 29.99, 563),
(9, 'Bamazon Balexa', 'Electronics', 30, 10000),
(10, 'Wireless Keyboard', 'Electronics', 57, 4354);

SELECT * FROM products;