$(document).ready(function () {
    var pick = $("#pick");
    var enemy = $("#enemy");
    var attacker = $("#attacker");
    var defender = $("#defender");
    var Ahealth = 0;
    var Dhealth = 0;
    var attackA = 0;
    var attackB = 0;
    var attackerCheck = false;
    var defenderCheck = false;
    $('.img').click(function () {
        $(this).addClass('img-attacker');
        while (!attackerCheck) {
            $(".img").each(function (index) {
                if ($(this).hasClass('img-attacker')) {
                    attacker.prepend($('.img-attacker'));
                    attackerCheck = true;
                } else {
                    $(this).addClass('img-enemy');
                    enemy.prepend($(this));
                    defenderCheck = true;
                }
            });
        }
    });

    $('.img').click(function () {
        if (defenderCheck) {
            if ($(this).hasClass('img-enemy')) {
                $(this).addClass('img-defender');
                defenderCheck = false;
                $('.img').each(function (index) {
                    if ($(this).hasClass('img-defender')) {
                        defender.prepend($(this));
                        $(this).removeClass("img-enemy");
                    }
                });
            }
        }
    });

    $('#attack').click(function attack() {
        var test = $('.img-attacker').find('p').val();
        console.log(parseInt(test));
    });
});