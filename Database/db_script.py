import mysql.connector
# Connects to database
# The .db file is created automatically if it does not exist 
 
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "uwwUyFgX",  #change password to your own
    auth_plugin='mysql_native_password',
)

my_cursor = mydb.cursor()

my_cursor.execute(
    "CREATE DATABASE Alpha"
    )

my_cursor.execute(
    "USE Alpha"
)

my_cursor.execute("""

    CREATE TABLE Department (
        DepartmentName varchar(255) NOT NULL ,
        DepartmentID varchar(255) NOT NULL,

        PRIMARY KEY (DepartmentName)

    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
;""")

my_cursor.execute("""

INSERT INTO Department VALUES ('Department of Computer Science', 
'CS')

;""")

my_cursor.execute("""

INSERT INTO Department VALUES ('Department of Civil Engineering', 
'CIV')

;""")

#Create Student Table
my_cursor.execute(
    """

    CREATE TABLE Student (
        UID varchar(255) NOT NULL ,
        Last_Name varchar(255) NOT NULL,
        First_Name varchar(255) NOT NULL,

        Email varchar(255) NOT NULL,
        Password varchar(255) NOT NULL,

        Curriculum_Major varchar(255) NOT NULL,
        Curriculum_Minor varchar(255) NOT NULL,
        Curriculum varchar(255) NOT NULL,

        Year_Of_Study int NOT NULL,

        Image_Filename varchar(255) NOT NULL,

        DepartmentName varchar(255) NOT NULL,

        PRIMARY KEY (UID),

        FOREIGN KEY(DepartmentName) REFERENCES Department (DepartmentName) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1; 
;""")


my_cursor.execute("""

    INSERT INTO Student VALUES ( '3035756579' , 'Rahman', 'Mohammad Abdur', 'abdur8606@gmail.com','12345678' , 'Computer Science', 'Finance', 'Bachelor of Engineering', 3, 'abdur.png', 'Department of Computer Science') 
;""")


#Create Professor Table:
my_cursor.execute("""

    CREATE TABLE Professor (
        StaffID int NOT NULL ,

        Last_Name varchar(255) NOT NULL,
        First_Name varchar(255) NOT NULL,

        Email varchar(255) NOT NULL,

        DepartmentName varchar(255) NOT NULL,

        PRIMARY KEY (StaffID),
        FOREIGN KEY (DepartmentName) REFERENCES Department (DepartmentName) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
;""")


my_cursor.execute("""
INSERT INTO Professor VALUES (1, 'Ping', 'Luo', 'luoping@gmail.com', 'Department of Computer Science')
;""")

my_cursor.execute("""
INSERT INTO Professor VALUES (2, 'Chim', 'TW', 'twchim@gmail.com', 'Department of Computer Science')
;""")

my_cursor.execute("""
INSERT INTO Professor VALUES (3, 'Tam', 'Anthony', 'anthony@gmail.com', 'Department of Computer Science')
;""")

my_cursor.execute("""
INSERT INTO Professor VALUES (4, 'Chan', 'Hubert', 'hubertchan@gmail.com', 'Department of Computer Science')
;""")

#Create Course Table:
my_cursor.execute("""

    CREATE TABLE Course (
        CourseID varchar(255) NOT NULL ,
        Course_Name varchar(255) NOT NULL,

        Consultation_Location varchar(255) NOT NULL,
        Consultation_Time varchar(255) NOT NULL,
        Consultation_Day varchar(255) NOT NULL,

        Lecture_Day varchar(255) NOT NULL,
        Lecture_Start_Time time NOT NULL,
        Lecture_End_Time time NOT NULL,
        Lecture_Location varchar(255) NOT NULL,

        Tutorial_Day varchar(255) NOT NULL,
        Tutorial_Start_Time time NOT NULL,
        Tutorial_End_Time time NOT NULL,

        Tutorial_Location varchar(255) NOT NULL,

        StaffID int NOT NULL,

        PRIMARY KEY (CourseID),
        FOREIGN KEY(StaffID) REFERENCES Professor(StaffID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
;""")

# Insert data into course table
my_cursor.execute("""

INSERT INTO Course VALUES ('COMP3278', 'Introduction to Database Management Systems', 
'Haking Wong RM#322', '12:30-13:30' ,'Thurday', 'Monday', '14:30', '15:20', 'MWT2 Meng Wah Complex',
'Thurday', '13:30', '15:20', 'MWT2 Meng Wah Complex', 1)

;""")

my_cursor.execute("""

INSERT INTO Course VALUES ('COMP3330', 'Introduction to Mobile App Development', 
'Haking Wong RM#242', '10:30-11:30' ,'Friday', 'Saturday', '02:30', '14:20', 'LE2 Library Extension',
'Thurday', '12:30', '13:20', 'LE2 Library Extension', 2)

;""")

my_cursor.execute("""

INSERT INTO Course VALUES ('COMP3234', 'Computer Networks', 
'Haking Wong RM#121', '14:30-16:30' ,'Friday', 'Saturday', '01:20', '11:20', 'CYPP2',
'Tuesday', '9:30', '10:20', 'CYPP2', 3)

;""")

my_cursor.execute("""

INSERT INTO Course VALUES ('COMP2119', 'Data Structures and Algorithms', 
'KKLG838', '14:30-16:30' ,'Wednesday', 'Tuesday', '13:30', '16:20', 'KKLG603',
'Monday', '11:30', '12:20', 'KKLG604', 4)

;""")

# Multi Value Attribute for Teachers' Message
my_cursor.execute("""

    CREATE TABLE CourseMessage (
        CourseID varchar(255) NOT NULL ,
        Message varchar(255) NOT NULL,
        PRIMARY KEY (CourseID, Message),
        FOREIGN KEY(CourseID)

        REFERENCES Course(CourseID)

) ENGINE=InnoDB DEFAULT CHARSET=latin1
;""")

my_cursor.execute("""

INSERT INTO CourseMessage VALUES ('COMP3278', 
'Dear Students. Please join the class every Monday and Thursday')

;""")

my_cursor.execute("""

INSERT INTO CourseMessage VALUES ('COMP3234', 
'Dear Students. Please join the class every Monday and Thursday')

;""")

my_cursor.execute("""

INSERT INTO CourseMessage VALUES ('COMP3330', 
'Dear Students. Please join the class every Monday and Thursday')

;""")

my_cursor.execute("""

INSERT INTO CourseMessage VALUES ('COMP2119', 
'Dear Students. Please join the class every Monday and Thursday')

;""")

# CREATE OTHER TABLES
my_cursor.execute("""

    CREATE TABLE CourseContent (
        CourseID varchar(255) NOT NULL,
        Zoom_Link varchar(255) NOT NULL,

        PRIMARY KEY (CourseID)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;
;""")

my_cursor.execute("""

INSERT INTO CourseContent VALUES ('COMP3278', 
'hku.comp3278.zoom.us')

;""")

my_cursor.execute("""

INSERT INTO CourseContent VALUES ('COMP3330', 
'hku.comp3330.zoom.us')

;""")

my_cursor.execute("""

INSERT INTO CourseContent VALUES ('COMP3234', 
'hku.comp3234.zoom.us')

;""")

my_cursor.execute("""

INSERT INTO CourseContent VALUES ('COMP2119', 
'hku.comp2119.zoom.us')

;""")

my_cursor.execute("""

    CREATE TABLE CourseContentLectureMaterial (
        CourseID varchar(255) NOT NULL ,
        Lecture_Slide varchar(255) NOT NULL,
        Tutorial_Slide varchar(255) NOT NULL,

        PRIMARY KEY (CourseID),
        FOREIGN KEY(CourseID)

        REFERENCES Course(CourseID)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;
;""")

my_cursor.execute("""

INSERT INTO CourseContentLectureMaterial VALUES ('COMP3330', 
'lecture1.pdf', 'tutorial1.pdf')

;""")

my_cursor.execute("""
INSERT INTO CourseContentLectureMaterial VALUES ('COMP3234', 
'lecture1.pdf', 'tutorial1.pdf')

;""")

my_cursor.execute("""
INSERT INTO CourseContentLectureMaterial VALUES ('COMP3278', 
'lecture1.pdf', 'tutorial1.pdf')

;""")




# TBD if we are having assignments table
# Depends if we have time to implement

# my_cursor.execute("""

#     CREATE TABLE CourseContentAssignments (
#         CourseID varchar(255) NOT NULL,
#         Assignment_Post_Date varchar(255) NOT NULL,
#         Assignment_Due_Date varchar(255) NOT NULL,
#         Assignment_File varchar(255) NOT NULL,

#         PRIMARY KEY (CourseID),
#         FOREIGN KEY(CourseID)

#         REFERENCES Course(CourseID)
# ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
# ;""")

my_cursor.execute("""

    CREATE TABLE Takes (
        UID varchar(255) NOT NULL,
        CourseID varchar(255) NOT NULL,
        PRIMARY KEY (UID, CourseID),
        FOREIGN KEY (UID) REFERENCES Student(UID) ON DELETE CASCADE,
        FOREIGN KEY (CourseID) REFERENCES Course(CourseID) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

;""")

my_cursor.execute("""

INSERT INTO Takes VALUES ('3035756579', 'COMP3330'),('3035756579', 'COMP2119'),('3035756579', 'COMP3278'),('3035756579', 'COMP3234')

;""")

#my_cursor.execute("""

   # CREATE TABLE LoginHistory(
        #UID varchar(255) NOT NULL,
        #loginDate date NOT NULL,
        #loginTime time NOT NULL,
        #loginDuration time varchar(255) NOT NULL,
        #PRIMARY KEY (loginDate),
        #FOREIGN KEY (UID) REFERENCES Student(UID) ON DELETE CASCADE
#) ENGINE=InnoDB DEFAULT CHARSET=latin1;
#;""")

mydb.commit()
mydb.close()