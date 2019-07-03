# Proposed Changes

Take a look at the other branch, `revisions` to see a working, tested on my computer project.

I'll try to break what I did into categories

## General Structure

The way Heroku works, you should have the server at the root, and `ui/` a folder at root. That would look like this:

```text
newsite
  |_server.js
  |_.gitignore
  |_package.json
  |_ // other server stuff
  |_ui/
    |_ // all your ui stuff
```

Keeping this structure allows Heroku to have all it needs in the expected place. This can be done differently when not using their service, but it works well for them.

## UI

### .gitignore

#### Problem

When you did `create-react-app`, someone the `.gitignore` only blocked the `node_modules` for the UI. In the `Backend/` folder, you commited `node_modules` which is something that isnt necessary or recommended. `package-lock.json` will lock your dependencies in, so `node_modules/` stays local only.

#### Solution

Add a `.gitignore` at the root level and make sure `node_modules/` is on it.

## Backend

### API Keys

#### Problem

You committed your MongoURI to source code. Biggggg no-no, because anyone with that can access your db with that uri.

#### Solution

Take a look at the `config/` folder in the `revisions/` branch. Theres a good way to separate your keys for dev and prod. You will go on Heroku console to add the environment variable to your servers scope.

### Routes

#### Problem

This obviously isn't a problem, but the way your routes were written threw me off. I streamlined the process a little but, but exporting functions that call your route handlers ( which are also functions ).

#### Solution

This method passes `app` to these route handlers, which comes from `server.js` when you do `const app = express()`. In your `server.js` you call the routes with `routes(app)`. Pretty cool way of not having to require express everywhere which bloats your file size.

### File Paths

#### Problem

This block:

```js
app.use(express.static("/Backend/build"));
```

means to express that you want to ( from the perspective of `Backend/` because thats where `server.js` is, which this code lives in ), look inside of `Backend/Backend/build`. It has no idea where that is, because it doesn't exist.

#### Solution

Take a look again at the new branch again. I ask it to look in `ui/build`.
