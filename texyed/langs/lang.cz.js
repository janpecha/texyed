/** Texyed - Czech Translations
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-08-18-1
 */

;(function($){
	$.extend($.fn, {
		teLangCz: function() {
			$.fn.texyedLang = {
				close: 'Zavřít',
				closeWindow: 'Zavřít toto okno',
				preview: 'Náhled',
				previewError: 'Náhled se nepodařilo načíst. Možná se jedná o problém s připojením nebo nastal problém na serveru.',
				ok: 'OK',
				cancel: 'Zrušit',
				save: 'Uložit',
				saveAs: 'Uložit jako',
				open: 'Otevřít',
				yes: 'Ano',
				no: 'Ne'
			};
			
			return this;
		}
	})
})(('Zepto' in window) ? Zepto : jQuery);

