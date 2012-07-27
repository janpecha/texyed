<?php
	/** Texyed Preview PHP example
	 *
	 * @author		Jan Pecha, <janpecha@email.cz>
	 * @version		2012-07-27-1
	 */
	
	$text = $_POST['text'];
	
	$html = htmlspecialchars($text);
	$html = strtr($html, array(
		"\n\n" => '</p><p>',
		"\n" => '<br>',
	));
	
	echo '<p>', $html, '</p>';
