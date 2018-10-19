# GymApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2. The application faces to two type of users, which are the customer of this gym and the gym admin. For customer,they can view the plan page to see if he is interested in any plan. If so, he can register himself to the system by entering his first name, last name, phone, email and also the intersted training type. For gym admin, he can login to the website by username and password, to manage the registerd customer and plans. Admin can also add a new admin to the website. More functionalites will be implemented in the future.

# Get started!

## Dependecies

Before you start the application...
* understand node and npm, any reference please see `https://www.npmjs.com/` . 
* Ensure your local machine has already installed the latest version of Node and NPM

## Database

The database for this project is Mongodb Native Driver implemented on mlab.
* Install: `npm install` `mongodb` `--save`
* Reference: `https://mongodb.github.io/node-mongodb-native/index.html` , `https://mlab.com/`.

## UI Framework

The UI framework for this project is semantic-ui
* Install: `npm install` `ng2-semantic-ui` `--save`
* Reference: `https://semantic-ui.com/`.

## Encryption

The encryption for password is set by Bcrypt, jsonwebtoken, express-jwt.
* Install: `npm install` `bcrypt`, `jsonwebtoken`, `express-jwt` `--save`
* Reference:  `https://www.npmjs.com/package/bcrypt`, `https://jwt.io/`, `https://www.npmjs.com/package/jwt-express`.

## Install

* git clone this repository
* run npm install to install all the dependencies

## Running the application

After all the dependecies have already installed correctly, run `npm start` to start the server. 
Navigate to `http://localhost:4200`. If you want the app to automatically reload if ang changes of the 
source files, run `nodemon src/server/index.js`;

## Ideal IDE
* [Visual Studio Code](https://code.visualstudio.com/) (Recommended)
* [Atom](https://atom.io/) with [TypeScript](https://atom.io/packages/atom-typescript) installed

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Serve

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

Warning!! this command won't run the backend!!!

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Author
This project is produced by Sam.


