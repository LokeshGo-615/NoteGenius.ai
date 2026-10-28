# ✨ NoteGenius AI — AI-Powered Study Notes Generator

<p align="center">
  Turn any topic into structured study notes with the power of AI.
  <br />
  Generate notes, save time, and focus on learning smarter.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/AI-Gemini-4285F4?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini AI" />
</p>

## 📖 About the Project

**NoteGenius AI** is a full-stack AI-powered web application that helps students create study notes from topics using Google's Gemini AI.

Instead of spending hours manually organizing information, users can enter a topic and generate structured notes, then download them as a PDF for offline study.

The project combines AI-powered content generation, user authentication, credit-based usage, online payments, and PDF generation in one application.

## 🚀 Features

- 🤖 **AI Notes Generation** — Generate study notes from user-provided topics using Gemini AI.
- 🔐 **User Authentication** — Firebase Authentication for user sign-in.
- 🪙 **Credit-Based System** — Manage credits used for generating notes.
- 💳 **Payment Integration** — Stripe Checkout for purchasing credit packages.
- 📄 **PDF Downloads** — Export generated notes for offline access.
- 👤 **User Management** — Store user information and credit balances.
- 🌐 **REST API** — Communicate between the React frontend and Express backend.
- 📱 **Responsive Interface** — Access the application across supported screen sizes.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript |
| Styling | CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| AI Integration | Google Gemini API |
| Authentication | Firebase Authentication |
| Payments | Stripe Checkout |
| HTTP Requests | Axios |
| Version Control | Git and GitHub |
| Deployment | Render or other configured hosting providers |

> Update the styling and deployment entries if your implementation uses different tools or hosting providers.

## 🏗️ Project Architecture

```text
NoteGeniusAI/
│
├── client/                 # React + Vite frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node.js + Express backend
│   ├── controllers/        # Request handling and business logic
│   ├── middleware/         # Authentication middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # REST API routes
│   ├── services/           # External service integrations
│   ├── utils/              # Helper functions
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

*The folders shown are representative; adjust them to match the actual repository.*

## ⚙️ Getting Started

Follow these steps to run NoteGenius AI locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/)
- npm
- A MongoDB database
- A Firebase project with Authentication configured
- A Google Gemini API key
- A Stripe account for testing credit purchases

### 1. Clone the repository

```bash
git clone https://github.com/LokeshGo-615/NoteGenius.ai.git
cd NoteGenius.ai
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory. Add the variables required by your backend:

```env
PORT=8000
CLIENT_URL=http://localhost:5173

MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_test_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

> These are example variable names. Check your source code for the exact names, including the MongoDB and Gemini variables. Never commit real credentials.

Start the backend:

```bash
npm run dev
```

The backend should run at `http://localhost:8000`, provided your configuration uses port 8000.

### 3. Set up the frontend

Open a second terminal:

```bash
cd client
npm install
```

Create `client/.env` with the Firebase configuration variable names required by your frontend.

For example, Vite environment variables exposed to browser code generally use the `VITE_` prefix:

```env
VITE_API_URL=http://localhost:8000
```

Add your Firebase configuration variables using the exact names referenced by your application.

Start the frontend:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Configure Stripe webhooks

To test credit purchases locally:

1. Configure Stripe in test mode.
2. Set the webhook endpoint to `http://localhost:8000/api/credits/webhook` using a local Stripe forwarding tool.
3. Subscribe to the `checkout.session.completed` event.
4. Configure the webhook signing secret in your backend environment.

The webhook URL above matches the route in the current backend configuration. Confirm that your deployed Stripe webhook uses the corresponding public backend URL.

## 🔄 How It Works

1. **Sign in** — Authenticate through Firebase.
2. **Enter a topic** — Provide the topic for which you need study notes.
3. **Generate notes** — The backend calls Gemini AI to generate the content.
4. **Use credits** — The application manages usage through its credit system.
5. **Download a PDF** — Save the generated notes for later revision.
6. **Purchase credits** — When needed, use Stripe Checkout to purchase a credit package.

## 🔌 API Overview

The following routes are based on the backend route prefixes. Confirm the HTTP methods and individual endpoints against your route files.

| Endpoint prefix | Purpose |
|---|---|
| `/api/auth` | Authentication-related operations |
| `/api/user` | User-related operations |
| `/api/notes` | AI notes generation |
| `/api/pdf` | PDF generation or download |
| `/api/credit` | Credit purchase and related operations |
| `/api/credits/webhook` | Stripe payment event handling |

## 🔒 Environment Variables & Security

- Keep `.env` files out of Git.
- Never expose Gemini or Stripe secret keys in frontend code.
- Configure CORS for your deployed frontend URL.
- Verify Stripe webhook signatures before processing payment events.
- Validate incoming requests on the backend.
- Ensure payment events cannot grant credits more than once.
- Configure Firebase authentication and authorized domains for deployment.

## 🚧 Future Improvements

- 📚 Save and organize previously generated notes.
- ✏️ Edit and regenerate selected sections.
- 🧠 Generate quizzes and flashcards from notes.
- 🌍 Support multiple languages.
- 📊 Add a dashboard for tracking usage and credits.
- 📤 Support additional export formats.
- 🧪 Add automated tests for API routes and payment flows.

## 📸 Screenshots

Add screenshots of your actual application here to showcase the user interface.

Suggested screenshots:
- Home page
- Notes generation form
- Generated notes
- PDF output
- Pricing and credit packages

Example:

```md
![NoteGenius AI Home Page](screenshots/homepage.png)
```

Create a `screenshots/` folder and add the corresponding image before using this example.

## 👨‍💻 Author

**Lokesh Goyal**

- GitHub: [@LokeshGo-615](https://github.com/LokeshGo-615)

## 📄 License

This project is available under the MIT License if you choose to release it under that license. Add a `LICENSE` file before claiming that the project is officially MIT-licensed.

---

<p align="center">
  <strong>Built to make studying smarter with AI ✨</strong>
</p>
