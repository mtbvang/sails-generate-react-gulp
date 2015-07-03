/**
 * 
 * Usage: refer to
 * https://github.com/irlnathan/s-generators-docs/blob/master/generator-overview.md
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
		'./api/controllers/CommentController.js' : {
			copy : 'api/controllers/CommentController.js'
		},
		'./api/controllers/TodoController.js' : {
			copy : 'api/controllers/TodoController.js'
		},
		'./api/models/Comment.js' : {
			copy : 'api/models/Comment.js'
		},
		'./api/models/Todo.js' : {
			copy : 'api/models/Todo.js'
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
		'./assets/js/CommentForm.jsx' : {
			copy : 'assets/js/CommentForm.jsx'
		},
		'./assets/js/CommentList.jsx' : {
			copy : 'assets/js/CommentList.jsx'
		},
		'./assets/js/commentMain.js' : {
			copy : 'assets/js/commentMain.js'
		},
		'./assets/js/TodoApp.jsx' : {
			copy : 'assets/js/TodoApp.jsx'
		},
		'./assets/js/TodoFooter.jsx' : {
			copy : 'assets/js/TodoFooter.jsx'
		},
		'./assets/js/TodoItem.jsx' : {
			copy : 'assets/js/TodoItem.jsx'
		},
		'./assets/js/todoMain.js' : {
			copy : 'assets/js/todoMain.js'
		},
		'./assets/js/TodoModel.js' : {
			copy : 'assets/js/TodoModel.js'
		},
		'./assets/js/utils.js' : {
			copy : 'assets/js/utils.js'
		},
		'./assets/styles/importer.less' : {
			copy : 'assets/styles/importer.less'
		},
		'./assets/styles/main-style.less' : {
			copy : 'assets/styles/main-style.less'
		},
		'./assets/styles/styles.css' : {
			copy : 'assets/styles/styles.css'
		},
		'./bower.json' : {
			template : 'bower.ejs'
		},
		'./config/blueprints.js' : {
			copy : 'config/blueprints.js'
		},
		'./config/cors.js' : {
			copy : 'config/cors.js'
		},
		'./config/csrf.js' : {
			copy : 'config/csrf.js'
		},
		'./config/globals.js' : {
			copy : 'config/globals.js'
		},
		'./config/http.js' : {
			copy : 'config/http.js'
		},
		'./config/models.js' : {
			copy : 'config/models.js'
		},
		'./config/policies.js' : {
			copy : 'config/policies.js'
		},
		'./config/routes.js' : {
			copy : 'config/routes.js'
		},
		'./config/sockets.js' : {
			copy : 'config/sockets.js'
		},
		'./package.json' : {
			exec : merge(path.join(templates, 'package.ejs'))
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
			template : 'tasks/config/watch.js'
		},
		'./tasks/config/react.js' : {
			template : 'tasks/config/react.js'
		},
		'./tasks/register/compileAssets.js' : {
			template : 'tasks/register/compileAssets.js'
		},
		'./tasks/register/syncAssets.js' : {
			template : 'tasks/register/syncAssets.js'
		},
		'./views/layout.ejs' : {
			copy : 'views/layout.ejs'
		},
		'./views/homepage.ejs' : {
			copy : 'views/homepage.ejs'
		},
		'./views/comment/app.ejs' : {
			copy : 'views/comment/app.ejs'
		},
		'./views/todo/app.ejs' : {
			copy : 'views/todo/app.ejs'
		},
	}
};