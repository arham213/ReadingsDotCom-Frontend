# ReadingsDotCom-Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Create React App](https://img.shields.io/badge/Create_React_App-5-09D3AC?logo=react&logoColor=white&style=flat-square)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white&style=flat-square)

Frontend for a full-stack MERN e-commerce platform specializing in books. Handles authentication flows, product browsing, cart and wishlist state management, and end-to-end order placement via a REST API backend.

**Live:** [coming-soon.vercel.app](#) &nbsp;|&nbsp; **Backend:** [ReadingsDotCom-Backend](https://github.com/arham213/ReadingsDotCom-Backend)

---

<!-- Add a screenshot or GIF of the app here -->
<!-- ![Dashboard Preview](./docs/screenshot.png) -->

## Features

- JWT-based authentication (signup, login, and email verification)
- Category browsing and advanced book search
- Product detail pages
- Wishlist and cart management with persistent state
- End-to-end checkout and order placement
- Protected routes with session-based auth guard
- Fully integrated with a REST API backend

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19, TypeScript |
| Networking | Axios |
| Build | Create React App |
| Frontend Deployment | Vercel |
| Backend Deployment | Railway |

---

## Local Setup

### Prerequisites
- Node.js 18+
- [ReadingsDotCom-Backend](https://github.com/arham213/ReadingsDotCom-Backend) running locally or remotely *(required — must be running before starting the frontend)*

```bash
git clone https://github.com/arham213/ReadingsDotCom-Frontend.git
cd ReadingsDotCom-Frontend
npm install
```

### Environment Variables

Create a `.env` file in the root directory and fill in your values:

```env
BASE_URL=your_backend_url
```

```bash
npm start
```

See the [backend README](https://github.com/arham213/ReadingsDotCom-Backend#readme) for full backend setup instructions.

---

## Author

[LinkedIn](https://linkedin.com/in/arhamasjid) · arhamasjid213@gmail.com
