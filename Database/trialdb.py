import mysql.connector
# Connects to database
# The .db file is created automatically if it does not exist 
 
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "mehyr@SIS11"
)

my_cursor = mydb.cursor()


my_cursor.execute(
    "USE Alpha ; "
)


my_cursor.execute("""

    INSERT INTO Student VALUES ( 1 , 'Bhatia', 'Divtej Singh', 'divtejbhatia17@gmail.com','12345678' , 'Computer Science', 'Finance', 3, 'divtej.png') 

;"""

)


my_cursor.execute(
    "SELECT First_Name FROM Student "
)


for db in my_cursor:
    print(db)


