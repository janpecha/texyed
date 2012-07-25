/** Texyed - Buttons module
 * 
 * Pozor! Neaplikuje se na textareu, ale např. na toolbar
 * - $('#mytoolbar').teAddButton('Save', function() {...});
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @version		2012-07-25-1
 */

;(function($){
	$.extend($.fn, {
		teAddButton: function(title, handler) {
			this.append('<span class="ui-button">' + title + '</span>');
			this.children('ui-button').last().on('click', handler);
			
			return this;
		}
	})
})(Zepto);

