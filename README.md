# Bamazon

![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Build Status](https://img.shields.io/badge/npm%20package-4.2.0-brightgreen.svg)

![bamazon](Images/logon.jpg)
> An Amazon-like CLI storefront built with mySQL, NODE.js and Inquirer NPM.

## Table of contents

* [General info](#general-info)
* [Setup](#setup)
* [Examples](#examples)
* [Technologies](#technologies)

## General info

Bamazon is a command-line interface built with inquier, node and MySQL npm. The customer interface allows the user to view the current products available on Bamazon for purchase.

The user then is able to make a purchase of a prodcut with the desire quantity. If there is sufficient amount of the product requested in the inventory, the user is able to proceed with their purchase and the total is thus printed. After the purchase is made, the stock quantity of the product is updated in the database.

## Setup

Bamazon requires [Node.js](https://nodejs.org/) v4+ to run.

Install npm package manager and dependencies then input desired commands.

```sh
$ cd bamazon
$ npm install
$ node bamazonCustomer.js
```

## Examples

Products avaiable on Bamazon:

![Example screenshot](Images/products.gif)

Making a purchase on Bamazon:

![Example screenshot](Images/purchase.gif)

## Technologies

* [Node.js](https://nodejs.org/)- evented I/O for the backend
* [JavaScript](https://www.javascript.com/)
* [NPM](https://www.npmjs.com/) - Package manager
* [MySQL](https://www.mysql.com/)
