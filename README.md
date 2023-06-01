# Technical Challenge - NV Gallery

Application engineered with **React**, **Redux** & **React-Router**

## Application status

If not checked it means what i'm looking to do next.

- [x] Create React App & Project structure
- [x] Handle navigation & routing
- [x] Manage global states with Redux
- [x] Be responsive (mobile first)
- [x] Write a technical documentation with JSDoc
- [x] Write unit tests
- [ ] Add animations on markers and tooltips
- [ ] Make a design system with Figma
- [ ] Integrate this design system alive with Storybook

## Structure

- Pin
    - public
    - src
        - components
        - pages
        - stores
        - utils
        - App.js
        - App.test
    - package.json
    
All the components are located in the **components** folder, the main vues (admin, index) are in the **pages** folder. In the **store** folder we can find redux configuration. And the last folder, **utils**, contains global stores logics.

## Time to realise
Here you can see the time a take to realise the tasks.

### Necessary for the test
- [x] Develop the main feature, with admin and front view (3 hours)
- [x] Write a technical documentation (30 minutes)

### Extras
- [x] Handle navigation with React-Router (15 minutes)
- [x] Manage global store with Redux (1 hour)
- [x] Optimise app flow (45 minutes)
- [x] Code small unit tests (15 minutes)

To realise this project, i took approximatively 3 hours, the rest is rewriting to make a better codebase and optimisation.

At the beginning of the project, I wanted to manage everything without React-Router and Redux because it is not necessary for a small project.\
But, having done the task, and compared to the project I like to ship, it wasn't elegant.\
So I took some time to add React-Router, Redux and rewrite my components logic accordingly.\

## Notes

I wanted to do more in UI/UX and try making designs in Figma, but I focused on the core functionality (image marker).\
There is still a lot to do in this project, some areas to develop (design, code logic, app flow, etc.)\
And I had a lot of fun making it, it was a great project idea.

## Documentation

The technical documentation is made using [JSDoc](https://jsdoc.app/) and can be generated.\
For a better experience you can use [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments).

## How To Start

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Other commands

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

## External documentations

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

[Redux Toolkit documentation](https://redux-toolkit.js.org/).

[React Router documentation](https://reactrouter.com/en/main).

[React Image Marker](https://github.com/galexandrade/react-image-marker)

