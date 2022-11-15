import sqlite3
# Connects to database
# The .db file is created automatically if it does not exist 
 
con = sqlite3.connect('my-db.db')

#Create Student Table
con.execute("""
    CREATE TABLE Student (
        UID int NOT NULL AUTO_INCREMENT,
        Last_Name varchar(255) NOT NULL,
        First_Name varchar(255) NOT NULL,
        Email varchar(255) NOT NULL,
        Curriculum_Major varchar(255) NOT NULL,
        Curroculum_Minor varchar(255) NOT NULL,
        Year_Of_Study int NOT NULL,
        Image_Filename varchar(255) NOT NULL,
        PRIMARY KEY (`UID`)
);
;""")


con.execute("""
    INSERT INTO Student VALUES ( 1 , 'Bhatia', 'Divtej Singh', 'divtejbhatia17@gmail.com', 'Computer Science', 'Finance', 3, 'divtej.png') ;
;""")

con.execute("""
INSERT INTO `Student` VALUES (2, 'Goli', 'Smaran', 'golismaran4@gmail.com', 'Computer Science', 'None', '3', 'smaran.png');
;""")


#Create Other Tables Now:


con.execute("""CREATE TABLE IF NOT EXISTS STUDENT (
            ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, NAME TEXT NOT NULL,
            CREATE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP );""")


con.execute("""CREATE TABLE IF NOT EXISTS STUDENT (
            ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, NAME TEXT NOT NULL,
            CREATE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP );""")


con.execute("""CREATE TABLE IF NOT EXISTS STUDENT (
            ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, NAME TEXT NOT NULL,
            CREATE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP );""")

con.execute("""CREATE TABLE IF NOT EXISTS STUDENT (
            ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, NAME TEXT NOT NULL,
            CREATE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP );""")

            








# insert test data
testData = ['Anthony', 'Ben', 'John', 'Kenneth', 'Loretta']

for name in testData:
    insertQuery = "INSERT INTO STUDENT (name) values (?);" 
    con.execute(insertQuery, (name,))
con.commit()
con.close()