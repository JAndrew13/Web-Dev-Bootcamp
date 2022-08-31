
# Simon Says Game ![stable]

<!-- ABOUT SECTION -->

This Simon Says game uses JS and HTML to create a playable in-browser game. In this project I was able to practice using functional JavaScript within the game.js file, as well as implement features like mp3 files, images, and event listeners into the games logic.

This game works by listening for specific user input to start, then randomly picking a color from an array. Once the color is selected, the game saves this selection into a 'gamePattern' variable before triggering temporary CSS changes to animate the selection.

Once a tile has been chosen, the game listens for user inputs and checks each button press against the stored sequence. As soon as the stored sequence is matched, the game moves on to the next level and repeats the previous actions and adds a new random selection to the end of the stored sequence.

At any point - if the user input doesnt match the stored sequence, the game triggers a failure, displays game over, and prompts the user to restart the game.

<!-- TABLE OF CONTENTS -->
  #### Table of contents
+ [Installation](#installation)
+ [Usage](#usage)
+ [Directory](#directory)
+ [Contact](#contact)
+ [Acknowledgments](#acknowledgments)


<!-- Prerequisites -->

<!-- Installation -->
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JAndrew13/SimonSaysGame.git
   ```
2. Open the HTML file inside your browser


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

1. Once the webpage loads, follow the prompt and press the 'A' key to begin the game.
2. Level 1 will begin, and a random colored tile will be indicated.
3. Click the indicated tile to move on to the next round.
4. In each following round a new tile will be indicated. To successfully pass the level, you must repeat the entire sequence.

* If you fail to remember the correct sequence, this triggers 'Game Over'
* Press the 'A' key to reset the game and try again!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DIRECTORY -->
## Directory

### [/sounds](https://github.com/JAndrew13/)
Contains all audio files used in the web application

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

[JavaScript.com]:https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]:https://javascript.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
