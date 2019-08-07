<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Integration'; 
require_once('./include/admin-load.php');
require_once('./header.php');
?>
<h3>Before you start with website, you need to integrate code as follow:</h3>
<p>Repeat these steps on every page where you want to place Buttons, Images, Descriptions etc..( That means any cart functionality ).</p>
<ol>
<li><b>Step 1:</b>Copy and paste following code to <code>&lt;HEAD&gt;</code> of your webpage.<br /><br />
<pre>
&#x3C;link href=&#x22;sym-app/css/bootstrap/css/bootstrap.min.css&#x22; rel=&#x22;stylesheet&#x22;  type=&#x22;text/css&#x22;&#x3E;
&#x3C;link href=&#x22;sym-app/css/blueimp/blueimp-gallery.min.css&#x22; rel=&#x22;stylesheet&#x22;  type=&#x22;text/css&#x22;&#x3E;
&#x3C;link href=&#x22;sym-app/css/blueimp-Bootstrap-Image-Gallery/bootstrap-image-gallery.min.css&#x22; rel=&#x22;stylesheet&#x22;  type=&#x22;text/css&#x22;&#x3E;
&#x3C;link href=&#x22;sym-app/css/symbiotic/symbiotic.css&#x22; rel=&#x22;stylesheet&#x22;  type=&#x22;text/css&#x22;&#x3E;
</pre></li>
<li><b>Step 2:</b>Copy and paste following code just  before closing <code>&lt;/BODY&gt;</code> of your web page.<br /><br />
<pre>
&#x3C;script type=&#x22;text/javascript&#x22; src=&#x22;sym-app/js/jquery-2.0.3.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;script type=&#x22;text/javascript&#x22; src=&#x22;sym-app/js/bootstrap.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;script type=&#x22;text/javascript&#x22; src=&#x22;sym-app/js/jquery.blueimp-gallery.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;script type=&#x22;text/javascript&#x22; src=&#x22;sym-app/js/bootstrap-image-gallery.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;script type=&#x22;text/javascript&#x22; src=&#x22;sym-app/js/sym-cart.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
</pre>
<div class="alert alert-danger">Don't include <code>jquery</code> and <code>bootstrap</code> if you have already included these before on webpage.</div>
</li>
<li><b>Step3:</b> <a href="create-html.php" class="btn btn-primary">Create HTML Codes</a> and paste to your page where you want to create button, images, descriptions etc..
</li>
</ol>
<hr>
<p class="text-center"><a target="_blank" class="btn btn-primary" href="http://bakemysite.com/symbiotic/docs">Read Documentation here</a></p>
<?php

require_once('./footer.php');

?>