Texyed - text editor for websites
=================================

Introduction
------------

1. Add on page a ```<textarea>```

	``` html
	<textarea id="mytextarea" name="article" cols="80" rows="20"></textarea>
	```
2. Load scripts
	Load Zepto.JS **or** jQuery:
	
	``` html
	<script type="text/javascript" src="texyed/zepto.js"></script>
	<script type="text/javascript" src="texyed/jquery.js"></script>
	```
	
	Load Texyed:
	
	``` html
	<script type="text/javascript" src="texyed/js/texyed.core.js"></script>
	```
	
	Load Texyed theme:
	``` html
	<link rel="stylesheet" media="screen,projection,tv" href="texyed/themes/default.css" type="text/css">
	```
3. And create a Texyed!
	``` html
	<script type="text/javascript">
		$('#mytextarea').texyed();
	</script>
	```
4. (Optional) Add plugins
	``` html
	<!-- Load plugin source -->
	<script type="text/javascript" src="texyed/js/texyed.<PLUGIN NAME>.js"></script>
	<script type="text/javascript">
		// activate plugin
		$('#mytextarea').texyed().te<PLUGIN NAME>();
	</script>
	```
	
	for example:
	
	``` html
	<script type="text/javascript" src="texyed/js/texyed.tab.js"></script>
	<script type="text/javascript" src="texyed/js/texyed.autogrow.js"></script>
	<script type="text/javascript">
		$('#mytextarea').texyed()
			.teTab()
			.teAutogrow();
	</script>
	```


Plugins
-------

* For users:
	* Tab
	* Autogrow
	* Iframe Preview
	* Simple Preview (in ```<div>```)
* For developers:
	* Buttons
	* Toolbars
	* Windows
	* Lorem Ipsum
	* Preview Loader


Author: Jan Pecha (http://janpecha.iunas.cz)
<br>License: see file license.txt

