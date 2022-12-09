# Little To-Do List ![stable]

<!-- ABOUT SECTION -->
 Little To-Do List is a JavaScript app I created that allows users to create/delete tasks on a custom list. This project focused on compartmentalizing HTML and JS components to create and store dynamically created custom lists, each storing a unique set of tasks on a local database.

 Originally the project was hosted on a Heroku cloud server, but has since been retired to my local machine. If you'd like to check out the application, feel free to clone the repository and spin up a version on your own machine using the instructions below! 

<!-- TABLE OF CONTENTS -->
  ## Table of contents
- [Little To-Do List ](#little-to-do-list-)
  - [Table of contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [MongoDB Atlas Setup](#mongodb-atlas-setup)
    - [Starting the application locally](#starting-the-application-locally)
  - [Usage](#usage)
    - [List controls](#list-controls)
  - [Directory](#directory)
    - [/Public/CSS](#publiccss)
    - [/Views](#views)
  - [Contact](#contact)
  - [Acknowledgments](#acknowledgments)


<!-- Prerequisites -->

## Prerequisites

* any HTML code editor of your choice, such as [VS Code](https://code.visualstudio.com/), [Atom](https://atom.io/), etc.
* install [Node.js](https://nodejs.org/en/)

(optional setup with MongoDB Atlas Cloud Database)
* install and setup [MongoDB](https://www.mongodb.com/) ([installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/))


<!-- Installation -->
## Installation

1. clone the repository to your desired location.
2. Install the required packages in the terminal
	`$ npm install`
3. To run the website as is, start the app from your terminal with,
	`$node app.js`
4. In you browser's address bar, navigate to
`http://http://localhost:3000/`

### MongoDB Atlas Setup
1. Create a MongoDB Atlas Account
2. Select your desired settings and create a new Cluster
3. Find the "connect to application" option, and obtain a new **SRV Key**.
4. In the root project folder, create a new file called `.env`
5. Edit the new .env file, and enter this line at the top of the file.
   `MONGO_ATLAS_KEY= (Enter your SRV Key here)`
6. Save the file.

### Starting the application locally

1. On Windows, open the command terminal and navigate to your project folder.
2. Install the required packages using `$npm install`
3. Start the application on your local server with `node app.js`
4. If there are no errors, then you can head to http://localhost:3000 in your web browser

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Once you are successfully connected to the website,  you'll be greeted by a fresh To-Do list with a few tutorial items explaining how to interact with the site.

### List controls

**Create new item**
Simply type out the item description, then click the `+` button on the right to add a new item to your list.

**Deleting a list item**
To delete a completed task, click the empty checkbox on the left of your item.

**Creating a new list**
Lists are created and saved dynamically by adding a `/new_list_name` to the end of the html address. For example, entering `localhost:3000/workshop` into the address bar will create and save a new empty list to the database




<!-- DIRECTORY -->
## Directory

### [/Public/CSS]()
Folder containing CSS style sheet linked to the HTML document

### [/Views]()
Contains all pages and components used in the website

**/about**
Html component for the about page

**/footer**
Html component for the website's footer

**/header**
html component for the websites header

**/list**
html component for the main To-Do list


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Jake Brunner -  jbbrunner10@gmail.com

LinkedIn - https://www.linkedin.com/in/jake-brunner-21760522b/

This Repository - https://github.com/jandrew13/Web-Dev-Bootcamp

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [The 2022 Web Development Course](https://www.udemy.com/course/the-complete-web-development-bootcamp)
* [The London App Brewery](https://www.londonappbrewery.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: images/screenshot.png

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
