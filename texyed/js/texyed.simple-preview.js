/** Texyed - Simple Preview module
 * 
 * Require:
 *	- Buttons module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-07-27-1
 */

;(function($){
	$.extend($.fn, {
		teSimplePreview: function(url) {
			if((this.hasClass('texyed-textarea')))
			{
				this.teAddWindow('preview', 'Preview', '');
				this.teGetWindow('preview')
					.data('texyed-preview', url)
					.data('texyed-preview-val', '');
			}
			
			return this;
		},
		
		teAddPreviewButton: function(title) {
			this.teAddButton(title, function(e) {
				var textarea = $(this).teGetTextarea();
				var textareaValue = textarea.val();
				var mywindow = textarea.teGetWindow('preview');
				
				textarea.teShowWindow('preview');
				
				if(mywindow.data('texyed-preview-val') != textareaValue)
				{
					$.ajax({
						type: 'POST',
						url: mywindow.data('texyed-preview'),
						data: {
							text: textareaValue
						},
						timeout: 10000,
						success: function(data) {
							mywindow.children('.ui-content').html(data);
						},
						error: function() {
							alert('Fatal error! Any connection problem.');
							textarea.teCloseWindow('preview');
						}
					});
//					$.post(mywindow.data('texyed-preview'), {
//						text: textareaValue
//					}, function(data, status, xhr) {
//						mywindow.children('.ui-content').html(data);
//					});
				}
			});
			
			return this;
		}
	});

})(('Zepto' in window) ? Zepto : jQuery);

