'use strict';
   
$(document).ready(function(){

   ymaps.ready(init);
   var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.95197423, 30.10675449],
            zoom: 10,
            controls: ['zoomControl']
        });

        myMap.behaviors.disable("scrollZoom");

    };

transformicons.add('.tcon') // add default behavior for all elements with the class .tcon
              .remove('.tcon-menu--xcross') // remove default behavior for the first icon
              .add('.tcon-menu--xcross', {
                  transform: "click",
                  revert: "click"

              }); // add new behavior for the first icon


var 
    clickDelayTimer = null,
    documentBody = $('body'),
    navMenu = $('#mobile-nav'),
    mapNav = $('#map__nav-btn');

    

$('.header__nav--mobile').on('click', function(){

  if(!navMenu.hasClass('active')) {
    navMenu.addClass('active');
    documentBody.css('overflow-y', 'hidden');
  } else {
    navMenu.removeClass('active');
    documentBody.css('overflow-y', 'auto');

  };               
});

   if (screen.width >= 1024) {         
      navMenu.removeClass('active');
      documentBody.css('overflow-y', 'scroll');

   };



$('.map__nav').on('click', function(){

if(!mapNav.hasClass('active')) {
  mapNav.addClass('active');
  
  } else {
    mapNav.removeClass('active');

      };           
    });




});



       

            
  

   

 

    



   