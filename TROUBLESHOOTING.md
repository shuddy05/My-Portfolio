# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### Issue 1: "Command not found: npm"
**Solution:** Install Node.js first
```bash
# Download from: https://nodejs.org/
# Then verify:
node --version
npm --version
```

### Issue 2: "Cannot find module" errors
**Solution:** Install dependencies
```bash
npm install
```

### Issue 3: Tailwind styles not working
**Solution:** Make sure all config files exist:
- ✅ `tailwind.config.js`
- ✅ `postcss.config.js`
- ✅ `index.css` (with @tailwind directives)

### Issue 4: "Failed to resolve import"
**Solution:** Check file extensions and paths
- All React components should be `.jsx` not `.js`
- Import paths should match folder structure

### Issue 5: Icons not showing
**Solution:** Install react-icons
```bash
npm install react-icons
```

### Issue 6: Blank white page
**Solution:** Check browser console (F12) for errors
- Look for missing files
- Check import paths
- Verify all components export correctly

## 🚀 Step-by-Step Setup (From Scratch)

### Step 1: Verify Node.js Installation
```bash
node --version  # Should be v16 or higher
npm --version   # Should be v8 or higher
```

If not installed, download from https://nodejs.org/

### Step 2: Navigate to Project Folder
```bash
cd path/to/portfolio-refactor
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- React Icons
- Other dependencies

### Step 4: Start Development Server
```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 5: Open in Browser
Navigate to `http://localhost:5173`

## 🐛 Debugging Tips

### Check if files are in correct location:
```
portfolio-refactor/
├── index.html          ← Entry point
├── main.jsx            ← React entry
├── App.jsx             ← Main component
├── index.css           ← Styles
├── vite.config.js      ← Vite config
├── tailwind.config.js  ← Tailwind config
├── postcss.config.js   ← PostCSS config
├── package.json        ← Dependencies
├── components/         ← Components folder
├── pages/              ← Pages folder
├── hooks/              ← Hooks folder
├── constants/          ← Data folder
└── styles/             ← CSS folder
```

### Check package.json scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Check imports in App.jsx:
```javascript
import { useNavigation } from "./hooks/useNavigation";
import { useTheme } from "./hooks/useTheme";
import Navigation from "./components/Navigation";
// ... etc
```

## 🔍 Common Error Messages

### Error: "Cannot find module './hooks/useNavigation'"
**Fix:** Check if file exists at `hooks/useNavigation.js`

### Error: "React is not defined"
**Fix:** Add import at top of file:
```javascript
import React from "react";
```

### Error: "process is not defined"
**Fix:** Usually a Vite issue. Make sure you have `vite.config.js`

### Error: Tailwind classes not applying
**Fix:** 
1. Check `index.css` has `@tailwind` directives
2. Check `tailwind.config.js` content paths
3. Restart dev server: `Ctrl+C` then `npm run dev`

## 📝 Quick Test

Create a simple test file to verify setup:

**test.jsx:**
```javascript
import React from 'react';

const Test = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1>If you see this styled, Tailwind works!</h1>
    </div>
  );
};

export default Test;
```

Import in `App.jsx` temporarily to test.

## 🆘 Still Having Issues?

### 1. Clear npm cache
```bash
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

### 2. Check Node version compatibility
```bash
node --version
```
Should be v16 or higher

### 3. Try different port
```bash
npm run dev -- --port 3000
```

### 4. Check browser console
Press F12 in browser and look for errors in Console tab

## 📞 What to Include When Asking for Help

1. **Error message** (exact text)
2. **Node version** (`node --version`)
3. **npm version** (`npm --version`)
4. **Operating system** (Windows/Mac/Linux)
5. **What command failed** (npm install? npm run dev?)
6. **Browser console errors** (if page loads but doesn't work)

## ✅ Success Checklist

- [ ] Node.js installed (v16+)
- [ ] npm installed (v8+)
- [ ] Extracted zip file
- [ ] Navigated to correct folder
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` successfully
- [ ] Browser opened to localhost:5173
- [ ] Page loads without errors
- [ ] Tailwind styles visible
- [ ] Icons visible
- [ ] Navigation works
- [ ] Theme toggle works

---

If you've checked everything and still have issues, please share:
1. The exact error message
2. Which step is failing
3. Your Node.js version
