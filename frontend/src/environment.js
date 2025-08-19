// Set to true when deploying to production
let IS_PROD = false;
const server = IS_PROD ?
    "https://meetora-backend.onrender.com" : // Production URL (when deployed)
    "http://localhost:8000"                  // Local development URL


export default server;