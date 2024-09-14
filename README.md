# Shopify Product Admin

This is a simple product administration web application built using **React** and **Firebase**. It allows users to manage products by adding, modifying, and deleting items in the inventory. All data is fetched and saved to Firebase Firestore asynchronously, ensuring a smooth user experience without page reloads.

## Features

- **Add Product**: Create new product entries with fields such as name, description, price, and more.
- **Modify Product**: Update existing product information.
- **Delete Product**: Remove a product from the inventory.
- **List Products**: Display all products currently available in the inventory.
- **Responsive Design**: The application is fully responsive and works well on all screen sizes.
- **Asynchronous API Calls**: All interactions with the Firebase backend happen asynchronously.
- **Data Validation**: Ensures valid data input before submitting forms.
- **Error Handling**: Handles API and other operational errors gracefully.

## Technologies Used

- **React**: Frontend UI library
- **Firebase**: Backend as a Service (Firestore for the database)
- **React Router**: Navigation between different views
- **HTML/CSS**: For basic layout and styling

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14+)
- **npm** (v6+)
- **Firebase account** (with Firestore database set up)

## Getting Started

Follow these instructions to get the project up and running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shopify-product-admin.git
cd shopify-product-admin
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `firebase.js` file inside the `src` folder and add your Firebase configuration.

```javascript
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

Make sure to replace the placeholders (`YOUR_API_KEY`, etc.) with your Firebase project's actual credentials.

### 4. Start the Development Server

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.

## Deployment

The app can be deployed to any hosting service that supports static files, such as **Netlify** or **Vercel**.

## Future Enhancements

- Add authentication for the admin panel.
- Implement search and filter functionality for product listings.
- Add pagination for better performance when dealing with large inventories.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
