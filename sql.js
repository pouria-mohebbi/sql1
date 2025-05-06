CREATE DATABASE office;
USE office;

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  role VARCHAR(100)
);
INSERT INTO employee (name, role) VALUES
  ('Alice Müller', 'Manager'),
  ('Bob Schmidt', 'Developer'),
  ('Clara Fischer', 'Designer');
  UPDATE employee
  SET name = 'Alice Meier'
  WHERE id = 1;
  UPDATE employee
SET name = 'Alice Meier'
WHERE id = 1;
DELETE FROM employee
WHERE id = 3;
SELECT * FROM employee
WHERE id = 2;
