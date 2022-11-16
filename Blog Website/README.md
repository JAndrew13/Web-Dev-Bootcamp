# Blog Website ![stable]

<!-- ABOUT SECTION -->
This is the source code for my two part Blog website challenge project. It was initially created using Node and EJS, and then was later upgraded to include the use of a MongoDB database to store new blog posts. This project pulled together many of the tools used in previous lessons, resulting in a clean and minimal website in both design and code.

Upon opening the website, you'll see a simple navigation bar containing links to the about, contact, and home page. Below this, I've included a basic overview text area, followed by a list of blog posts. 

**The Homepage**
On the Homepage, all of the posts are displayed in ascending order by date created. They are each shown with their title, as well as a truncated sample of the post body, followed by a 'read more' link. Clicking this link will take you to a dynamically created page for the post. 

**Creating A Post**
Each of these blog posts are created using the 'compose' page, which is a hidden feature of the website, allowing the content creator to add posts to the homepage. To access this page, simply add `/compose` to the end of the main web address.


<!-- TABLE OF CONTENTS -->
  #### Table of contents
+ [Prerequisites](#prerequisites)
+ [Installation](#installation)
+ [Directory](#directory)
+ [Contact](#contact)
+ [Acknowledgments](#acknowledgments)


<!-- Prerequisites -->

### Prerequisites

* any HTML code editor of your choice, such as [VS Code](https://code.visualstudio.com/), [Atom](https://atom.io/), etc.
* install [Node.js](https://nodejs.org/en/)

(optional setup with local database)
* install and setup [MongoDB](https://www.mongodb.com/) ([installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/))


<!-- Installation -->
### Installation

1. clone the repository to your desired location.
2. Install the required packages in the terminal
	`$ npm install`
	
3. To run the website as is, start the app from your terminal with, 
	`$node app.js`
4. In you browser's address bar, navigate to
`http://http://localhost:3000/`


**Enable Local Database Controls**
	To enable the MongoDB controls on your local machine, you will need to install and configure MongoDB on you local machine before running the application. Once you have done that, go ahead and run the application normally following **step 3** and **4**.

Once you have the node server running successfully, the *app.js* file will have created a new database on your local machine. Check to see that this MongoDB server is running properly. 

1. In a separate command terminal, open the mongo shell
	`$ mongosh`
	
2. show the current list of active databases. you should see a new database called "BlogDB"
	`$ show dbs`

3. Here you can control the stored blog posts or delete the database entirely using standard MongoDB commands.  Check out the [documentation](https://www.mongodb.com/docs/) for more info!

 

  


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- DIRECTORY -->
## Directory

### [/Public/CSS]()
Folder containing CSS style sheet linked to the HTML document

### [/Views]()
Contains all pages and components used in the website

**/partials**
contains reusable components  ( *ex. header, footer* )


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
