<h1 align="center">🔗 JSON URL Shortener</h1>

<p align="center">
  A simple and clean URL shortening service using <strong>Express.js</strong>, <strong>EJS</strong>, and <strong>CSS</strong>, storing data in a local JSON file.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="status" />
  <img src="https://img.shields.io/badge/Backend-Express.js-blue" alt="backend" />
  <img src="https://img.shields.io/badge/View-EJS-yellow" alt="view-engine" />
  <img src="https://img.shields.io/badge/Storage-JSON-lightgrey" alt="storage" />
</p>

---

## 📌 Table of Contents

- [📂 Folder Structure](#-folder-structure)
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [💻 Usage](#-usage)
- [📸 Screenshots](#-screenshots)
- [📃 License](#-license)
- [👨‍💻 Author](#-author)

---

## 📂 Folder Structure

```bash
project-root/
│
├── data/
│   └── urls.json           # Stores all shortened URLs
│
├── public/
│   └── styles.css          # Styling file
│
├── views/
│   ├── index.ejs           # Main input page
│   └── result.ejs          # Output/result page
│
├── app.js                  # Express server logic
└── package.json            # Project metadata and dependencies
```
🚀 Features
- Convert long URLs into short codes
- Redirect users via short URLs
- Store & manage URL data in a JSON file
- Minimalistic EJS-based frontend
- Local-first project, great for learning backend basics

🛠️ Tech Stack
| Technology | Purpose            |
| ---------- | ------------------ |
| Express.js | Server-side logic  |
| EJS        | Templating engine  |
| CSS        | Styling            |
| JSON File  | Local data storage |
| Node.js    | Backend runtime    |

📦 Installation
# Clone the repository
```
git clone https://github.com/YourUsername/your-repo-name.git
```
# Navigate into the project
```
cd your-repo-name
```
# Install dependencies
```
npm install
```
# Start the server
```
node app.js
```
# Open in browser
```
http://localhost:3000
```
💻 Usage
1. Enter the long URL
2. Get a short version
3. Access the long URL again via the short code

📃 License
This project is licensed under the MIT License.
Feel free to use and modify it for personal or educational purposes.

👨‍💻 Author
Faizan — MERN Stack Developer
📍 Pakistan
💼 Building projects to learn and grow.
🌐 [Portfolio Coming Soon]
📬 faiziwebdev1@gmail.com

