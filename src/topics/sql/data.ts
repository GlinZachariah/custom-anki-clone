import { Category, CategoryData, Flashcard, QuizQuestion } from '../../types';

export const categoryData: Record<Category, CategoryData> = {
  basics: {
    name: 'SQL Basics',
    description: 'SELECT statements, basic syntax, data types, and fundamental database operations',
    color: '#4CAF50'
  },
  intermediate: {
    name: 'SQL Intermediate',
    description: 'JOINs, subqueries, functions, indexes, and advanced querying techniques',
    color: '#388E3C'
  },
  expert: {
    name: 'SQL Expert',
    description: 'Advanced queries, optimization, stored procedures, and database design patterns',
    color: '#2E7D32'
  }
};

export const flashcards: Flashcard[] = [
  // BASICS FLASHCARDS (25 cards)
  {
    id: 1,
    category: 'basics',
    question: 'What does SQL stand for?',
    answer: 'SQL stands for Structured Query Language. It is a standardized programming language specifically designed for managing and manipulating relational databases. SQL allows users to create, read, update, and delete data in database tables.'
  },
  {
    id: 2,
    category: 'basics',
    question: 'What is a SELECT statement?',
    answer: 'SELECT is the most fundamental SQL statement used to retrieve data from one or more database tables. It specifies which columns to return and from which tables. The basic syntax is: SELECT column1, column2 FROM table_name;'
  },
  {
    id: 3,
    category: 'basics',
    question: 'What does the asterisk (*) mean in SELECT * FROM table_name?',
    answer: 'The asterisk (*) is a wildcard that selects all columns from the specified table. Instead of listing each column name individually, * returns every column in the table in the order they were defined when the table was created.'
  },
  {
    id: 4,
    category: 'basics',
    question: 'What is the WHERE clause used for?',
    answer: 'The WHERE clause is used to filter rows in a SQL query based on specified conditions. It allows you to retrieve only the rows that meet certain criteria. For example: SELECT * FROM users WHERE age > 18;'
  },
  {
    id: 5,
    category: 'basics',
    question: 'What are the main SQL data types?',
    answer: 'Common SQL data types include: INT (integers), VARCHAR (variable-length strings), TEXT (large text), DATE (dates), TIMESTAMP (date and time), BOOLEAN (true/false), DECIMAL/NUMERIC (decimal numbers), and CHAR (fixed-length strings).'
  },
  {
    id: 6,
    category: 'basics',
    question: 'How do you create a database in SQL?',
    answer: 'Use the CREATE DATABASE statement followed by the database name. For example: CREATE DATABASE my_database; This creates a new database that can contain tables and other database objects.'
  },
  {
    id: 7,
    category: 'basics',
    question: 'How do you create a table in SQL?',
    answer: 'Use CREATE TABLE followed by table name and column definitions in parentheses. Example: CREATE TABLE users (id INT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255)); Each column needs a name and data type.'
  },
  {
    id: 8,
    category: 'basics',
    question: 'What is the INSERT statement used for?',
    answer: 'INSERT is used to add new rows of data to a table. Basic syntax: INSERT INTO table_name (column1, column2) VALUES (value1, value2); You specify the table, columns, and corresponding values to insert.'
  },
  {
    id: 9,
    category: 'basics',
    question: 'What is the UPDATE statement?',
    answer: 'UPDATE modifies existing data in a table. Syntax: UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition; Always use WHERE clause to specify which rows to update, otherwise all rows will be modified.'
  },
  {
    id: 10,
    category: 'basics',
    question: 'What is the DELETE statement?',
    answer: 'DELETE removes rows from a table. Syntax: DELETE FROM table_name WHERE condition; The WHERE clause specifies which rows to delete. Without WHERE, all rows in the table will be deleted.'
  },
  {
    id: 11,
    category: 'basics',
    question: 'What is a PRIMARY KEY?',
    answer: 'A PRIMARY KEY is a column (or combination of columns) that uniquely identifies each row in a table. It cannot contain NULL values and must be unique for every row. Each table can have only one primary key.'
  },
  {
    id: 12,
    category: 'basics',
    question: 'What is AUTO_INCREMENT?',
    answer: 'AUTO_INCREMENT automatically generates a unique number for new rows, typically used with primary keys. When inserting data, you don\'t need to provide a value for AUTO_INCREMENT columns - the database assigns the next available number automatically.'
  },
  {
    id: 13,
    category: 'basics',
    question: 'What does DISTINCT do in a SELECT statement?',
    answer: 'DISTINCT removes duplicate rows from query results, returning only unique combinations of the selected columns. Example: SELECT DISTINCT city FROM users; returns each unique city only once, even if multiple users live there.'
  },
  {
    id: 14,
    category: 'basics',
    question: 'What is the ORDER BY clause?',
    answer: 'ORDER BY sorts query results by one or more columns. Use ASC for ascending (default) or DESC for descending order. Example: SELECT * FROM products ORDER BY price DESC, name ASC; sorts by price descending, then by name ascending.'
  },
  {
    id: 15,
    category: 'basics',
    question: 'What is the LIMIT clause?',
    answer: 'LIMIT restricts the number of rows returned by a query. Example: SELECT * FROM users LIMIT 10; returns only the first 10 rows. Often used with ORDER BY for pagination or to get top results.'
  },
  {
    id: 16,
    category: 'basics',
    question: 'What are comparison operators in SQL?',
    answer: 'SQL comparison operators include: = (equal), <> or != (not equal), > (greater than), < (less than), >= (greater than or equal), <= (less than or equal). Used in WHERE clauses to compare values.'
  },
  {
    id: 17,
    category: 'basics',
    question: 'What are logical operators in SQL?',
    answer: 'Logical operators combine multiple conditions: AND (both conditions must be true), OR (at least one condition must be true), NOT (negates a condition). Example: WHERE age > 18 AND city = \'New York\';'
  },
  {
    id: 18,
    category: 'basics',
    question: 'What is the LIKE operator used for?',
    answer: 'LIKE performs pattern matching in text searches using wildcards: % (matches any sequence of characters) and _ (matches any single character). Example: WHERE name LIKE \'John%\' finds names starting with "John".'
  },
  {
    id: 19,
    category: 'basics',
    question: 'What is the IN operator?',
    answer: 'IN checks if a value exists in a list of specified values. Example: WHERE city IN (\'New York\', \'London\', \'Tokyo\'); returns rows where city matches any of these three values. It\'s shorthand for multiple OR conditions.'
  },
  {
    id: 20,
    category: 'basics',
    question: 'What is the BETWEEN operator?',
    answer: 'BETWEEN checks if a value falls within a specified range (inclusive). Example: WHERE age BETWEEN 18 AND 65; returns rows where age is from 18 to 65, including both boundary values. Works with numbers, dates, and text.'
  },
  {
    id: 21,
    category: 'basics',
    question: 'What is NULL in SQL?',
    answer: 'NULL represents the absence of a value or unknown data. It\'s different from zero, empty string, or space. Use IS NULL or IS NOT NULL to check for NULL values, not = or <> operators.'
  },
  {
    id: 22,
    category: 'basics',
    question: 'How do you check for NULL values?',
    answer: 'Use IS NULL to find NULL values and IS NOT NULL to find non-NULL values. Example: SELECT * FROM users WHERE email IS NOT NULL; You cannot use = NULL or != NULL as they always return false.'
  },
  {
    id: 23,
    category: 'basics',
    question: 'What is the COUNT function?',
    answer: 'COUNT() is an aggregate function that returns the number of rows that match a specified condition. COUNT(*) counts all rows, COUNT(column) counts non-NULL values in that column. Example: SELECT COUNT(*) FROM users;'
  },
  {
    id: 24,
    category: 'basics',
    question: 'What are aggregate functions in SQL?',
    answer: 'Aggregate functions perform calculations on multiple rows and return a single result. Common ones include: COUNT (count rows), SUM (total values), AVG (average), MAX (maximum value), MIN (minimum value).'
  },
  {
    id: 25,
    category: 'basics',
    question: 'What is the difference between DROP and TRUNCATE?',
    answer: 'DROP TABLE removes the entire table structure and all data permanently. TRUNCATE TABLE removes all rows but keeps the table structure intact. TRUNCATE is faster than DELETE for removing all data and resets AUTO_INCREMENT counters.'
  },

  // INTERMEDIATE FLASHCARDS (25 cards)
  {
    id: 26,
    category: 'intermediate',
    question: 'What is a JOIN in SQL?',
    answer: 'JOIN combines rows from two or more tables based on a related column between them. It allows you to query data from multiple tables simultaneously by establishing relationships between tables through common columns.'
  },
  {
    id: 27,
    category: 'intermediate',
    question: 'What is an INNER JOIN?',
    answer: 'INNER JOIN returns only rows that have matching values in both tables. It\'s the most common type of join. Example: SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id; Returns only users who have placed orders.'
  },
  {
    id: 28,
    category: 'intermediate',
    question: 'What is a LEFT JOIN?',
    answer: 'LEFT JOIN returns all rows from the left table and matching rows from the right table. If no match exists, NULL values are returned for right table columns. Useful for finding records that may or may not have related data.'
  },
  {
    id: 29,
    category: 'intermediate',
    question: 'What is a RIGHT JOIN?',
    answer: 'RIGHT JOIN returns all rows from the right table and matching rows from the left table. If no match exists, NULL values are returned for left table columns. It\'s the opposite of LEFT JOIN but less commonly used.'
  },
  {
    id: 30,
    category: 'intermediate',
    question: 'What is a FULL OUTER JOIN?',
    answer: 'FULL OUTER JOIN returns all rows from both tables, with NULL values where no match exists. It combines the results of both LEFT and RIGHT JOINs, showing all records from both tables regardless of matches.'
  },
  {
    id: 31,
    category: 'intermediate',
    question: 'What is a CROSS JOIN?',
    answer: 'CROSS JOIN returns the Cartesian product of two tables - every row from the first table combined with every row from the second table. If table A has 10 rows and table B has 5 rows, CROSS JOIN returns 50 rows.'
  },
  {
    id: 32,
    category: 'intermediate',
    question: 'What is a subquery?',
    answer: 'A subquery (or inner query) is a SQL query nested inside another query. It can be used in SELECT, INSERT, UPDATE, or DELETE statements. The inner query executes first, and its result is used by the outer query.'
  },
  {
    id: 33,
    category: 'intermediate',
    question: 'What is GROUP BY used for?',
    answer: 'GROUP BY groups rows that have the same values in specified columns into summary rows. It\'s typically used with aggregate functions to perform calculations on each group. Example: SELECT city, COUNT(*) FROM users GROUP BY city;'
  },
  {
    id: 34,
    category: 'intermediate',
    question: 'What is the HAVING clause?',
    answer: 'HAVING filters groups created by GROUP BY, similar to how WHERE filters individual rows. HAVING is used with aggregate functions. Example: SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 10;'
  },
  {
    id: 35,
    category: 'intermediate',
    question: 'What is the difference between WHERE and HAVING?',
    answer: 'WHERE filters individual rows before grouping, while HAVING filters groups after GROUP BY is applied. WHERE cannot use aggregate functions, but HAVING can. WHERE is processed before GROUP BY, HAVING is processed after.'
  },
  {
    id: 36,
    category: 'intermediate',
    question: 'What is a UNION in SQL?',
    answer: 'UNION combines the result sets of two or more SELECT statements, removing duplicate rows. All SELECT statements must have the same number of columns with compatible data types. UNION ALL includes duplicates.'
  },
  {
    id: 37,
    category: 'intermediate',
    question: 'What is the difference between UNION and UNION ALL?',
    answer: 'UNION removes duplicate rows from the combined result set, while UNION ALL includes all rows including duplicates. UNION ALL is faster because it doesn\'t perform duplicate checking, but UNION ensures unique results.'
  },
  {
    id: 38,
    category: 'intermediate',
    question: 'What is an index in SQL?',
    answer: 'An index is a database object that improves query performance by creating a sorted reference to table data. Like a book index, it allows the database to quickly locate specific rows without scanning the entire table.'
  },
  {
    id: 39,
    category: 'intermediate',
    question: 'What are the types of indexes?',
    answer: 'Main index types include: Clustered (physically orders data), Non-clustered (separate structure pointing to data), Unique (enforces uniqueness), Composite (multiple columns), and Partial (subset of rows based on conditions).'
  },
  {
    id: 40,
    category: 'intermediate',
    question: 'What is a foreign key?',
    answer: 'A foreign key is a column (or combination of columns) that references the primary key of another table. It establishes a link between tables and enforces referential integrity, ensuring related data remains consistent.'
  },
  {
    id: 41,
    category: 'intermediate',
    question: 'What is referential integrity?',
    answer: 'Referential integrity ensures that relationships between tables remain consistent. When a foreign key references a primary key, the referenced record must exist, and you cannot delete a referenced record while it has dependent records.'
  },
  {
    id: 42,
    category: 'intermediate',
    question: 'What are SQL functions?',
    answer: 'SQL functions perform specific operations and return values. Types include: String functions (LENGTH, SUBSTRING), Numeric functions (ABS, ROUND), Date functions (NOW, DATE_ADD), and Aggregate functions (COUNT, SUM, AVG).'
  },
  {
    id: 43,
    category: 'intermediate',
    question: 'What are common string functions in SQL?',
    answer: 'Common string functions include: CONCAT (join strings), LENGTH/LEN (string length), SUBSTRING (extract part of string), UPPER/LOWER (change case), TRIM (remove spaces), REPLACE (substitute text).'
  },
  {
    id: 44,
    category: 'intermediate',
    question: 'What are common date functions in SQL?',
    answer: 'Common date functions include: NOW() (current date/time), CURDATE() (current date), DATE_ADD/DATE_SUB (add/subtract time), YEAR/MONTH/DAY (extract parts), DATEDIFF (difference between dates).'
  },
  {
    id: 45,
    category: 'intermediate',
    question: 'What is a CASE statement?',
    answer: 'CASE provides conditional logic in SQL queries, similar to if-else statements. It evaluates conditions and returns different values based on the results. Syntax: CASE WHEN condition THEN result ELSE default_result END.'
  },
  {
    id: 46,
    category: 'intermediate',
    question: 'What is the EXISTS operator?',
    answer: 'EXISTS tests whether a subquery returns any rows. It returns TRUE if the subquery finds matching rows, FALSE otherwise. Often used for checking relationships between tables without actually joining them.'
  },
  {
    id: 47,
    category: 'intermediate',
    question: 'What is normalization in databases?',
    answer: 'Normalization is the process of organizing database tables to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and establishing relationships between them through foreign keys.'
  },
  {
    id: 48,
    category: 'intermediate',
    question: 'What are the normal forms in database design?',
    answer: 'Normal forms are rules for database design: 1NF (eliminate repeating groups), 2NF (eliminate partial dependencies), 3NF (eliminate transitive dependencies), BCNF (eliminate all dependency anomalies). Each form builds on the previous one.'
  },
  {
    id: 49,
    category: 'intermediate',
    question: 'What is a view in SQL?',
    answer: 'A view is a virtual table based on a SQL query. It doesn\'t store data physically but presents data from one or more tables. Views can simplify complex queries, provide security by limiting data access, and create reusable query logic.'
  },
  {
    id: 50,
    category: 'intermediate',
    question: 'What are the advantages of using views?',
    answer: 'Views provide: Security (limit access to specific columns/rows), Simplicity (hide complex joins), Reusability (common queries as named objects), Data independence (isolate applications from table structure changes), and Consistency (standardized data presentation).'
  },

  // EXPERT FLASHCARDS (25 cards)
  {
    id: 51,
    category: 'expert',
    question: 'What is query optimization?',
    answer: 'Query optimization is the process of choosing the most efficient execution plan for a SQL query. The optimizer analyzes different ways to execute a query and selects the plan with the lowest estimated cost based on factors like I/O, CPU usage, and memory consumption.'
  },
  {
    id: 52,
    category: 'expert',
    question: 'What is an execution plan?',
    answer: 'An execution plan shows how the database engine will execute a query, including the order of operations, join methods, index usage, and estimated costs. It helps identify performance bottlenecks and optimization opportunities in SQL queries.'
  },
  {
    id: 53,
    category: 'expert',
    question: 'What are stored procedures?',
    answer: 'Stored procedures are precompiled SQL programs stored in the database. They can accept parameters, contain control flow logic, and return results. Benefits include improved performance, code reusability, centralized business logic, and enhanced security.'
  },
  {
    id: 54,
    category: 'expert',
    question: 'What is the difference between stored procedures and functions?',
    answer: 'Stored procedures can perform multiple operations, modify data, and return multiple result sets but cannot be used in SELECT statements. Functions must return a single value, cannot modify data, and can be used in expressions and SELECT statements.'
  },
  {
    id: 55,
    category: 'expert',
    question: 'What are triggers in SQL?',
    answer: 'Triggers are special stored procedures that automatically execute (fire) in response to specific database events like INSERT, UPDATE, or DELETE operations. They can run BEFORE or AFTER the triggering event and are used for auditing, validation, and maintaining data consistency.'
  },
  {
    id: 56,
    category: 'expert',
    question: 'What are the types of triggers?',
    answer: 'Trigger types include: BEFORE triggers (execute before the triggering event), AFTER triggers (execute after the event), INSTEAD OF triggers (replace the triggering event), and statement-level vs row-level triggers (fire once per statement or once per affected row).'
  },
  {
    id: 57,
    category: 'expert',
    question: 'What is a cursor in SQL?',
    answer: 'A cursor is a database object that allows row-by-row processing of query results. It provides a way to iterate through result sets one record at a time, useful for complex processing that cannot be accomplished with set-based operations.'
  },
  {
    id: 58,
    category: 'expert',
    question: 'What are Common Table Expressions (CTEs)?',
    answer: 'CTEs are temporary named result sets defined within a SQL statement using the WITH clause. They improve query readability, enable recursive queries, and can be referenced multiple times within the same statement. They exist only for the duration of the query.'
  },
  {
    id: 59,
    category: 'expert',
    question: 'What is a recursive CTE?',
    answer: 'A recursive CTE references itself to process hierarchical data like organizational charts or tree structures. It consists of an anchor member (base case) and a recursive member (references the CTE itself) combined with UNION ALL.'
  },
  {
    id: 60,
    category: 'expert',
    question: 'What are window functions?',
    answer: 'Window functions perform calculations across related rows without grouping them into a single output row. They use the OVER clause to define the window of rows and can perform ranking, aggregation, and analytical operations while preserving individual row details.'
  },
  {
    id: 61,
    category: 'expert',
    question: 'What are common window functions?',
    answer: 'Common window functions include: ROW_NUMBER() (sequential numbering), RANK() (ranking with gaps), DENSE_RANK() (ranking without gaps), LAG/LEAD (access previous/next rows), NTILE() (distribute into groups), and aggregate functions with OVER clause.'
  },
  {
    id: 62,
    category: 'expert',
    question: 'What is partitioning in databases?',
    answer: 'Partitioning divides large tables into smaller, more manageable pieces called partitions based on specific criteria (range, hash, list). It improves query performance, enables parallel processing, and simplifies maintenance operations like backups and index rebuilds.'
  },
  {
    id: 63,
    category: 'expert',
    question: 'What are the types of table partitioning?',
    answer: 'Partitioning types include: Range (based on value ranges like dates), Hash (using hash function for even distribution), List (explicit value lists), and Composite (combination of multiple partitioning methods). Each serves different use cases and data patterns.'
  },
  {
    id: 64,
    category: 'expert',
    question: 'What is database sharding?',
    answer: 'Sharding horizontally partitions data across multiple database instances or servers. Each shard contains a subset of the total data, allowing for better scalability and performance by distributing load across multiple systems.'
  },
  {
    id: 65,
    category: 'expert',
    question: 'What are ACID properties?',
    answer: 'ACID properties ensure reliable database transactions: Atomicity (all operations succeed or fail together), Consistency (database remains valid after transactions), Isolation (concurrent transactions don\'t interfere), Durability (committed changes persist even after system failures).'
  },
  {
    id: 66,
    category: 'expert',
    question: 'What are isolation levels in databases?',
    answer: 'Isolation levels control transaction visibility: READ UNCOMMITTED (dirty reads allowed), READ COMMITTED (only committed data visible), REPEATABLE READ (consistent reads within transaction), SERIALIZABLE (highest isolation, prevents all anomalies). Higher levels provide more consistency but less concurrency.'
  },
  {
    id: 67,
    category: 'expert',
    question: 'What is deadlock in databases?',
    answer: 'Deadlock occurs when two or more transactions wait indefinitely for each other to release locks. The database engine detects deadlocks and resolves them by terminating one transaction (deadlock victim) and allowing others to proceed.'
  },
  {
    id: 68,
    category: 'expert',
    question: 'What are materialized views?',
    answer: 'Materialized views are physical copies of query results stored as tables. Unlike regular views, they contain actual data and can be indexed for improved performance. They need to be refreshed when underlying data changes and are useful for expensive, frequently-run queries.'
  },
  {
    id: 69,
    category: 'expert',
    question: 'What is query hint and when to use it?',
    answer: 'Query hints are directives that force the optimizer to use specific execution strategies. They override the optimizer\'s decisions and should be used sparingly - only when you have deep understanding of the query and can prove the hint improves performance consistently.'
  },
  {
    id: 70,
    category: 'expert',
    question: 'What is database replication?',
    answer: 'Database replication creates and maintains multiple copies of the same database across different servers. Types include Master-Slave (read-only replicas), Master-Master (bidirectional), and various topologies for high availability, load distribution, and disaster recovery.'
  },
  {
    id: 71,
    category: 'expert',
    question: 'What is the difference between clustered and non-clustered indexes?',
    answer: 'Clustered indexes physically order table data and there can be only one per table (usually on primary key). Non-clustered indexes create separate structures pointing to data rows, allowing multiple per table. Clustered indexes are faster for range queries, non-clustered for specific lookups.'
  },
  {
    id: 72,
    category: 'expert',
    question: 'What is index fragmentation?',
    answer: 'Index fragmentation occurs when logical order of index pages doesn\'t match physical order on disk. Internal fragmentation (partially filled pages) and external fragmentation (out-of-order pages) both degrade performance. Regular maintenance through rebuilding or reorganizing indexes is necessary.'
  },
  {
    id: 73,
    category: 'expert',
    question: 'What are pivot and unpivot operations?',
    answer: 'PIVOT transforms rows to columns by aggregating values, useful for creating cross-tab reports. UNPIVOT does the opposite, transforming columns to rows. These operations help reshape data for different presentation formats and analytical requirements.'
  },
  {
    id: 74,
    category: 'expert',
    question: 'What is database connection pooling?',
    answer: 'Connection pooling maintains a cache of database connections that can be reused across multiple requests instead of creating new connections each time. It improves performance by reducing connection overhead and helps manage database resource utilization.'
  },
  {
    id: 75,
    category: 'expert',
    question: 'What are the best practices for SQL performance tuning?',
    answer: 'Key practices include: proper indexing strategy, avoiding SELECT *, using appropriate WHERE clauses, optimizing JOINs, limiting result sets, using EXISTS instead of IN for subqueries, avoiding functions in WHERE clauses, regular statistics updates, and monitoring execution plans.'
  }
];

export const quizQuestions: QuizQuestion[] = [
  // BASICS QUIZ QUESTIONS (23 questions)
  {
    id: 1,
    category: 'basics',
    question: 'What does SQL stand for?',
    options: [
      'Simple Query Language',
      'Structured Query Language',
      'Standard Query Logic',
      'System Query Language'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    category: 'basics',
    question: 'Which SQL statement is used to retrieve data from a database?',
    options: ['GET', 'SELECT', 'RETRIEVE', 'FETCH'],
    correctAnswer: 1
  },
  {
    id: 3,
    category: 'basics',
    question: 'What does the asterisk (*) represent in SELECT * FROM table_name?',
    options: [
      'All rows',
      'All columns',
      'All databases',
      'All tables'
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    category: 'basics',
    question: 'Which clause is used to filter rows in a SELECT statement?',
    options: ['FILTER', 'WHERE', 'HAVING', 'CONDITION'],
    correctAnswer: 1
  },
  {
    id: 5,
    category: 'basics',
    question: 'Which SQL statement is used to add new data to a table?',
    options: ['ADD', 'INSERT', 'CREATE', 'PUT'],
    correctAnswer: 1
  },
  {
    id: 6,
    category: 'basics',
    question: 'Which SQL statement is used to modify existing data in a table?',
    options: ['MODIFY', 'CHANGE', 'UPDATE', 'ALTER'],
    correctAnswer: 2
  },
  {
    id: 7,
    category: 'basics',
    question: 'Which SQL statement is used to remove data from a table?',
    options: ['REMOVE', 'DELETE', 'DROP', 'CLEAR'],
    correctAnswer: 1
  },
  {
    id: 8,
    category: 'basics',
    question: 'What is a PRIMARY KEY?',
    options: [
      'The first column in a table',
      'A column that uniquely identifies each row',
      'The most important column',
      'A column that can contain duplicates'
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    category: 'basics',
    question: 'Which keyword removes duplicate rows from query results?',
    options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'SINGLE'],
    correctAnswer: 1
  },
  {
    id: 10,
    category: 'basics',
    question: 'Which clause is used to sort query results?',
    options: ['SORT BY', 'ORDER BY', 'ARRANGE BY', 'ORGANIZE BY'],
    correctAnswer: 1
  },
  {
    id: 11,
    category: 'basics',
    question: 'What does the LIMIT clause do?',
    options: [
      'Limits the number of columns returned',
      'Limits the number of rows returned',
      'Limits the query execution time',
      'Limits the number of tables used'
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    category: 'basics',
    question: 'Which operator is used for pattern matching in SQL?',
    options: ['MATCH', 'PATTERN', 'LIKE', 'SIMILAR'],
    correctAnswer: 2
  },
  {
    id: 13,
    category: 'basics',
    question: 'What wildcard character matches any sequence of characters in LIKE?',
    options: ['*', '%', '?', '_'],
    correctAnswer: 1
  },
  {
    id: 14,
    category: 'basics',
    question: 'Which operator checks if a value exists in a list?',
    options: ['EXISTS', 'IN', 'CONTAINS', 'HAS'],
    correctAnswer: 1
  },
  {
    id: 15,
    category: 'basics',
    question: 'How do you check for NULL values in SQL?',
    options: ['= NULL', 'IS NULL', 'NULL?', 'EQUALS NULL'],
    correctAnswer: 1
  },
  {
    id: 16,
    category: 'basics',
    question: 'Which function counts the number of rows?',
    options: ['COUNT()', 'ROWS()', 'NUMBER()', 'TOTAL()'],
    correctAnswer: 0
  },
  {
    id: 17,
    category: 'basics',
    question: 'Which function calculates the sum of values?',
    options: ['ADD()', 'TOTAL()', 'SUM()', 'CALCULATE()'],
    correctAnswer: 2
  },
  {
    id: 18,
    category: 'basics',
    question: 'Which function finds the average of values?',
    options: ['MEAN()', 'AVG()', 'AVERAGE()', 'MEDIAN()'],
    correctAnswer: 1
  },
  {
    id: 19,
    category: 'basics',
    question: 'What is the difference between DROP and TRUNCATE?',
    options: [
      'No difference',
      'DROP removes table structure, TRUNCATE removes only data',
      'TRUNCATE removes table structure, DROP removes only data',
      'Both remove only data'
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    category: 'basics',
    question: 'Which command is used to create a new database?',
    options: ['NEW DATABASE', 'CREATE DATABASE', 'MAKE DATABASE', 'ADD DATABASE'],
    correctAnswer: 1
  },
  {
    id: 21,
    category: 'basics',
    question: 'Which command is used to create a new table?',
    options: ['NEW TABLE', 'CREATE TABLE', 'MAKE TABLE', 'ADD TABLE'],
    correctAnswer: 1
  },
  {
    id: 22,
    category: 'basics',
    question: 'What does AUTO_INCREMENT do?',
    options: [
      'Automatically increases table size',
      'Automatically generates unique numbers for new rows',
      'Automatically backs up data',
      'Automatically optimizes queries'
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    category: 'basics',
    question: 'Which logical operator requires both conditions to be true?',
    options: ['OR', 'AND', 'NOT', 'XOR'],
    correctAnswer: 1
  },

  // INTERMEDIATE QUIZ QUESTIONS (24 questions)
  {
    id: 24,
    category: 'intermediate',
    question: 'What is a JOIN in SQL?',
    options: [
      'A way to connect to the database',
      'A method to combine rows from multiple tables',
      'A type of constraint',
      'A data type'
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    category: 'intermediate',
    question: 'Which JOIN returns only matching rows from both tables?',
    options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'],
    correctAnswer: 2
  },
  {
    id: 26,
    category: 'intermediate',
    question: 'Which JOIN returns all rows from the left table?',
    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'],
    correctAnswer: 1
  },
  {
    id: 27,
    category: 'intermediate',
    question: 'What does a CROSS JOIN produce?',
    options: [
      'Only matching rows',
      'All rows from left table',
      'Cartesian product of both tables',
      'No rows'
    ],
    correctAnswer: 2
  },
  {
    id: 28,
    category: 'intermediate',
    question: 'What is a subquery?',
    options: [
      'A query that runs slowly',
      'A query nested inside another query',
      'A query with multiple tables',
      'A query with functions'
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    category: 'intermediate',
    question: 'Which clause is used to group rows?',
    options: ['GROUP BY', 'ORDER BY', 'SORT BY', 'COLLECT BY'],
    correctAnswer: 0
  },
  {
    id: 30,
    category: 'intermediate',
    question: 'Which clause filters groups created by GROUP BY?',
    options: ['WHERE', 'FILTER', 'HAVING', 'CONDITION'],
    correctAnswer: 2
  },
  {
    id: 31,
    category: 'intermediate',
    question: 'What is the difference between WHERE and HAVING?',
    options: [
      'No difference',
      'WHERE filters rows, HAVING filters groups',
      'HAVING filters rows, WHERE filters groups',
      'Both filter the same thing'
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    category: 'intermediate',
    question: 'Which operation combines results from multiple SELECT statements?',
    options: ['JOIN', 'MERGE', 'UNION', 'COMBINE'],
    correctAnswer: 2
  },
  {
    id: 33,
    category: 'intermediate',
    question: 'What is the difference between UNION and UNION ALL?',
    options: [
      'No difference',
      'UNION removes duplicates, UNION ALL keeps them',
      'UNION ALL removes duplicates, UNION keeps them',
      'UNION is faster than UNION ALL'
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    category: 'intermediate',
    question: 'What is an index?',
    options: [
      'A type of table',
      'A database structure that improves query performance',
      'A data type',
      'A constraint'
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    category: 'intermediate',
    question: 'What is a foreign key?',
    options: [
      'A key from another database',
      'A column that references the primary key of another table',
      'An encrypted key',
      'A backup key'
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    category: 'intermediate',
    question: 'What is referential integrity?',
    options: [
      'Data encryption',
      'Backup consistency',
      'Maintaining consistent relationships between tables',
      'Query optimization'
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    category: 'intermediate',
    question: 'Which function returns the current date and time?',
    options: ['CURRENT()', 'TODAY()', 'NOW()', 'TIME()'],
    correctAnswer: 2
  },
  {
    id: 38,
    category: 'intermediate',
    question: 'Which function converts text to uppercase?',
    options: ['UPPER()', 'UPPERCASE()', 'CAPS()', 'BIG()'],
    correctAnswer: 0
  },
  {
    id: 39,
    category: 'intermediate',
    question: 'Which function returns the length of a string?',
    options: ['SIZE()', 'COUNT()', 'LENGTH()', 'CHARS()'],
    correctAnswer: 2
  },
  {
    id: 40,
    category: 'intermediate',
    question: 'What does the CASE statement provide?',
    options: [
      'Case sensitivity',
      'Conditional logic in queries',
      'Data encryption',
      'Error handling'
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    category: 'intermediate',
    question: 'What does the EXISTS operator test?',
    options: [
      'If a table exists',
      'If a column exists',
      'If a subquery returns any rows',
      'If data exists in a table'
    ],
    correctAnswer: 2
  },
  {
    id: 42,
    category: 'intermediate',
    question: 'What is normalization?',
    options: [
      'Making data normal',
      'Organizing database structure to reduce redundancy',
      'Converting data types',
      'Sorting data'
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    category: 'intermediate',
    question: 'What is First Normal Form (1NF)?',
    options: [
      'All columns are unique',
      'No repeating groups, atomic values only',
      'All rows are unique',
      'Foreign keys are defined'
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    category: 'intermediate',
    question: 'What is a view?',
    options: [
      'A way to look at data',
      'A virtual table based on a query',
      'A backup of a table',
      'A type of index'
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    category: 'intermediate',
    question: 'What are the advantages of views?',
    options: [
      'Faster queries only',
      'More storage space',
      'Security and simplification of complex queries',
      'Better backup options'
    ],
    correctAnswer: 2
  },
  {
    id: 46,
    category: 'intermediate',
    question: 'Which JOIN keyword can be omitted in some databases?',
    options: ['LEFT', 'RIGHT', 'INNER', 'OUTER'],
    correctAnswer: 2
  },
  {
    id: 47,
    category: 'intermediate',
    question: 'What happens when you JOIN tables without specifying a condition?',
    options: [
      'Error occurs',
      'Returns empty result',
      'Creates a CROSS JOIN (Cartesian product)',
      'Returns only first row'
    ],
    correctAnswer: 2
  },

  // EXPERT QUIZ QUESTIONS (23 questions)
  {
    id: 48,
    category: 'expert',
    question: 'What is query optimization?',
    options: [
      'Making queries shorter',
      'Choosing the most efficient execution plan',
      'Adding more indexes',
      'Using fewer tables'
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    category: 'expert',
    question: 'What is an execution plan?',
    options: [
      'A backup plan for queries',
      'A schedule for query execution',
      'A roadmap showing how the database will execute a query',
      'A plan for database maintenance'
    ],
    correctAnswer: 2
  },
  {
    id: 50,
    category: 'expert',
    question: 'What is a stored procedure?',
    options: [
      'A backup procedure',
      'A precompiled SQL program stored in the database',
      'A way to store data',
      'A type of table'
    ],
    correctAnswer: 1
  },
  {
    id: 51,
    category: 'expert',
    question: 'What is the main difference between stored procedures and functions?',
    options: [
      'No difference',
      'Functions can modify data, procedures cannot',
      'Procedures can modify data, functions cannot',
      'Functions are faster'
    ],
    correctAnswer: 2
  },
  {
    id: 52,
    category: 'expert',
    question: 'What is a trigger?',
    options: [
      'A slow query',
      'A special stored procedure that automatically executes on database events',
      'A type of index',
      'A backup mechanism'
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    category: 'expert',
    question: 'What is a cursor?',
    options: [
      'A pointer to the screen',
      'A database object for row-by-row processing',
      'A type of index',
      'A backup tool'
    ],
    correctAnswer: 1
  },
  {
    id: 54,
    category: 'expert',
    question: 'What is a Common Table Expression (CTE)?',
    options: [
      'A common table',
      'A temporary named result set defined with WITH clause',
      'A type of view',
      'A backup table'
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    category: 'expert',
    question: 'What are window functions?',
    options: [
      'Functions that work with windows',
      'Functions that perform calculations across related rows',
      'Functions for the Windows operating system',
      'Functions for opening databases'
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    category: 'expert',
    question: 'What is partitioning?',
    options: [
      'Dividing hard drives',
      'Dividing large tables into smaller manageable pieces',
      'Creating separate databases',
      'Splitting queries'
    ],
    correctAnswer: 1
  },
  {
    id: 57,
    category: 'expert',
    question: 'What does ACID stand for?',
    options: [
      'Advanced Computer Information Database',
      'Atomicity, Consistency, Isolation, Durability',
      'Automatic Control Information Database',
      'Advanced Calculation Information Data'
    ],
    correctAnswer: 1
  },
  {
    id: 58,
    category: 'expert',
    question: 'What is deadlock?',
    options: [
      'A locked database',
      'Two or more transactions waiting indefinitely for each other',
      'A crashed database',
      'A slow query'
    ],
    correctAnswer: 1
  },
  {
    id: 59,
    category: 'expert',
    question: 'What is a materialized view?',
    options: [
      'A visible view',
      'A physical copy of query results stored as a table',
      'A temporary view',
      'A backup view'
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    category: 'expert',
    question: 'What is the difference between clustered and non-clustered indexes?',
    options: [
      'No difference',
      'Clustered physically orders data, non-clustered creates separate structure',
      'Non-clustered is faster',
      'Clustered is for small tables only'
    ],
    correctAnswer: 1
  },
  {
    id: 61,
    category: 'expert',
    question: 'What is index fragmentation?',
    options: [
      'Broken indexes',
      'When logical order of index pages doesn\'t match physical order',
      'Too many indexes',
      'Incomplete indexes'
    ],
    correctAnswer: 1
  },
  {
    id: 62,
    category: 'expert',
    question: 'What does the PIVOT operation do?',
    options: [
      'Rotates the database',
      'Transforms rows to columns',
      'Sorts data',
      'Backs up data'
    ],
    correctAnswer: 1
  },
  {
    id: 63,
    category: 'expert',
    question: 'What is connection pooling?',
    options: [
      'Multiple database connections',
      'A cache of database connections for reuse',
      'Connecting multiple databases',
      'A backup connection method'
    ],
    correctAnswer: 1
  },
  {
    id: 64,
    category: 'expert',
    question: 'Which isolation level allows dirty reads?',
    options: [
      'READ COMMITTED',
      'READ UNCOMMITTED',
      'REPEATABLE READ',
      'SERIALIZABLE'
    ],
    correctAnswer: 1
  },
  {
    id: 65,
    category: 'expert',
    question: 'What is database sharding?',
    options: [
      'Breaking databases',
      'Horizontally partitioning data across multiple database instances',
      'Backing up databases',
      'Connecting databases'
    ],
    correctAnswer: 1
  },
  {
    id: 66,
    category: 'expert',
    question: 'What is database replication?',
    options: [
      'Copying databases',
      'Creating and maintaining multiple copies of databases across servers',
      'Backing up databases',
      'Merging databases'
    ],
    correctAnswer: 1
  },
  {
    id: 67,
    category: 'expert',
    question: 'What is a recursive CTE used for?',
    options: [
      'Repeating queries',
      'Processing hierarchical data',
      'Backing up data recursively',
      'Creating loops in queries'
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    category: 'expert',
    question: 'Which window function provides sequential row numbering?',
    options: [
      'RANK()',
      'ROW_NUMBER()',
      'DENSE_RANK()',
      'NTILE()'
    ],
    correctAnswer: 1
  },
  {
    id: 69,
    category: 'expert',
    question: 'What are query hints?',
    options: [
      'Suggestions for better queries',
      'Directives that force the optimizer to use specific strategies',
      'Help text for queries',
      'Comments in queries'
    ],
    correctAnswer: 1
  },
  {
    id: 70,
    category: 'expert',
    question: 'What is the main purpose of the OVER clause?',
    options: [
      'To override settings',
      'To define the window of rows for window functions',
      'To check if something is over',
      'To end transactions'
    ],
    correctAnswer: 1
  }
];