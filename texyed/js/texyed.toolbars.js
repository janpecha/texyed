/** Texyed - Toolbars module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.md
 * @version		2012-11-20-2
 */

;(function($){
	$.extend($.fn, {
		teAddToolbar: function(name) {
			this.parent().siblings().first().append('<div class="ui-toolbar ui-button-group" data-texyed-toolbar="' + name + '"></div>');
			
			return this;
		},
		
		teAddAfterToolbar: function(name) {
			this.parent().siblings().last().append('<div class="ui-toolbar ui-button-group" data-texyed-toolbar="' + name + '"></div>');
			
			return this;
		},
		
		teGetToolbar: function(name) {
			mytoolbar = '';
			
			this.parent().siblings().children('.ui-toolbar').each(function(index, item) {
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

