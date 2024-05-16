[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/GGwkV7WK)
# CTEC3905 Assignment

This repository contains code which makes a dynamic website about rock climbing. The web site is broken down in to 4 pages, these being index / home(`index.html`), routes(`routes.html`), gear(`gear.html`) and about(`about.html`).

## about.html

The `about.html`page gives info about the rock climbing grades out there and use the `js/menuLoad.js`  and `css/styles.css` files

## gear.html

The `gear.html`page gives info about the gear that is used in rock climbing and use the `js/menuLoad.js` and `css/styles.css`files

## index.html

The `index.html` pages includes info about types of climbing with an animation that is played when one of of the rock climbing types is clicked, after the animation is used more info about it is shown, clicking it again a similar animation will play and the original info will be shown again hiding the new info. The file uses `css/styles.css` and `js/index.js` files.

## routes.html

The `routes.html` file contains info about rock climbing routes in America, it use user input which will edit the routes that are shown, this is done by it manipulatin the DOM using javascript in `js/routes.js`. The user input is also remember between a user vists to the website, so when the website is loaded again, the user input is still there. The page also allows the user to click on the routes, and doing so will cause an animation to be played, and the weather at that route will be shown. This information is obtained from `https://www.weather.gov/documentation/services-web-api` api. Its also worth nothing this api does every now and then have an issue, where it and give back a 500 error, if this happens, simply refreshing the page should remove it. The page is also connected to to `css/styles.css` and `js/routes.js` files.

## css/styles.css

The `css/styles.css` contains all the css about the application, which use @media to make the screen very at differnet sizes, and is used by all the pages pages in application. 

## js/index.js

The `js/index.js` file imports the menuControl function from `js/menuLoad.js` and calls it. 

The class also gets all element with the class `.flipSection` and then the children in it, which have the class `hiddenSide` and `notHidden`, it adds an event lister to them for when they are clicks which toggles the classes `flipEndWriteWayUp` and `flipEndWrongWayUp`. What this does in the application is it make it so when a user clicks on a climbing type an animation is played, which hide the shown info and replace it with new info and if its clicked again it does the tranditon and hides the new info and shows the old info, inspiration and part of the code where taken from `(Stuart,N/A)`.

The final thing this file does is add an event listener to the window for when it is resise and what it does is get the hight of the element with the id `max` and set to be the css var `--size` value with px added to the end of it.

## js/menuLoad.js

The `js/menuLoad.js` use a function to add an event handler to any element that matches `.menu section`. The event handler is triggered when the user clicks it, and this will cause a the class `open` to be toggle on to the first element that matches `menu nav`. How this looks is that when the user clicks `&#8801` the menu will be shown to them and when they click `&#8801` again it will be hidden. The function that is made is called, and is also exported as menuContol so that it can be used in `js/index.js` and `js/routes.js`. this code was done following the instructions from `(Stuart,2024)`



## js/routes.js

The `js/routes.js` file import from `js/menuLoad.js` the menuControl function and calls it.

When the page is loaded it gets the local saved values and sets them in there corresponding element value. 

It adds event listener to elements with id with `#climbingLevel` `#bolderingLevel` `#all` `#rockClimbing` `#bouldering` which is listing for any change, if change is detected it initial removes all routes before making new ones the routes are from the array routes(which is where the routes data come from) it makes new routes which are added to the dom if they fit the user input, the routes made also call the api found at `https://www.weather.gov/documentation/services-web-api` the call is done like this`https://api.weather.gov/gridpoints/${route.gridID}/${route.lat},${route.lon}/forecast` which is where the weather info comes from. On top this it adds event lister to the newly created elements, so that when they are clicked the class `flipEndWriteWayUp` and `flipEndWrongWayUp` are toggled. This cause the application when the new elements is clicked to play an animation and hide the info that is shown and display new info inspiration and part of the code where taken from `(Stuart,N/A)`. When clicked again, the shown info is hidden and the original info is shown and a differencet animation is shown. The function also saves the inputted info in local storage so that it can be used latter. 

It also added an input event listener to elements with the id `#climbingLevel` and `#bolderingLevel`. This simply sets the text shown in elements with id of `climbingLevelIndicator` and `bolderingLevelIndicator` to be the corresponding text as the slider value after translated to the climbing garde the value represents. 

## images

the `images` folder contains all the images that is used through the application, it is separated up it to subfolders, which indate what the images are about.

## images/climbingTypes

contain images of diffenret climbing types, used on the `index.html` page

## images/gear

contain images of diffenret gear, used on the `gear.html` page

## images/gradingSystems

contain images of the gradding systems,  used on the `about.html` page

## images/routes

contain images of diffenret rock climbing walls/ routes, used on the `routes.html` page

## references

Stuart.G(2024) *lab-materials*. Available at: https://github.com/CTEC3905-2022/lab-materials (Accessed: 8 February 2024). 

Stuart.G() *Animation demos*. Available at: https://ctec3905-2020-21.github.io/animations/cards.html (Accessed: 12 March 2024 )
