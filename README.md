# URL Shortener

A full-stack URL shortening service built with Node.js, Express, MongoDB, and React. This application allows users to create shortened URLs, track clicks, and manage their links with user authentication.

## 🚀 Features

### Backend Features
- **User Authentication**: JWT-based registration and login system
- **URL Shortening**: Generate random short URLs or use custom slugs
- **Click Analytics**: Track the number of clicks for each shortened URL
- **User Dashboard**: Authenticated users can view all their created URLs
- **Secure Redirects**: Fast redirection from short URLs to original URLs
- **Error Handling**: Comprehensive error handling with custom error classes

### Frontend Features
- **Responsive UI**: Built with React and TailwindCSS
- **User Registration/Login**: Secure authentication forms
- **URL Creation**: Interface to create short URLs with optional custom slugs
- **Dashboard**: View and manage user's shortened URLs
- **State Management**: Redux Toolkit for application state
- **API Integration**: React Query for efficient data fetching

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **URL Generation**: nanoid
- **Environment**: dotenv for configuration

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: TailwindCSS 4.x
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack React Query
- **Routing**: TanStack React Router
- **HTTP Client**: Axios

## 📁 Project Structure

```
url_shortner/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── config.js          # Cookie and app configuration
│   │   │   └── mongo.config.js    # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── auth.controller.js     # Authentication endpoints
│   │   │   ├── shortUrl.controller.js # URL shortening endpoints
│   │   │   └── user.controller.js     # User-related endpoints
│   │   ├── dao/                   # Data Access Objects
│   │   │   ├── shortUrl.dao.js    # URL database operations
│   │   │   └── user.dao.js        # User database operations
│   │   ├── middleware/
│   │   │   └── auth.middleware.js # JWT authentication middleware
│   │   ├── models/
│   │   │   ├── shortUrl.model.js  # URL schema
│   │   │   └── user.model.js      # User schema
│   │   ├── routes/
│   │   │   ├── auth.routes.js     # Authentication routes
│   │   │   ├── shortUrl.routes.js # URL shortening routes
│   │   │   └── user.routes.js     # User routes
│   │   ├── services/              # Business logic layer
│   │   │   ├── auth.service.js    # Authentication services
│   │   │   └── shortUrl.service.js # URL shortening services
│   │   └── utilis/
│   │       ├── errorHandler.js    # Custom error classes
│   │       ├── helper.js          # JWT and URL generation utilities
│   │       └── tryCatchWrapper.js # Async error wrapper
│   ├── app.js                     # Express app configuration
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── pages/                 # Page components
│   │   ├── routing/               # Route configuration
│   │   ├── store/                 # Redux store
│   │   └── utils/                 # Utility functions
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/url_shortner.git
   cd url_shortner
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the Backend directory:
   ```env
   JWT_SECRET=your_jwt_secret_here
   MONGODB_URI=mongodb://localhost:27017/urlshortener
   APP_URL=http://localhost:3000/
   NODE_ENV=development
   ```

4. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm run dev
   ```
   Backend will run on `http://localhost:3000`

2. **Start the Frontend Development Server**
   ```bash
   cd Frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### URL Management
- `POST /api/create` - Create a short URL
- `GET /:id` - Redirect to original URL
- `GET /api/user/urls` - Get user's URLs (authenticated)

### Request/Response Examples

**Create Short URL:**
```json
POST /api/create
{
  "url": "https://www.example.com/very-long-url",
  "slug": "my-custom-slug" // optional
}

Response:
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

**User Registration:**
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}

Response:
{
  "message": "register success"
}
```

## 🏗️ Architecture

### Backend Architecture
The backend follows a **layered architecture pattern**:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic
- **DAOs**: Manage database operations
- **Models**: Define database schemas
- **Middleware**: Handle authentication and request processing

### Security Features
- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Stateless authentication with HTTP-only cookies
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Input Validation**: Request validation and sanitization
- **Error Handling**: Centralized error handling with custom error classes

### Database Schema

**User Schema:**
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  timestamps: true
}
```

**URL Schema:**
```javascript
{
  full_url: String,      // Original URL
  short_url: String,     // Shortened URL identifier
  user: ObjectId,        // Reference to user (optional)
  clicks: Number,        // Click counter
  timestamps: true
}
```

## 🔧 Configuration

### Backend Configuration
- **Port**: 3000 (default)
- **Database**: MongoDB
- **Session**: JWT with 1-hour expiration
- **CORS**: Configured for frontend on port 5173

### Frontend Configuration
- **Development Server**: Vite
- **Build Tool**: Vite with React plugin
- **Styling**: TailwindCSS with Vite integration
- **State Management**: Redux Toolkit

## 🚀 Deployment

### Backend Deployment
1. Set environment variables for production
2. Configure MongoDB connection string
3. Set `NODE_ENV=production`
4. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Known Issues

- TailwindCSS installation may have compatibility issues on some systems
- Ensure Node.js version 18+ for optimal compatibility with Express 5.x

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

---

**Made with ❤️ by [Your Name]**

Similar code found with 1 license type
