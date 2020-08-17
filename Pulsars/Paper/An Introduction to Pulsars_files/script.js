(function ($) {
  Drupal.fix_admin_top = function() {
    if ($('#admin-menu').length>0) {
      var pos_top = $('#admin-menu').position().top;
      var pos_old_top = parseFloat($('#admin-menu').css('top'));
      $('#admin-menu').css('top', (pos_old_top-pos_top)+'px');
    }
  }
 $(document).ready(function(){
	$('img').css("max-width","100%");
	$('img').css("height","auto");
  if (typeof Drupal.a11y.textsize != 'undefined') {
    setTimeout(function() {Drupal.fix_admin_top();},1200);
    Drupal.a11y.old_textsize = Drupal.a11y.textsize;
    Drupal.a11y.textsize = function(scale) {
      if ($('#admin-menu').length>0) {
        $('#admin-menu').css('top', '0px');
      }
      Drupal.a11y.old_textsize(scale);
      Drupal.fix_admin_top();
    }
  }
});
})(jQuery); 

      


(function ($) {
 $(document).ready(function(){
var placeholder='Search'
$("#search-block-form .form-text").val(placeholder);
	$("#search-block-form .form-text").focus(function() {
		if($(this).val()==placeholder) {
			$(this).val('');
		}
	});
	$("#search-block-form .form-text").blur(function() {
		if($(this).val()=='') {
			$(this).val(placeholder);
		}
	});
 });
})(jQuery); 


/*-----------------------------------------------------------------------------------------------*/
/*                                      SIMPLE jQUERY TOOLTIP                                    */
/*                                      VERSION: 1.1                                             */
/*                                      AUTHOR: jon cazier                                       */
/*                                      EMAIL: jon@3nhanced.com                                  */
/*                                      WEBSITE: 3nhanced.com                                    */
/*-----------------------------------------------------------------------------------------------*/
(function ($) {
$(document).ready(function() {
	$('.toolTip').hover(
		function() {
		this.tip = this.title;
		$(this).append(
			'<div class="toolTipWrapper">'
				+'<div class="toolTipTop"></div>'
				+'<div class="toolTipMid">'
					+this.tip
				+'</div>'
				+'<div class="toolTipBtm"></div>'
			+'</div>'
		);
		this.title = "";
		this.width = $(this).width();
		$(this).find('.toolTipWrapper').css({left:this.width-22})
		$('.toolTipWrapper').fadeIn(300);
	},
	function() {
		$('.toolTipWrapper').fadeOut(100);
		$(this).children().remove();
			this.title = this.tip;
		}
	);
});
})(jQuery);