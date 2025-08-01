# 🏨 Hotel Booking Web Application

A full-stack **Hotel Booking System** built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js), featuring **Clerk authentication**, real-time availability, booking management, and an intuitive admin dashboard.

## 🚀 Features

- 🔐 **User Authentication** with Clerk
- 📅 **Book Available Rooms** with Live Availability Check
- 📖 **Booking History** and Management
- 🧑‍💼 **Admin Dashboard** for Room & Booking Control
- 🏨 **Room Management** (Add/Edit/Delete)
- 📱 **Responsive Design** for Mobile and Desktop
- ⚙️ **RESTful APIs** with Error Handling

---

## 🛠️ Tech Stack

| Frontend        | Backend         | Authentication | Database | Deployment |
|-----------------|-----------------|----------------|----------|------------|
| React.js (Vite) | Node.js, Express| Clerk           | MongoDB  | Render / Vercel / Netlify |

---

## 📸 Screenshots

> *(Optional: Add screenshots of room listings, booking flow, dashboard, etc.)*

---

## 📂 Project Structure

hotel-booking/
├── client/ # React Frontend
│ ├── components/
│ ├── pages/
│ └── utils/
├── server/ # Express Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── middleware/
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/akankshya-sit/hotel-booking.git
cd hotel-booking
2. Environment Variables
Backend (server/.env):
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_backend_key
Frontend (client/.env):
env
Copy
Edit
VITE_BACKEND_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_frontend_key
3. Install Dependencies
Backend:

bash
Copy
Edit
cd server
npm install
Frontend:

bash
Copy
Edit
cd client
npm install
4. Start Development Servers
Backend:

bash
Copy
Edit
cd server
npm run dev
Frontend:

bash
Copy
Edit
cd client
npm run dev
App will be running at: http://localhost:5173

🔐 Authentication (via Clerk)
Users can sign in or sign up using Clerk.

Clerk JWT tokens are sent with requests to access protected routes.

Backend middleware validates token using Clerk SDK.

📘 API Endpoints
Here are some key routes (backend):

bash
Copy
Edit
GET     /api/rooms               # Get all rooms
POST    /api/rooms               # Add a new room (admin)
PUT     /api/rooms/:id           # Update a room (admin)
DELETE  /api/rooms/:id           # Delete a room (admin)

GET     /api/bookings            # Get user's bookings
POST    /api/bookings            # Create a booking
DELETE  /api/bookings/:id        # Cancel booking
💡 Future Improvements
✅ Image Upload for Rooms

🛎️ Payment Gateway Integration (e.g., Stripe)

📈 Booking Analytics Dashboard

🗓️ Calendar View for Bookings

🧾 Booking Confirmation PDF Generation


