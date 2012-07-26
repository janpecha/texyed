/** Texyed - Core module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-07-25-1
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
				texyed.width(this.width());
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
		
		// DRAFT: !!!
		texyedLang: {
			close: 'Close',
			closeWindow: 'Close this window',
		},
		
		teLangCz: function() {
			$.fn.texyedLang = {
				close: 'Zavřít',
				closeWindow: 'Zavřít toto okno',
			};
		}
	})
})(Zepto);

