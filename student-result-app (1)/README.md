# Student Result App

A simple React CRUD app using `useState` only and `json-server` as a mock backend.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start JSON Server (runs on port 3001):
   ```bash
   npm run server
   ```

3. Start React app (default CRA port 3000):
   ```bash
   npm start
   ```

- Open http://localhost:3000 in the browser.
- Use the **Load Students** button to fetch student data from JSON Server.
- After Add/Edit/Delete you will see an alert; click **Load Students** again to refresh the list.

This project intentionally avoids `useEffect` — all requests are triggered by button clicks or form submissions to keep it beginner-friendly.
