# News App

## Overview
The News App is a React Native application that provides users with the latest trending news and allows them to search for specific news articles. Users can also view detailed news articles with an elegant UI and navigate between different sections seamlessly.

## Features
- Fetch and display trending news using the NewsAPI.
- Search for news articles based on keywords.
- Navigate to a dedicated search results screen.
- View article details on a separate screen with an elegant UI.
- Open original articles on the web with a dedicated website icon.
- Pull-to-refresh functionality for trending news.
- Responsive and user-friendly UI with `react-native-paper` components.

## Technologies Used
- **React Native** - Framework for building mobile applications.
- **React Navigation** - For screen navigation.
- **React Native Paper** - For UI components.
- **Axios** - For API requests.
- **NewsAPI** - Fetches trending and search-based news articles.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/news-app.git
   cd news-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the app:
   ```sh
   npx react-native run-android   # For Android
   npx react-native run-ios       # For iOS (Mac Only)
   ```

## API Configuration
This app uses the **NewsAPI** for fetching news. Obtain an API key from [NewsAPI](https://newsapi.org/) and update the `API_KEY` in the `App.js` file:

```js
const API_KEY = 'your_newsapi_key_here';
```



## Usage
- Launch the app to see trending news.
- Use the search bar to find specific news articles.
- Click on an article to read its details.
- Click the website icon to open the original source.

## License
This project is licensed under the MIT License.



