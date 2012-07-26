/** Texyed - Windows module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-07-25-1
 */

;(function($){
	$.extend($.fn, {
		teAddWindow: function(name, title, content) {
			if(this.hasClass('texyed-textarea'))
			{
				this.before('<div class="ui-window" data-texyed-window="' + name + '">'
					+ '<div class="ui-title">'
						+ title
						+ ' <span class="ui-close" title="Close this window">&#10006;</span>'
					+ '</div>'
					+ '<div class="ui-content">'
					+ content
					+ '</div>'
				+ '</div>');
				
				$('.ui-close', this.parent().children('.ui-window').last()).on('click', function(e) {
					$(this).parent().parent().removeClass('ui-show');
				})
			}
			
			return this;
		},
		
		teShowWindow: function(name) {
			if(this.hasClass('texyed-textarea'))
			{
				var win = this.teGetWindow(name);
				
				if(win !== '')
				{
					win.addClass('ui-show');
				}
			}
			
			return this;
		},
		
		teCloseWindow: function(name) {
			if(this.hasClass('texyed-textarea'))
			{
				var win = this.teGetWindow(name);
				
				if(win !== '')
				{
					win.removeClass('ui-show');
				}
			}
			
			return this;
		},
		
		teGetWindow: function(name) {
			mywindow = '';
			
			this.parent().children('.ui-window').each(function(index, item) {
				var _this = $(this);
				if(_this.data('texyed-window') == name)
				{
					mywindow = _this;
					return false;
				}
			});
			
			return mywindow;
		}
	})
})(Zepto);

