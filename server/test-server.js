const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simple test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Products data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Eco-friendly Water Bottle",
    description: "Sustainable stainless steel water bottle for eco-conscious users",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602143407151-7e406dc6ffee?w=500&h=500&fit=crop",
    category: "Eco-Products",
    rating: 4.8,
    reviews: 256
  }
];

// Get all products
app.get('/api/products', (req, res) => {
  console.log('Products requested');
  res.json({
    success: true,
    data: products,
    message: "Products fetched successfully"
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Test server running on http://localhost:${PORT}`);
  console.log(`✅ Test API: http://localhost:${PORT}/api/products`);
});