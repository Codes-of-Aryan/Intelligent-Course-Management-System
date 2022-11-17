-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 17, 2020 at 09:41 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `facerecognition`
--

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--
--DROP TABLE IF EXISTS `Student`;

-- # Create TABLE 'Student'
--CREATE TABLE `Student` (
--  `student_id` int NOT NULL,
--  `name` varchar(50) NOT NULL,
--  `login_time` time NOT NULL,
--  `login_date` date NOT NULL
--) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
--INSERT INTO `Student` VALUES (1, "JACK", NOW(), '2021-01-20');
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
--UNLOCK TABLES;


--# Create TABLE 'Course'
--# Create TABLE 'Classroom'
# Create other TABLE...

CREATE TABLE Student (
    UID int NOT NULL,
    Last_Name varchar(255) NOT NULL,
    First_Name varchar(255) NOT NULL,

    Email varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,

    Curriculum_Major varchar(255) NOT NULL,
    Curriculum_Minor varchar(255) NOT NULL,

    Year_Of_Study int NOT NULL,

    Image_Filename varchar(255) NOT NULL,

    PRIMARY KEY (UID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO Student VALUES ( 1 , 'Bhatia', 'Divtej Singh', 'divtejbhatia17@gmail.com','12345678' , 'Computer Science', 'Finance', 3, 'divtej.png');
INSERT INTO Student VALUES (2, 'Goli', 'Smaran', 'golismaran4@gmail.com','12345678' , 'Computer Science', 'None', '3', 'smaran.png');

--Create Professor Table:
CREATE TABLE Professor (
    StaffID int NOT NULL ,

    Last_Name varchar(255) NOT NULL,
    First_Name varchar(255) NOT NULL,

    Email varchar(255) NOT NULL,

    PRIMARY KEY (`StaffID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO Professor VALUES (1, 'Ping', 'Luo', 'luoping@gmail.com');
INSERT INTO Professor VALUES (2, 'Tam', 'Anthony', 'anthony@gmail.com');
INSERT INTO Professor VALUES (3, 'Chan', 'Hubert', 'hubertchan@gmail.com');


--Create Course Table:
CREATE TABLE Course (
    CourseID varchar(255) NOT NULL ,
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

    PRIMARY KEY (CourseID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO Course VALUES ('COMP3278', 'Introduction to Database Management Systems', 
'Haking Wong RM#322', '12:30-13:30' ,'Thurday', 'Monday', '14:30-15:20', 'MWT2 Meng Wah Complex',
'Thurday', '13:30-15:20', 'MWT2 Meng Wah Complex');

INSERT INTO Course VALUES ('COMP3330', 'Introduction to Mobile App Development', 
'Haking Wong RM#242', '10:30-11:30' ,'Friday', 'Monday', '12:30-14:20', 'LE2 Library Extension',
'Thurday', '12:30-13:20', 'LE2 Library Extension');

INSERT INTO Course VALUES ('COMP3297', 'Software Engineering', 
'Haking Wong RM#121', '14:30-16:30' ,'Friday', 'Friday', '9:30-11:20', 'CYPP2',
'Tuesday', '9:30-10:20', 'CYPP2');

INSERT INTO Course VALUES ('IIMT3621', 'Creativity and Business Innovation', 
'KKLG838', '14:30-16:30' ,'Wednesday', 'Tuesday', '13:30-16:20', 'KKLG603',
'Monday', '11:30-12:20', 'KKLG604');


-- Create Table for Multi Value Attribute Teachers' Message

CREATE TABLE CourseMessage (
    CourseID varchar(255) NOT NULL ,
    Message varchar(255) NOT NULL,
    PRIMARY KEY (CourseID, Teachers_Message),
    FOREIGN KEY(CourseID)

    REFERENCES Course(CourseID)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO CourseMessage VALUES ('COMP3278', 
'Dear Students. Please join the class every Monday and Thursday');

INSERT INTO CourseMessage VALUES ('COMP3330', 
'Dear Students. Please join the class every Monday and Thursday');

-- Create many-many relationship Table takes
CREATE TABLE takes (
    UID int NOT NULL,
    CourseID varchar(255) NOT NULL,

    PRIMARY KEY(UID, CourseID),

    FOREIGN KEY(UID) REFERENCES Student(UID),
    FOREIGN KEY(CourseID) REFERENCES Course(CourseID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
-- CREATE OTHER TABLES

CREATE TABLE CourseContent (
    CourseID varchar(255) NOT NULL,
    Zoom_Link varchar(255) NOT NULL,

    PRIMARY KEY (CourseID)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE CourseContentLectureMaterial (
    CourseID varchar(255) NOT NULL ,
    Lecture_Slide varchar(255) NOT NULL,
    Tutorial_ varchar(255) NOT NULL,

    PRIMARY KEY(CourseID),
    FOREIGN KEY(CourseID)

    REFERENCES Course(CourseID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE CourseContentAssignments (
    CourseID varchar(255) NOT NULL,
    Assignment_Post_Date varchar(255) NOT NULL,
    Assignment_Due_Date varchar(255) NOT NULL,
    Assignment_File varchar(255) NOT NULL,

    PRIMARY KEY (CourseID),
    FOREIGN KEY(CourseID)

    REFERENCES Course(CourseID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE Department (
    Department_Name varchar(255) NOT NULL ,
    DepartmentID varchar(255) NOT NULL,

    PRIMARY KEY (Department_Name)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
