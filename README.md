## Requirements

NodeJS 8+ is required to run this service.

## Starting the Dev server

1. Run `npm install`
2. Start the dev server using `npm start`
3. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `npm start` - Start the dev server
- `npm clean` - Delete the dist folder
- `npm run production` - Create a production ready build in `dist` folder
- `npm run lint` - Execute an ESLint check
- `npm run lint:fix` - Try to automatically fix Lint errors
- `npm test` - Checks if your code is ok before creating a commit
- `npm run test:unit` - Run your unit tests
- `npm run storybooks` - Allow you to see the Components working on an isolated environment

## Directory structure

### Overview

```
├── assets
│   │
│   └── images
│       ├── background.png
│       └── ...
│
│
│
├── src
│   ├── index.html
│   ├── index.js
│   │── routes.js
│   │
│   │── components/
│   │   │
│   │   ├── LoginBox.js
│   │   └── ...
│   │
│   │
│   ├── pages
│   │   │
│   │   ├── IndexPage.js
│   │   ├── LoginPage.js
│   │   ├── SignUpPage.js
│   │   └── ...
│   │
│   └── services/
│       │
│       ├── navigation.js
│       ├── utilities.js
│       └── ...
│
│
│
├── storybooks
│   │
│   ├── index.js
│   ├── Component.storybook.js
│   └── ...
│
│
│
└── tests
    │
    ├── components
    │   ├── Component.test.js
    │   └── ...
    │
    └── pages
        ├── Page.test.js
        └── ...
```

### assets/

This is where you place your images, fonts and other media files.

### storybooks/

This is where you place your storybooks. <br>
A storybook is like testing your component on an isolated environment.

Run `npm run storybooks` to see it in action.

### tests/

This is where you place your Unit Tests.

Run `npm run test:unit` to see it in action. <br>
For a more detailed report of your tests coverage, run `npm run report:coverage`.
