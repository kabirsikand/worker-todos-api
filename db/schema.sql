DROP TABLE IF EXISTS todos;
CREATE TABLE todos (id INTEGER PRIMARY KEY, todo TEXT, todoStatus BOOLEAN NOT NULL CHECK (todoStatus IN (0, 1)));
INSERT INTO todos (todo, todoStatus) VALUES ("Fold my laundry", 0),("Unload the dishwasher", 0),("Find Nemo", 0),("Water monstera", 1);
