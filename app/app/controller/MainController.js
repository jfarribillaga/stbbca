Ext.define('StBahia.controller.MainController', {
	extend: 'Ext.app.Controller',

	config: {
		requires: [
			'StBahia.view.Main'
		],

		views: [
			'StBahia.view.Main'
		],

		refs: {
			mainView: 'main',
			goTestBtn: 'main button[action=gotest]',
			text: 'main #holatext'
		},

		control: {
			mainView: {
				activate: "onActivateView"
			},
			goTestBtn: {
				tap: "onGoTestTap"
			}
		}
	},

	init: function() {
		console.log("Controlador Test Controller done!!!");
		console.log(this.getMainView());
	},

	/**
	 * [onGoTestTap description]
	 * @author Juan Arribillaga <juan.arribillaga@globant.com>
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	onGoTestTap: function(e) {
		var mitextoElement = this.getText();
		mitextoElement.setHtml("Hola a todos!");
	},

	/**
	 * esto es 
	 * @author Juan Arribillaga <juan.arribillaga@globant.com>
	 * @return {[type]} [description]
	 */
	onActivateView: function() {
		console.log("this ??? ", this);
	}
});