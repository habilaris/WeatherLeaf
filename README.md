# WeatherLeaf - React Weather App
WeatherLeaf is a simple and elegant weather forecasting web application built with React. Get real-time weather updates by entering the city of your choice. The minimalistic design and intuitive interface make it easy to use. Stay informed about the weather conditions with WeatherLeaf.

## Features

- Display current weather information
- Responsive design for various screen sizes

## Technologies Used

- React
- HTML
- CSS

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js installed
- API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/weatherleaf.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd weatherleaf
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Create a .env file:**

    Create a `.env` file in the root directory and add your OpenWeatherMap API key:

    ```env
    REACT_APP_API_KEY=your-api-key-here
    ```

5. **Start the Development Server:**

    ```bash
    npm start
    ```

6. **View the App:**

    Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Configuration

- Open `src/components/Weather.js` and locate the `API_KEY` variable. Replace `'YOUR_API_KEY'` with your actual OpenWeatherMap API key.

    ```javascript
    const API_KEY = 'YOUR_API_KEY';
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
