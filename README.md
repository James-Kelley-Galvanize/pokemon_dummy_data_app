# Pokemon Dummy Data App
![professor oak](./prof_oak_google.jpeg)

# About This App
This app uses dummy data (pokeData.js) to generate 'cards' in a 'pokemon list' to demonstrate interactivity and concepts within React.

**Things to note:**
  - destructuring can make your React code much easier to read
  - a class component's render method is a [pure function](https://en.wikipedia.org/wiki/Pure_function)
  - bind class component methods to the class in its constructor
  - pass props every step of the way down to where they're needed
    - you can't skip a step in the tree
  - architecturally, the class component lives at the top of the tree and handles all stateful logic
    - it passes stateful values down as props to provide them to child components that need those values
    - it passes methods down as props to child components
  - selected pokemon have different styles applied with a different class name provided to them than non-selected pokemon

  ## App Structure:
  App
   - PokemonList
    - PokemonCard
    - PokemonCard
    - PokemonCard
    ...etc

## Available Scripts (from Create React App)

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
