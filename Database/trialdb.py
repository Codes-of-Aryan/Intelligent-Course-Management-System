import mysql.connector
# Connects to database
# The .db file is created automatically if it does not exist 
 
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "12345678"
)

my_cursor = mydb.cursor()

my_cursor(
    "CREATE DATABASE Alpha"
    )

my_cursor.execute(
    "SHOW DATABASES"
)

for db in my_cursor:
    print(db)


