-- Active: 1724583087510@@127.0.0.1@3306@test
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)

--Change the title of a task
UPDATE task
SET title = 'Buy groceries in the shop'
WHERE id = 1;

--Change a task due date
UPDATE task
SET due_date= '2024-12-12 10:10:10'
WHERE id =1;

--Change a task status
UPDATE task
SET status_id = '1'
WHERE id = 1;

--Mark a task as complete
UPDATE task
SET status_id = '3'
WHERE id = 1;

--Delete a task
DELETE FROM task
WHERE id = 1;

--Create a table class
CREATE TABLE Class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);

--Create a table student
CREATE TABLE Student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(id) ON DELETE SET NULL
);

--Create an index on the name column of the student table.
CREATE INDEX idx_name ON Student(name);

--Add a new column to the class table named status 
ALTER TABLE Class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';

--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.*
FROM task
JOIN user ON task.id = user.id
WHERE user.email LIKE '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'
ALTER TABLE task
ADD COLUMN assigned_to INT;

UPDATE task
SET assigned_to = 11 
WHERE status_id = 1;

SELECT * FROM task
JOIN user ON task.assigned_to = user.id
WHERE user.name = 'Donald Duck';

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT *
FROM task
WHERE MONTH(created) = 9;

UPDATE task
SET user_id = 6  
WHERE MONTH(created) = 9;

--Find how many tasks where created in each month
SELECT MONTH(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY MONTH(created)
ORDER BY month;

--creating a database of supermarkets
CREATE TABLE Shops (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    barcode VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Suppliers (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255)
);

CREATE TABLE StockAvailability (
    shop_id INT,
    product_id INT,
    quantity_availability INT NOT NULL,
    PRIMARY KEY (shop_id, product_id),
    FOREIGN KEY (shop_id) REFERENCES Shops(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);
