<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Create HTML Code'; 
require_once('./include/admin-load.php');
$products = $product->all();
require_once('./header.php');
?>
<ul class="nav nav-pills"><li>
<a href="integration.php" >Integration</a></li><li><a href="products.php" >Products</a></li></ul>
<hr>
<form action="create-html.php" class="form" method="post" id="createHTML">
<table class="table text-center ">
<tr>
<th>Product ID</th>
<th>Product Name</th>
<th>Quantity Box</th>
<th>Button Text</th>
<th>Product Price</th>
<th></th>
</tr>
<tr>
<td><select class="form-control" class="input-small"  name="product_id" id="product-id">;
<?php foreach ($products as $pro){
echo "<option value=\"".$pro["id"]."\">".$pro["id"]." - ".$pro["name"]."</option>";
}?>
</select>
<td><select class="form-control" class="input-small"  name="product_name" id="product-name">
<option value="1">Show</option>
<option value="0">Don't Show</option>
</select></td>
<td><select class="form-control" class="input-small"  name="product_qty" id="product-qty">
<option value="1">Show</option>
<option value="0">Don't Show</option>
</select></td>
<td><input class="form-control"type="text"  class="input-small" name="button_text" value="" id="button-text" ></td>
<td><select class="form-control" class="input-small"  name="product_price" id="product-price">
<option value="1">Show</option>
<option value="0">Don't Show</option>
</select></td>
<td><button class="btn btn-primary">Create HTML Code</button></td>
</tr>
</table>
</form><hr>
<div id="generated" style="display:none;">
<h3>Copy the code from here</h3>
<h4>Buy Button Code</h4>
<input id="btn-code" type="text" class="form-control input-lg"><br>
<p>You can style button by adding styles to <code>.cart-button .button</code> in your css</p>
<h4>Product LightBox Code</h4>
<input id="lb-code" type="text" class="form-control input-lg"><br>
<p>You can add css class to anchor tag by adding <code>class="your-class"</code> in short code. Thus Shortcode would look like <code>&#x3C;a href=&#x27;#&#x27; class=&#x27;symbiotic-lightBox&#x27; class=&#x22;your-class&#x22; data-pid=&#x27;1&#x27;&#x3E;Product Details&#x3C;/a&#x3E;</code></p>
<h4>Description Code</h4>
<input id="desc-code" type="text" class="form-control input-lg"><br>
<p>You can add css class to this <code>div</code> by adding <code>class="your-class"</code> in short code. Thus Shortcode would look like <code>&#x3C;span class=&#x27;symbiotic-desc your-class&#x27; data-pid=&#x27;1&#x27;&#x3E;&#x3C;/span&#x3E;</code></p>
<h4>Image Code</h4>
<input id="img-code" type="text" class="form-control input-lg"><br>
<p>It returns a <code>div</code> tag containing an <code>img</code> on your page. You can add css class to this <code>div</code> by adding <code>class="your-class"</code> in short code. Thus Shortcode would look like <code>&#x3C;span class=&#x27;symbiotic-img your-class&#x27; data-pid=&#x27;1&#x27; &#x3E;&#x3C;/span&#x3E;</code></p>
<p>You can also specify size of image by adding <code>size</code> attribute to it. Thus Shortcode would look like <code>&#x3C;span class=&#x27;symbiotic-img&#x27; data-size=&#x22;small&#x22;data-pid=&#x27;1&#x27; &#x3E;&#x3C;/span&#x3E;</code>. Sizes supported are <code>small</code> <code>medium</code> <code>large</code>.</p>
<p><code>size</code> and <code>class</code> can be used together. Thus Shortcode would look like <code>&#x3C;span class=&#x27;symbiotic-img your-class&#x27; data-size=&#x22;small&#x22; data-pid=&#x27;1&#x27;&#x3E;&#x3C;/span&#x3E;</code></p>
<button type="button" class="btn btn-danger btn-lg" id="hideCode">Hide</button>
</div>

<script type="text/javascript">
jQuery(document).ready(function($){
$("#createHTML").unbind().bind('submit',function(){
$("#message").hide();
$("#generated").hide();
var inputId=$("#product-id").val();
if(inputId == ""){
	$("#message").text("Please enter a product id");
	$("#message").show();
	return false;
}
var name =$("#product-name").val();
var price =$("#product-price").val();
var qty =$("#product-qty").val();
var btnText =$("#button-text").val();

var addOns ="";
 addOns = addOns + "data-pid='"+inputId+"' ";
if(name =='1'){ addOns = addOns + "data-name='show' "}
if(price =='1'){ addOns = addOns + "data-price='show' "}
if(qty =='1'){ addOns = addOns + "data-qty='show' "}
if(btnText !=''){ addOns = addOns + "data-text='"+btnText+"'"}
$("#btn-code").val("<span class='sym-btn' "+addOns+"></span>");
$("#lb-code").val("<a href='#' class='sym-product-lb' data-pid='"+inputId+"'>Product Details</a>");
$("#desc-code").val("<span class='sym-desc' data-pid='"+inputId+"'></span>");
$("#img-code").val("<span class='sym-img' data-pid='"+inputId+"'></span>");
$("#generated").slideDown();
				return false;
});

	$("#hideCode").click(function(){
		$("#generated").slideUp();
		});
});
</script>
<?php
require_once('./footer.php');

?>