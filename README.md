# KonfHub Frontend Evaluation Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) directly into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

## API Usage

The application fetches event data from the provided API URL:

https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task

### Example API Call

```js
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

The fetched data is used to dynamically render the UI components.
```

## Customization
Modify the UI components in the components/ directory.
Customize the styles in the styles/ directory.
Update the API usage to fit your design needs.


