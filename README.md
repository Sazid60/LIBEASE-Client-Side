
# LIBEASE 

### Assignment_ID: assignment_category_0008

#### Category : Library Management System

#### Website URL: [https://libease-client-b9a11-57399.web.app/](https://libease-client-b9a11-57399.web.app/)


## ADMIN LOGIN DETAILS
#### Admin-Email : shahnawazsazid60@gmail.com
#### Admin-Password : Phb9A11

##### USE ADMIN EMAIL AND PASSWORD TO GET ALL ROUTES & OPERATION ACCESS


#### Overview:
LIBEASE is a Library Management System serving to two types of users: random users and admins. Random users can register, log in, browse books, view details, borrow, and return books. Admins have extra privileges including adding, updating, and deleting books. They cannot borrow books. 

### Features & Characteristics:

#### Routes Fo Random User
- Users can select book categories to navigate to categorized books page.  
- Click on a book's "View Details" button to see its details.
- Borrow a book by clicking the "Borrow Book" button and specifying a return date. 
- Users see borrowed books on the borrowed books page. 
- On Borrowed books page Click on the "Return Book" button for each book to return it.
- Borrowing & Returning Books Changes the available Book Quantity.

#### Routes For Admin User
#### To Get All Routes & Operation Access Login Using Admin Email & Password
##### Admin-Email : shahnawazsazid60@gmail.com
##### Admin-Password : Phb9A11

- When an admin logs in this enables all books and add books routes.
- Only an Admin can add books in different categories and added books will be shown in All Books page.
- In all books page an admin can do update and delete operation which promptly responses.

##### Reminder :
- Admin can not borrow his own added books but all users except admin can borrow and return books.

#### Routes And Data Protection
- All pages except the home page require login.
- All Books route data have been protected by JWT token, 
- Problematic token do not allow to access all books data.
- Problematic token prevents admin to do add, update and delete.




