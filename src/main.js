$(document).ready(function(){var e=$("header"),a=$("h1"),r={menu:$("menu"),burger:$(".menu-burger"),elementBurger:$(".menu-burger-item")},s=!1;r.burger.on("click",function(){s?(r.menu.removeClass("active"),r.burger.removeClass("active"),r.elementBurger.removeClass("active"),a.removeClass("active"),e.removeClass("active"),s=!1):(r.menu.addClass("active"),r.burger.addClass("active"),r.elementBurger.addClass("active"),a.addClass("active"),e.addClass("active"),s=!0)})});