sails-generate-reactjs-gulp
===========================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Karnith/sails-generate-reactjs-gulp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Reactjs app generator for sails 0.11.0. It adds the basic client side react app structure in assets. It's designed to be run after running Mathew Marino's sails gulp generators. Details are in the Install section.

React version is at 0.13.3 and the https://github.com/mixxen/sails-react-example todo list and comments sample applications have been ported over.

##Install
This should be used with Matthew Marino's (https://github.com/Karnith/sails-generate-new-gulp) sails gulp suit of generators. Follow the instructions from the sails-generate-new-gulp project and then modify the .sailsrc file in your app folder to be:

```sh
{
    "generators": {
        "modules": {
            "bower": "sails-generate-bower-gulp",
            "reactjs": "sails-generate-reactjs-gulp",
        }
    }
}
```

Then run the following having gone through all the sails-generate-new-gulp instructions.

```sh
npm install -g sails-generate-reactjs-gulp
sails generate reactjs <app name>
sails generate bower
npm install
```

## Running

Start the application with a sails lift from the application root directory.

```sh
sails lift
```

Then navigate to http://localhost:1337