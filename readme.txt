Texyed - text editor for websites, written in Zepto.JS
#######################################################

Introduction
============
1) Add on page a <textarea>
	<textarea id="mytextarea" name="article" cols="80" rows="20"></textarea>

2) Load Zepto.JS & Texyed
	<script type="text/javascript" src="texyed/zepto.js"></script>
	<script type="text/javascript" src="texyed/js/texyed.core.js"></script>
	
	Load Texyed theme:
	
	<link rel="stylesheet" media="screen,projection,tv" href="texyed/themes/default.css" type="text/css">

3) And create a Texyed!
	<script type="text/javascript">
		$('#mytextarea').texyed();
	</script>

4) (Optional) Add plugins
	<!-- Load plugin source -->
	<script type="text/javascript" src="texyed/js/texyed.<PLUGIN NAME>.js"></script>
	<script type="text/javascript">
		// activate plugin
		$('#mytextarea').texyed().te<PLUGIN NAME>();
	</script>
	
	for example:
	
	<script type="text/javascript" src="texyed/js/texyed.tab.js"></script>
	<script type="text/javascript" src="texyed/js/texyed.autogrow.js"></script>
	<script type="text/javascript">
		$('#mytextarea').texyed()
			.teTab()
			.teAutogrow();
	</script>
	

Author: Jan Pecha (http://janpecha.iunas.cz)
License: see file license.txt
