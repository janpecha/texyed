/** Texyed - Buttons module
 * 
 * Pozor! Neaplikuje se na textareu, ale např. na toolbar
 * - $('#mytoolbar').teAddButton('Save', function() {...});
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @version		2012-07-26-1
 */

;(function($){
	$.extend($.fn, {
		teAddButton: function(title, handler) {
			$('<span class="ui-button">' + title + '</span>')
				.on('click', handler)
				.appendTo(this);
			
			return this;
		}
	})
})(Zepto);

