# Bamazon

![Build Status](https://img.shields.io/badge/LIRI-node-ff69b4.svg?style=for-the-badge&logo=npm)

![bamazon](images/logon.jpg)
>Liri is a Language Interpretation and Recognition Interface that searches for songs, concerts, movies or random action on a random file.

## Table of contents

* [General info](#general-info)
* [Setup](#setup)
* [Examples](#examples)
* [Technologies](#technologies)

## General info

Liri is a command line node app that takes in parameters and generates back data by sending requests using the axios package to the Bands in Town, Spotify and OMDB APIs. By using API calls and parsing through returned JSON objects, we can output them in a specified format.


## Setup

Liri requires [Node.js](https://nodejs.org/) v4+ to run.

Install npm package manage and dependencies then input desired commands.

```sh
$ cd liri
$ npm install
$ node liri.js
```

#### Find Concerts

```sh
$ node liri.js concert-this '<artist/band name here>'
```

#### Find Songs

```sh
$ node liri.js spotify-this-song '<song name here>'
```

#### Find Movies

```sh
$ node liri.js concert-this '<movie name here>'
```

#### Do What It Says

```sh
$ node liri.js do-what-it-says
```

## Examples

![Example screenshot](img/concert.gif)
![Example screenshot](img/spotify.gif)
![Example screenshot](img/movie.gif)
![Example screenshot](img/dowhatitsays.gif)

## Technologies

* [Node.js](https://nodejs.org/)- evented I/O for the backend
* [JavaScript](https://www.javascript.com/)
* [NPM](https://www.npmjs.com/) - Package manager
* [Spotify-API](https://developer.spotify.com/documentation/web-api/) - API library for Spotify
* [BandsinTown-API](http://www.artists.bandsintown.com/bandsintown-api) - API library for Bands/Artists
* [OMDB-API](https://www.omdbapi.com/) - API library for movies




# Bamazon


### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)d

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- - -

* If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

- - -

### Challenge #2: Manager View (Next Level)

* Create a new Node application called `bamazonManager.js`. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

- - -

* If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.

- - -

### Challenge #3: Supervisor View (Final Level)

1. Create a new MySQL table called `departments`. Your table should include the following columns:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)

2. Modify the products table so that there's a product_sales column, and modify your `bamazonCustomer.js` app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.

   * Make sure your app still updates the inventory listed in the `products` column.

3. Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:

   * View Product Sales by Department
   
   * Create New Department

4. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

5. The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

6. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.

   * Hint: You may need to look into aliases in MySQL.

   * Hint: You may need to look into GROUP BYs.

   * Hint: You may need to look into JOINS.

   * **HINT**: There may be an NPM package that can log the table to the console. What's is it? Good question :)

### Reminder: Submission on BCS

* Please submit the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.
