const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock database of products
let products = [
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
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    rating: 4.7,
    reviews: 342
  },
  {
    id: 5,
    name: "Solar Power Bank",
    description: "Eco-friendly solar powered portable charger",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1609042231571-2f8b4b0e7e4f?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.4,
    reviews: 167
  },
  {
    id: 6,
    name: "Natural Bamboo Utensils Set",
    description: "Eco-friendly reusable bamboo utensils for travel",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1599599810126-80f95d0c4e2e?w=500&h=500&fit=crop",
    category: "Eco-Products",
    rating: 4.9,
    reviews: 412
  },
  {
    id: 7,
    name: "Recycled Leather Backpack",
    description: "Durable backpack made from recycled leather materials",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.6,
    reviews: 203
  },
  {
    id: 8,
    name: "Eco-friendly Phone Case",
    description: "Biodegradable phone case for sustainable protection",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.5,
    reviews: 567
  }
];

// Routes

// Get all products
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: products,
    message: "Products fetched successfully"
  });
});

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }
  
  res.json({
    success: true,
    data: product,
    message: "Product fetched successfully"
  });
});

// Add new product
app.post('/api/products', (req, res) => {
  const { name, description, price, image, category, rating, reviews } = req.body;
  
  // Validation
  if (!name || !description || !price || !category) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields"
    });
  }
  
  const newProduct = {
    id: Math.max(...products.map(p => p.id), 0) + 1,
    name,
    description,
    price: parseFloat(price),
    image: image || "https://images.unsplash.com/photo-1599599810694-b5ac4dd37b11?w=500&h=500&fit=crop",
    category,
    rating: rating || 5,
    reviews: reviews || 0
  };
  
  products.push(newProduct);
  
  res.status(201).json({
    success: true,
    data: newProduct,
    message: "Product created successfully"
  });
});

// Update product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }
  
  const { name, description, price, image, category, rating, reviews } = req.body;
  
  if (name) product.name = name;
  if (description) product.description = description;
  if (price) product.price = parseFloat(price);
  if (image) product.image = image;
  if (category) product.category = category;
  if (rating) product.rating = rating;
  if (reviews) product.reviews = reviews;
  
  res.json({
    success: true,
    data: product,
    message: "Product updated successfully"
  });
});

// Delete product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }
  
  const deletedProduct = products.splice(index, 1);
  
  res.json({
    success: true,
    data: deletedProduct[0],
    message: "Product deleted successfully"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
