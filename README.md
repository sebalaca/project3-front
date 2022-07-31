# FIND A FRIEND

<br>

## Description

It is an app created for the administration of animal shelters and to be able to offer people their animals for adoption.
The application effectively allows the contact of the person interested in adopting a pet with the institution after having observed the animals to be adopted in a catalog. The app admin can perform all CRUD actions on Animals, Contacts, Maps, Stories, Location and Donations.

#### Routes

# Client / Frontend

## React Router Routes (React App)

| Path                      | Component                      | Permissions                 | Behavior                                                      |
| ------------------------- | ------------------------------ | --------------------------- | ------------------------------------------------------------- |
| `/`                       | SplashPage                     | public `<Route>`            | Home page                                                     |
| `/signup`                 | SignupPage                     | anon only `<AnonRoute>`     | Signup form, link to login, only admin                        |
| `/login`                  | LoginPage                      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login  |
| `/logout`                 | n/a                            | admin only `<PrivateRoute>` | Navigate to homepage after logout, expire session             |
| `/add`                    | NavBar                         | admin only `<PrivateRoute>` | Add cat or dog to db                                          |
| `/addmap`                 | NavBar                         | admin only `<PrivateRoute>` | Add maps to the app                                           |
| `/addstories`             | NavBar                         | admin only `<PrivateRoute>` | Add stories to the app                                        |
| `/addonation`             | NavBar                         | admin only `<PrivateRoute>` | Add donation to the app                                       |
| `/addcontact`             | NavBar                         | admin only `<PrivateRoute>` | Add contact to the app                                        |
| `/settings`               | Form                           | admin only `<PrivateRoute>` | Setting logo app                                              |
| `/cat/edit/:catId`        | Form                           | admin only `<PrivateRoute>` | Edit cat details                                              |
| `/dog/edit/:dogId`        | Form                           | admin only `<PrivateRoute>` | Edit dog details                                              |
| `/contacts/edit/:dogId`   | Form                           | admin only `<PrivateRoute>` | Edit contact details                                          |
| `/stories`                | List for stories               | user `<PublicRoute>`        | Shows all stories                                             |
| `/dog/:dogId`             | List for dog                   | user `<PublicRoute>`        | Shows dogs details                                            |
| `/contacts/:contactId`    | List for contact               | user `<PublicRoute>`        | Shows contact details                                         |
| `/cat/:catId`             | List for cat                   | user `<PublicRoute>`        | Shows cat details                                             |
| `/cats`                   | List for cats                  | user `<PublicRoute>`        | Shows cat list                                                |
| `/dogs`                   | List for dogs                  | user `<PublicRoute>`        | Shows dog list                                                |
| `/contacts`               | List for contacts              | user `<PublicRoute>`        | Shows contacts list                                           |
| `/map`                    | List for map                   | user `<PublicRoute>`        | Shows maps details                                            |
| `/donate`                 | Form                           | user `<PublicRoute>`        | Add donation                                                  |
| `/dogadopted`             | Form                           | user `<PublicRoute>`        | Shows adopted dog list                                        |
| `/catadopted`             | Form                           | user `<PublicRoute>`        | Shows adopted cat list                                        |



## Components

- LoginPage

- SignupPage

- NavBar

- Map

- ElementList

- SearchForm

- SearchFilters

- ElementInfo

- ElementDetails

- ElementEdits

<br>

##### Server / Backend

GET /api

POST /api/auth/signup

POST /api/auth/login

GET /api/auth/verify

POST /adddog

POST /addcat

POST /addstory

GET /users

POST /adddonation

POST /addmap

POST /settings

PUT /carousel

POST /addcontact

DELETE /cats/:

DELETE /dogs/:dogId

DELETE /stories/:storieId

DELETE /contacts/:contactId

GET /dogs/:dogId

GET /cats/:catId

GET /contacts/:contactId

PUT /dogs/:dogId

PUT /cats/:catId

PUT /contacts/:contactId

POST /upload

GET /contacts

GET /donations

GET /logo

GET /dogs

GET /cats

GET /map

GET /stories


<br>

#### Models

##### Admin Model

```js
{
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  dogsadded: [{ type: Schema.Types.ObjectId, ref: "Dog" }],
  catsadded: [{ type: Schema.Types.ObjectId, ref: "Cat" }]
}
```

##### Cat Model

```js
{
  name: String,
  breed: String,
  age: Number,
  weight: String,
  profilePicture: String,
  pictures: [],
  description: String,
  admitionDate: String,
  views: Number,
  isAdopted:Boolean,
  sex:String,
  adminID: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  contactPerson: [{ type: Schema.Types.ObjectId, ref: "Contact" }],
}
```

##### Contact Model

```js
{
  firstName: String,
  lastName: String,
  email:String,
  phone: Number,
  foto:[String]
}
```

##### Dog Model

```js
{
  name: String,
  breed: String,
  age: Number,
  weight: String,
  profilePicture: String,
  pictures: [String],
  description: String,
  admitionDate: String,
  views: Number,
  isAdopted:Boolean,
  sex:String,
  adminID: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  contactPerson: [{ type: Schema.Types.ObjectId, ref: "Contact" }]
}
```

##### Donation Model

```js
{
    bankName: String,
    account: String,
    paypal: String,
    bizum: String,

}
```

##### Map Model

```js
{
  mapCode: String,
  description: String,

}
```

##### Site Model

```js
{
  logo: String,
  navbarlogo: String,
  devise: String,
  carusel:String

}
```

##### Stories Model

```js
{
  header: String,
  description: String,
  pictures: [],
}
```

<hr>

## Links

### Git

The url to your repository and to your deployed project

[Client repository Link - Front - AN](https://github.com/unimexes2/project3-front)

[Client repository Link - Front - SL](https://github.com/sebalaca?tab=repositories)

[Server repository Link - Back - AN](https://github.com/unimexes2/project3-back)

[Server repository Link - Back - SL](https://github.com/sebalaca/project3-back)

[Deployed App Link](https://protectorapalafols.herokuapp.com)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1C1nFHn_p-jDXPgdZyAHWCLcYkMdlJ6lIdLGIn0uQZrs/edit?usp=sharing)
