var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1vaijayanthi",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
  // idSearch();
  // buy ();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
    }
    console.log("-----------------------------------");
    // connection.end();
 buy();
  });
}

// function idSearch() {
//   inquirer
//     .prompt({
//       name: "product_id",
//       type: "input",
//       message: "What is the ID of the product you would like to purchase?"
//     })
//     .then(function(answer) {
//       var query = "SELECT prodocut_id FROM products WHERE ?";
//       connection.query(query, { product_id: answer.product_id }, function(err, res) {
//         for (var i = 0; i < res.length; i++) { 
//           console.log("ID: " + res[i].product_id);
//         }
//        afterConnection();
//       });
//     });
// }


function buy() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          // choices: function() {
          //   var choiceArray = [];
          //   for (var i = 0; i < results.length; i++) {
          //     choiceArray.push(results[i].product_id);
          //   }
          //   return choiceArray;
          // },
          message: "What is the ID of the product you would like to purchase?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many units of the product would you like to buy?"
        }
      ])
      .then(function(answer) {


        
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if quantity was high enough
        if (chosenItem.stock_quantity < parseInt(answer.quantity)) {

          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: answer.quantity
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Your order was placed successfully!");
              afterConnection();
            }
          );
        }
        else {
          console.log("Insufficient quantity!");
          afterConnection();
        }
      });
  });
}
