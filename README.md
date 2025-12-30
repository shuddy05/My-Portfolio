# Portfolio - Refactored with React Router

A clean, well-organized portfolio built with React and React Router DOM following best practices for maintainability and scalability.

## 🎯 Key Features

### ✅ React Router DOM Integration
- **Proper SPA routing** with browser history
- **NavLink components** with active state styling
- **Programmatic navigation** with Link components
- **Route-based code splitting** ready
- **Clean URLs** (e.g., `/about`, `/projects`)
- **Browser back/forward support**

### Component Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Components are designed to be used multiple times
- **Props-based**: Easy to customize through props
- **React Router**: Proper navigation instead of state-based routing

## 📁 Project Structure

```
portfolio-refactor/
├── App.jsx                    # Main app with Routes
├── main.jsx                   # Entry point with BrowserRouter
├── package.json               # Dependencies (includes react-router-dom)
│
├── components/                # Reusable UI components
│   ├── Navigation.jsx         # NavLink-based navigation
│   ├── Footer.jsx             # Link-based footer
│   └── ...                    # Other components
│
├── pages/                     # Route components
│   ├── HomePage.jsx           # / route
│   ├── AboutPage.jsx          # /about route
│   ├── ProjectsPage.jsx       # /projects route
│   ├── ServicesPage.jsx       # /services route
│   ├── BlogPage.jsx           # /blog route
│   └── ContactPage.jsx        # /contact route
│
├── hooks/                     # Custom React hooks
│   └── useTheme.js            # Dark/light theme management
│
├── constants/                 # Static data
│   └── data.js                # All content data
│
└── styles/                    # Stylesheets
    └── animations.css         # CSS animations
```

## 🚀 Getting Started

```bash
# Install dependencies (includes react-router-dom)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Routes

```
/ ..................... HomePage
/about ................ AboutPage
/projects ............. ProjectsPage
/services ............. ServicesPage
/blog ................. BlogPage
/contact .............. ContactPage
```

## ✨ Benefits of React Router

### Before (State-based routing) ❌
- Manual state management
- No browser history
- Can't share specific page URLs
- Back button doesn't work

### After (React Router) ✅
- Automatic history management
- Shareable URLs (e.g., `/projects`)
- Browser back/forward buttons work
- Better SEO potential
- Industry standard approach

## 📝 Adding New Routes

1. Create page in `pages/NewPage.jsx`
2. Add route in `App.jsx`:
```javascript
<Route path="/new" element={<NewPage darkMode={darkMode} />} />
```
3. Add link in `Navigation.jsx`

## 🚀 Deployment

Configure server to redirect all routes to `index.html`:

**Netlify** (_redirects):
```
/* /index.html 200
```

**Vercel** (vercel.json):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.21.0",
  "react-icons": "^5.0.1"
}
```

## 📄 License

MIT License
