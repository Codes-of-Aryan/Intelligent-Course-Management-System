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
        Password varchar(255) NOT NULL,

        Curriculum_Major varchar(255) NOT NULL,
        Curroculum_Minor varchar(255) NOT NULL,

        Year_Of_Study int NOT NULL,

        Image_Filename varchar(255) NOT NULL,

        PRIMARY KEY (`UID`)
);
;""")


con.execute("""

    INSERT INTO Student VALUES ( 1 , 'Bhatia', 'Divtej Singh', 'divtejbhatia17@gmail.com','12345678' , 'Computer Science', 'Finance', 3, 'divtej.png') 

;""")

con.execute("""

INSERT INTO Student VALUES (2, 'Goli', 'Smaran', 'golismaran4@gmail.com','12345678' , 'Computer Science', 'None', '3', 'smaran.png')

;""")


#Create Professor Table:
con.execute("""

    CREATE TABLE Professor (
        StaffID int NOT NULL AUTO_INCREMENT,

        Last_Name varchar(255) NOT NULL,
        First_Name varchar(255) NOT NULL,

        Email varchar(255) NOT NULL,

        PRIMARY KEY (`StaffID`)
);
;""")


con.execute("""
    INSERT INTO Professor VALUES ( 1 , 'Ping', 'Luo', 'luoping@gmail.com') 
;""")

con.execute("""
INSERT INTO Professor VALUES (2, 'Tam', 'Anthony', 'anthony@gmail.com')
;""")

con.execute("""
INSERT INTO Professor VALUES (3, 'Chan', 'Hubert', 'hubertchan@gmail.com')
;""")


#Create Course Table:
con.execute("""

    CREATE TABLE Course (
        CourseID varchar(255) NOT NULL AUTO_INCREMENT,
        Course_Name varchar(255) NOT NULL,

        Consultation_Location varchar(255) NOT NULL,
        Consultation_Time varchar(255) NOT NULL,
        Consultation_Day varchar(255) NOT NULL,

        Lecture_Day varchar(255) NOT NULL,
        Lecture_Time varchar(255) NOT NULL,
        Lecture_Location varchar(255) NOT NULL,

        Tutorial_Day varchar(255) NOT NULL,
        Tutorial_Time varchar(255) NOT NULL,
        Tutorial_Location varchar(255) NOT NULL,


        PRIMARY KEY (`CourseID`)

);
;""")

# Insert data into course table
con.execute("""

INSERT INTO Course VALUES ('COMP3278', 'Introduction to Database Management Systems', 
'Haking Wong RM#322', '12:30-13:30' ,'Thurday', 'Monday', '14:30-15:20', 'MWT2 Meng Wah Complex',
'Thurday', '13:30-15:20', 'MWT2 Meng Wah Complex')

;""")

con.execute("""

INSERT INTO Course VALUES ('COMP3330', 'Introduction to Mobile App Development', 
'Haking Wong RM#242', '10:30-11:30' ,'Friday', 'Monday', '12:30-14:20', 'LE2 Library Extension',
'Thurday', '12:30-13:20', 'LE2 Library Extension')

;""")

con.execute("""

INSERT INTO Course VALUES ('COMP3297', 'Software Engineering', 
'Haking Wong RM#121', '14:30-16:30' ,'Friday', 'Friday', '9:30-11:20', 'CYPP2',
'Tuesday', '9:30-10:20', 'CYPP2')

;""")

con.execute("""

INSERT INTO Course VALUES ('IIMT3621', 'Creativity and Business Innovation', 
'KKLG838', '14:30-16:30' ,'Wednesday', 'Tuesday', '13:30-16:20', 'KKLG603',
'Monday', '11:30-12:20', 'KKLG604')

;""")


# Multi Value Attribute for Teachers' Message
con.execute("""

    CREATE TABLE Professor (
        CourseID varchar(255) NOT NULL AUTO_INCREMENT,
        Teachers_Message varchar(255) NOT NULL,
        PRIMARY KEY (CourseID, Teachers_Message),
        FOREIGN KEY(CourseID)

        REFERENCES Course(CourseID)

);
;""")

# CREATE OTHER TABLES



con.commit()
con.close()