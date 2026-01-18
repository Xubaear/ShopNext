const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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
    name: "Eco Water Bottle",
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
    description: "Natural bamboo cutting board",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37b11?w=500&h=500&fit=crop",
    category: "Home & Garden",
    rating: 4.6,
    reviews: 89
  },
  {
    id: 4,
    name: "Organic T-Shirt",
    description: "Comfortable organic cotton t-shirt",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    rating: 4.7,
    reviews: 342
  }
];

app.get('/api/products', (req, res) => {
  console.log('✅ Products requested');
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

const PORT = 6666;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`✅ API: http://localhost:${PORT}/api/products`);
});