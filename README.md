# React Quote Generator

A simple Quote Generator built with [React](https://reactjs.org/). It fetches quotes from the [Quotable API](https://api.quotable.io/random) and displays them with a bit of styling and a Google font.

## Features

- **Fetches Random Quotes:** Every time you click a button, a new quote is fetched from the [Quotable API](https://api.quotable.io/random).
- **Simple, Clean Styling:** Utilizes basic CSS for a clean layout. Also demonstrates how to incorporate a [Google Font](https://fonts.google.com/) (e.g., *Roboto*, *Montserrat*, etc.).
- **React Components:** Written using functional components (or class components) for easy maintenance and scalability.

## Getting Started

These instructions will help you set up the project locally and get the development environment running.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://classic.yarnpkg.com/en/docs/install)

### Installation

1. **Clone the Repository** (or download the ZIP):
   ```bash
   git clone https://github.com/your-username/react-quote-generator.git
   ```

2. **Navigate to the Project Folder**:
   ```bash
   cd react-quote-generator
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

To run the app in development mode:

```bash
npm start
```
or
```bash
yarn start
```

This will open the app in your browser at [http://localhost:3000](http://localhost:3000). If the page doesn’t open automatically, you can manually visit that link to view the application.

### Building for Production

To create a production-ready build, run:

```bash
npm run build
```
or
```bash
yarn build
```

This will create an optimized bundle in the `build` folder, ready for deployment.

## Usage

1. **Open the App**: Navigate to [http://localhost:3000](http://localhost:3000) (in development) or your deployed app’s URL.
2. **Get a Quote**: Click the “New Quote” (or your chosen button text) button. 
3. **Enjoy**: Each click fetches a new random quote from the [Quotable API](https://api.quotable.io/random) and displays it on screen.

## Styling and Fonts

- **CSS:** Basic styling is included in the CSS files within the `src` folder.
- **Google Font:** Add this line (with your chosen font) inside the `<head>` of `public/index.html`:
  ```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
  ```
  Then use it in your CSS:
  ```css
  body {
    font-family: 'Roboto', sans-serif;
  }
  ```

## Project Structure

Here’s a brief overview of the key files:

```
react-quote-generator
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.js         
│   ├── home.js   
│   ├── index.js
│   ├── script.js     
│   └── styles.css    
└── README.md
```

## Screenshot

You can include an image (if you have one) to show what the project looks like:

![Quote Generator App Preview](https://via.placeholder.com/600x300.png?text=Quote+Generator+Screenshot)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Quotable API](https://api.quotable.io/random) for providing an excellent source of quotes.
- [React](https://reactjs.org/) for the awesome front-end framework.
- [Google Fonts](https://fonts.google.com/) for making web typography simple.

