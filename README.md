# Meetora - Modern Video Conferencing Platform

Meetora is a feature-rich video conferencing application built with React, Node.js, Express, and WebRTC. It provides seamless video calling, real-time chat, and meeting history features in a user-friendly interface.

## 🚀 Features

- **High-Quality Video Calls**: Crystal clear video and audio using WebRTC
- **Real-time Chat**: Built-in chat functionality during meetings
- **User Authentication**: Secure signup and login system
- **Meeting History**: Track and revisit your past meetings
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface built with Material-UI

## 🛠️ Tech Stack

### Frontend
- React 18
- Material-UI (MUI) for UI components
- React Router for navigation
- Socket.IO Client for real-time communication
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Socket.IO for real-time features
- JWT for authentication
- Bcrypt for password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/meetora.git
   cd meetora
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env with your configuration
   npm run dev
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Update .env with your backend URL
   npm start
   ```

4. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
meetora/
├── backend/               # Backend server
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   └── app.js         # Express app setup
│   └── package.json
│
└── frontend/              # React frontend
    ├── public/            # Static files
    └── src/
        ├── components/    # Reusable components
        ├── pages/         # Page components
        ├── contexts/      # React contexts
        └── App.js         # Main app component
```

## 🔧 Environment Variables

### Backend (`.env`)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### Frontend (`.env`)
```
REACT_APP_API_URL=http://localhost:5000
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](Licence) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by Naveen Kumar
- Special thanks to all contributors
- Inspired by modern video conferencing solutions

---

<div align="center">
  Made with ❤️ using React, Node.js, and WebRTC
</div>