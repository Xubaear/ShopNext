const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sample products
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
    description: "Sustainable stainless steel water bottle",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602143407151-7e406dc6ffee?w=500&h=500&fit=crop",
    category: "Eco-Products",
    rating: 4.8,
    reviews: 256
  },
  {
    id: 3,
    name: "Bamboo Cutting Board",
    description: "Natural bamboo cutting board perfect for kitchen use",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37b11?w=500&h=500&fit=crop",
    category: "Home & Garden",
    rating: 4.6,
    reviews: 89
  }
];

// Routes
app.get('/api/products', (req, res) => {
  console.log('✅ Products API called');
  res.json({
    success: true,
    data: products,
    message: "Products fetched successfully"
  });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.json({ success: true, data: product });
});

app.post('/api/products', (req, res) => {
  const { name, description, price, category, image } = req.body;
  const newProduct = {
    id: Math.max(...products.map(p => p.id)) + 1,
    name,
    description,
    price: parseFloat(price),
    category,
    image: image || "https://images.unsplash.com/photo-1599599810694-b5ac4dd37b11?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 0
  };
  products.push(newProduct);
  res.status(201).json({ success: true, data: newProduct });
});

const PORT = 7777;

app.listen(PORT, (err) => {
  if (err) {
    console.error('❌ Server failed to start:', err);
    return;
  }
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/products`);
});