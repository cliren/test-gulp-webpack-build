# test-gulp-webpack-build


### Setup

```
$ npm install
$ gulp
```
### Error Details

Error seems to occur when less file is included in main.js.

  - builds fine when less file is not required
  - builds fine when new webpack.optimize.UglifyJsPlugin() is removed from webpack config



### Actual Error

```
events.js:141
      throw er; // Unhandled 'error' event
            ^
Error: Webpack cannot compile config
    at DestroyableTransform.<anonymous> (/Users/skatikaneni/github/test-gulp-webpack-build/node_modules/gulp-webpack-build/index.js:253:23)
    at DestroyableTransform.g (events.js:257:16)
    at emitNone (events.js:72:20)
    at DestroyableTransform.emit (events.js:163:7)
    at /Users/skatikaneni/github/test-gulp-webpack-build/node_modules/gulp-webpack-build/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js:965:16
    at process._tickCallback (node.js:337:11)


```


