$(document).ready(function(){
   var $header = $('header');
   var $h1 = $('h1');
   var $menu = {
     menu: $('menu'),
     burger: $('.menu-burger'),
     elementBurger: $('.menu-burger-item')
   }
   var menuIsOpen = false;

   $menu.burger.on('click', function(){
      if(menuIsOpen){
          $menu.menu.removeClass('active');
          $menu.burger.removeClass('active');
          $menu.elementBurger.removeClass('active');
          $h1.removeClass('active');
          $header.removeClass('active');
          menuIsOpen = false;
      } else{
          $menu.menu.addClass('active');
          $menu.burger.addClass('active');
          $menu.elementBurger.addClass('active');
          $h1.addClass('active');
          $header.addClass('active');
          menuIsOpen = true;
      }
   });
});
