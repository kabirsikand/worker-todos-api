DROP TABLE IF EXISTS Todos;
CREATE TABLE Todos (TodoID INT, Todo TEXT, Completed BOOLEAN, PRIMARY KEY (`TodoID`));
INSERT INTO Todos (TodoID, Todo, Completed) VALUES (1, "Fold my laundry", 0),(4, "Unload the dishwasher", 0),(11, "Find Nemo", 0),(13, "Water monstera", 1);
