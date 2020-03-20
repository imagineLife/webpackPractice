## Plugins
- these add additional functionality to _Compilations (optimized bundled modules)_. Interacts with the Webpack CompilerAPI.
- Objects with an apply property
- allows the developer (_me_) to 'hook' into the webpack lifecycle
- Webpack comes with BuiltIn Plugins! (_see BellOnBundlerErrorPlugin_)

### How To use
- introduce the ```plugins: []``` into wp config
- apply the plugin with ``` new **pluginName**```
- ... here with ```new BellOnBundlerErrorPlugin()```
- 80% of wp is plugins