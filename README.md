# 🖥️ GitHub Project Showcase

🌐 [Live Demo](https://santoshdannana.github.io/Github-projects-showcase/)

GitHub Project Showcase is a visually rich, **macOS-inspired web app** that allows users to explore and compare multiple GitHub profiles side-by-side. It fetches real-time data via the GitHub API, enabling easy profile evaluation based on repositories, followers, and other developer stats.

---

## 🚀 Features

- 🧑‍💻 Compare up to **4 GitHub profiles** simultaneously
- 🪟 Custom **macOS-style UI** with realistic app windows
- 🌗 Dark/Light **theme toggle** in macOS-style menu bar
- 📊 Displays public repos, followers, following, gists
- 🧭 Shows location, company, website, join date
- ⭐ Scrollable repo list with stars, forks, and language
- 🐙 Octocat empty-state & graceful loading UX

---

## 🧪 Technologies Used

- **Frontend:** React.js
- **Styling:** Pure CSS with theme variables
- **API:** GitHub REST API v3
- **Hosting:** GitHub Pages

---

## 📁 Project Structure

```
src/
  └── components/
       └── RepoList.js
       └── SearchBar.js
       └── UserCard.js
       └── UserCard.CSS
       └── RepoList.CSS
       └── SearchBar.CSS
  └── App.js
  └── App.css
  └── index.js
public/
  └── index.html
```

---

## 📦 Installation

```bash
git clone https://github.com/santoshdannana/Github-projects-showcase.git
cd Github-projects-showcase
npm install
npm start
```

---

## 🌐 Deployment

- Deployed on **GitHub Pages**
- To redeploy:

```bash
npm run build
npm run deploy
```

---

## 👥 Who It's For

- Developers analyzing or showcasing GitHub profiles
- Hiring teams comparing candidates
- Students exploring contributors
- Designers seeking GitHub UI inspiration

---

## 💎 What Makes It Unique

- 🎨 Fully custom UI mimicking macOS app window
- 🔄 Real-time GitHub data
- ⚠️ Fallbacks for missing data and user errors
- 🌙 Clean theme toggle with a native macOS look

---

## 🔮 Future Features

- 🔁 Animated transitions between profiles
- 🧱 GitHub contribution graph integration
- 🧾 Repo sorting/filtering
- 📤 Export comparison as image or PDF
- 🔗 Shareable URL per comparison session

---

## 🎨 Personal Note

This project was built for fun to replicate the **macOS UI experience** in a real-world React app. It became a polished developer tool while sharpening frontend skills and API handling. Ideal for portfolios, hiring dashboards, and profile comparison tools.

---

## 📬 Contact

Made by [@SantoshDannana](https://github.com/santoshdannana)  
Feel free to open issues or feature suggestions!
