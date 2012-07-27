/** Texyed - Lorem ipsum module
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @license		see file license.txt
 * @version		2012-07-27-1
 */

;(function($){
	$.extend($.fn, {
		teLoremIpsum: function() {
			if(this.hasClass('texyed-textarea'))
			{
				this.html('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '
					+ 'Donec quis nibh at felis congue commodo. Phasellus rhoncus. '
					+ 'Nulla accumsan, elit sit amet varius semper, nulla mauris '
					+ 'mollis quam, tempor suscipit diam nulla vel leo. Curabitur '
					+ 'vitae diam non enim vestibulum interdum. Excepteur sint '
					+ 'occaecat cupidatat non proident, sunt in culpa qui officia '
					+ 'deserunt mollit anim id est laborum. Aliquam in lorem sit '
					+ 'amet leo accumsan lacinia. Donec iaculis gravida nulla. '
					+ 'Integer vulputate sem a nibh rutrum consequat. Pellentesque '
					+ 'ipsum. Maecenas ipsum velit, consectetuer eu lobortis ut, '
					+ 'dictum at dui.'
					+ "\n\n"	// double ENTER
					+ 'Vivamus porttitor turpis ac leo. '
					+ 'Maecenas sollicitudin. Aenean placerat. Nullam justo enim, '
					+ 'consectetuer nec, ullamcorper ac, vestibulum in, elit. Duis '
					+ 'condimentum augue id magna semper rutrum. Curabitur bibendum '
					+ 'justo non orci. Donec iaculis gravida nulla. Integer malesuada. '
					+ 'Mauris elementum mauris vitae tortor. Vivamus ac leo pretium '
					+ 'faucibus. Sed ut perspiciatis unde omnis iste natus error '
					+ 'sit voluptatem accusantium doloremque laudantium, totam '
					+ 'rem aperiam, eaque ipsa quae ab illo inventore veritatis '
					+ 'et quasi architecto beatae vitae dicta sunt explicabo. '
					+ 'In enim a arcu imperdiet malesuada.');
			}
			
			return this;
		}
	})
})(('Zepto' in window) ? Zepto : jQuery);

