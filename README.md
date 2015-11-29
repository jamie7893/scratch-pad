# scratch-pad
A blank node app for learning JavaScript!

## Installation

SSH clone this repository into a new Cloud9 workspace, **configured with a Node.js environment.**  You can fork it first if you want to push your changes back to GitHub, but it's not necessary - your Cloud9 workspace will keep save your work.

## app.js

The app.js file is an executable JavaScript file, a template for you to write and test JavaScript in the node.js environment.

You can execute it in Cloud9 by opening it and clicking the green "Run" button - this will allow you to use breakpoints on the file and debug and step-thru your code, which is very handy for understanding complex algorithms, especially higher order functions.

You can also execute this file from the commandline: if you're in the same directory as the app.js file, simply run the command `./app.js`.

You can duplicate this file and rename it to represent whatever other studies you're undertaking, ie, strings.js, or, recursion.js, or, functions.js, etc.

## lodown

1. Implement the lodown.js as a `node.js` module, duplicating the API of the wonderful lodash library (see <a href="https://lodash.com/" target="_blank">lodash.com</a>).
2. Test your higher order functional programming you've implemented in `lodown.js` by implementing the `customers.js` file, which should load both the `lodash` module and the `customers.json` file, located in the directory, `lodown/data/customers.json`.  The code you write in your `customers.js` app should load the `customers.json`, then make use of your `lodash` module's API, testing your functional methods, like each, filter, map, reduce, pluck, where, every, find, etc.  If you do not know how these functions operate, see the lodash.com docs.
3. Try to decipher things like:
    4. how many males, how many females ------------------------
    5. oldest customer, youngest customer -----------------------
    6. average balance ------------------------------------------------
    5. how many customer's names begin with some letter --------------------
    5. how many customer's friend's names begin with some letter ---------
    6. how many customers are friends --------------------------
    7. how many customers have friends in common
    8. most common tags
4. If you do not know how to create and load a local `node.js` module, Google it!
5. If you do not know how to load a json file in node, Google it!