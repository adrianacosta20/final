
1-Which of the following is a valid insert statement in mongodb? (5 pts)

db.test.insert({x:2,y:"apple"}) ======
db.test.push({x:2,y:"apple"})
db.test.insert({"x":2} {"y":"apple"})
db.test.insert({"x":2}, {"y":"apple"})

===================================================================

2-Given a collection named books within a database named library, write the statement you would use to query all the contents of the collection in such a way that the results are displayed in JSON format with one property-value pair per line. (5 pts)

===library.books.find({}).pretty()=====

Dada una coleccion llamada books dentro de una base de datos llamada library, escriba el comando que usted utilizaria para extraer todos los contenidos de la coleccion de tal manera que los resultados salgan en formato JSON con una propiedad por linea (resultados impresos de forma bonita).

===================================================================

3-A query may include a    (b)    that specifies the fields from the matching documents to return. (5 pts) (b)
a. selection
b. projection ======
c. union
d. None of the mentioned

===================================================================

4-MongoDB stores all documents in: (5 pts) (b)
a. tables
b. collections ======
c. rows
d. All of the mentioned

===================================================================

5-If you want to change an existing collection in mongodb, you must use the following command: (5 pts) (c)
a. insert
b. delete then insert
c. update =========
d. None of the above

===================================================================

6-Given a collection named students, where the documents have first_name and last_name properties, how would you write a mondogb query that looks up all students with the last name "Castro"? (5 pts)

  ===db.students.findOne({last_name : "Castro"})====

Dada una coleccion llamada students, donde los documentos tienen campos de nombre first_name y last_name, como escribiria un query en mongodb para encontrar a todos los estudiantes que tengan el apellido "Castro"?

===================================================================

7-Do all the problems in this page: http://sqlzoo.net/wiki/Guest_House_Assessment_Easy (40 pts)


    1-SELECT booking_date, nights
      FROM booking
      WHERE guest_id = 1183


    2-SELECT arrival_time, first_name, last_name
      FROM booking JOIN guest ON guest_id = guest.id
      WHERE booking_date='2016-11-05'
      ORDER BY arrival_time ASC

    
    3-SELECT booking_id, room_type_requested, occupants, SUM(amount)
      FROM booking JOIN rate ON booking.room_type_requested = rate.room_type AND booking.occupants = rate.occupancy
      WHERE booking_id IN (5152,5165,5154,5295)
      GROUP BY booking_id , room_type_requested , occupants 


    4-SELECT first_name, last_name, address
      FROM booking JOIN guest ON booking.guest_id = guest.id
      WHERE room_no = 101 AND booking_date = '2016-12-03'


    5-SELECT guest_id, COUNT(nights), SUM(nights)
      FROM booking
      WHERE guest_id IN (1185, 1270)  
      GROUP BY guest_id



8-Do any two of the problems on this page: http://sqlzoo.net/wiki/Guest_House_Assessment_Medium (20pts)


    6-SELECT SUM(nights*amount)
      FROM rate JOIN booking ON booking.occupants = rate.occupancy AND booking.room_type_requested = rate.room_type JOIN guest ON booking.guest_id = guest.id
      WHERE first_name = 'Ruth' AND last_name = 'Cadbury'


    8-SELECT last_name, first_name, address, SUM(ISNULL(nights, 0 )) as nights
      FROM booking RIGHT JOIN guest ON booking.guest_id = guest.id
      WHERE address LIKE '%Edinburgh%'
      GROUP BY last_name, first_name, address



9-Create a node project named notes-backend. This project should meet the following criteria:

There should be a Note model that has the following attributes:
Decription
Created Date
Author
The server should connect to mongodb using mongoose
There should be a route capable of displaying all the contents of a database called notes-app and a collection called notes. The results should be sent back to the client in json format. The route should be called "showallnotes"
Put the answers to the text questions and the screenshots to the results of the SQL problems in this repo, then submit to Canvas.