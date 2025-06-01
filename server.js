const express = require('express')
const app = express()
const PORT = 3000


// routes
app.get('/',(req,res) => {
    res.send("<h1>Home Page</h1>")
})

// Exercise 1: Route to greetings
app.get('/greetings/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Hello there, ${username}!`);
});

// Exercise 2: Route to roll a die
app.get('/roll/:number', (req, res) => {
  const numberParam = req.params.number;
  const max = numberParam

  // check if number
  if (isNaN(numberParam)) {
    return res.send("You must specify a number.");
  }

  // Generate a random number between 0 and max
  const roll = Math.floor(Math.random() * (numberParam + 1));
  res.send(`You rolled a ${roll}.`);
});

// Exercise 3: 
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  // Route to get a collectible by index
app.get('/collectibles/:index', (req, res) => {
  const index = req.params.index;

  // Check if the index not less than zero and not more array length
  if (index < 0 || index >= collectibles.length) {
    return res.send("This item is not yet in stock. Check back soon!");
  }

  const item = collectibles[index];
  res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
});

// Exercise 3: Hello

app.get('/hello', (req, res) => {
  res.send(`Hello, ${req.query.name}! I hear you are ${req.query.age} years old.`);
});

// Exercise 4: Filter Shoes
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
app.get('/shoes', (req, res) => {
  const type = req.query.type;
  const min = req.query.min;
  const max =req.query.max;

  let result = shoes;

  if (type) {
    result = result.filter(shoe => shoe.type === type);
  }

  if (!isNaN(min)) {
    result = result.filter(shoe => shoe.price >= min);
  }

  if (!isNaN(max)) {
    result = result.filter(shoe => shoe.price <= max);
  }

  res.send(result);
});

app.listen(PORT, () => {
    console.log(`Server is on http://localhost:${PORT}/`);
})