# Food Delivery

A full-stack food delivery web application with a customer-facing storefront and an admin dashboard.

## Features

### Customer
- Browse food menu by category
- Add items to cart, update quantities, remove items
- Enter delivery address and place orders
- View order history with live status badges

### Admin Dashboard
- **Food menu** — add, edit, and delete dishes and categories
- **Orders** — view all orders with pagination, update delivery status individually or in bulk, delete orders
- **Users** — view all users and assign roles (owner / manager / customer)

### Authentication
- Email & password login
- Sign up with email verification
- Forgot password / reset password flow
- JWT-based session management

## Tech Stack

**Frontend**
| | |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui |
| Forms | React Hook Form + Zod |
| HTTP | Axios |
| Animations | Framer Motion |
| Image storage | Vercel Blob |
| Notifications | Sonner |

**Backend**
| | |
|---|---|
| Framework | Express.js v5 |
| Language | TypeScript |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcrypt |
| Validation | Zod |
| Security | Helmet, express-rate-limit |
| Logging | Morgan |

## Project Structure

```
food-delivery/
├── frontend/   # Next.js app (port 3000)
└── backend/    # Express API (port 4000)
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/food-delivery
JWT_SECRET=your_jwt_secret
```

```bash
npm run dev
```

### 2. Frontend

```bash
cd frontend
npm install
```

Create a `.env.local` file in `frontend/`:

```env
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Roles

| Role | Permissions |
|------|-------------|
| `owner` | Full access — food, orders, users |
| `manager` | Food and orders management |
| `customer` | Browse, order, view own history |

## Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Owner | admin@gmail.com | `Admin007@` |
| Owner | test001@gmail.com | `Honolulu23#` |
| Manager | test002@gmail.com | `Honolulu23#` |
| Customer | test11@gmail.com | `Honolulu23#` |
| Customer | test12@gmail.com | `Honolulu23#` |
| Customer | test13@gmail.com | `Honolulu23#` |
| Customer | test14@gmail.com | `Honolulu23#` |
