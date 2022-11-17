import mysql.connector
# Connects to database
# The .db file is created automatically if it does not exist 
 
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "ADD PASS"
)

my_cursor = mydb.cursor()


my_cursor.execute(
    "USE Alpha ; "
)

my_cursor.execute(
    "SELECT First_Name FROM Student "
)


for x in my_cursor:
    if x[0] == 'Smaran' :
        print( type(x[0]))

