# Supplier Relationship Management (SRM) System

## Project Overview

This project is an Enterprise Web Application for a retail supermarket. The application is designed to manage the inventory of products and their suppliers. The project includes a backend developed with Express.js and a frontend developed with React and TypeScript.

## Features

1. **Homepage**: Displays a menu with navigation options.
2. **Product List**: Displays a list of all products sorted by name in ascending order.
3. **Supplier Products**: Displays products supplied by a specific supplier.

## Technologies Used

- **Backend**: Express.js, MySQL
- **Frontend**: React, TypeScript

## Prerequisites

- Node.js
- MySQL

## Setup Instructions

### Backend

1. **Clone the Repository**

   ```bash
   git clone https://github.com/brian-work-1199/graduate-teaching-assistant-application.git
   cd back-end

2. **Install Dependencies**

   ```bash
   npm install

3. **Configure the MySQL Database**

- Ensure MySQL is running on your machine.
- Create a database named gsa:

   ```bash
    CREATE DATABASE gsa;

    USE gsa;

    CREATE TABLE suppliers (
        supplierId INT AUTO_INCREMENT PRIMARY KEY,
        supplierName VARCHAR(255) NOT NULL,
        contactPhone VARCHAR(50)
    );

    CREATE TABLE products (
        productId BIGINT AUTO_INCREMENT PRIMARY KEY,
        productName VARCHAR(255) NOT NULL,
        unitPrice DECIMAL(10, 2),
        quantityInStock INT,
        dateSupplied DATE,
        supplierId INT,
        FOREIGN KEY (supplierId) REFERENCES suppliers(supplierId)
    );

    INSERT INTO suppliers (supplierName, contactPhone) VALUES
    ('Iowa Farms', '(641) 451-0009'),
    ('Hallmark Agro Inc.', NULL);

    INSERT INTO products (productName, unitPrice, quantityInStock, dateSupplied, supplierId) VALUES
    ('Santa sweet apples', 1.09, 124, '2023-05-31', 1),
    ('Chicken drumsticks', 2.25, 18, '2023-04-10', 1),
    ('Dole Bananas', 0.55, 1097, '2023-05-15', 2);

4. **Run the Backend**

   ```bash
   npx tsx watch src/server.ts

### Frontend

1. **Navigate to the Frontend Directory**

   ```bash
   cd ../front-end

2. **Install Dependencies**

   ```bash
   npm install

3. **Run the Frontend**

   ```bash
   npm run start

## Usage

- Homepage: Navigate to the root URL to access the homepage.
- Product List: Click on the “Product List” button on the homepage to view all products.
- Supplier List: Click on the Supplier List” button on the homepage to view all suppliers.
- Supplier Products: Click on the “Products by Supplier 1” or “Products by Supplier 2” button to view products supplied by a specific supplier.