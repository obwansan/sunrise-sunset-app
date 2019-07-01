## How to run the application
* Clone or download the repo from GitHub.

* Open the index.html file in your browser (cutting edge serverless computing!).

* Accept the browser pop-up request to know your location.

## Possible improvements / refactoring
This is an MVP prototype created in three hours. If the app is to be developed further, various improvements should be considered.

### Functionality
* Could add a button the user clicks to open the app / display the information.

* The sunrise/sunset times could be hidden and the user clicks/taps the sun icon to reveal the time.

* In fact, just about any kind of CSS animation would be an improvement...

### Code
* Generally, refactor the code into single action functions.

* Specifically, create 'success' and 'error' functions and pass them into navigator.geolocation.getCurrentPosition(). This is better practice and will allow for more fine-grained error reporting (see https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#Handling_errors). I tried this (and tried generally refactoring the code into functions), but ran into what seemed to be ES6 block scope issues and had to revert back to procedural code due to time pressure (or lack of skill, depending on your point of view...)

* Consider using the axios.js library rather than fetch(), as it may be better at error handling (see https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5).

* Improve the code to deal better with CORS-enabled APIs such as Dark Sky. Instead of using the cors-anywhere proxy server (prefacing the URL with https://cors-anywhere.herokuapp.com/), consider building your own proxy server with node.js to reduce response latency and improve security (see https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9).

* If you are going to pay for an API key, don't put it in GitHub (where nefarious types could copy and use it - with you footing the bill). Store your API key in a configuration file separate from your code (this is another good reason to set up a proxy server to make calls to the API behind the scenes. See https://darksky.net/dev/docs/faq#cross-origin).

## Before putting into production
* If the SVGs are used, include this attribution somewhere: <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> are licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

* Get a proper designer to redesign the whole app : )
