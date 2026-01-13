# ICMTOGI 2026 - Conference Website

![Conference Logo](./logo.jpg)

A professional, bilingual (Arabic/English) academic conference website for **The Fourth International Conference on Modern Technologies in Oil and Gas Industries (ICMTOGI 2026)**, organized by the Petroleum Engineering Department at the University of Technology, Iraq.

## 🌟 Features

- **Bilingual Support**: Full Arabic (RTL) and English (LTR) language support with seamless switching
- **Responsive Design**: Mobile-first, fully responsive design built with Tailwind CSS
- **Modern UI/UX**: Clean, academic, and professional interface
- **Single Page Application**: Built with React and React Router for smooth navigation
- **9 Key Pages**: 
  - Home
  - About
  - Committees
  - Call for Papers
  - Important Dates
  - Program
  - Keynote Speakers
  - Registration
  - Contact

## 🚀 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3.5
- **Routing**: React Router DOM 6.20.0
- **Language**: JavaScript (ES6+)

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chemical_conf.git
   cd chemical_conf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

## 👀 Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
conference-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── context/         # React context for language management
│   ├── i18n/           # Internationalization files
│   │   ├── ar.js       # Arabic translations
│   │   └── en.js       # English translations
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Committees.jsx
│   │   ├── CallForPapers.jsx
│   │   ├── ImportantDates.jsx
│   │   ├── Program.jsx
│   │   ├── Speakers.jsx
│   │   ├── Registration.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Updating Conference Information

All conference content is stored in the internationalization files:
- English content: `src/i18n/en.js`
- Arabic content: `src/i18n/ar.js`

Simply edit these files to update conference details, dates, speakers, etc.

### Styling

The project uses Tailwind CSS for styling. To customize:
- Modify `tailwind.config.js` for theme customization
- Edit `src/index.css` for global styles

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.js` with your repository name:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to GitHub Pages

### Other Hosting Options

The built files in the `dist` directory can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting
- etc.

## 📧 Conference Details

- **Conference**: The Fourth International Conference on Modern Technologies in Oil and Gas Industries
- **Date**: March 15-17, 2026
- **Location**: University of Technology, Baghdad, Iraq
- **Theme**: Innovation and Sustainability in Oil & Gas Sector
- **Organizer**: Petroleum Engineering Department, University of Technology - Iraq



## 📄 License

This project is private and proprietary to the University of Technology - Iraq.


**Organized by**: Petroleum Engineering Department, University of Technology - Iraq

**Website Created**: January 2026


## 👥 Authors

- **Abubaker S. Issa**


## 📞 Support

For support, 
email abubakr.s.issa@uotechnology.edu 
Phone 009647806285713


Made with ❤️ by Abubaker S. Issa
