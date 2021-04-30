const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "vv-nx-tests"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
         name: "vv-nx-tests",
         filename: "remoteEntry.js",
         exposes: {
           // add components and modules you want to expose
        //     'AppComponent': './apps/vv-nx-tests/src/app/app.component.ts',
         },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },
          "@angular-architects/module-federation": { singleton: true, strictVersion: true },
          "@angular/animations": { singleton: true, strictVersion: true },
          "@angular/compiler": { singleton: true, strictVersion: true },
          "@angular/forms": { singleton: true, strictVersion: true },
          "@angular/platform-browser": { singleton: true, strictVersion: true },
          "@angular/platform-browser-dynamic": { singleton: true, strictVersion: true },
          "@nrwl/angular": { singleton: true, strictVersion: true },
          "patch-package": {singleton: true, strictVersion: true },
          "rxjs": { singleton: true, strictVersion: true },
          "tslib": { singleton: true, strictVersion: true },
          "zone.js": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }

    }),
    sharedMappings.getPlugin(),
  ],
};
