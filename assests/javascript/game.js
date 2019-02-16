$(document).ready(function() {
    var pick = $("#pick");
    var enemy = $("#enemy");
    var attacker = $("attacker");
    var defender = $("defender");
    var Ahealth = 0;
    var Dhealth = 0; 

   ('.img').click(function(){
    $(this).addClass('img-attacker');
    pick();
   });

   function pick(){
    if ($('.img').hasClass('img-attacker')){
        $('.img-attacker').append(attacker);
    }else{
        $('.img').append(enemy);
        $('.img').addClass('img-enemy');
    }
   }

   ('.img-enemy').click(function(){
    $(this).removeClass("img-enemy");
    $(this).addClass('img-defender');
    $(this).append(defender);
   });
});