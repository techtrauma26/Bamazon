var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
  // idSearch();
  // buy ();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {
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

// PURCHASE PRODUCT  // 
function buy() {

  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the ID of the product you would like to purchase?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units of the product would you like to buy?"
      }
    ])
    .then(function (answer) {
      connection.query("SELECT * FROM products WHERE item_id=?" , answer.id , function (err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
          if (answer.quantity > results[i].stock_quantity) {
            console.log("Insufficient Quanitity!!");
            afterConnection();
          } else {
            console.log("Your order was placed successfully!");
            console.log("You ordered: ");
            console.log("Item: " + results[i].product_name);
            console.log("Department: " + results[i].department_name);
            console.log("Price: " + results[i].price);
            console.log("Quantity: " + answer.quantity);
            console.log("Total: " + results[i].price * answer.quantity);

            connection.query("UPDATE products SET ? WHERE ?", [{
              stock_quantity: results[i].stock_quantity - answer.quantity
          }, {
              item_id: answer.id
          }],
                    );
                    const updatedQuantity = (results[i].stock_quantity - answer.quantity);
                    console.log (updatedQuantity);
          };
        };
     
      });
    });
  
};

