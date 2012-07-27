/** Texyed - Toolbars module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-07-27-1
 */

;(function($){
	$.extend($.fn, {
		teAddToolbar: function(name) {
			this.before('<div class="ui-toolbar ui-button-group" data-texyed-toolbar="' + name + '"></div>');
			
			return this;
		},
		
		teAddAfterToolbar: function(name) {
			this.after('<div class="ui-toolbar ui-button-group" data-texyed-toolbar="' + name + '"></div>');
			
			return this;
		},
		
		teGetToolbar: function(name) {
			mytoolbar = '';
			
			this.parent().children('.ui-toolbar').each(function(index, item) {
				var _this = $(this);
				if(_this.data('texyed-toolbar') == name)
				{
					mytoolbar = _this;
					return false;
				}
			});
			
			return mytoolbar;
		}
	})
})(('Zepto' in window) ? Zepto : jQuery);

