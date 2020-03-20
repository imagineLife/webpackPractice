# Webpack && package.jon
... lots of dependencies...
```
"devDependencies": {
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.1.0",
    "file-loader": "^4.1.0",
    "fork-ts-checker-webpack-plugin": "^1.5.0",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "http-server": "^0.11.1",
    "mini-css-extract-plugin": "^0.8.0",
    "postcss-loader": "^3.0.0",
    "style-loader": "^0.23.1",
    "ts-loader": "^6.0.4",
    "typescript": "^3.5.3",
    "url-loader": "^2.1.0",
    "webpack": "^4.39.1",
    "webpack-bundle-analyzer": "^3.4.1",
    "webpack-cli": "^3.3.6",
    "webpack-node-externals": "^1.7.2",
    "workbox-webpack-plugin": "^4.3.1"
  },
  "dependencies": {
    "d3": "^5.9.7"
  }
  ```

## NPM installs a bin file
- inside node_mods
- where all executables live for each mod
- npm allows running 'scripts'

## Scripts
- ``` webpack: webpack ```
- any named script, here named "webpack"
- binary executables from node_mode is in scope now!
- this runs webpack
- no config needed (in 4+)

### Composing scripts for environments
```
dev: npm run webpack -- --mode development
prod: npm run webpack -- --mode production
```
- npm allows composing scripts
- here, the dev is a composition on-top-of the ```webpack``` command
- here, the prod is a composition on-top-of the ```webpack``` command