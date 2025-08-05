# Healthy Habits 101

## Overview

Healthy Habits 101 is a wellness-focused web application built with Flask that provides users with comprehensive information and tips about maintaining healthy lifestyle habits. The application serves as an educational resource covering key areas of wellness including sleep, hydration, exercise, and stretching, presented through an intuitive single-page interface with smooth navigation and interactive features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Single-page application** with smooth scrolling navigation between sections
- **Bootstrap 5** framework with dark theme for responsive design and consistent UI components
- **Font Awesome icons** for visual enhancement and user experience
- **Vanilla JavaScript** for interactive features including dynamic daily tips functionality
- **Section-based layout** organizing content into dedicated areas (home, sleep, hydration, exercise, stretching, daily tips)

### Backend Architecture
- **Flask framework** chosen for its simplicity and lightweight nature, perfect for a content-focused application
- **Template-driven rendering** using Jinja2 for server-side HTML generation
- **Static file serving** for CSS, JavaScript, and potential future assets
- **Environment-based configuration** for session management and deployment flexibility
- **Debug mode enabled** for development with proper logging configuration

### Design Patterns
- **MVC pattern** with Flask handling routing (Controller), Jinja2 templates (View), and future data models
- **Modular structure** separating application logic (app.py) from entry point (main.py)
- **Static asset organization** with dedicated directories for CSS and JavaScript
- **Configuration management** using environment variables for sensitive data

### User Experience Features
- **Responsive design** ensuring compatibility across devices
- **Smooth scrolling navigation** between content sections
- **Interactive daily tips system** with categorized wellness advice
- **Card-based content layout** with hover effects for enhanced engagement
- **Fixed navigation** for easy access to all sections

## External Dependencies

### Frontend Libraries
- **Bootstrap 5** - UI framework for responsive design and components
- **Font Awesome 6.4.0** - Icon library for visual elements
- **Custom Bootstrap theme** - Replit-hosted dark theme variant

### Backend Dependencies
- **Flask** - Python web framework for application structure
- **Jinja2** - Template engine (included with Flask)

### Hosting Requirements
- **Python runtime environment** for Flask application
- **Static file serving capability** for CSS/JS assets
- **Environment variable support** for configuration management