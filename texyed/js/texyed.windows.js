/** Texyed - Windows module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.md
 * @version		2012-11-20-3
 */

;(function($){
	$.extend($.fn, {
		teAddWindow: function(name, title, content, isPanel, properties) {
			isPanel = isPanel || false;
			properties = properties || [];
			
			if(isPanel)
			{
				properties.push('texyed-panel');
			}
			
			classes = properties.join(' ');
			
			if(this.hasClass('texyed-textarea'))
			{
				var mywindow = $('<div class="ui-window' + (classes !== '' ? ' ' + classes : '') + '" data-texyed-window="' + name + '"></div>')
					.append('<div class="ui-title">'
						+ title
						+ ' </div>'
						+ '<div class="ui-content">'
						+ content
						+ '</div>'
						+ '<div class="texyed-spinner"></div>');
				
				if(title === false)
				{
					//$('.ui-title', mywindow).css('display', 'none');
					mywindow.addClass('texyed-window-no-title');
				}
								
				var close = $('<span class="ui-close" title="' + $.fn.texyedLang.closeWindow/*Close this window*/ + '">&#10006;</span>').on('click', function(e) {
					var _this = $(this);
					
					_this.parent().parent().removeClass('ui-show');
					_this.teGetTextarea().teRefreshDualView();
					
				});
				
				$('.ui-title', mywindow).append(close);
				
				if(!isPanel) // classic window
				{
					this.parent().after(mywindow);
				}
				else // panel
				{
					this.after(mywindow);
					this.teRefreshDualView();
				}
				
				
//				$('.ui-close', this.parent().children('.ui-window').first()).on('click', function(e) {
//					$(this).parent().parent().removeClass('ui-show');
//				})
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
					
					if(win.hasClass('texyed-panel'))
					{
						this.teRefreshDualView();
					}
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
					
					if(win.hasClass('texyed-panel'))
					{
						this.teRefreshDualView();
					}
				}
			}
			
			return this;
		},
		
		teGetWindow: function(name) {
			mywindow = '';
			
			this.parent().parent().children('.ui-window').each(function(index, item) {
				var _this = $(this);
				if(_this.data('texyed-window') == name)
				{
					mywindow = _this;
					return false;
				}
			});
			
			if(mywindow === '') // hledame panel
			{
				this.siblings('.ui-window').each(function(index, item) {
					var _this = $(this);
					if(_this.data('texyed-window') == name)
					{
						mywindow = _this;
						return false;
					}
				});
			}
			
			return mywindow;
		}
	})
})(('Zepto' in window) ? Zepto : jQuery);

