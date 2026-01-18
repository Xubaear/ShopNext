// API base URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8888';

// Authentication credentials (hardcoded for mock login)
export const MOCK_CREDENTIALS = {
    email: 'user@example.com',
    password: 'password123'
};

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Error fetching products:', error);
        // Return mock data if API fails
        return [
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
    }
};

// Fetch single product
export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        return data.data || null;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

// Create new product
export const createProduct = async (productData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) throw new Error('Failed to create product');
        const data = await response.json();
        return data.data || null;
    } catch (error) {
        console.error('Error creating product:', error);
        return null;
    }
};