


# Newsletter Signup Page ![stable]

<!-- ABOUT SECTION -->

Between your IG posts, blue check tweets, and lengthy Facebook rants, it's nearly impossible for your devoted followers to keep up with your every waking breath and shower thought. That is why I created this easy to use web signup, because let's face it - everyone needs a personal mailing list.

Built using Bootstrap along-side basic html and css - this app is simple yet effective. The user is greeted by a standard bootstrap form, allowing them to enter their contact info. When the user submits their data, the express app then uses BodyParser to extract the data in key:value pairs and then packs that into JSON. The JSON data is then *stringified* for the API, and finally posted to the MailChimp Server. Once a response from the API server is recived, the user is redirected to either a success or failure page depending on the result. 

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

* any HTML code editor of your choice, such as Visual Studio, Atom, Pycharm, etc.
* install [Node.js](https://nodejs.org/en/)
* Setup a [MailChimp](https://mailchimp.com) account

<!-- Installation -->
## Installation

1. clone the repository to your desired location.
2. Install the required packages in the terminal
	`$ npm install`

### Setup Your Mailchimp API
1. Follow the steps provided in the [MailChimp API Documentation](https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key) to obtain an API key and setup a new audience. This step gives the web forms a place to send and store your followers information.
2. Create an `.env` file in the root project folder. 
3. Inside the `.env` file, add in your *endpoint* and *key* to the first two lines as seen below, using your code editor.
	    
	    `MAILCHIMP_API_ENDPOINT= "YourApiEndpoint"`
	    `MAILCHIMP_API_KEY= "YourApiKey"`
4. Save the `.env` file 

### Start the Server
1. In a new terminal window, navigate to the project folder 
2. Start the app from your terminal
	`$ node app.js`
3. In you browser's address bar, navigate to
`http://http://localhost:3000/`


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- howitworks -->
## How It Works
Behind the Scenes, this project is pretty simple. We've got 3 html pages, an app.js logic file, and an .env containing keys. Ill give a little breakdown below of what each of these files do, and how they interact. 


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
**CSS**
Folder containing CSS style sheet linked to the HTML document

**images**
Contains all image files used in the web page.

### [/root]()
Contains all html pages, .env file,  and JS logic. 

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
