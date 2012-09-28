/** Texyed - Preview module
 * 
 * Require:
 *	- Buttons module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-09-28-1
 */

;(function($){
	$.extend($.fn, {
		tePreviewIframe: function(url, styleFiles) {
			if((this.hasClass('texyed-textarea')))
			{
				this.teAddWindow('preview', $.fn.texyedLang.preview/*'Preview'*/, '');
				var mywindow = this.teGetWindow('preview')
					.data('texyed-preview', url)
					.data('texyed-preview-val', '');
				
				var preview = $('<iframe class="texyed-preview"></iframe>')
					.appendTo(mywindow.children('.ui-content').first());
					
				// nastavi CSS soubory pro preview iframe
				if(typeof(styleFiles) === 'object' && (styleFiles instanceof Array))	// is array
				{
					var _cssFiles = '';
	
					for(var i = 0; i < styleFiles.length; i++)
					{
						_cssFiles += '<link rel="stylesheet" type="text/css" href="' + styleFiles[i] + '">';
					}
					
					var iframe = $.fn.tePreview_GetIframe(preview.get(0));
					$(iframe).find('head').append('<style type="text/css">body {padding: 1em !important;}</style>').append(_cssFiles);
				}
			}
			
			return this;
		},
		
		tePreview_GetIframe: function(iFrame) {
			var iFrameDocument;
			
			if(iFrame.contentDocument) 
			{ // FF
				iFrameDocument = iFrame.contentDocument;//.getElementsByTagName('body')[0];
			}
			else if(iFrame.contentWindow) 
			{ // IE
				iFrameDocument = iFrame.contentWindow.document;//.getElementsByTagName('body')[0];
			}
			
			return iFrameDocument;
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
							var iframe = $.fn.tePreview_GetIframe(mywindow.find('iframe').get(0));
							$(iframe).find('body').html(data);
							mywindow.data('texyed-preview-val', textareaValue);
						},
						error: function() {
							alert('Fatal error! ' + $.fn.texyedLang.previewError)
							textarea.teCloseWindow('preview');
						}
					});
				}
			});
			
			return this;
		}
	});

})(('Zepto' in window) ? Zepto : jQuery);

