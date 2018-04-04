-- 1-What is the SQL verb to get information out of a database? Give an example of how you would read all the data in a table named 'transactions'
==SELECT * FROM transactions;==

-- 2-What is the SQL verb to change a value in a row?
==UPDATE tablename  SET fieldname  = value;==

-- 3-Imagine there is a 'world' table with the following columns: country, continent, population, area, gdp, language. 
-- How would you change the 'language' of a country named countryx from Japanese to English?
==UPDATE world SET language = 'English' WHERE country = countryx;==

-- 4-What is the SQL verb to add rows to a table?
==INSERT INTO table_name(column1)
VALUES (value1);==

-- 5-Consider the same table from question 3. Write a SQL statement which adds a country named 'Trumplandia' to this table. The country has the following data:
-- continent = America
-- population = 1
-- area = 1000000
-- gdp = 9999999999
-- Language = tremendous


 =INSERT INTO world(country, continent, population, area, gdp, language)
VALUES (Trumplandia, America, 1, 1000000, 9999999999, tremendous);=


-- 6-Which is the SQL clause to filter results before the query is run?

==WHERE, BETWEEN, LIKE, IN==

-- 7-Consider the same table from question 3. Write a query which shows only the names of all countries with population lower than 10 million.
-- SELECT country
-- FROM world
-- WHERE population < 10000000;

==SELECT country FROM world WHERE population < 10000000==
