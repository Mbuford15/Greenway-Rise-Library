# Greenway-Rise-Library

The library website allows the user to either check out or return any book from around the school by putting in basic info about the book. The application relies on the honor code to ensure no one takes a book without recording it. 

Once a book checkout form is submitted through the website, the person’s name, book title, and check_in/check_out status is recorded in a spreadsheet that holds a list of all the books. 

If a book is returned through the website the status and amount of checked out books will change on the spreadsheet. Also, the name will disappear and the book info will be reset. 

Only the “librarian”/Mr. Taylor/Library club will have access to the google sheet in order to keep track of the books and who has them. The only changes that need to be manually made to the spreadsheet are adding more books, book locations and the amount of total books copies around the school. 


All of the book info will be displayed on the website. Using a search bar and filters the user will be able to look through the available books and check one out. The info will eventually include but will not  be limited to book location, author, and a short summary.


The website uses an API to send the data using the form to the google sheet. The website used, apispreadsheets.com, allows for 250 requests per month for the free version which will allow the application to work initially. However, if more than an average of 8 people a day use the library website, the $9/month is recommended which will allow 5,000 requests per month. 

