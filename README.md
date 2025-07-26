# 🍽️ Recipe Book App

A responsive recipe search application built with React and Vite. Users can search for dishes, view detailed ingredients & instructions.

## 🔗 Deployed Link
[https://recipe-book-app-two.vercel.app/]

## 🔧 Tech Stack
- React (Vite)
- CSS (Responsive Design)
- Spoonacular API

## 📁 Folder Structure
<pre>
recipe-book-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/             
│   ├── components/
│   │   ├── Mainpage.jsx
│   │   ├── MealCards.jsx
│   │   ├── MealInfo.jsx
│   │   └── Loading.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css           # Global styles
├── .env                    # API key (not committed)
├── .gitignore
├── .eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
</pre>

## 📄 Environment Variables
Create a `.env` file in the root directory and add your API key like this:

```env`
VITE_API_KEY=your_spoonacular_api_key
```env`

## 🛠️ Run Locally

Follow these steps to run the project on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/raj-7h/recipe-book-app.git
   cd recipe-book-app
2. **Install dependencies**
   ```bash
   npm install
3. **Configure Environment Variables**

   Create a `.env` file in the root directory of the project and add your Spoonacular API key to it. This key is used to fetch recipes from the Spoonacular API.

   **.env**
   ```env
   VITE_API_KEY=your_spoonacular_api_key_here
4. **Run the development server**
     ```bash
     npm run dev

## 👤 Author

**Raj Jha**  
Front-End Developer | React Enthusiast

- GitHub: [@raj-7h](https://github.com/raj-7h)
- LinkedIn: [Raj Jha](https://www.linkedin.com/in/raj-jha7h/)
- Portfolio: *Coming soon*
