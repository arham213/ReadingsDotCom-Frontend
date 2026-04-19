# ReadingsDotCom-Frontend

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white&style=flat-square)

Frontend for a full-stack MERN e-commerce platform specializing in books. Handles authentication flows, product browsing, cart and wishlist state management, and end-to-end order placement via a REST API backend.

**Live:** [Coming Soon](#) &nbsp;|&nbsp; **Backend:** [ReadingsDotCom-Backend](https://github.com/arham213/ReadingsDotCom-Backend)

---

<!-- ![App Preview](./docs/screenshot.png) -->

## Features

- JWT-based authentication — signup, login, and email verification
- Category browsing and advanced book search
- Product detail pages
- Wishlist and cart management with persistent state
- End-to-end checkout and order placement
- Fully integrated with a REST API backend

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React, TypeScript |
| Build Tool | Create React App |
| Routing | React Router DOM |
| Networking | Axios |
| UI Utilities | Swiper (sliders) |
| Auth | JWT (via backend) |
| Deployment | Vercel |

---

## Local Setup

### 1. Prerequisites
- Node.js 18+
- [ReadingsDotCom-Backend](https://github.com/arham213/ReadingsDotCom-Backend) running locally or remotely *(the backend must be running before you try to use frontend features).*

### 2. Clone and Install

```bash
git clone https://github.com/arham213/ReadingsDotCom-Frontend.git
cd ReadingsDotCom-Frontend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the project root to map your backend path:

```env
BASE_URL=http://localhost:8080/api
```

*(Note: Ensure `8080` matches the port your local backend server is running on).*

### 4. Run Development Server

```bash
npm start
```

The application will begin running locally. By default, it will open at [http://localhost:3000](http://localhost:3000).

### 5. Build for Production

To create an optimized production build for deployment:

```bash
npm run build
```

See the [backend README](https://github.com/arham213/ReadingsDotCom-Backend#readme) for full backend setup instructions.

---

## Author

[LinkedIn](https://linkedin.com/in/arhamasjid) · arhamasjid213@gmail.com
