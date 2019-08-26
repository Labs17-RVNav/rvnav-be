🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend delpoyed at [🚫name service here](🚫add URL here) <br>

## 1️⃣ Getting started

To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn dev** to start the local server
- **yarn test** to start server using testing environment

### Backend framework goes here

🚫 Why did you choose this framework?

- Point One
- Point Two
- Point Three
- Point Four

## 2️⃣ Endpoints

🚫This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project

# UserRoutes

#### User Routes

| Method | Endpoint          | Access Control | Description        |
| ------ | ----------------- | -------------- | ------------------ |
| POST   | `/users/register` | none           | Creates a new user |
| POST   | `/users/login`    | none           | login a user       |

#### USERS

---

## Register

---

Method: **POST** `/users/register`

### Example Registration Post Object

```
{
  username: "sammyw", // STRING (REQUIRED)
  first_name: "samwise", // STRING (REQUIRED)
  last_name: "gamgi", // STRING (REQUIRED)
  password: "password123", // STRING (REQUIRED)
  email: "sample@email.com" // STRING
}
```

### Example Response Object

```
{
    "id": 1,
    "username": "sammyw",
    "first_name": "samwise",
    "last_name": "gamgi",
    "password": "$2a$10$6E9J96q2S0dou8MSAwa56uQNfUfVgYehZRWq03keQNjZaKJ12h3mS",
    "email": "sample@email.com",
    "created_at": "2019-08-23 06:12:29",
    "updated_at": "2019-08-23 06:12:29"
}
```

## Login

---

Method: **POST** `/users/login`

### Example Registration Post Object

```
{
	"username": "sammyw",
	"password": "password123"
}
```

### Example Response Object

```
{
    "message": "Welcome sammyw!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6InNhbW15dyIsImZpcnN0X25hbWUiOiJzYW13aXNlIiwiaWF0IjoxNTY2NTQwNzgwLCJleHAiOjE1NjY1NDQzODB9.GgcH5xG8aY_fa67H_BsqFmVh4FgPqLCKKDWm5V9bgBo",
    "user": {
        "id": 1,
        "username": "sammyw",
        "first_name": "samwise",
        "last_name": "gamgi",
        "password": "$2a$10$6E9J96q2S0dou8MSAwa56uQNfUfVgYehZRWq03keQNjZaKJ12h3mS",
        "email": "sample@email.com",
        "created_at": "2019-08-23 06:12:29",
        "updated_at": "2019-08-23 06:12:29"
    }
}
```

# VehicleRoutes

#### Vehicle Routes

| Method | Endpoint       | Access Control | Description           |
| ------ | -------------- | -------------- | --------------------- |
| POST   | `/vehicle`     | JWT            | Creates a new vehicle |
| GET    | `/vehicle`     | JWT            | get vehicle list      |
| GET    | `/vehicle/:id` | JWT            | get specified vehicle |
| PUT    | `/vehicle/:id` | JWT            | update vehicle        |
| DEL    | `/vehicle/:id` | JWT            | delete vehicle        |

#### Vehicles

---

## Create Vehicle

---

Method: **POST** `/vehicle`

### Example Vehicle Creation Post Object

```
{
	"height": 12.3, // FLOAT
	"weight": 12000.3, // FLOAT
	"width": 10.3, // FLOAT
	"length": 42.3, // FLOAT
	"axel_count": 2, // INTEGER
	"class": "A", // STRING
	"dual_tires": true, // BOOLEAN
	"trailer": false //BOOLEAN
}
```

### Example Response Object

```
{
    "id": 14,
    "user_id": 2,
    "height": 12.3,
    "width": 10.3,
    "length": 42.3,
    "weight": 12000.3,
    "axel_count": 2,
    "class": "A",
    "created_at": "2019-08-24 02:24:38",
    "updated_at": "2019-08-24 02:24:38",
    "dual_tires": 1,
    "trailer": 0
}
```

## Retrieve Vehicles List

---

Method: **GET** `/vehicle`

### Example Response Object

```
[
    {
        "id": 14,
        "user_id": 2,
        "height": 14.3,
        "width": 12.3,
        "length": 42.3,
        "weight": 12000.3,
        "axel_count": 2,
        "class": "A",
        "created_at": "2019-08-24 02:24:38",
        "updated_at": "2019-08-24 02:24:38",
        "dual_tires": 1,
        "trailer": 0
    },
    {
        "id": 15,
        "user_id": 2,
        "height": 10.3,
        "width": 10.3,
        "length": 30.3,
        "weight": 8000.3,
        "axel_count": 1,
        "class": "C",
        "created_at": "2019-08-24 02:55:01",
        "updated_at": "2019-08-24 02:55:01",
        "dual_tires": 0,
        "trailer": 1
    }
]
```

## Retrieve Single Vehicle

---

Method: **GET** `/vehicle/:id`

### Example Response Object

```
{
    "id": 14,
    "user_id": 2,
    "height": 14.3,
    "width": 12.3,
    "length": 42.3,
    "weight": 12000.3,
    "axel_count": 2,
    "class": "A",
    "created_at": "2019-08-24 02:24:38",
    "updated_at": "2019-08-24 02:24:38",
    "dual_tires": 1,
    "trailer": 0
}
```

### Example Error Response Object

```
{
    "message": "No vehicle by that id"
}
```

## Update Single Vehicle

---

Method: **PUT** `/vehicle/:id`

### Example Put Object **_note that you can update 1 or multiple fields_**

```
{
	"height": 14.3,
	"width": 12.3
}
```

### Example Response Object

```
1 // the count of updated objects
```

### Example Error Response Object

```
{
    "message": "No vehicle by that id"
}
```

## Delete Vehicle

---

Method: **DEL** `/vehicle/:id`

### Example Response Object

```
1 // count of deleted vehicles
```

### Example Error Response Object

```
{
    "message": "No vehicle by that id"
}
```

## 2️⃣ Actions

### Users Helpers

`add()` -> Creates a new user

`findById(id)` -> Returns a user by ID

`findBy(filter)` -> Returns a user by a particular filter

`findUsers(orgId)` -> Returns a list of users

<br>
<br>
<br>

### Vehilces Helpers

`add()` -> Creates a new users vehicle

`findById(id)` -> Returns a users vehicle by ID

`findBy(filter)` -> Returns a users vehicle by a particular filter

`findUsersVehicles(user_id)` -> Returns a list of a users vehicles

`updateVehicle(user_id)` -> Updates a users vehicle, returning number of updated entries

`deleteVehicle(user_id)` -> Deletes a users vehicle, returning number of deleted entries

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app

_ STAGING_DB - optional development db for using functionality not available in SQLite
_ NODE\*ENV - set to "development" until ready for "production"

- JWT*SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-_=+)') for i in range(50)])
  _ SENDGRID_API_KEY - this is generated in your Sendgrid account \* stripe_secret - this is generated in the Stripe dashboard

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
