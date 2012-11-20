/** Texyed - Buttons module
 * 
 * Pozor! Neaplikuje se na textareu, ale např. na toolbar
 * - $('#mytoolbar').teAddButton('Save', function() {...});
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.md
 * @version		2012-11-20-1
 */

;(function($){
	$.extend($.fn, {
		teAddButton: function(title, handler, className) {
			var classes = '';
			
			if(typeof className !== 'undefined')
			{
				classes = className;
			}
			
			$('<span class="ui-button ' + classes + '">' + title + '</span>')
				.on('click', handler)
				.appendTo(this);
			
			
			return this;
		}
	})
})(('Zepto' in window) ? Zepto : jQuery);

