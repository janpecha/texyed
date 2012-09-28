/** Texyed - Default AJAX Preview Loader
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-09-28-1
 */

;
var texyed = texyed || {};

texyed.previewDefaultLoader = function($, previewUrl, previewText, options) {
	// Default options
	var options = options || {};
	options.timeout = options.timeout || 10000;
	options.success = options.success || '';
	options.error = options.error || '';
	
	var retData = '';
	
	// AJAX Request
	$.ajax({
		type: 'POST',
		url: previewUrl,
		data: {
			text: previewText
		},
		timeout: options.timeout,
		success: function(data) {
			retData = data;
			
			if(options.success !== '')
			{
				options.success(data);
			}
		},
		error: function() {
			//alert('Fatal error! Any connection problem.');
			alert($.fn.texyedLang.errorFatal + '! ' + $.fn.texyedLang.previewError);
			
			if(options.error !== '')
			{
				options.error();
			}
		}
	});
	
	return retData;
}



