<?php
	/** Texyed Preview PHP example
	 *
	 * @author		Jan Pecha, <janpecha@email.cz>
	 * @version		2012-09-28-1
	 */
	#undef_function(40); // PHP fatal error
	#header('x-husto-prisne: a', TRUE, 404); // Page Not Found
	#sleep(40); // Timeout
	$text = $_POST['text'];
	
	$html = htmlspecialchars($text);
	$html = strtr($html, array(
		"\n\n" => '</p><p>',
		"\n" => '<br>',
	));
	
	echo '<p>', $html, '</p>';
