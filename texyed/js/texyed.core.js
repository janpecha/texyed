/** Texyed - Core module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.md
 * @version		2012-11-20-3
 */

;var texyed = texyed || {};

(function($){
	$.extend($.fn, {
		texyed: function() {
			if(!(this.hasClass('texyed-textarea')))
			{
				/*
					.texyed
						.texyed-before-wrapper
							= toolbars, buttons, ...
						.texyed-main-wrapper [.texyed-dual-view]
							.texyed-textarea
							= panels
						= windows
						.texyed-after-wrapper
							= toolbars, buttons, ...
				*/
				this.addClass('texyed-textarea')
					.wrap('<div class="texyed"></div>')
					.wrap('<div class="texyed-main-wrapper"></div>');
					
				parent = this.parent().first();
				parent.before('<div class="texyed-before-wrapper"></div>');
				parent.after('<div class="texyed-after-wrapper"></div>');
				
				// Copy style
				var texyed = this.parent().parent();
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
			return this.teGetTexyed().children('.texyed-main-wrapper').children('.texyed-textarea').first();
		},
		
		teRefreshDualView: function() {
			if(this.siblings('.ui-show').length)
			{
				return this.addClass('texyed-dual-view');
			}
			else
			{
				return this.removeClass('texyed-dual-view');
			}
		},
		
		texyedLang: {
			close: 'Close',
			closeWindow: 'Close this window',
			preview: 'Preview',
			previewError: 'No preview available. May be a connection error or a server error.',
			ok: 'OK',
			cancel: 'Cancel',
			save: 'Save',
			saveAs: 'Save as',
			open: 'Open',
			yes: 'Yes',
			no: 'No',
			errorFatal: 'Fatal error',
			error: 'Error'
		}
	})
})(('Zepto' in window) ? Zepto : jQuery);

