
# Photo Booth Finder

<img src="Icon.png" width="auto" height="240px">

A location-based web application to help users find nearby photo booths in Taiwan. The app uses geolocation to calculate distances and provides a searchable list of photo booth locations with their operating hours and addresses.

## 🌐 Live Demo

Launch the web app: <a href="http://binghuan.github.io/photobooth/">http://binghuan.github.io/photobooth/</a>

Blog post: <a href="http://studiobinghuan.blogspot.tw/2015/01/photo-booth-finder.html?view=flipcard">Read more about this project</a>

## 🚀 Features

- **Geolocation-based search**: Automatically finds your current location and calculates distances to nearby photo booths
- **Real-time filtering**: Search functionality to filter photo booth locations by name or address
- **Distance calculation**: Shows distance from your current location to each photo booth in meters
- **Operating hours**: Displays opening and closing times for each location
- **Interactive maps**: Click on addresses to open Google Maps for navigation
- **Mobile-responsive**: Optimized for mobile devices with touch-friendly interface
- **Material Design**: Built with Angular Material for a modern, clean UI

## 🛠️ Technology Stack

- **Frontend Framework**: AngularJS (v1.x)
- **UI Framework**: Angular Material Design
- **Styling**: CSS3 with Material Design components
- **Geolocation**: HTML5 Geolocation API
- **Maps Integration**: Google Maps
- **Dependencies**:
  - Angular Animate
  - Angular Aria
  - HammerJS (for touch gestures)

## 📱 Mobile Features

- Apple mobile web app capable
- Custom app icons for iOS devices
- Responsive design for various screen sizes
- Touch-friendly interface with Material Design components

## 🗺️ Data

The application includes a comprehensive database of photo booth locations across Taiwan, including:
- Location names and descriptions
- Complete addresses
- Operating hours
- GPS coordinates (latitude and longitude)
- Special notes and accessibility information

## 🔧 Project Structure

```
photobooth/
├── index.html                 # Main HTML file
├── components/               # Third-party libraries
│   ├── angular/             # AngularJS framework
│   ├── angular-material/    # Material Design components
│   ├── angular-animate/     # Animation support
│   ├── angular-aria/        # Accessibility features
│   └── hammerjs/           # Touch gesture library
├── javascripts/
│   ├── selfiestatiion.js           # Main application logic
│   └── selfiestatiionJsonData.js   # Photo booth location data
├── stylesheets/
│   └── style.css           # Custom styles
├── icons/                  # App icons for various devices
└── images/                # Application images
```

## 🚀 Setup and Installation

### Prerequisites
- Node.js and npm (for development)
- Web server (for serving static files)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/binghuan/photobooth.git
   cd photobooth
   ```

2. **Install dependencies** (if using build tools)
   ```bash
   npm install
   ```

3. **Build the project** (if webpack is configured)
   ```bash
   webpack
   ```

4. **Serve the application**
   
   Option 1: Using a simple HTTP server
   ```bash
   python -m http.server 8000
   # or
   python3 -m http.server 8000
   ```
   
   Option 2: Using Node.js http-server
   ```bash
   npx http-server
   ```
   
   Option 3: Using VS Code Live Server extension

5. **Open in browser**
   Navigate to `http://localhost:8000` (or the port shown by your server)

### Deployment

The app is designed to be deployed as a static website. It's currently hosted on GitHub Pages at the `gh-pages` branch.

## 🌍 Browser Compatibility

- Modern browsers with HTML5 geolocation support
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## 📍 How It Works

1. **Location Detection**: The app requests permission to access your location using HTML5 geolocation API
2. **Distance Calculation**: Calculates the distance from your location to each photo booth using the Haversine formula
3. **Sorting & Display**: Photo booths are sorted by distance and displayed in a Material Design list
4. **Search & Filter**: Users can search for specific locations using the search box
5. **Navigation**: Clicking on an address opens Google Maps for turn-by-turn navigation

## 🎨 Design Features

- Clean, minimalist Material Design interface
- Loading animations while fetching geolocation
- Responsive layout that works on all device sizes
- Touch-friendly buttons and interactions
- Color-coded distance indicators

## 👨‍💻 Author

**Bing-Huan Lin**
- Blog: [Studio Bing-Huan](http://studiobinghuan.blogspot.tw/)
- GitHub: [@binghuan](https://github.com/binghuan)

---

*Built with ❤️ using AngularJS and Material Design*
