# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Environment variables
1. Locate the .env File: In the root directory of your React application, find the file named .env. If the file does not exist, create one.
2. Add the API Key: Open the .env file and add the following line:

### `REACT_APP_API_KEY=your_api_key_here`

3. Replace your_api_key_here with your personal API key provided by The New York Times APIs.
4. Save Changes: Save and close the .env file after adding the variable.


## Walkthrough of the Project
This document outlines the process of working with The New York Times API and developing a React application. The following sections detail each step, providing insights into the decision-making and development processes.

## Steps Taken
1. Acquiring API Keys: The initial step was to obtain the API keys to begin exploring the data and API endpoints.

2. API Endpoint Exploration: Each endpoint of the API was studied to understand the available data and capabilities:
- Bestsellers Listing: This endpoint allows filtering by book genre.
- Book Reviews: Fetch reviews of a book using filters such as author, title, or ISBN (recommended).
- Bestsellers Near a Specific Date: Retrieve a list of bestsellers close to a particular date.
- List of Genres: Obtain a list of possible book genres.
- All Books from Bestsellers Near a Date: Retrieve all books from bestsellers around a specific date.
- Bestsellers History: Fetch historical bestsellers data.

3. API Request Limitations: Be aware of the 500 requests per day limit and 5 requests per minute, avoiding requests with less than 12-second intervals.

4. API Attribution: Always display either the API logo or the phrase "Data provided by The New York Times."

5. Research and Planning: Before developing the application, research was conducted to address the following questions:
- Who is the target audience?
- Will users access the site from a computer or mobile device?
- What is the age range of the target audience?
- What expectations do users have when visiting the site?
- What business model will generate revenue for the application?
- What sentiment should the application convey to guide color choices?
- How do competitors present this information?

6. Competitor Research: An analysis of how competitors display book information:
- New York Times: Lists bestsellers in order with options to filter by genre. Displays book title, author, weeks on the bestseller list, summary, and purchase link.
- Amazon: Displays books by genre with book cover images, titles, authors, ratings, and prices.
- Barnes & Noble: Shows book cover images, titles, authors, and ratings. Lists books by genre.

7. General Observations:
- Sites primarily show recent bestsellers.
- No search field for specific bestsellers.
- All sites provide genre filtering.
- Neutral color schemes with understated design choices.
- Use of serif fonts for a more serious appearance.

8. Feature Selection: Based on the research, the application should include:
- Book genre selection.
- Display of recent bestsellers.
- Display of book title, author, and cover image.
- Branding and Design:

9. Created a logo for a more professional appearance.
10. Chose a purple color palette to set the application apart from competitors and convey a less serious tone.
11. Packages and Libraries: Selected specific packages to streamline the development process:
- Material UI: A comprehensive component library that simplifies development and configuration.
- Axios: A library for facilitating HTTP requests.

This walkthrough provides a clear overview of the project's steps and decisions, which may be useful for future reference and further development.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
