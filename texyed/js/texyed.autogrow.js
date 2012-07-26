/** Texyed - Autogrow module
 * 
 * based on Autogrow JQuery Plugin (http://opensourcejavaphp.net/phpapps/vanilla/js/library/jquery.autogrow.js.html)
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @version		2012-07-26-1
 */

;(function($){
	$.extend($.fn, {
		teAutogrow: function() {
			if((this.hasClass('texyed-textarea')))
			{
				//this.data('texyed-autogrow-min', this.height());
				this.css('min-height', this.height() - parseInt(this.css('padding-top'), 10) - parseInt(this.css('padding-bottom'), 10));
				this.on('focus', function(e) {
					startExpand($(e.target));
				}).on('blur', function() {
					stopExpand();
				});
			}
			
			function startExpand(obj)
			{
//				obj.css('overflow-y', 'hidden');
				$.fn.teAutogrow_lineHeight = parseInt(obj.css('line-height'), 10);
				$.fn.teAutogrow_maxHeight = parseInt(obj.css('max-height'), 10);
				
				$.fn.teAutogrow_interval = window.setInterval(function() {
					autogrowUpdate(obj);
				}, 500);
			}
			
			function stopExpand()
			{
				window.clearInterval($.fn.teAutogrow_interval);
			}
			
			function autogrowUpdate(obj)
			{
//				stopExpand();
//				var o = obj.get(0);
				var currentChars = obj.val().length;
				
				if($.fn.teAutogrow_lastChars == undefined)
				{
					$.fn.teAutogrow_lastChars = currentChars;
				}
				
				if($.fn.teAutogrow_charDiff == undefined)
				{
					$.fn.teAutogrow_cumulativeCharDiff = 0;	
				}
				
				var iterationCharDifference = currentChars - $.fn.teAutogrow_lastChars;
				$.fn.teAutogrow_lastChars = currentChars;
				$.fn.teAutogrow_cumulativeCharDiff += iterationCharDifference;
				
				var absoluteCharDiff = Math.abs($.fn.teAutogrow_charDiff);
				var heightDifference = Math.abs(obj.attr('scrollHeight') - obj.attr('clientHeight'));
				
				if(!heightDifference && absoluteCharDiff < 10)
				{
					return;
				}
				
				if ($.fn.teAutogrow_dummy == null)
				{
					$.fn.teAutogrow_dummy = $('<div></div>');
					$.fn.teAutogrow_dummy.css({
						'font-size': obj.css('font-size'),
						'font-family': obj.css('font-family'),
						'width': obj.css('width'),
						'padding-left': obj.css('padding-left'),
						'padding-right': obj.css('padding-right'),
						'padding-top': obj.css('padding-top'),
						'padding-bottom': obj.css('padding-bottom'),
						'line-height': $.fn.teAutogrow_lineHeight + 'px',
						'overflow-x': 'hidden',
						'position': 'absolute',
						'top': 0,
						'left': -9999
					}).appendTo('body');
				}
				
				// Strip HTML tags
				var html = obj.val().replace(/(<|>)/g, '');
				
				// IE is different, as per usual
				if($.browser.msie)
				{
					html = html.replace(/\n/g, '<BR>new');
				}
				else
				{
					html = html.replace(/\n/g, '<br>new');
				}
				
				if($.fn.teAutogrow_dummy.html() != html)
				{
					$.fn.teAutogrow_dummy.html(html);   

					if($.fn.teAutogrow_maxHeight > 0 && ($.fn.teAutogrow_dummy.height() + $.fn.teAutogrow_lineHeight > $.fn.teAutogrow_maxHeight))
					{
						obj.css('overflow-y', 'auto');
					}
					else
					{
						obj.css('overflow-y', 'hidden');
						if (obj.height() < $.fn.teAutogrow_dummy.height() + $.fn.teAutogrow_lineHeight || ($.fn.teAutogrow_dummy.height() < obj.height()))
						{
							obj.animate({
								height: ($.fn.teAutogrow_dummy.height() + $.fn.teAutogrow_lineHeight) + 'px'
							});
						}
						//obj.focus();
					}
				}
				
				$.fn.teAutogrow_cumulativeCharDiff = 0;
			
////				alert(obj.height());
////				alert(obj.attr('scrollHeight'));
//				var borderSize = obj.attr('offsetHeight') - obj.attr('clientHeight');
//				var currentHeight = obj.height() - borderSize;
////				alert(currentHeight);
////				alert(borderSize);
////				stopExpand();
//				if(obj.attr('scrollHeight') != currentHeight)
//				{
//					obj.animate({
//						height: currentHeight + 'px'
//					}, {
//						duration: 50,
//						easing: 'ease',
//						complete: function() {
//							obj.get(0).focus();
//						}
//					});
////					obj.get(0).blur();
//				}
			}
			
			return this;
		},
		
		teAutogrow_interval: null,
		teAutogrow_dummy: null,
		teAutogrow_lineHeight: null,
		teAutogrow_maxHeight: 0
	});
	
})(Zepto);

