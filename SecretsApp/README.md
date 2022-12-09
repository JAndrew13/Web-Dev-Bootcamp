
# Secrets App ![stable]

<!-- ABOUT SECTION -->
## About

The Secrets App is a website that allows you to share a personal secret anonymously alongside others on the secrets board.
Starting with account creation, new users can enter details manually or login using the Google OAuth2 method. From there, The data is sent to a secure MongoDB Atlas database. Here, user accounts are stored alongside any other potential profile information, as well as the secrets created by this user.

Being centered around web security and authentication methods, over the course of the development process I learned and implemented 6 different types of security layers. Though it is quite simple, it taught me invaluable lessons on why and how to include security in my future projects - starting with basic user registration, and ending with Google OAuth2 connections. Below is a breakdown of each of the successive security techniques.

#### Layer 1: User Registration and login
Allow users to create an account name and password stored in a local database

#### Layer 2: Database Encryption
Require basic encryption on all password data stored in the database

#### Layer 3: Hashing Passwords
Apply Hashing to the encrypted passwords stored in the database

#### Layer 4: Salting and Hashing Passwords
Include 10 rounds of salting/hashing on the encrypted passwords

#### Layer 5: Enable Cookies and Sessions
Add Cookies and Sessions to the browser using Passport.JS

#### Layer 6: Enable Google OAuth2 Login
Connect a Google OAuth2 login button to the signup/login page.

<!-- TABLE OF CONTENTS -->

## Table of contents

- [Secrets App ](#secrets-app-)
  - [About](#about)
  - [Table of contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Google API Setup](#google-api-setup)
    - [Environment Setup](#environment-setup)
    - [Starting The App](#starting-the-app)
  - [Usage](#usage)
  - [Directory](#directory)
    - [/root](#root)
    - [/Public/CSS](#publiccss)
    - [/Views/partials](#viewspartials)
  - [Contact](#contact)
  - [Acknowledgments](#acknowledgments)

<!-- Prerequisites -->

## Prerequisites

* any HTML code editor of your choice, such as [VS Code](https://code.visualstudio.com/), [Atom](https://atom.io/), etc.
* install [Node.js](https://nodejs.org/en/)
* install and setup [MongoDB](https://www.mongodb.com/) ([installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/))

<!-- Installation -->

## Installation

1. clone the repository to your desired location.
2. Install the required packages in the terminal
`$ npm install`

### Google API Setup
1. Head over to [Google's Developer Console](https://console.cloud.google.com/)
2. Create a new project name "Secrets".
3. Navigate to the *Credentials* tab, enter your email, then click save.
4. click "Create Credentials", then select **OAuth Client ID**
5. Select "Web Application" and enter the name "Secrets".
6. Under *Authorized Javascript Origins*, enter `http://localhost:3000`
7. Under  *Authorized Redirect URLS*, enter  `http://localhost:3000/auth/google/secrets`
8. Click submit, then save the provided **client ID** and **client secret**

### Environment Setup
1. Inside the root project directory, create a new file called `.env`
2. open this file with any code editor and add the following text.
`CLIENT_ID=(your client ID)`
`CLIENT_SECRET=(your client secret)`
3. save the file

### Starting The App

 To run the website as is, start the app from your terminal with,
`$node app.js`

 In you browser's address bar, navigate to
`http://http://localhost:3000/`


**Enabling Database Controls**

To enable the MongoDB controls on your local machine, you will need to install and configure MongoDB on you local machine before running the application. Once you have done that, go ahead and run the application normally.

Once you have the node server running successfully, the *app.js* file will have created a new database on your local machine. Check to see that this MongoDB server is running properly.

1. In a separate command terminal, open the mongo shell.
`$ mongosh`

2. show the current list of active databases
`$ show dbs`

4. Here you can control the stored users in "UserDB", or delete the database entirely using standard MongoDB commands. Check out the [documentation](https://www.mongodb.com/docs/) for more info!

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

Once you've successfully got the web-app up and running, you can either manually register a new account on the homepage, or login using your google account with Google OAuth. For manual logins, the data is sent and stored on your local Mongo Database.

After logging in, you are taken to the "secrets" page. This page displays secret messages created by all users. Each user is allowed only one secret at a time (so make sure its a good one!)

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- DIRECTORY -->

## Directory

### [/root]()
Contains the main **app.js** file, as well as .env variables for the google API

### [/Public/CSS]()

Folder containing CSS style sheet linked to the HTML document



### [/Views/partials]()

Contains all pages and components used in the website

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->

## Contact



Jake Brunner - jbbrunner10@gmail.com

LinkedIn - https://www.linkedin.com/in/jake-brunner-21760522b/

This Repository - https://github.com/jandrew13/Web-Dev-Bootcamp

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

* [The 2022 Web Development Course](https://www.udemy.com/course/the-complete-web-development-bootcamp)
* [The London App Brewery](https://www.londonappbrewery.com/)

 <p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew



<!-- STATUS MARKERS -->



[stable]: http://badges.github.io/stability-badges/dist/stable.svg
[unstable]: http://badges.github.io/stability-badges/dist/unstable.svg
[depreciated]: http://badges.github.io/stability-badges/dist/deprecated.svg
[experimental]: http://badges.github.io/stability-badges/dist/experimental.svg
[frozen]: http://badges.github.io/stability-badges/dist/frozen.svg
[locked]: http://badges.github.io/stability-badges/dist/locked.svg

[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues

<!-- TOOLS -->
[git-scl.com]:https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[git-url]:https://git-scm.com/
[Postman.com]:https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Postman-url]:https://Postman.com
[Babel.com]:https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black
[Babel-url]:Babel.com
[JavaScript.com]:https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]:https://javascript.com
[Heroku.com]: https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white
[Heroku-url]: https://heroku.com
[NodeJS.org]:https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[MongoDB.com]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://mongodb.com
[Expressjs.com]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Expressjs-url]: https://expressjs.com
[npmjs.com]:https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[npmjs-url]:npmjs.com
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
