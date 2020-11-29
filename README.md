<h1 align="center"><a href="https://the-zen-escape.herokuapp.com/">'The Zen Escape' Application</a></h1>
<h4 align="center"> A full-stack tour booking application</h4>

## Deployed Version
Check it out : https://the-zen-escape.herokuapp.com/

 <p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#api-usage">API Usage</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#technologies-used">Technologies Used</a> •
  <a href="#installation">Installation</a> 
</p>

## Key Features

* Authentication and Authorization
  - Signup, Login and logout into user account
  - Access to certain rights, like updating and creating tours, are reserved for users with roles like admin and lead guide.
* Tour
  - Book Tours, check tour locations on map, check users' reviews and ratings
* User profile
  - Update username, photo, email, and password. View Booked Tours.
* Payment
  - Credit card payment gateway

## How To Use

### Book a tour
* Signup to create your account
* Search for tours that you want to book
* Book a tour by Scrolling down the respective tour page
* Proceed to the payment checkout page
* Enter the card details (Test Mode):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: <Any Future Date>
  - CVV: 222
  ```
* Finished!

### Manage your booking

* Check the tour you have booked in "Manage Booking" page in your user settings( you can access user settings by clicking on your name on the right-most side of the navbar). You'll be automatically redirected to this page after you have completed the booking.

### Update your profile

* You can update your own username, profile photo, email and password.

## API Usage
Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add: 
  ```
  - {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
  - {{password}} with your user password as value.
  ```
  
  Check the [API Documentation](https://documenter.getpostman.com/view/13429515/TVev3jej#intro) for more details on the API usage.
  
<b> API Features: </b>

Tours List 👉 https://the-zen-escape.herokuapp.com/api/v1/tours

Tours State 👉 https://the-zen-escape.herokuapp.com/api/v1/tours/tour-stats

Get Top 5 Cheap Tours 👉 https://the-zen-escape.herokuapp.com/api/v1/tours/top-5-cheap

Get Tours Within Radius 👉 https://the-zen-escape.herokuapp.com/api/v1/tours/tours-within/200/center/34.098453,-118.096327/unit/mi

## Deployment
The website is deployed with git into heroku. Below are the steps taken:
```
git init
git add -A
git commit -m "Commit message"
heroku login
heroku create
heroku config:set CONFIG_KEY=CONFIG_VALUE
parcel build ./public/js/index.js --out-dir ./public/js --out-file bundle.js
git push heroku master
heroku open
```


## Technologies Used

* [NodeJS](https://nodejs.org/en/) - JS runtime environment
* [Express](http://expressjs.com/) - The web framework used
* [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
* [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
* [JSON Web Token](https://jwt.io/) - Security token
* [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
* [Stripe](https://stripe.com/) - Online payment API
* [Postman](https://www.getpostman.com/) - API testing
* [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
* [Heroku](https://www.heroku.com/) - Cloud platform

## Installation
You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running
```
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm start
Setting up ESLint and Prettier in VS Code 👇
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```
