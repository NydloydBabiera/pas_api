CREATE DATABASE pas_db;

-- create table
CREATE TABLE pas_employee(
    employee_id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    middleName VARCHAR(255),
    lastName VARCHAR(255),
    age INT,
    gender VARCHAR(255),
    address_emp VARCHAR(255)
);

CREATE TABLE pas_userAccounts(
    userAccount_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    user_password VARCHAR(255),
    user_role VARCHAR(255),
    employee_id INT FOREIGN KEY REFERENCES pas_employee(employee_id)
)