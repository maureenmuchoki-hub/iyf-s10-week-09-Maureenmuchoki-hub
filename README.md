# Week 9: MtaaShare - React Advanced

## Author
- **Name:** Maureen Muchoki
- **GitHub:** [@maureenmuchoki-hub](https://github.com/maureenmuchoki-hub)
- **Date:** April 27, 2026

## Project Description
MtaaShare (Swahili for "Neighbourhood Share") is an advanced React application built on top of the Week 8 foundation. This week focuses on advanced React patterns including React Router for real navigation, useEffect for side effects, data fetching from APIs, and custom hooks for reusable logic.

The app allows Nairobi neighbours to borrow and lend everyday items — from drills and ladders to baby strollers and event seats.

The app connects two sides:
- **People who need to borrow** items they don't own
- **People who have items** they're willing to lend

## Technologies Used
- React 18
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3
- JSONPlaceholder API

## Features
- 🗺️ **React Router** — Real URL-based navigation between pages
- ⚡ **useEffect** — Browser tab title updates on each page
- 🌐 **Data Fetching** — Real API data loaded from JSONPlaceholder
- 🔄 **Custom useFetch Hook** — Reusable data fetching logic
- 💾 **Custom useLocalStorage Hook** — Items persist after page refresh
- ⏳ **Loading Spinner** — Shown while data is being fetched
- ⚠️ **Error Handling** — Friendly error messages when fetch fails
- ❤️ **Like Posts** — Community posts can be liked
- 🤲 **Need to Borrow** — Post a borrow request with contact form
- 🤝 **Have to Lend** — List an item you're willing to lend
- 📂 **Category Filter** — Browse by Tools, Kitchen, Adventure, Party Gear, Baby Items, Transport
- 👤 **Profile Page** — View your MtaaShare profile
- 📦 **My Items Page** — Track everything you've posted

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── Items/
│   │   ├── ItemCard.jsx
│   │   ├── ItemList.jsx
│   │   └── AddItemForm.jsx
│   └── Shared/
│       ├── CategoryFilter.jsx
│       ├── ContactForm.jsx
│       ├── LoadingSpinner.jsx
│       └── ErrorMessage.jsx
├── hooks/
│   ├── useFetch.js
│   └── useLocalStorage.js
├── pages/
│   ├── Home.jsx
│   ├── MyItems.jsx
│   ├── Profile.jsx
│   ├── Community.jsx
│   └── NotFound.jsx
├── App.jsx
└── index.css
```

## How to Run

1. Clone this repository: git clone https://github.com/maureenmuchoki-hub/iyf-s10-week-09-Maureenmuchoki-hub.git

2. Navigate to the project folder: cd iyf-s10-week-09-Maureenmuchoki-hub

3. Install dependencies: npm install

4. Start the development server: npm run dev

5. Open `http://localhost:5173` in your browser

## Lessons Learned
- How to set up React Router for real URL-based navigation
- How useEffect works and when to use the dependency array
- How to fetch data from an API inside a React component
- How to create custom hooks to reuse logic across components
- How to handle loading and error states professionally
- How to persist data using localStorage with a custom hook
- How to organize a React app into pages and components

## Challenges Faced
- **React Router setup** — Understanding how BrowserRouter, Routes and Route work together took some getting used to
- **useEffect dependency array** — Learning when to use `[]` vs `[variable]` was tricky at first
- **Data fetching errors** — Network errors needed proper try/catch handling
- **localStorage with images** — Image file objects can't be stored in localStorage so we store only text data for My Items

## Live Demo

Coming soon 
