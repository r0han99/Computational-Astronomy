(function ($) {
  $(document).ready(function(){
    $('#fullwidth #menuRow li.menuItem').hover(
      function() {
        $(this).find('.submenu').stop(true, true).show();
        $(this).addClass("over");
      },
      function() {
        $(this).find('.submenu').stop(true, true).hide();
         $(this).removeClass("over");        
      }
    )
    var switch_mobile_menu_1 = function() {
      $('#mobile .mobile-content').slideToggle('slow', function() {
        // Animation complete.
      });
    }
    $('#mobile #mobile-menu').click(function() {
      switch_mobile_menu_1();
    }).keypress(function( event ) {
      if ( event.which == 13 ) {
        switch_mobile_menu_1();
      }
    });
  });
})(jQuery); 

/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Konstantin Jagello | http://javascript-array.com/ 
Modified for ATNF: Arkadi Kosmynin */

var TimeOut         = 300 ;
var currentLayer    = null ;
var currentitem     = null ;
var currentLayerNum = 0 ;
var noClose         = 0 ;
var closeTimer      = null ;
var hoverColor      = 'white' ;
var normalColor     = '#333333' ;

function mswitch( menuName ) {
  if (currentLayer == null) {
    mopen( menuName );
  } else {
    mclose();
  }
}

function mopen( menuName )
{
  var l  = document.getElementById( "menu_" + menuName );
  var mm = document.getElementById( "mmenu_" + menuName ) ;
	
  if ( l )
  {
    mcancelclosetime();
    showMenuDiv( l ) ;
    mm.parentNode.style.background='url(/images/nav-middle.gif) repeat-x' ; 
    mm.style.color = hoverColor ;
    if ( currentLayer && ( currentLayerNum != menuName ) )
       { 
         currentLayer.style.visibility = 'hidden' ;
         var mmm = document.getElementById( "mmenu_" + currentLayerNum ) ;
         mmm.parentNode.style.background='url(/images/spacer.gif) no-repeat' ;
         mmm.style.color = normalColor ;
       }
    currentLayer = l ;
    currentitem = mm ;
    currentLayerNum = menuName ;			
  } else if ( currentLayer )
  {
    currentLayer.style.visibility = 'hidden' ;
    document.getElementById('menuRow').style.backgroundImage='url(/images/menu_normal.gif)' ;
    document.getElementById( "mmenu_" + currentLayerNum ).style.color = "black" ;
    currentLayerNum = menuName ;
    currentitem = null;
    currentLayer = null;
  }
}

function mclosetime()
{ 
mcancelclosetime();
closeTimer = window.setTimeout( mclose, TimeOut ) ; 
}

function mcancelclosetime()
{
  if ( closeTimer )
  { window.clearTimeout( closeTimer ) ; closeTimer = null ; }
}

function mclose(ev)
{
  if( currentLayer && noClose != 1 )  
  {
    currentLayer.style.visibility = 'hidden' ;
    currentitem.parentNode.style.background='url(/images/spacer.gif) no-repeat' ;
    currentitem.style.color=normalColor ;
    currentLayerNum = 0 ;
    currentLayer = null ;
    currentitem = null ;
  } else noClose = 0;
  currentLayer = null;
  currentitem = null;
}

//document.onclick = mclose; 
	
function showMenuDiv( menuDiv )
{
  menuDiv.style.left = "-1000px" ;  
  menuDiv.style.visibility = 'visible' ;
  var td = menuDiv.parentNode ;
  var tr = td.parentNode ;
  var tdX = 0 ;
  var tdY = 0 ;
/*  var offsetPointer = td ;
  while( offsetPointer )
   { tdX += offsetPointer.offsetLeft; tdY += offsetPointer.offsetTop; 
     offsetPointer = offsetPointer.offsetParent;
   }
  var X = tdX ;
*/
  var width = menuDiv.offsetWidth ;
  var X = td.offsetLeft ;
  if ( td.offsetLeft + width > tr.offsetWidth ) X -=  td.offsetLeft + width - tr.offsetWidth ;
  menuDiv.style.left = X + "px" ;
//  menuDiv.style.top = tdY + td.offsetHeight ;
}
