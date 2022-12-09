



# Keeper App ![stable]

<!-- ABOUT SECTION -->

The Keeper app is a simple post-it note style web-app built with using React. Users can create notes that are safely stored in a local Mongo database and displayed neatly on the homepage grid.

<!-- TABLE OF CONTENTS -->
  #### Table of contents
+ [Prerequisites](#prerequisites)
+ [Installation](#installation)
+ [How It Works](#how-it-works)
+ [Directory](#directory)
+ [Contact](#contact)
+ [Acknowledgments](#acknowledgments)


<!-- Prerequisites -->

## Prerequisites

* any HTML code editor of your choice, such as Visual Studio, Atom, etc.
* install [Node.js](https://nodejs.org/en/)

<!-- Installation -->
## Installation

1. clone the repository to your desired location.
2. Install the required packages in the command terminal.
	`$ npm install`

3. Start the application.
	`$ npm start`


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- howitworks -->
## How It Works

### **app.js**
The app.js file acts as the root starting point for the app, as well as the logic behind the pages interactions. At the top of the file (lines 1-17) are all of the setup commands for the server, package setups, and declarations. Below this are the app's get, post, and API request functions. These functions tell the app what actions were preformed by the user, as well as what to do next.

### **signup.html**
This is the main view of the website upon load-up. This page contains all of the Bootstrap forms the user interacts with, as well as some In-line CSS styling.

### **success.html**
This page is where the user gets sent once they completed the signup process after their information is successfully sent to the MailChimp API.

### **failure.html**
This is the fallback page the user is sent to if an error occurred in their provided data, or within the API request process.

### **.env file**
The `.env` file will contain your sensitive information, thus it is not included in this repositories starting files. Upon cloning the repository, you'll need to create your own `.env` file and enter in your personal API key and endpoint. (explained [above](#setup-your-mailchimp-api)).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DIRECTORY -->
## Directory

### [/public]()
**styles.css**
CSS style sheet linked to the main HTML document.

**index.html**
This is the main HTML file connecting the styles to the react app.

### [/src]()
Contains react components folder, as well as the index.js file.

**index.js**
Imports React and renders the main keeper app.

### [/components]()
**App.jsx**
Imports and controls all components listed below, as well as the "add" and "delete" note functions.

**CreateArea**
React component responsible for displaying and controlling the text entry fields.

**Footer**
Contains the sites footer information

**Header**
Contains the sites Header nav. bar

**Note**
React component created upon user input inside the "CreateArea" text entry component.

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
[JavaScript.com]:https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]:https://javascript.com
[NodeJS.org]:https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Expressjs.com]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Expressjs-url]: https://expressjs.com
[npmjs.com]:https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[npmjs-url]:npmjs.com
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
