# burger

## Description

*Eat-da-Burger* application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the bootstrap and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.

## Live Link
 - https://limitless-crag-31899.herokuapp.com/

## Technologies Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap
- ORM

## Directory Structure

All the recommended files and directories from the steps above should look like the following structure:

```js
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


**Enjoy and have a burger!**
