# Express URL Shortener

A simple yet powerful URL shortening service built with Express.js that allows users to create custom short URLs with personalized slugs.

## Features

- Create shortened URLs with randomly generated slugs
- Define custom slugs for more memorable short URLs
- User-based URL organization (URLs are stored per username)
- Validation for URLs and slugs
- Slug character limit (max 10 characters)
- Clean URL redirection

## Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)
- Validator.js for URL validation

## Project Structure

```
/
├── server.js                       # Main application entry point
├── urlshortener/                   # URL shortener module
│   ├── urlshortenerController.js   # Business logic for URL shortening
│   └── urlshortenerRouter.js       # Route definitions
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/url/:username` | Get all shortened URLs for a specific user |
| POST | `/url/:username/convert` | Create a new shortened URL for a user |
| GET | `/url/:username/:slug` | Redirect to the original URL using the shortened slug |

## Request & Response Examples

### Create a Shortened URL

**Request**
```http
POST /url/johndoe/convert
Content-Type: application/json

{
  "url": "https://example.com/very/long/path/to/resource",
  "slug": "example"  // Optional - random slug will be generated if not provided
}
```

**Response**
```json
{
  "message": "URL converted successfully",
  "shortURL": "http://localhost:3000/url/johndoe/example",
  "originalURL": "https://example.com/very/long/path/to/resource"
}
```

### Get All User URLs

**Request**
```http
GET /url/johndoe
```

**Response**
```json
[
  {
    "slug": "example",
    "url": "https://example.com/very/long/path/to/resource"
  },
  {
    "slug": "random123",
    "url": "https://anotherexample.com/page"
  }
]
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/express-urlshortener.git
   cd express-urlshortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will run on http://localhost:3000 by default.

## Usage

1. Create a shortened URL:
   ```bash
   curl -X POST http://localhost:3000/url/yourusername/convert \
     -H "Content-Type: application/json" \
     -d '{"url": "https://example.com/long-url", "slug": "custom"}'
   ```

2. Visit your shortened URL in a browser:
   ```
   http://localhost:3000/url/yourusername/custom
   ```

## Future Improvements

- Persistent storage with MongoDB or another database
- User authentication and authorization
- URL analytics (click tracking, referrers, etc.)
- URL expiration functionality
- Admin dashboard for URL management
- Rate limiting to prevent abuse

## License

MIT

---

This project was built as part of my Express.js learning journey.