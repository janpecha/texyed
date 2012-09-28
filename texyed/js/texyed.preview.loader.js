/** Texyed - Default AJAX Preview Loader
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-09-28-2
 * @todo		2012-09-28 pokud je vracena odpoved ve formatu JSON a obsahuje klic 'error' s chybovou zpravou tak tuto zpravu zobrazit
 */

;
var texyed = texyed || {};

texyed.previewDefaultLoader = function($f, previewUrl, previewText, options) {
	// Default options
	var options = options || {};
	options.timeout = options.timeout || 10000;
	options.success = options.success || '';
	options.error = options.error || '';
	// AJAX Request
	$f.ajax({
		type: 'POST',
		url: previewUrl,
		data: {
			text: previewText
		},
		timeout: options.timeout,
		success: function(data) {
			if(options.success !== '')
			{
				options.success(data);
			}
		},
		error: function() {
			//alert('Fatal error! Any connection problem.');
			alert($.fn.texyedLang.errorFatal + "!\n\n" + $.fn.texyedLang.previewError);
			
			if(options.error !== '')
			{
				options.error();
			}
		}
	});
}

;(function($){
	$.extend($.fn, {
		tePreviewLoader: texyed.previewDefaultLoader
	});
})(('Zepto' in window) ? Zepto : jQuery);



