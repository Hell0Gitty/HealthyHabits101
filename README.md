# Healthy Habits 101 🌟

A comprehensive wellness-focused static website that provides users with educational information and tips about maintaining healthy lifestyle habits. Built with pure HTML5, CSS, and JavaScript, this single-page application offers an intuitive interface covering key areas of wellness including sleep, hydration, exercise, and stretching.

![Healthy Habits 101](https://img.shields.io/badge/Status-Active-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-20.19.3-green) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple) ![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark Theme**: Modern dark theme with Bootstrap 5 framework
- **Interactive Navigation**: Smooth scrolling navigation between content sections
- **Daily Tips System**: Dynamic wellness tips categorized by health topics
- **Educational Content**: Comprehensive information on:
  - 🛏️ **Better Sleep** - Tips for quality rest and sleep hygiene
  - 💧 **Hydration** - Importance of staying hydrated and tracking water intake
  - 🏃 **Exercise** - Fitness routines and physical activity guidance
  - 🧘 **Stretching** - Flexibility exercises and stretching techniques
- **Interactive Elements**: Hover effects and smooth animations for enhanced user engagement

## 🚀 Quick Start

### Prerequisites

- Node.js (v20.19.3 or higher)
- Modern web browser

### Installation & Setup

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd healthy-habits-101
   ```

2. **Start the development server**
   ```bash
   node server.js
   ```

3. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

The application will be running locally and accessible at the above URL.

## 📁 Project Structure

```
healthy-habits-101/
├── index.html              # Main HTML file with all content sections
├── server.js               # Node.js static file server
├── static/
│   ├── css/
│   │   └── style.css       # Custom CSS styles and animations
│   └── js/
│       └── script.js       # Interactive JavaScript functionality
├── replit.md               # Project documentation and architecture
└── README.md               # This file
```

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with animations and responsive design
- **JavaScript (Vanilla)**: Interactive features and dynamic content
- **Bootstrap 5**: UI framework with dark theme
- **Font Awesome 6.4.0**: Icon library for visual elements

### Backend
- **Node.js**: Simple HTTP server for static file serving
- **No Database**: Pure client-side application with no server-side processing

### External Dependencies
- Bootstrap 5 (CDN) - UI framework
- Font Awesome 6.4.0 (CDN) - Icons
- Custom Bootstrap Dark Theme (Replit CDN)

## 🎨 Key Sections

### 1. Home/Hero Section
- Welcome message and overview
- Visual icons representing each wellness area
- Call-to-action for exploring content

### 2. Sleep Section
- Sleep hygiene tips
- Importance of quality rest
- Sleep schedule recommendations

### 3. Hydration Section
- Daily water intake guidelines
- Benefits of proper hydration
- Tips for staying hydrated

### 4. Exercise Section
- Physical activity recommendations
- Workout ideas and routines
- Benefits of regular exercise

### 5. Stretching Section
- Flexibility and mobility guidance
- Stretching routines
- Injury prevention tips

### 6. Daily Tips
- Interactive tip system
- Categorized wellness advice
- Rotating daily suggestions

## 🚀 Deployment

### Local Development
The project includes a simple Node.js server for local development:

```bash
node server.js
```

### Static Hosting
Since this is a static website, it can be deployed to any static hosting service:

- **Replit Deployments**: Deploy directly from Replit
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Static site hosting
- **Any web server**: Upload files to any web server

### Production Deployment
1. Upload all files to your web server
2. Ensure `index.html` is set as the default document
3. Configure your server to serve static files
4. No server-side configuration needed

## 🔧 Configuration

### Port Configuration
The server runs on port 5000 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=3000 node server.js
```

### Customization
- **Colors**: Modify the Bootstrap theme or add custom CSS in `static/css/style.css`
- **Content**: Update the HTML content in `index.html`
- **Functionality**: Extend JavaScript features in `static/js/script.js`

## 🧪 Development

### Adding New Sections
1. Add the new section HTML to `index.html`
2. Update the navigation menu with the new section
3. Add corresponding CSS styles in `static/css/style.css`
4. Implement any interactive features in `static/js/script.js`

### Customizing Styles
The project uses Bootstrap 5 with a custom dark theme. You can:
- Override Bootstrap variables
- Add custom CSS classes
- Modify the existing styles in `style.css`

### JavaScript Functionality
Current JavaScript features include:
- Smooth scrolling navigation
- Dynamic daily tips system
- Interactive hover effects
- Responsive navigation toggle

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a static website project. To contribute:

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly across different devices
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - feel free to use, modify, and distribute as needed.

## 🙋‍♂️ Support

For questions or issues:
- Check the project documentation in `replit.md`
- Review the code comments in the source files
- Ensure all dependencies are properly loaded

## 🔄 Recent Updates

- **August 6, 2025**: Fixed server configuration and resolved workflow issues
- **August 6, 2025**: All features confirmed working properly including navigation and daily tips

---

**Healthy Habits 101** - Building better habits, one step at a time! 💪