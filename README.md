# Random Quote Backend API 🎯

A simple and lightweight Express.js backend API that serves random inspirational quotes by proxying requests to the ZenQuotes API.

## 🚀 Features

- **Random Quote Endpoint**: Fetches random inspirational quotes
- **CORS Enabled**: Can be called from any frontend application
- **Error Handling**: Graceful error responses when external API fails
- **Keep-Alive Endpoint**: Prevents server from sleeping on free hosting platforms
- **ES6 Modules**: Modern JavaScript syntax

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/random-quote-backend.git
cd random-quote-backend
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon, which automatically restarts on file changes.

### Production Mode
```bash
node app.js
```

The server will start on port 7004 by default, or use the PORT environment variable if set.

## 🔗 API Endpoints

### Get Random Quote
```http
GET /get-quote
```

**Response:**
```json
[
  {
    "q": "The way to get started is to quit talking and begin doing.",
    "a": "Walt Disney",
    "h": "<blockquote>&ldquo;The way to get started is to quit talking and begin doing.&rdquo; &mdash; <footer>Walt Disney</footer></blockquote>"
  }
]
```

### Keep-Alive Ping
```http
GET /ping
```

**Response:**
```text
Server is alive
```

## 🚀 Deployment

This API is ready to deploy on platforms like:
- Heroku
- Railway
- Render
- Vercel
- Any VPS with Node.js support

The `PORT` environment variable will be automatically used if provided by the hosting platform.

## 🔧 Configuration

Currently, the API uses default configurations. You can modify:
- **Port**: Set the `PORT` environment variable
- **CORS Settings**: Modify the cors middleware in `app.js`

## 📦 Dependencies

- **express**: Web application framework
- **node-fetch**: HTTP client for making API requests
- **cors**: Enable Cross-Origin Resource Sharing
- **nodemon** (dev): Auto-restart server on changes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Future Improvements

- [ ] Add rate limiting to prevent abuse
- [ ] Implement caching to reduce external API calls
- [ ] Add more quote sources/APIs
- [ ] Create API documentation with Swagger
- [ ] Add unit and integration tests
- [ ] Implement logging with Winston or similar
- [ ] Add health check endpoint with more details
- [ ] Support for quote categories/filters
- [ ] Add authentication for premium features

## ⚠️ Important Notes

- This API depends on the ZenQuotes API (https://zenquotes.io/)
- ZenQuotes has rate limits for their free tier
- Consider implementing caching to avoid hitting rate limits

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [ZenQuotes](https://zenquotes.io/) for providing the quotes API
- Express.js community for the excellent framework

---

Made with ❤️ by Kuldeep Singh
