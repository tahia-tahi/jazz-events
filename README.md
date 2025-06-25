
## ✨ Key Features

- 🎨 Modern web app built with **React 19** and **Vite**
- 📱 **Fully responsive** design – works perfectly on all devices
- 🚀 **Deployed via Netlify** for fast and secure hosting
- 📅 **Event details** – users can explore upcoming jazz events
- 🪑 **Seat booking system** – book your favorite events with ease
- 📚 **Blog section** – stay updated with articles and news

---

## 🧰 Technologies Used

| Tool / Library          | Purpose                          |
|-------------------------|----------------------------------|
| **React 19**            | UI development                   |
| **Vite**                | Super fast bundler               |
| **Tailwind CSS 4**      | Utility-first styling framework  |
| **Firebase**            | Authentication & backend support |
| **React Router 7**      | Client-side routing              |
| **React Toastify 11**   | Notifications                    |
| **React Helmet Async**  | SEO optimization                 |
| **Swiper.js**           | Smooth image sliders             |
| **Date-fns**            | Lightweight date manipulation    |
| **React CountUp**       | Animated number counters         |
| **React Icons**         | Stylish icons library            |

---

## 🌐 Live Site

🔗 [Live Website](https://jazz-events.web.app/)  
🔗 [GitHub Repository](https://github.com/tahia-tahi/jazz-events)

---

## 💻 How to Run This Project Locally

Follow the steps below to set up and run the project on your local machine.

---

### 🧾 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

### 🚀 Installation Steps

1. **Clone the repository:**

```bash
git clone https://github.com/tahia-tahi/jazz-events.git
```

2. **Navigate to the project folder:**

```bash
cd jazz-events
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the project:**

```bash
npm run dev
```

This will start the Vite dev server and the app will run on:  
👉 `http://localhost:5173`

---

## 🛠 Environment Variables

If your project uses Firebase, make sure to create a `.env` file in the root directory and add your Firebase config like this:

```
VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_app_id
```

> 🔐 Keep this file **private** and never upload it to GitHub.

---

✅ Now you’re all set! You can explore the app at `http://localhost:5173` and make changes as needed.


## 📌 Note

This project uses [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) for fast refresh using **Babel**.  
For production-grade applications, using TypeScript with ESLint is highly recommended. You can explore the [official TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more details.
