
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app build folder from Server.js.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Internet of Things App

   The Internet of Things is the process of putting a computer processor and a wi-fi connection into everyday items so that we can use computer programing to control those devices. This allows us to create solutions where the devices communicate and work together. 
   
   Buzzwords were gathered from 100 tweets with #IoT and filtered for stop words. These buzzwords were then visualized using Semiotic.js, which is a data visualization framework for React.js. The App is built with Node.js, a Express.js server and a React.js frontend designed with Material UI. All data were pulled from the Twitter API.

  # Data Visualization used
      1. [https://semiotic.nteract.io/guides/scatterplot](Scatter Plot)
          User can hover over plot points to display the word represented and its occurences on a Tooltip. Initial versions had the word 
          displaying on the center of the circle but there was issues with responsiveness. This visualization is partly for aesthetics   
          and a second visualization is used to display data more evidently
      2. [https://semiotic.nteract.io/guides/pie-chart](Nightingale Pie Chart)
          Chart displays Buzzwords and number of occurences. The top 20 buzzwords from the data set is sorted in order of most 
          occurences to least. Hovering over the bar displays a tooltip that displays both the Buzzword and the number of occurences
