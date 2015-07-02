/**
 * 
 * Usage: refer to https://github.com/irlnathan/s-generators-docs/blob/master/generator-overview.md
 * 
 * @type {Object}
 */

var path = require('path'), merge = require('./merge-json'), insertAfter = require('./insert-after'), update = require('./update');

var templates = require('path').resolve(__dirname, '../templates');

module.exports = {

	templatesDirectory : templates,
	before : require('./before'),
	after : require('./after'),
	targets : {
		'./.bowerrc' : {
			copy : '.bowerrc'
		},
		'./.travis.yml' : {
			template : '.travis.yml.ejs'
		},
		'./.eslintrc' : {
			template : '.eslintrc.ejs'
		},
		'./.eslintignore' : {
			template : '.eslintignore.ejs'
		},
		'./assets/app/app.js' : {
			template : 'assets/app/app.ejs'
		},
		'./assets/app/main' : {
			folder : {}
		},
		'./assets/app/actions' : {
			folder : {}
		},
		'./assets/app/actions/todo.js' : {
			template : './assets/app/actions/todo.js'
		},
		'./assets/app/stores' : {
			folder : {}
		},
		'./assets/app/stores/todo.js' : {
			template : './assets/app/stores/todo.js'
		},
		'./assets/app/components/todo.jsx' : {
			template : './assets/app/components/todo.jsx'
		},
		'./assets/app/components/es6' : {
			folder : {}
		},
		'./assets/app/components/ts' : {
			folder : {}
		},
		'./assets/styles/importer.less' : {
			copy : 'assets/styles/importer.less'
		},
		'./assets/styles/main-style.less' : {
			copy : 'assets/styles/main-style.less'
		},
		'./bower.json' : {
			template : 'bower.ejs'
		},
		
		'./package.json' : {
			exec : merge(path.join(templates, 'package.ejs'))
		},
		'./views/layout.ejs' : {
			copy : 'layout.ejs'
		},
		'./views/homepage.ejs' : {
			copy : 'homepage.ejs'
		},
		'./config/blueprints.js' : {
			copy : 'blueprints.js'
		},
		'./test' : {
			folder : {}
		},
		'./test/exampleTest.js' : {
			copy : './exampleTest.js'
		},
		'./tasks/pipeline.js' : {
			template : 'tasks/pipeline.js'
		},
		'./tasks/config/watch.js' : {
			template : 'tasks/watch.js'
		},
	}
};