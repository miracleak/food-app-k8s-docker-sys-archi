const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module

const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

let cartItems = [];

app.get('/cart', (req, res) => {
  res.json(cartItems);
});

app.post('/cart', (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.json({ message: 'Item added to cart' });
});

app.listen(PORT, () => {
  console.log(`Order service is running on port ${PORT}`);
});
