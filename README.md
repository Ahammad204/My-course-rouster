# Course Roster

A modern, responsive course registration web application built with React 18, Vite, and Tailwind CSS. Browse programming courses, manage your cart, and track credit hours — all in a clean, intuitive interface.

---

## Live Demo

**[https://courserouster.netlify.app/](https://courserouster.netlify.app/)**

---

## Features

- **Course Catalog** — Browse 9 curated programming and computer science courses displayed in a responsive grid layout with course images, descriptions, pricing, and credit hours.

- **Smart Cart System** — Add courses to your cart and see a real-time summary including selected courses, total credits used, total cost, and remaining credit hours.

- **Credit Limit Enforcement** — The app enforces a maximum of 20 credit hours. Attempting to exceed the limit triggers a toast notification, and the course is not added.

- **Duplicate Detection** — Trying to add a course already in your cart displays a helpful notification instead of duplicating entries.

- **Toast Notifications** — Non-intrusive feedback messages powered by `react-toastify` for a smooth user experience.

- **Fully Responsive** — Adapts seamlessly from mobile (1 column) to tablet (2 columns) to desktop (3 columns) using Tailwind CSS breakpoints.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Notifications | react-toastify |
| Language | JavaScript (JSX) |
| Deployment | Netlify |

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/My-course-rouster.git

# Navigate to the project directory
cd My-course-rouster

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## Project Structure

```
My-course-rouster/
├── public/
│   └── course.json              # Course data (9 courses)
├── src/
│   ├── main.jsx                 # App entry point
│   ├── App.jsx                  # Root component
│   ├── index.css                # Global styles + Tailwind
│   ├── Component/
│   │   ├── Card/
│   │   │   └── Card.jsx         # Course listing & selection logic
│   │   └── Cart/
│   │       └── Cart.jsx         # Shopping cart sidebar
│   └── assets/
│       └── images/              # Course & UI images
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## How It Works

1. **Data Loading** — On mount, the `Card` component fetches course data from `public/course.json` using `useEffect` and stores it in state.

2. **Course Selection** — Clicking "Select" on a course card triggers validation:
   - Checks if the course is already in the cart
   - Checks if adding the course would exceed the 20-credit limit
   - If valid, updates the cart state (selected courses, credits, total price, remaining)

3. **State Management** — All state is managed locally in `Card.jsx` using React's `useState` hook. The cart component receives state via props.

4. **Cart Display** — The `Cart` component renders the current selection summary, remaining credits, and total cost in a fixed sidebar.

---

## State Management

The application uses React's `useState` hook for local state management with five state variables:

| State | Purpose |
|---|---|
| `cards` | All available courses loaded from JSON |
| `selectedCourse` | Array of courses added to the cart |
| `selectCredit` | Sum of credit hours for selected courses |
| `totalPrice` | Sum of prices for selected courses |
| `remaining` | Credit hours remaining (starts at 20) |

---

## Course Data

The app ships with 9 courses covering:

| Course | Credits | Price (Tk) |
|---|---|---|
| C Programming | 3 | 15,000 |
| C++ for DSA | 8 | 30,000 |
| Data Structures | 6 | 25,000 |
| Algorithms | 7 | 35,000 |
| OOP Python | 5 | 20,000 |
| Software Engineering | 4 | 10,000 |
| AWS Cloud Computing | 10 | 35,000 |
| MySQL Database | 2 | 10,000 |
| Problem Solving | 1 | 10,000 |

---

## License

This project is open source and available for educational purposes.

---

## Author

Built as a React learning project demonstrating component-based architecture, state management with hooks, conditional rendering, and array manipulation.
