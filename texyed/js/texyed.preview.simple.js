/** Texyed - Simple Preview module
 * 
 * Require:
 *	- Buttons module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-09-28-3
 */

;(function($){
	$.extend($.fn, {
		tePreviewSimple: function(url) {
			if((this.hasClass('texyed-textarea')))
			{
				this.teAddWindow('simple-preview', $.fn.texyedLang.preview/*'Preview'*/, '');
				this.teGetWindow('simple-preview')
					.data('texyed-preview', url)
					.data('texyed-preview-val', '');
			}
			
			return this;
		},
		
		teAddPreviewSimpleButton: function(title) {
			this.teAddButton(title, function(e) {
				var textarea = $(this).teGetTextarea();
				var textareaValue = textarea.val();
				var mywindow = textarea.teGetWindow('simple-preview');
				
				textarea.teShowWindow('simple-preview');
				
				if(mywindow.data('texyed-preview-val') != textareaValue)
				{
					mywindow.children('.texyed-spinner').first().css('display', 'block');
					
					$.fn.tePreviewLoader($, mywindow.data('texyed-preview'), textareaValue, {
						success: function(data) {
							mywindow.children('.texyed-spinner').first().css('display', 'none');
							mywindow.children('.ui-content').html(data);
							mywindow.data('texyed-preview-val', textareaValue);
						},
						error: function() {
							textarea.teCloseWindow('simple-preview');
							mywindow.children('.texyed-spinner').first().css('display', 'none');
						}
					});
				}
			});
			
			return this;
		}
	});

})(('Zepto' in window) ? Zepto : jQuery);

