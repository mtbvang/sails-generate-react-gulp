sails-generate-reactjs-gulp
===========================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Karnith/sails-generate-reactjs-gulp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Reactjs app generator for sails. It adds the basic client side react app structure in assets.

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

Then run 

```sh
$ npm install -g sails-generate-reactjs-gulp
sails generate reactjs
```

