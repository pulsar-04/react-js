# 🚗 Car Market - React Project

Car Market is a Single Page Application (SPA) built with ReactJS for buying and selling cars. Users can browse a catalog of vehicles, search for specific brands, create their own offers, and interact with the community by liking cars.

## 🌟 Features

### Public Part (Accessible to everyone)
* **Home Page:** Dynamic landing page showing the latest 3 added cars.
* **Catalog:** Browse all available cars with photos and prices.
* **Details:** View full information about a specific car.
* **Search:** Filter cars by brand name.
* **Top Rated:** Ranking system showing the top 10 most liked cars (Gold, Silver, and Bronze badges).
* **Authentication:** Login and Register functionality.

### Private Part (Logged-in users only)
* **Create Offer:** Publish a new car for sale.
* **Edit/Delete:** Full control over your own records (Owner-only access).
* **Like System:** Users can like other people's cars (limit 1 like per car).
* **My Profile:** Dashboard showing user info and their personal garage (active offers).
* **Route Guards:** Protected routes preventing unauthorized access (e.g., guests cannot access `/create`, users cannot access `/login`).

## 🛠️ Tech Stack

* **Library:** ReactJS (Vite)
* **Routing:** React Router DOM (Client-side routing)
* **State Management:** Context API (AuthContext) + React Hooks
* **Forms:** Controlled components with Custom Hook (`useForm`)
* **Persistence:** LocalStorage with Custom Hook (`useLocalStorage`)
* **Styling:** Custom CSS with variables and responsive design
* **Backend:** SoftUni Practice Server (REST API)

## 📂 Project Architecture

The project follows a component-based architecture separated by concerns:

* `/src`
    * `/components` - UI Components divided by feature (catalog, create, details, etc.) and core (header, footer).
    * `/contexts` - Global state management (AuthContext).
    * `/services` - API requests (authService, carService, likeService).
    * `/hooks` - Custom hooks for forms and local storage.

## 🚀 How to Run the Project

This project requires the **SoftUni Practice Server** to be running locally.

### 1. Start the Back-End (Server)
1.  Download or clone the server repository.
2.  Open a terminal in the server folder.
3.  Run the server:
    ```bash
    node index.js
    ```
    *(The server will listen on port 3030)*

### 2. Start the Front-End (Client)
1.  Open a new terminal in the project folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the link shown in the terminal (usually `http://localhost:5173`).

---
*Project developed for the ReactJS Course at SoftUni.*