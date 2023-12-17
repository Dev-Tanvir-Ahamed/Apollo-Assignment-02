# Make a user data app

- create new user
- Retrieve a list of all users
- Retrieve a specific user by ID
- update user information
- delete user
- add new product order
- Retrieve all orders for a specific user
- Calculate Total Price of Orders for a Specific User

# Data

- userId(unique)
- username(unique)

# Routes

POST - /api/users/create-user (Create a new user)
GET - /api/users (Retrieve a list of all users)
GET - /api/users/:userId (Retrieve a list of all users)
PUT - /api/users/:userId (Update user information)
DELETE - /api/users/:userId (Delete a user)
PUT - /api/users/:userId/orders (add new product order)
GET - /api/users/:userId/orders (Retrieve all orders for a specific user)
GET - /api/users/:userId/orders/total-price (Calculate Total Price of Orders for a Specific User)

# others

- password hased by bycrpt
- validation with zod
