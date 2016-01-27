$( document ).ready(function() {
	
	jQuery(".sidebar-show").hover(function(){
		jQuery(this).removeClass("col-md-1");
		jQuery(this).addClass("col-md-2");
		jQuery(".main").removeClass("col-md-11");
		jQuery(".main").addClass("col-md-10");	
		jQuery(".sidebar-show .nav-sidebar li span").removeClass("hidden");
		jQuery(".sidebar-show .nav-sidebar li i").addClass("hidden");
	},function(){
		jQuery(this).removeClass("col-md-2");
		jQuery(this).addClass("col-md-1");
		jQuery(".main").removeClass("col-md-10");
		jQuery(".main").addClass("col-md-11");		
		jQuery(".sidebar-show .nav-sidebar li span").addClass("hidden");
		jQuery(".sidebar-show .nav-sidebar li i").removeClass("hidden");
	});
	
   // $(".screen-height").css("height",$(".first-banner-area img").height()+"px");
	/*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	
    	parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    $('.registration-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });   
	
	// Multiselect box
	$('select').multipleSelect({
		isOpen: true,
            keepOpen: true,
			width: '100%'
		
	});
	
	//Date picker license form
	$('#licese-start-date').datepicker({
		todayBtn: "linked",
		clearBtn: true,
		//startDate:date();
	});
	$('#licese-end-date').datepicker({		
		clearBtn: true,
		//startDate:date();
	});	
});