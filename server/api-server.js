const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'items.json');

// Initialize database with sample products
if (!fs.existsSync(dataPath)) {
  const sampleItems = [
    { id: 1, name: "Laptop", price: 999, description: "High-performance laptop", category: "Electronics", image: "https://images.unsplash.com/photo-1588675753230-a6680f17ce10?w=500", stock: 10 },
    { id: 2, name: "Smartphone", price: 799, description: "Latest smartphone model", category: "Electronics", image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500", stock: 15 },
    { id: 3, name: "Headphones", price: 299, description: "Wireless headphones", category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", stock: 20 },
    { id: 4, name: "T-Shirt", price: 29, description: "Cotton t-shirt", category: "Clothing", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", stock: 50 },
    { id: 5, name: "Jeans", price: 79, description: "Blue denim jeans", category: "Clothing", image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500", stock: 30 },
    { id: 6, name: "Desk Lamp", price: 49, description: "LED desk lamp", category: "Home", image: "https://images.unsplash.com/photo-1565636192335-14f03e83980b?w=500", stock: 25 },
    { id: 7, name: "Coffee Maker", price: 89, description: "Automatic coffee maker", category: "Kitchen", image: "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500", stock: 12 },
    { id: 8, name: "Backpack", price: 59, description: "Travel backpack", category: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", stock: 18 },
  ];
  fs.writeFileSync(dataPath, JSON.stringify(sampleItems, null, 2));
}

// GET all items
app.get('/api/items', (req, res) => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// GET single item
app.get('/api/items/:id', (req, res) => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    const items = JSON.parse(data);
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch item' });
  }
});

// POST new item
app.post('/api/items', (req, res) => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    const items = JSON.parse(data);
    const { name, price, description, category, image, stock } = req.body;
    
    const newItem = {
      id: Math.max(...items.map(i => i.id), 0) + 1,
      name,
      price: parseFloat(price),
      description,
      category,
      image: image || 'https://via.placeholder.com/500',
      stock: parseInt(stock) || 0
    };
    
    items.push(newItem);
    fs.writeFileSync(dataPath, JSON.stringify(items, null, 2));
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API Server running' });
});

app.listen(PORT, () => {
  console.log(`\n✅ API Server running on http://localhost:${PORT}\n`);
});

