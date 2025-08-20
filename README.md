# URL Shortener

A full-stack URL shortener application that allows users to convert long URLs into short, shareable links. Built with React frontend and Express.js backend.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short 7-character IDs
- **Click Tracking**: Track the number of clicks on each shortened URL
- **Instant Redirect**: Automatically redirect users to the original URL
- **Copy to Clipboard**: One-click copy functionality for shortened URLs
- **Responsive Design**: Clean, modern UI built with Tailwind CSS
- **Error Handling**: Comprehensive error handling for better user experience
- **CORS Support**: Configured for cross-origin requests between frontend and backend

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **JavaScript (ES6+)** - Programming language

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database (MongoDB Atlas)
- **Mongoose** - MongoDB object modeling
- **nanoid** - Unique ID generator for short URLs
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Database Schema
```javascript
{
  full_url: String,     // Original long URL
  short_url: String,    // Generated short ID (7 characters)
  clicks: Number,       // Click counter (default: 0)
  user: ObjectId,       // User reference (optional)
  createdAt: Date       // Timestamp
}
```

## 📁 Project Structure

```
url_shortner/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── mongo.config.js      # MongoDB connection
│   │   ├── controllers/
│   │   │   └── shortUrl.controller.js # Request handlers
│   │   ├── dao/
│   │   │   └── shortUrl.dao.js      # Database operations
│   │   ├── models/
│   │   │   └── shortUrl.model.js    # Mongoose schema
│   │   ├── routes/
│   │   │   └── shortUrl.routes.js   # API routes
│   │   ├── services/
│   │   │   └── shortUrl.service.js  # Business logic
│   │   └── utilis/
│   │       ├── helper.js            # Utility functions
│   │       ├── errorHandler.js      # Error handling
│   │       └── tryCatchWrapper.js   # Async error wrapper
│   ├── app.js                       # Express app setup
│   ├── package.json
│   └── .env                         # Environment variables
├── Frontend/
│   ├── src/
│   │   ├── apis/
│   │   │   └── shortUrl.api.js      # API service functions
│   │   ├── components/
│   │   │   └── UrlForm.jsx          # URL shortening form
│   │   ├── pages/
│   │   │   └── HomePage.jsx         # Main page
│   │   ├── utilis/
│   │   │   └── axiosInstance.js     # Axios configuration
│   │   ├── App.jsx                  # Root component
│   │   └── main.jsx                 # Entry point
│   ├── package.json
│   └── index.html
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harsharyan542/url_shortner.git
   cd url_shortner
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd Frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create `.env` file in the Backend directory:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/url_shortner
   APP_URL=http://localhost:3000/
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd Backend
   npm run dev
   # Server runs on http://localhost:3000
   ```

2. **Start Frontend Development Server**
   ```bash
   cd Frontend
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

## 📡 API Endpoints

### Create Short URL
- **POST** `/api/create`
- **Body**: 
  ```json
  {
    "url": "https://www.example.com",
    "slug": "custom-slug" // optional
  }
  ```
- **Response**: 
  ```json
  {
    "shortUrl": "http://localhost:3000/XHTaGAk"
  }
  ```

### Redirect to Original URL
- **GET** `/:id`
- **Example**: `http://localhost:3000/XHTaGAk`
- **Action**: Increments click counter and redirects to original URL

## 🏗️ Architecture

### Layer Architecture
- **Controller Layer**: Handles HTTP requests/responses
- **Service Layer**: Contains business logic
- **DAO Layer**: Database access operations
- **Model Layer**: Data schemas and validation

### Key Features Implementation

#### URL Shortening Process
1. User submits long URL through React form
2. Frontend sends POST request to `/api/create`
3. Backend generates 7-character unique ID using nanoid
4. URL and short ID saved to MongoDB
5. Backend returns shortened URL to frontend
6. User can copy the shortened URL

#### Redirect Process
1. User visits shortened URL (e.g., `/XHTaGAk`)
2. Backend looks up short ID in database
3. If found: increment click counter and redirect to original URL
4. If not found: return 404 error

## 🔧 Configuration

### CORS Configuration
```javascript
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
```

### Axios Configuration
```javascript
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    withCredentials: true
});
```

## 🎨 UI Features

- Clean, modern interface
- Real-time error handling
- Loading states for better UX
- Responsive design for all devices
- One-click copy functionality
- Visual feedback for user actions

## 🚦 Error Handling

- Frontend: Axios interceptors for global error handling
- Backend: Custom error handler middleware
- Database: Mongoose validation and error handling
- User-friendly error messages displayed in UI

## 🔐 Security Features

- Input validation for URLs
- CORS protection
- Environment variable protection
- MongoDB injection prevention through Mongoose

## 📝 Development Notes

- Uses ES6 modules (`"type": "module"` in package.json)
- Implements separation of concerns with layered architecture
- Includes comprehensive error handling
- Uses modern React hooks (useState, useEffect)
- MongoDB Atlas for cloud database hosting

## 🚀 Deployment

### Backend Deployment (e.g., Heroku)
1. Update CORS origin to production URL
2. Set environment variables in hosting platform
3. Update APP_URL to production URL

### Frontend Deployment (e.g., Vercel)
1. Update API base URL in axiosInstance
2. Build the project: `npm run build`
3. Deploy the `dist` folder

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Harsh Aryan**
- GitHub: [@harsharyan542](https://github.com/harsharyan542)

---

**Live Demo**: [Add your deployed URL here]

**Repository**: https://github.com/harsharyan542/url_shortner
