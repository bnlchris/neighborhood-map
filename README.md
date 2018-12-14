This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Culinary Kiel

This project ist the final one to complete [Udacity's Front-End Nanodegree](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001). Using the React framework, Google Maps is used via it's API to show a bunch of restaurants in the region around Kiel, Germany.

The data about the respective restaurants is fetched via the Foursquare API.

Users are able to search for restaurants by typing a name into the input field in the sidebar. Alternatively, it is possible to click on the markers on the map in order to get the name and address of the places.

## How to run the application

The easiest way is to clone the project to your local machine.

Type `git clone` plus [https://github.com/bnlchris/neighborhood-map.git](https://github.com/bnlchris/neighborhood-map.git) to your command line.

Then, add `npm start`. Your browser will open a new tab on [http://localhost:3000/](http://localhost:3000/) where you can try out the app.

## Offline use

Because this project is in production mode only it will not load any data into the cache.

However, the Service Worker is registered in [https://github.com/bnlchris/neighborhood-map/blob/master/src/index.js](https://github.com/bnlchris/neighborhood-map/blob/master/src/index.js).

## Ressources

Other Udacity students provided a lot of links with helpful information, for example this [video tutorial](https://www.youtube.com/watch?v=LvQe7xrUh7I&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s&t=0s).

## Thank you

Thank you very much to Udacity and Google for this inspiring opportunity!
