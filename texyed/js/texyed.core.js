/** Texyed - Core module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-07-28-1
 */

;(function($){
	$.extend($.fn, {
		texyed: function() {
			if(!(this.hasClass('texyed-textarea')))
			{
				this.addClass('texyed-textarea')
					.wrap('<div class="texyed"></div>');
				
				// Copy style
				var texyed = this.parent();
				// Size
				if(typeof Zepto !== 'undefined')
				{
					texyed.width(this.width());
				}
				else
				{
					texyed.css('width', (this.get(0).offsetWidth + 'px'));
				}
				//texyed.height(this.height());

				// Margins
				texyed.css({
					'margin-top': this.css('margin-top'),
					'margin-bottom': this.css('margin-bottom')
				});
				
				// ... reset textarea margin
				this.css({
					'margin-top': 0,
					'margin-bottom': 0
				});
			}
			
			return this;
		},
		
		teGetTexyed: function() {
			return this.parents('.texyed').first();
		},
		
		teGetTextarea: function() {
			return this.teGetTexyed().children('.texyed-textarea').first();
		},
		
		texyedLang: {
			close: 'Close',
			closeWindow: 'Close this window',
			preview: 'Preview',
			previewError: 'No preview available. May be a connection error or a server error.',
			ok: 'OK',
			cancel: 'Cancel',
			save: 'Save',
			saveAs: 'Save as'
		}
	})
})(('Zepto' in window) ? Zepto : jQuery);

