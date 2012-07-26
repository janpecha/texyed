/** Texyed - Buttons module
 * 
 * Pozor! Neaplikuje se na textareu, ale např. na toolbar
 * - $('#mytoolbar').teAddButton('Save', function() {...});
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-07-26-1
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
})(Zepto);

