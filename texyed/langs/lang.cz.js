/** Texyed - Czech Translations
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-07-28-1
 */

;(function($){
	$.extend($.fn, {
		teLangCz: function() {
			$.fn.texyedLang = {
				close: 'Zavřít',
				closeWindow: 'Zavřít toto okno',
				preview: 'Náhled',
				previewError: 'Náhled se nepodařilo načíst. Možná problém s připojením nebo problém na serveru.',
				ok: 'OK',
				cancel: 'Zrušit',
				save: 'Uložit',
				saveAs: 'Uložit jako'
			};
			
			return this;
		}
	})
})(('Zepto' in window) ? Zepto : jQuery);

