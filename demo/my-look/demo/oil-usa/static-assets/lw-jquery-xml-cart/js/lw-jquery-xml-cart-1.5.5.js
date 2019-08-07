/*! 
	jQuery XML Store / Shop - Shopping Cart
	Created by LivelyWorks - http://livelyworks.net
	Ver. 1.5.5 - 02 DEC 2014
*/	

$(document).ready(function(){
"use strict"

	_.templateSettings.variable = "_oData";

	/*
		Configuration Options
	*/

	var configOptions = {
		configXMLFile 			: "data-provider/config.xml",
		productsXMLFile 		: "data-provider/products.xml",
		storeName 				: "",
		logoImage 				: "",
		currencySymbol 			: "$",
		currency 				: "USD",
		businessEmail 			: "",
		usePaypal 				: true,
		useSubmitOrderByEmail 	: true,
		shippingCharges 		: 0,
		searchProductDetails	: true,
		bs3Theme 				: $('body').hasClass('bs-3') ? true : false, 
		paypalBaseURL 			: "https://www.paypal.com/cgi-bin/webscr?cmd=_cart&upload=1&charset=utf-8&currency_code=",
		submitOrderBaseURL 		: 'scripts/cart-mailer.php?currency_code='
	},
	/*
		General Variables
	*/
	allProductsCollection		= {},
	categoriesCollection		= {},
	currentProductCollection	= {},
	oCurrentProductData			= {},
	searchedProductsCollection	= {},
	cartProductsCollection		= new Array(),
	DateTime					= new Date(),
	cartStats					= {},
	totalBtnMarkup				= '',
	selectedProductOptions		= {
		color:null,
		size:null
	},
	nProductInCart				= false,
	generalVars = {
		categoryIdentfierInURL	: "uid-",
		isStoreLoaded			: false,
		lastAccessedCategory 	: null,
		hashChanged 			: false,
		preventHashChangedAction: false,
		cartStorageName			: 'store-cart-storage'+window.location.hostname,
		qtyUpdateTimeout		: null,
		searchDelayTimeout		: null,
		showSubmitOrderTimeout 	: null,
		enableOrderBtn 			: false,
		isDemoActivate 			: false,
		preventHashChange 		: false
	},
	/*
		DOM elements
	*/
	$domElements = {
		storeLogo					: $('#storeLogo'),
		checkoutWithPaypalBtn 		: $('#checkoutWithPaypal'),
		checkoutSubmitOrderBtn		: $('#checkoutSubmitOrder'),
		loaderContainer				: $('#loaderContainer'),
		mainContainer				: $('#mainContainer'),
		modalCommon					: $('#commonModal'),
		modalContainer 				: configOptions.bs3Theme ? $('.common-modal-content') : $('#commonModal'),
		categoriesList 				: $('#categoriesList'),
		storeLoaderStatusText		: $('.lw-loading-status'),
		productsContainer 			: $('#productsContainer'),
		storeWaitingText 			: $('.lw-waiting-text'),
		addToCartBtnContainer 		: $('#addToCartBtnContainer'),
		productsBreadcrumb 			: $('#productsBreadcrumb'),
		shoppingCartBtnContainer 	: $('.shopping-cart-btn-container'),
		searchInput 				: $('input.search-product'),
		clearSearchBtn				: $('.clear-search-result-btn'),
		footerStoreName				: $('.footer-store-name'),
		goToTop						: $('.go-to-top'),
		searchedProductCounts 		: $('#searchedProductCounts')
	},

	/*
		Templates to process as _ (underscore templates)
	*/
	_templates = {
		sidebarCategories		: _.template( $("script.sidebar-catgegories-template").html() ),
		productsGrid			: _.template( $("script.products-grid-template").html() ),
		productsDetailsModal	: _.template( $("script.products-details-modal-template").html() ),
		shoppingCartModal		: _.template( $("script.shopping-cart-template").html() ),
		addToCartBtn 	 		: _.template( $("script.add-to-cart-btn-template").html() ),
		shoppingCartBtn 	 	: _.template( $("script.shopping-cart-btn-template").html() ),
		submitOrderFormModal 	: _.template( $("script.submit-order-form-template").html() )
	},

	/*
		Object contains miscellaneous functions as helpers
	*/
	fnMisc = {
		/*
			Format amount using currency symbol
		*/
		fullFormatAmount	: function(amt) {
			return configOptions.currencySymbol+" "+new Number(amt).toFixed(2)+" "+configOptions.currency;
		},
		/*
			Format amount using currency symbol & code
		*/
		formatAmount	: function(amt) {
			return configOptions.currencySymbol+" "+new Number(amt).toFixed(2);
		},
		/*
			Create url friendly string
		*/
		convertToSlug	: function(string) {
		    return string
		        .toLowerCase()
		        .replace(/ /g,'-')
		        .replace(/[^\w-]+/g,'')
		        ;
		},
		/*
			extract data from URL & convert it to object
		*/
		dataFromURL		: function() {
			return _.object(
				_.compact(
					_.map(location.hash.slice(1).split('/'), function(urlItem) { 
					 if (urlItem) {
					 	return urlItem.split("id-"); 
					 }
					}))
				);
		},
		/*
			Go to top method
		*/
		goToTop			: function(e) {

			if(e) {
				e.preventDefault();
			}

			$("html, body").animate({
	            scrollTop: "0px"
	        }, {
	            duration: 200,
	            easing: "swing"
	        });
		},
		/*
			On resize
		*/
		resizeNPositioin	: function() {
			
			$('head').append(
				'<style> .bs-2 .modal-body { max-height:'+( $(window).height() * 0.4 )+'px;} </style>'
				);

		 	$domElements.loaderContainer.css({
		 		top: ( $(window).height() * 0.5 ) - ( $domElements.loaderContainer.height() * 0.5 ),
		 		left: ( $(window).width() * 0.5 ) - ( $domElements.loaderContainer.width() * 0.5 )
		 	});
		}
	};

	fnMisc.resizeNPositioin();
	$domElements.storeLoaderStatusText.html('Loading configurations...');
	
	/*
		Load Config Data from XML
	*/
	$.ajax({
		type 		: "GET",
		url 		: configOptions.configXMLFile+"?file="+DateTime.getTime(),
		dataType	: "xml",
		success		: function(configData) {

		$domElements.storeLoaderStatusText.html('Loading loaded...');
		
		var configEl = $(configData).find('configuration')[0];
		
		/*
			logo image 
		*/
		configOptions.logoImage = $(configEl).attr('logoImage');

		configOptions.storeName = $(configEl).attr('storeName');

		$domElements.footerStoreName.html(configOptions.storeName);
		
		/* 
			currency Symbol
		*/
		if($(configEl).attr('currencySymbol'))
		{
			configOptions.currencySymbol = $(configEl).attr('currencySymbol');
		}
		/*
			Currency
		*/
		if($(configEl).attr('currency'))
		{
			configOptions.currency = $(configEl).attr('currency');
		}
		
		/*
			Business Email
		*/
		if($(configEl).attr('businessEmail'))
		{
			configOptions.businessEmail = $(configEl).attr('businessEmail');
		}
		
		/*
			Check if allows PayPal
		*/
		if($(configEl).attr('UsePaypal'))
		{
			configOptions.usePaypal = parseInt($(configEl).attr('UsePaypal'));
		}
		
		/*
			Check if allows Submit Order by Email
		*/
		if($(configEl).attr('UseSubmitOrder'))
		{
			configOptions.useSubmitOrderByEmail = parseInt($(configEl).attr('UseSubmitOrder'));
		}
		
		/*
			Fixed Shipping Charges
		*/
		if($(configEl).attr('ShippingCharges'))
		{
			configOptions.shippingCharges = parseFloat($(configEl).attr('ShippingCharges'));
		}
		
		/*
			Set logo
		*/
		$domElements.storeLogo.attr('src', configOptions.logoImage);
		/*
			Disable PayPal Checkout button
		*/
		if(configOptions.usePaypal == 0)
		{
			$domElements.checkoutWithPaypalBtn.hide();
		}
		
		/*
			Disable Checkout button
		*/ 
		if(configOptions.useSubmitOrderByEmail == 0)
		{
			$domElements.checkoutSubmitOrderBtn.hide();
		}

		/*
			basic urls for PayPal & submit order
		*/ 
		configOptions.paypalBaseURL = configOptions.paypalBaseURL + configOptions.currency + '&business='+ configOptions.businessEmail + '&handling_cart=' + configOptions.shippingCharges;

		configOptions.submitOrderBaseURL = configOptions.submitOrderBaseURL + configOptions.currency + '&business='+ configOptions.businessEmail + '&handling_cart=' + configOptions.shippingCharges;

		/*
			Update Status
		*/
		$domElements.storeLoaderStatusText.html('Loading products data...');

		/*
			Lets load products data from XML file
		*/
		$.ajax({
	        type: "GET",
	        url: configOptions.productsXMLFile+"?file="+DateTime.getTime(),
	        dataType: "xml",
	        success: function(productsData) {

	        $('#mainContainer').show();
	        $domElements.storeLoaderStatusText.html('Intializating ...');

	        var nCategoryIndex = 0,
	        	nProdductIndex = 0;

	    	/* 
				loop through the categories
	    	*/
	        $(productsData).find('category').each(function(){

	        	var $thisCatgegoryNode 	= $(this),
	        		sThisCategoryName	= $thisCatgegoryNode.attr('categoryName'),
	        		sCategoryID			= $thisCatgegoryNode.attr('categoryID') 
	        								? fnMisc.convertToSlug( $thisCatgegoryNode.attr('categoryID') ) : nCategoryIndex;

	        	categoriesCollection[sCategoryID] = {
	        		name 		: sThisCategoryName,
	        		index 	 	: sCategoryID,
	        		slug 		: fnMisc.convertToSlug( sThisCategoryName )
	        	};

	        	/*
					loop through the products of this category
	        	*/
	        	$thisCatgegoryNode.find('product').each(function(){

	        		var $thisProductNode 	= $(this),
	        			nOldPrice			= $thisProductNode.attr('oldPrice'),
	        			sThisProductName 	= $thisProductNode.attr('productName'),
	        			sProductID 			= $thisProductNode.attr('productID') 
	        									? fnMisc.convertToSlug( $thisProductNode.attr('productID') ) : nProdductIndex,
	        			nProductPrice 		= $thisProductNode.attr('productPrice');

	        		/*
						Products
	        		*/
	        		var oThisProduct = allProductsCollection[sProductID] = {
	            		name 				: sThisProductName,
	            		slug 				: fnMisc.convertToSlug( sThisProductName ),
	            		thumbPath 			: $thisProductNode.attr('thumbPath'),
	            		price 				: $thisProductNode.attr('productPrice'),
	            		formattedPrice 		: fnMisc.formatAmount( nProductPrice ),
	            		fullFormattedPrice	: fnMisc.fullFormatAmount( nProductPrice ),
	            		oldPrice			: nOldPrice ? {
	            			fullFormatted		: fnMisc.fullFormatAmount( nOldPrice ),
	            			formatted 			: fnMisc.formatAmount( nOldPrice ),
	            			price 	 			: nOldPrice
	            		} : null,
	            		id		 			: $thisProductNode.attr('productID'),
	            		index 				: sProductID,
	            		categoryIndex 		: sCategoryID,
	            		details 			: $thisProductNode.find('details').text(),
	            		options 			: {
	            			sizes 	: [],
	            			colors	: []
	            		}
	            	};

	            	/*
						product size options
	        		*/
	            	$thisProductNode.find('size').each(function(){

	            		var $thisSizeOption = $(this);

	                    oThisProduct.options.sizes.push({
	                    	name 	: $thisSizeOption.text(),
	                    	value 	: ($thisSizeOption.attr('value') ? 
	                    		$thisSizeOption.attr('value') : $thisSizeOption.text() 
	                    		)
	                    });
	                });

	            	/*
						product color options
	        		*/
	                $thisProductNode.find('color').each(function(){

	            		var $thisColorOption = $(this);

	                    oThisProduct.options.colors.push({
	                    	name 	: $thisColorOption.text(),
	                    	value 	: ($thisColorOption.attr('value') ? 
	                    		$thisColorOption.attr('value') : $thisColorOption.text() 
	                    		)
	                    });
	                });

	                /*
						increment product index
	        		*/
	        		nProdductIndex++;
	        	});

				/*
					increment category index
        		*/
	        	nCategoryIndex++;
	        });

		/*
			we have all the data lets setup a store
		*/
		storeFuncs.loadExistingCartItems();

        }}).fail(function( e ){
        	$domElements.storeWaitingText.html( 'products loading failed!!' )
        	$domElements.storeLoaderStatusText.html( e.statusText );
        });

	}}).fail(function( e ){
        	$domElements.storeWaitingText.html('configuration loading failed!!')
        	$domElements.storeLoaderStatusText.html(e.statusText);
        });

	var storeFuncs = {
		/* 
			setup categories
		*/
		setupCategories : function() {

		$domElements.categoriesList.find(".active-category").after(
				_templates.sidebarCategories ( {categoriesCollection:categoriesCollection} )
			);

			storeFuncs.setupStore();
		},

		/*
			Retrive Cart from local storage & update cart
		*/
		loadExistingCartItems 	: function(){

		    var sRetrivedExistingCartCollation = $.jStorage.get(generalVars.cartStorageName),
		    	retrivedExistingCartCollation = $.parseJSON(sRetrivedExistingCartCollation);
		    if( retrivedExistingCartCollation && retrivedExistingCartCollation.length ){
		        cartProductsCollection = retrivedExistingCartCollation;
		    }

			storeFuncs.updateCart();
		    storeFuncs.setupCategories();
		},
		/* 
			setup products 
		*/
		setupStore 				: function() {

			storeFuncs.onAllComplete();
		},
		/* 
			setup products 
		*/
		categoryLinkAction 		: function(e) {
			generalVars.preventHashChangedAction = false;
		},
		/* 
			load products for current catgeory
		*/
		loadCategoryProducts : function( sCategoryID ) {

			storeFuncs.clearSearchResult( true );

			if(sCategoryID == 'all') {
				currentProductCollection = allProductsCollection;
				storeFuncs.updateBreadCrumb('all');
			} else {
				currentProductCollection = _.filter(allProductsCollection, function(productObj){ 
				if(productObj.categoryIndex == sCategoryID) {
						return productObj;
					}
				});

				storeFuncs.updateBreadCrumb(categoriesCollection[sCategoryID]);
			};

			fnMisc.goToTop();

			$domElements.categoriesList.find( 'li' ).removeClass( 'active-category' );
			$domElements.categoriesList.find( '.category-list-item-'+sCategoryID ).addClass('active-category');

			generalVars.lastAccessedCategory = sCategoryID;

			storeFuncs.generateProductsThumbs();

		},
		/* 
			List out the products on page
		*/
		generateProductsThumbs 	: function() {

			if($domElements.productsContainer.data('masonry'))
			{
				$domElements.productsContainer.masonry( 'destroy' )
			}

			$domElements.productsContainer.html(
				_templates.productsGrid( {currentProductCollection:currentProductCollection} )
			);

			$domElements.storeLoaderStatusText.remove();
			$domElements.loaderContainer.show();

			$domElements.productsContainer.imagesLoaded( function() {
		      $domElements.productsContainer.masonry({
		        itemSelector	: '.product-item',
		        "gutter": 10
		      });

		       $('.product-item').addClass('fade-in');
		       $domElements.loaderContainer.hide();

		    });
		},
		/* 
			On serach click
		*/
		onSearch 		: function() {

			clearTimeout(generalVars.searchDelayTimeout);

			/* 
				wait for some time if user still typing
			*/
			generalVars.searchDelayTimeout 	= setTimeout(function() {

			if($domElements.searchInput.val() == ""){
				return false;
			}

			$domElements.clearSearchBtn.removeAttr('disabled');

			var oURLData = fnMisc.dataFromURL();
			
			if(oURLData.hasOwnProperty( 'search' )) {
				if ( generalVars.preventHashChangedAction ) {
					generalVars.preventHashChangedAction = false;
					return false;
				}
				storeFuncs.searchProduct();
			} else {
				location.hash = "#/search";
			}
				
			}, 300);
		
		},
		/*
			Clear search result
		*/
		clearSearchResult 	: function(preventSearchResult) {

			$domElements.searchInput.val("");
			$domElements.clearSearchBtn.attr('disabled', '');
			$domElements.searchedProductCounts.html('');

			if(!preventSearchResult)
			{
				storeFuncs.searchProduct();
			}
		},
		/*
			Search for product
		*/
		searchProduct 	: function() {

			$domElements.categoriesList.find('li').removeClass('active-category');

			var sSearchTerm 	= $domElements.searchInput.val(),
				aSeachTerm 		= sSearchTerm.toLowerCase().split(' ');

				
				searchedProductsCollection = allProductsCollection;
				var tempSearchProductCollection = [];

				for ( var i = 0; i < aSeachTerm.length; i++ ) {
					
					var sCurrentSearchTermWord = aSeachTerm[i];

					tempSearchProductCollection = [];
					
					for ( var nProductItem in searchedProductsCollection ) {

						var oProduct = searchedProductsCollection[nProductItem],
							sProductString = oProduct.name.toLowerCase();

							if( configOptions.searchProductDetails ) {
								sProductString += oProduct.details.toLowerCase();
							}


						if ( sProductString.indexOf( sCurrentSearchTermWord ) > -1 ) {
							tempSearchProductCollection.push(oProduct);
						}
	        		}

	        		searchedProductsCollection = tempSearchProductCollection;

				};

				generalVars.lastAccessedCategory = 'search';

				$domElements.searchedProductCounts.html(searchedProductsCollection.length + ' product(s) found');

				if( ! _.isEqual(currentProductCollection, searchedProductsCollection) ) {

					currentProductCollection = searchedProductsCollection;
					storeFuncs.generateProductsThumbs();

				}
		},
		/* 
			show product details 
		*/
		productDetails : function( nProdductIndexID ) {

			oCurrentProductData 	= allProductsCollection[nProdductIndexID];

			if( !oCurrentProductData ) {
				return false;
			}

			selectedProductOptions 	= {
				color 	: ( oCurrentProductData.options.colors && oCurrentProductData.options.colors[0] ) 
					? oCurrentProductData.options.colors[0].value : null,
				size 	: ( oCurrentProductData.options.sizes && oCurrentProductData.options.sizes[0] ) 
					? oCurrentProductData.options.sizes[0].value : null
			};

			nProductInCart = storeFuncs.itemExistInCart();


			$domElements.modalContainer.html(
				_templates.productsDetailsModal( {
					oCurrentProductData:oCurrentProductData,
					categoriesCollection:categoriesCollection
				} )
			);


			 storeFuncs.updateAddToCartBtn();
			 storeFuncs.openModal();
		},
		/* 
			show shopping cart 
		*/
		showShoppingCart : function( oOptions ) {

			$domElements.modalContainer.html(
				_templates.shoppingCartModal( { 
					cartProductsCollection: cartProductsCollection,
					allProductsCollection: allProductsCollection,
					configOptions: configOptions,
					fnMisc: fnMisc,
					generalVars: generalVars,
					cartStats: cartStats
				} )
			);

			if(oOptions && oOptions.preventModelReLoad) {
				return false;
			} 

			storeFuncs.openModal();

			storeFuncs.updateAddToCartBtn();
			 

		 	if( !generalVars.isStoreLoaded )
			{
				storeFuncs.loadCategoryProducts( 'all' );
			}
		},
		/* 
			let the system know that you back from any of the modal functionality 
			& it don't need to rearange products of that particuler category 
		*/
		backFromModal 			: function() {

			$domElements.mainContainer.removeClass('main-container-addtions');

			if( generalVars.preventHashChange ) {
				generalVars.preventHashChange = false;
				return false;
			}

			generalVars.preventHashChangedAction = true;

			if( generalVars.lastAccessedCategory == 'search' ) {
				location.hash = "#/search";
			} else {
				location.hash = "#/category/uid-"+generalVars.lastAccessedCategory;
			}
		},	
		/* 
			Update add to cart button based on the existance of that product with selected categories 
		*/
		updatedSelectedOption 	: function( e ) {
			e.preventDefault();

			var $this 				= $(this),
			bProductSizeSelector 	= $this.hasClass('product-size-selector'),
			sCurrentOptionSelected 	= $this.find('option:selected').val();

			if(bProductSizeSelector) {
				selectedProductOptions.size = sCurrentOptionSelected;
			} else {
				selectedProductOptions.color = sCurrentOptionSelected;
			}

			return storeFuncs.updateAddToCartBtn();
		},
		/* 
			add (or increment product quantity if already in cart) product to cart 
		*/
		addToCart 	: function( e ) {
			e.preventDefault();

            for ( var nCartItem in cartProductsCollection ) {
            	var oCurrentCartItem = cartProductsCollection[nCartItem];

                if ( oCurrentCartItem.index == oCurrentProductData.index && 
                	oCurrentCartItem.size == selectedProductOptions.size && 
                	oCurrentCartItem.color == selectedProductOptions.color ) {
                	/*
						Update if already in cart
                	*/
                    oCurrentCartItem.qty++;

                	storeFuncs.updateCart();
                    return storeFuncs.updateAddToCartBtn();
                }
            }

            /*
				Its not in the cart, lets add it.
        	*/
            cartProductsCollection.push({
            	index 	: oCurrentProductData.index,
            	size 	: selectedProductOptions.size,
            	color 	: selectedProductOptions.color,
            	qty 	: 1
            });

            storeFuncs.updateCart();
            return storeFuncs.updateAddToCartBtn();
		},
		/*
			Update Shopping cart
		*/
		updateCart 		: function(){

			cartStats.totalItems 	= 0;
			cartStats.subTotal 		= 0;
			/*
				Store cart in storage, so on refresh of page we can get it again
			*/
            $.jStorage.set( generalVars.cartStorageName, $.toJSON( cartProductsCollection ) );


            for (var nCartItem in cartProductsCollection) {
            	var oCurrentCartItem 		= cartProductsCollection[nCartItem],
            		oCurrentProductItem 	= allProductsCollection[oCurrentCartItem.index];

            		if( !oCurrentProductItem ) {
            			cartProductsCollection = new Array();
            			break;
            		}

                	cartStats.totalItems 	+= oCurrentCartItem.qty;
                	cartStats.subTotal 	 	+= (oCurrentProductItem.price * oCurrentCartItem.qty);
            }

            cartStats.amountFormatted 	= fnMisc.fullFormatAmount(cartStats.subTotal); 

            generalVars.enableOrderBtn = (cartProductsCollection.length > 0 ) ? true : false;
            
            $domElements.shoppingCartBtnContainer.html(
				_templates.shoppingCartBtn( {cartStats:cartStats} )
			);

		},
		/*
			Update product qty from the cart
		*/
		updateCartItemQty 		: function() {
			clearTimeout( generalVars.qtyUpdateTimeout );
			var $this 			= $(this),
				nQtyValue 		= new Number( $this.val() ),
				nCartRowIndex 	= $this.data('cartrowindex');

				if(nQtyValue < 1) {
					$this.val(1);
					return false;
				}

				generalVars.qtyUpdateTimeout 	= setTimeout(function() {
				cartProductsCollection[nCartRowIndex].qty = nQtyValue;
				storeFuncs.updateCart();

				storeFuncs.showShoppingCart( { preventModelReLoad:true } );
			}, 300);
		},
		/*
			Remove product from cart
		*/
		removeCartItem 		: function(e) {
			var nCartRowIndex 		= $(this).data('cartrowindex');

				cartProductsCollection.splice(nCartRowIndex, 1)
				storeFuncs.updateCart();
				storeFuncs.showShoppingCart( { preventModelReLoad:true } );
		},
		/* 
			Update add to cart button to update
		*/
		updateAddToCartBtn 		: function() {

			$domElements.addToCartBtnContainer 	= $('#addToCartBtnContainer');
			nProductInCart = storeFuncs.itemExistInCart();

			$('#addToCartBtnContainer').html(
				_templates.addToCartBtn( { nProductInCart: nProductInCart } )
			);

			 return nProductInCart;
		},
		/*
			Check if the product already in cart with selected options
		*/
		itemExistInCart 	: function() {
			for (var nCartItem in cartProductsCollection) {
            	var oCurrentCartItem = cartProductsCollection[nCartItem];

                if ( oCurrentCartItem.index == oCurrentProductData.index && 
                	oCurrentCartItem.size == selectedProductOptions.size && 
                	oCurrentCartItem.color == selectedProductOptions.color ) {
                    return oCurrentCartItem.qty;
                }                
            };

            return false;
		},
		/*
			Breadcrumb on product Mouseover
		*/
		updateBreadCrumbOnOver 	: function(){
		var nMouseOveredProductIndexID 		= $(this).data('productindex'),
			getMouseOveredProudct 			= allProductsCollection[nMouseOveredProductIndexID],
			getMouseOveredProudctCategory	= categoriesCollection[getMouseOveredProudct.categoryIndex];

			storeFuncs.updateBreadCrumb(getMouseOveredProudctCategory, getMouseOveredProudct);
		},
		/*
			Update product breadcrumb values
		*/
		updateBreadCrumb 	: function(oProudctCategory, oProduct){

			if( oProudctCategory == 'all') {
				$domElements.productsBreadcrumb.html('<li><a data-categoryindex="all" href="#/category/uid-all" class="category-link-all category-link">All</a></li>');
			} else {
				$domElements.productsBreadcrumb.html(
					'<li><a data-categoryindex="all" href="#/category/uid-all" class="category-link-all category-link">All</a></li>' + ' <span class="divider">/</span> ' +
						'<li><a data-categoryindex="all" href="#/category/uid-' 
						+ oProudctCategory.index + '" class="category-link-' 
						+ oProudctCategory.index + ' category-link">'
						+ oProudctCategory.name +'</a></li>' + ( (oProduct) ? ' <span class="divider">/</span> <li>'+ oProduct.name +'<li>' : '</li>')
				);
			}
		},
		/*
			Go to submit order form
		*/
		proceedToOrderByEmail 	: function(e) {
			e.preventDefault();

			generalVars.preventHashChange = true;

			if(!generalVars.enableOrderBtn) {
				return false;
			} else {
				storeFuncs.closeAllModals();

				clearTimeout(generalVars.showSubmitOrderTimeout);
				generalVars.showSubmitOrderTimeout 	= setTimeout(function() {
					
					$domElements.modalContainer.html(
						_templates.submitOrderFormModal
					);

					storeFuncs.openModal();

					$('#submitOrderForm').validate();
					$('.required').on('keyup change', storeFuncs.validateSubmitOrderForm);

				}, 500);
			};
		},
		/*
			Submit Order
		*/
		submitOrder 			: function(e) {
			e.preventDefault();

			if( !generalVars.enableOrderBtn ) {
				return false;
			} else if( storeFuncs.validateSubmitOrderForm() ) {

				if(generalVars.isDemoActivate) {
					return storeFuncs.onOrderSubmitted( { 
						adminMailSent:1,
						customerMailSent:1
					} );
				}

				generalVars.enableOrderBtn = false;

				var submitOrderFormData = $('#submitOrderForm').serialize(),
					submitOrderURL = configOptions.submitOrderBaseURL+ storeFuncs.cartProductsURLGeneration() + '&cartLength=' + (cartProductsCollection.length + 1) + '&' + submitOrderFormData;
			
				$.ajax({
					url: submitOrderURL,
					type: 'POST',
					dataType: 'JSON'
				})
				.done(function(returnData) {

					storeFuncs.onOrderSubmitted( returnData );

				})
				.fail(function() {

					generalVars.enableOrderBtn = false;
					$('.order-page-body').html("Order Submission failed, try again");
				});
				
			};

		},

		onOrderSubmitted : function( oReturnData ) {

			if( oReturnData.adminMailSent ) {

						$('.order-page-header').html("Your Order has been placed.");
					}

			if( oReturnData.customerMailSent ) {

				$('.order-page-body').html("Thank you for your Order, <br /> Order details has been sent to your email.");
			}

			$('#backToCartBtn, #submitOrderBtn').hide();
			$('.order-page-close-btn').show();

			cartProductsCollection = new Array();
			storeFuncs.updateCart();
		},
		/*
			Check if the form is Validated or not
		*/
		validateSubmitOrderForm 	: function() {

			var isSubmitFormValid = $('#submitOrderForm').valid();

			if( isSubmitFormValid ) {
				$('#submitOrderBtn').removeAttr('disabled');
			} else {
				$('#submitOrderBtn').attr('disabled', 'disabled');
			}

			return isSubmitFormValid;

		},
		/*
			User back from Order submit form Modal to Cart
		*/
		backToCartFromSubmitForm 	: function(e) {
				
			e.preventDefault();
			storeFuncs.closeAllModals();

			generalVars.preventHashChange = true;

			clearTimeout( generalVars.showSubmitOrderTimeout );
			generalVars.showSubmitOrderTimeout 	= setTimeout( function() {
				
				storeFuncs.showShoppingCart( { preventModelReLoad:true } );
				storeFuncs.openModal();

			}, 500);
		},
		/*
			PayPal Checkout
		*/
		paypalCheckout 	: function( e ){

    		e.preventDefault();

    		if(!generalVars.enableOrderBtn) {
    			return false;
    		}

    		var paypalCheckoutURL = configOptions.paypalBaseURL+storeFuncs.cartProductsURLGeneration();
	        
	        window.open( paypalCheckoutURL );
		    return true;
		        
		 },
		/*
			Generating URL to send products to mailer script or PayPal
		*/
		cartProductsURLGeneration : function() {

		    var itemsCartIndex = 1,
		    	sCartProductsURL = "";

	        for ( var nCartItem in cartProductsCollection ) {
            	var oCurrentCartItem 	= cartProductsCollection[nCartItem],
            		oCurrentProductData = allProductsCollection[oCurrentCartItem.index];

                sCartProductsURL += '&item_name_'+itemsCartIndex + '=' + oCurrentProductData.name;
                sCartProductsURL += (oCurrentCartItem.size && (oCurrentCartItem.size != 'NA')) ? ( ' Size: ' + oCurrentCartItem.size ) : '';
                sCartProductsURL += (oCurrentCartItem.color && (oCurrentCartItem.color != 'NA')) ? ( ' Color: '+ oCurrentCartItem.color ) : '';
	            sCartProductsURL += '&item_number_'+itemsCartIndex + '=' + oCurrentProductData.id;
	            sCartProductsURL += '&amount_'+itemsCartIndex + '=' + oCurrentProductData.price;
	            sCartProductsURL += '&quantity_'+itemsCartIndex+'=' + oCurrentCartItem.qty;

	            itemsCartIndex ++;
            }

	        return sCartProductsURL;
		},
		/*
			Close all opened Modals
		*/
		closeAllModals 		: function(){
			$domElements.modalCommon.modal('hide');
			$('.modal-backdrop').remove();
		},
		/*
			Open Modal
		*/
		openModal 		: function(){
			storeFuncs.closeAllModals();
			$domElements.modalCommon.modal();
		},
		/*
			Load category based on hash value
		*/
		categoryCalled 		: function( oGetURLData ) {

				if( !oGetURLData.u ) {
					oGetURLData.u = 'all';
				}

				oGetURLData.u = ( categoriesCollection[oGetURLData.u] ) ? oGetURLData.u : 'all';
		
			 	storeFuncs.loadCategoryProducts( oGetURLData.u );
		},
		/*
			Load product details based on hash value
		*/
		productCalled 		: function( oGetURLData ) {

			if( oGetURLData.u ) {
				storeFuncs.productDetails( oGetURLData.u );

				$domElements.mainContainer.addClass('main-container-addtions');

				if( !allProductsCollection[oGetURLData.u] ) {

					storeFuncs.loadCategoryProducts( 'all' );
					return false;
				}

				var nCategoryIndex = allProductsCollection[oGetURLData.u].categoryIndex

				if( !generalVars.isStoreLoaded )
				{
					storeFuncs.loadCategoryProducts( nCategoryIndex );
				}

			} else {

			 storeFuncs.loadCategoryProducts( 'all' );
			}
		},

		onAllComplete 		: function() {

			storeFuncs.closeAllModals();

			var oURLData = fnMisc.dataFromURL();

			if( oURLData.hasOwnProperty( 'category' ) ) {

				if ( generalVars.preventHashChangedAction ) {
					generalVars.preventHashChangedAction = false;
					return false;
				}

				storeFuncs.categoryCalled( oURLData );

			} else if( oURLData.hasOwnProperty( 'search' ) ) {

				if ( generalVars.preventHashChangedAction ) {
					generalVars.preventHashChangedAction = false;
					return false;
				}

				storeFuncs.searchProduct();

			} else if( oURLData.hasOwnProperty( 'product' ) ) {

				storeFuncs.productCalled( oURLData );

			} else if( oURLData.hasOwnProperty( 'shopping-cart' ) ) {

				storeFuncs.showShoppingCart();

				/*if(oURLData.u == 'show') {

					storeFuncs.showShoppingCart();
				}*/				
			} else {
				storeFuncs.loadCategoryProducts( 'all' );
			}

			if( !generalVars.isStoreLoaded )
			{
				generalVars.isStoreLoaded = true;
			}
		}
	};


	$(window).on('hashchange', function() {
	  generalVars.hashChanged = true;
	  storeFuncs.onAllComplete();
	});

	$(window).on( 'resize', fnMisc.resizeNPositioin );

	$domElements.categoriesList.on( 'click', '.category-link', storeFuncs.categoryLinkAction );

	$domElements.modalContainer.on( 'click', '.add-to-cart-btn', storeFuncs.addToCart );

	$domElements.searchInput.on( 'keyup', storeFuncs.onSearch );

	$domElements.clearSearchBtn.on( 'click', 
		function(){
			storeFuncs.clearSearchResult( false );
		});

	$domElements.modalContainer.on( 'change', 
		'.option-selector', storeFuncs.updatedSelectedOption );
	
	$domElements.modalContainer.on( 'keyup change', 
		'input.cart-product-qty', storeFuncs.updateCartItemQty );

	$domElements.modalContainer.on( 'click', 
		'.delete-product-from-cart', storeFuncs.removeCartItem );

	$domElements.modalContainer.on( 'click', 
		'#checkoutWithPaypalBtn', storeFuncs.paypalCheckout );

	$domElements.modalContainer.on( 'click', 
		'#checkoutSubmitOrderBtn', storeFuncs.proceedToOrderByEmail );

	$domElements.modalContainer.on('click', 
		'#submitOrderBtn', storeFuncs.submitOrder );

	$domElements.modalContainer.on( 'click', 
		'#backToCartBtn', storeFuncs.backToCartFromSubmitForm );

	$domElements.goToTop.on( 'click', fnMisc.goToTop);

	$domElements.productsContainer.on( 'mouseover', 
		'.product-item', storeFuncs.updateBreadCrumbOnOver );

	$domElements.modalCommon.on( 'hidden hidden.bs.modal', storeFuncs.backFromModal );
});