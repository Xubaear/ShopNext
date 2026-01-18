# NextShop - Eco-Friendly E-Commerce Platform

A modern, fully-functional e-commerce platform built with **Next.js 15/16 (App Router)** and **Express.js**, specializing in sustainable and eco-friendly products.

## 📋 Project Overview

NextShop is a complete e-commerce solution featuring:
- Public product browsing and search
- User authentication with mock login using cookies
- Protected routes for authenticated users
- Product management (add, view, filter)
- Toast notifications for user feedback
- Fully responsive design

---

## ✅ Core Features Implemented

### 1. Landing Page (7 Sections)
The home page includes all required sections:
- **Hero Section** - Welcome banner with Call-to-Action
- **Featured Products** - Showcase of bestselling items
- **Why Choose Us** - 4 key benefits of NextShop
- **Categories** - Browse products by 4 main categories
- **Testimonials** - 3 customer reviews and ratings
- **Newsletter Signup** - Email subscription form
- **Call-to-Action Section** - Final engagement with action buttons

**Navigation**:
- Navbar with links to Home, Shop (/items), and Login
- Footer with company info and links
- All sections responsive on mobile, tablet, and desktop

### 2. Authentication System
**Mock Login Implementation**:
- Hardcoded credentials stored in `src/Utils/index.js`
  - Email: `user@example.com`
  - Password: `password123`
- Credentials validated via React Context
- Tokens and user data stored in **cookies** (7-day expiration)
- Login redirects to `/items` on success
- Protected routes check authentication before rendering

**Features**:
- ✅ Email/password form validation
- ✅ Error messages on invalid credentials
- ✅ Toast notifications for login success/failure
- ✅ Secure cookie storage with js-cookie
- ✅ Logout functionality clears cookies

### 3. Item List Page (/items)
**Publicly Accessible** - No authentication required

**Features**:
- Fetch all products from Express API (`GET /api/products`)
- Real-time search functionality (search by name/description)
- Filter by category (dropdown selector)
- Product cards displaying:
  - Product image
  - Product name
  - Description (truncated)
  - Price
  - Category badge
  - Rating & review count
- Responsive grid layout (1-4 columns depending on screen size)
- Loading states while fetching data
- Error handling with user-friendly messages
- Product count display

### 4. Item Details Page (/items/:id)
**Publicly Accessible** - Shows full product information

**Features**:
- Dynamic routing based on product ID
- Large product image
- Complete product description
- Pricing information
- Rating and review count
- Category information
- Quantity selector (increment/decrement)
- SKU and stock status display
- Breadcrumb navigation
- Related products suggestion
- Add to Cart & Buy Now buttons (UI ready)

### 5. Add Item Page (/add-item)
**Protected Route** - Requires authentication

**Access Control**:
- Automatically redirects unauthenticated users to login
- Displays loading state while checking authentication
- Shows user email when logged in
- Logout button appears in navbar

**Form Features**:
- Product name (required)
- Description (required)
- Price in USD (required)
- Category dropdown (required)
- Image URL with live preview
- Initial rating (1-5 scale)
- Initial review count
- Form validation before submission
- Submit button with loading state
- Cancel button to go back
- Toast notification on successful creation
- Auto-redirect to /items after 2 seconds

### 6. Express API Server
**Location**: `/server/server.js`
**Port**: 5000

**Endpoints** (`/api/products`):
```
GET    /api/products          → Get all products
GET    /api/products/:id      → Get single product by ID
POST   /api/products          → Create new product
PUT    /api/products/:id      → Update existing product
DELETE /api/products/:id      → Delete product
```

**Features**:
- CORS enabled for frontend requests
- JSON request/response body
- 8 pre-loaded eco-friendly products
- Product validation
- Success/error responses
- Auto-generated product IDs

### 7. Additional Features
- **Toast Notifications** - React Toastify for user feedback
- **Global State Management** - React Context API for authentication
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Error Handling** - Graceful error messages throughout
- **Loading States** - Visual feedback during async operations
- **Cookie Authentication** - Secure credential storage

---

## 🛠 Technologies Used

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js | 15/16 |
| **UI Library** | React | 19 |
| **Styling** | Tailwind CSS | 4 |
| **State Management** | Context API | Built-in |
| **Backend** | Express.js | 4.18+ |
| **Server Runtime** | Node.js | 18+ |
| **Cookie Storage** | js-cookie | 3.0.5 |
| **Notifications** | React Toastify | 11.0.5 |

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js v18 or higher
- npm or yarn package manager
- Two terminal windows/tabs

### Step 1: Clone/Navigate to Project
```bash
cd z:/Projects/Next.js/shopnext
```

### Step 2: Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

### Step 3: Start the Application

**Terminal 1 - Start Express Server:**
```bash
cd server
npm start
```
Expected output:
```
Server is running on port 5000
```

**Terminal 2 - Start Next.js Development Server:**
```bash
npm run dev
```
Expected output:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Step 4: Access the Application
Open browser and visit: **http://localhost:3000**

---

## 📍 Route Summary

### Public Routes (No Authentication Required)
| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing Page | Home with 7 sections, hero, featured products |
| `/items` | Item List | Browse all products, search, filter by category |
| `/items/:id` | Item Details | View full product information |
| `/login` | Login | Authentication page with demo credentials |

### Protected Routes (Authentication Required)
| Route | Page | Requirements |
|-------|------|--------------|
| `/add-item` | Add Product | Must be logged in, redirects to /login if not |

---

## 🔐 Authentication & Security

### Login Flow
1. User visits `/login` or clicks "Login" in navbar
2. Enters email and password
3. Credentials validated against `MOCK_CREDENTIALS`
4. On success:
   - User data stored in cookies (7-day expiration)
   - Toast notification shows "Login successful!"
   - Redirected to `/items` page
   - Navbar updates to show "Add Item" and "Logout" buttons
5. On failure:
   - Error message displayed
   - Toast notification shows error
   - User stays on login page

### Protected Routes
- `/add-item` checks `GlobalContext` for user
- If user not found, redirects to `/login` automatically
- Uses `useEffect` to prevent rendering before auth check
- Loading state displayed during authentication verification

### Logout
- Clicking "Logout" button clears user from context
- Cookies are removed (authToken, user)
- Navbar reverts to show "Login" button
- Redirects to home page

### Credential Storage
Demo credentials are hardcoded for testing:
```javascript
Email: user@example.com
Password: password123
```
Located in: `src/Utils/index.js` → `MOCK_CREDENTIALS` object

To change credentials, edit the object in Utils/index.js

---

## 📊 Pre-loaded Products

The Express server comes with 8 eco-friendly products:

1. **Wireless Headphones** - $199.99
   - Premium wireless headphones with noise cancellation
   
2. **Eco-friendly Water Bottle** - $34.99
   - Sustainable stainless steel water bottle
   
3. **Bamboo Cutting Board** - $29.99
   - Natural bamboo cutting board for kitchen use
   
4. **Organic Cotton T-Shirt** - $44.99
   - Comfortable sustainable organic cotton t-shirt
   
5. **Solar Power Bank** - $59.99
   - Eco-friendly solar powered portable charger
   
6. **Natural Bamboo Utensils Set** - $24.99
   - Reusable bamboo utensils for travel
   
7. **Recycled Leather Backpack** - $89.99
   - Durable backpack made from recycled leather
   
8. **Eco-friendly Phone Case** - $19.99
   - Biodegradable phone case for sustainable protection

---

## 📁 Project Structure

```
shopnext/
│
├── src/
│   ├── app/
│   │   ├── page.js                    # Landing page (7 sections)
│   │   ├── layout.js                  # Root layout with Navbar & Footer
│   │   ├── globals.css                # Global Tailwind styles
│   │   ├── login/
│   │   │   └── page.js                # Login page
│   │   ├── items/
│   │   │   ├── page.js                # Product listing page
│   │   │   └── [id]/
│   │   │       └── page.js            # Product details page
│   │   └── add-item/
│   │       └── page.js                # Add product form (protected)
│   │
│   ├── Components/
│   │   ├── Navbar/
│   │   │   └── Navbar.js              # Navigation component
│   │   └── Footer/
│   │       └── Footer.js              # Footer component
│   │
│   ├── Context/
│   │   └── index.js                   # Global state management (auth)
│   │
│   ├── hooks/
│   │   └── useProtectedRoute.js       # Custom hook for route protection
│   │
│   └── Utils/
│       └── index.js                   # API functions & MOCK_CREDENTIALS
│
├── server/
│   ├── server.js                      # Express API server
│   ├── package.json                   # Server dependencies
│   └── node_modules/
│
├── .env.local                         # Environment variables
├── .gitignore                         # Git ignore rules
├── next.config.mjs                    # Next.js configuration
├── tailwind.config.js                 # Tailwind CSS configuration
├── jsconfig.json                      # JavaScript configuration
├── package.json                       # Frontend dependencies
├── package-lock.json
├── README.md                          # This file
├── QUICKSTART.md                      # Quick setup guide
└── DEPLOYMENT_READY.md                # Deployment checklist
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Get All Products
```
GET /products
```
**Response:**
```json
{
  "success": true,
  "data": [...products],
  "message": "Products fetched successfully"
}
```

### Get Single Product
```
GET /products/:id
```
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Product Name",
    "description": "...",
    "price": 99.99,
    "category": "Electronics",
    "image": "https://...",
    "rating": 4.5,
    "reviews": 128
  },
  "message": "Product fetched successfully"
}
```

### Create Product
```
POST /products
Content-Type: application/json
```
**Request Body:**
```json
{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "image": "https://example.com/image.jpg",
  "rating": 5,
  "reviews": 0
}
```
**Response:**
```json
{
  "success": true,
  "data": {...newProduct},
  "message": "Product created successfully"
}
```

### Update Product
```
PUT /products/:id
Content-Type: application/json
```
**Request Body:** (any fields to update)
```json
{
  "name": "Updated Name",
  "price": 149.99
}
```

### Delete Product
```
DELETE /products/:id
```
**Response:**
```json
{
  "success": true,
  "data": {...deletedProduct},
  "message": "Product deleted successfully"
}
```

---

## 🎨 Design & Styling

- **Color Scheme**: 
  - Primary Green: #16a34a (eco-friendly)
  - Secondary Teal: #14b8a6
  - Accent Blue: #2563eb
  - Neutral Gray: #6b7280

- **Responsive Breakpoints**:
  - Mobile: 320px - 640px
  - Tablet: 641px - 1024px
  - Desktop: 1025px+

- **Components**:
  - Tailwind CSS utility classes
  - Custom gradient backgrounds
  - Smooth transitions
  - Shadow effects for depth
  - Accessible color contrasts

---

## 🐛 Troubleshooting

### Issue: Products Not Loading
**Solution:**
- Verify Express server is running on port 5000
- Check browser console for CORS errors
- Ensure `.env.local` exists with `NEXT_PUBLIC_API_URL=http://localhost:5000`
- Restart both servers

### Issue: Login Not Working
**Solution:**
- Verify credentials:
  - Email: `user@example.com`
  - Password: `password123`
- Check that you're on `/login` page
- Clear browser cookies and try again
- Check browser console for errors

### Issue: Port Already in Use
**Solution:**
```bash
# For port 3000 (Next.js)
npm run dev -- -p 3001

# For port 5000 (Express)
# Edit server/server.js and change: const PORT = 5001;
```

### Issue: Cookies Not Persisting
**Solution:**
- Ensure js-cookie is installed: `npm list js-cookie`
- Check that GlobalContext is wrapping app
- Verify browser cookies are enabled
- Check for HTTPS requirement in production

### Issue: Add Item Redirects to Login
**Solution:**
- This is normal - you must be logged in first
- Go to `/login` first
- Use demo credentials to log in
- Then access `/add-item`

---

## 🚀 Building for Production

### Build Next.js App
```bash
npm run build
npm run start
```

### Build Express Server
Express server doesn't require building, just:
```bash
cd server
npm start
```

### Environment Setup for Production
Create `.env.local` with:
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

---

## 📝 File Descriptions

### Key Files

**`src/Context/index.js`**
- Global state management using React Context
- Manages user authentication state
- Handles login/logout with cookies
- Provides `user`, `isLoading`, `login`, `logout` to all components

**`src/Utils/index.js`**
- `MOCK_CREDENTIALS` - Demo login credentials
- `API_BASE_URL` - Express server URL
- API functions: `fetchProducts()`, `fetchProductById()`, `createProduct()`, etc.

**`server/server.js`**
- Express REST API
- Product CRUD operations
- Pre-loaded product data
- CORS enabled

**`src/app/layout.js`**
- Root layout component
- Wraps all pages with GlobalState
- Includes Navbar and Footer
- ToastContainer for notifications

**`src/Components/Navbar/Navbar.js`**
- Navigation component
- Shows links based on authentication state
- Add Item & Logout buttons visible when logged in
- Login button visible when not authenticated

---

## ✨ Features Checklist

- [x] Landing page with 7 sections
- [x] Navbar with navigation links
- [x] Footer with information
- [x] Mock login with hardcoded credentials
- [x] Cookie-based authentication (7-day expiration)
- [x] Protected routes (/add-item requires login)
- [x] Product listing page (public, searchable, filterable)
- [x] Product details page (public)
- [x] Add product form (protected)
- [x] Toast notifications for user feedback
- [x] Express API with CRUD operations
- [x] Responsive mobile design
- [x] Error handling
- [x] Loading states
- [x] Form validation
- [x] Comprehensive documentation

---

## 🎓 Learning Concepts

This project demonstrates:
- Next.js 15 App Router pattern
- Server-side rendering & client-side rendering
- React Hooks (useState, useEffect, useContext)
- Context API for state management
- Protected routes and authentication
- Cookie storage with js-cookie
- RESTful API design
- Express.js backend
- Form handling and validation
- Responsive web design with Tailwind CSS
- Dynamic routing with [id] pattern
- Toast notifications
- Error handling best practices

---

## 📞 Support & Debugging

### Check Server Status
```bash
curl http://localhost:5000/api/products
```

### View Browser Cookies
1. Open DevTools (F12)
2. Go to Application → Cookies
3. Look for `authToken` and `user` cookies

### Check Console for Errors
1. Open DevTools (F12)
2. Go to Console tab
3. Look for any red error messages

### Test Authentication
1. Go to `/login`
2. Enter: `user@example.com` / `password123`
3. Should see success toast notification
4. Should redirect to `/items`
5. Navbar should update

---

## 🔄 Next Steps / Future Enhancements

Recommended features for v2.0:
- [ ] Real database (MongoDB/PostgreSQL)
- [ ] User registration
- [ ] JWT token authentication
- [ ] Shopping cart functionality
- [ ] Checkout and payment (Stripe)
- [ ] Order history
- [ ] User reviews/ratings
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Inventory management

---

## 📄 License

MIT License - Free to use for educational and commercial projects

---

## 👨‍💻 Development Notes

- All components use client-side rendering (`'use client'`)
- Global state persists across page refreshes (cookies)
- Authentication checks happen on component mount
- Toast notifications auto-close after 3 seconds
- API calls use native `fetch()` API
- Images use external URLs (not optimized for production)

---

**Built with ❤️ for sustainable e-commerce** 🌱

**Happy Shopping with NextShop!**
