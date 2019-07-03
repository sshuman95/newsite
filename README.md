# Sidney's Portfolio

## Getting Started

To install all the necessary dependencies, run `npm run getting-started`.

This will execute the script in `package.json` called `getting-started`.

## Running Locally

To run locally, execute:

- `npm run dev-ui` to only work on the UI, with the server inactive.
  - This will start the local server on `http://localhost:3000`
- `npm run full-dev` to work on the server and the UI.
  - This will start the server running on the specified port, as well as start the development server on `http://localhost:3000`
  - This is done in the same process, so no need to start them independently

## Dependencies Used

Both `nodemon` and `concurrently` are being used.

### Nodemon

Nodemon is a cool package that watches changes to your files. When a change is detected, it will automatically restart your server.

### Concurrently

This is a package that executes parallel processes, such as running the server and the ui dev server at the same time.

## Deployment

When pushed to Heroku's repository, it will execute `npm run start` on the **ROOT LEVEL** `package.json`.

Heroku has a special script that it looks for called `heroku-postbuild`. This script will execute after the initial configuration, and is what will build the UI to be served by express.
