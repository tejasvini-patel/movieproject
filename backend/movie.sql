-- Create the database
CREATE DATABASE IF NOT EXISTS movie_database;

-- Use the database
USE movie_database;

-- Create the movies table
CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    casting TEXT NOT NULL,
    releaseDate DATE NOT NULL,
    director VARCHAR(255) NOT NULL,
    producer VARCHAR(255) NOT NULL
);
