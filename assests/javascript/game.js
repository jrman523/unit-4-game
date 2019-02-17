$(document).ready(function () {
    var pick = $("#pick");
    var enemy = $("#enemy");
    var attacker = $("#attacker");
    var defender = $("#defender");
    var Ahealth = null;
    var Dhealth = null;
    var attackA = 0; 
    var originalAttackA = 0;
    var attackD = 0;
    var attackerCheck = false;
    var defenderCheck = false;
    $('.img').click(function () {
        $(this).addClass('img-attacker');
        while (!attackerCheck) {
            $(".img").each(function (index) {
                if ($(this).hasClass('img-attacker')) {
                    attacker.prepend($('.img-attacker'));
                    attackerCheck = true;
                    var attackerName = $(this).find(':nth-child(1)').html();
                    switch (attackerName){
                        case "Darth Vader":
                            attackA = 25;
                            originalAttackA = 25;
                            break;
                        case "RTD2":
                            attackA = 10;
                            originalAttackA = 10;
                            break;
                        case "Chewbacca":
                            attackA = 5;
                            originalAttackA = 5;
                            break;
                        case "Luke Skywalker":
                            attackA = 17;
                            originalAttackA = 17;
                            break;
                    }
                } else {
                    $(this).addClass('img-enemy');
                    enemy.prepend($(this));
                    defenderCheck = true;
                }
            });
        }
    });

    $('.img').click(function () {
        var defenderName = $(".img-defender").find(':nth-child(1)').html();
        if ($(this).hasClass('img-enemy') && (defenderName == undefined)) {
            defenderCheck = true;
        }
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
        var defenderName = $(".img-defender").find(':nth-child(1)').html();

        if (defenderName != undefined){
            var currentDHealth = parseInt($(".img-defender").find(':nth-child(3)').html());
            var currentAHealth = parseInt(attacker.find(':nth-child(1)').find(':nth-child(3)').html());
            
            switch (defenderName){
                case "Darth Vader":
                    attackD = 25;
                    break;
                case "RTD2":
                    attackD = 15;
                    break;
                case "Chewbacca":
                    attackD = 10;
                    break;
                case "Luke Skywalker":
                    attackD = 20;
                    break;
            }
            if (Dhealth == null) Dhealth = currentDHealth;
            if (Ahealth == null) Ahealth = currentAHealth;
            Dhealth = currentDHealth - attackA;
            Ahealth = currentAHealth - attackD;

            $(".img-defender").find(':nth-child(3)').text(Dhealth);
            attacker.find(':nth-child(1)').find(':nth-child(3)').text(Ahealth);

            if (Dhealth <= 0){
                $(".img-defender").remove();
                if (enemy.children().length <= 0){
                    $("#message1").text("You Won!!!! GAME OVER!!!");
                    $("#attack").prop("disabled",true);
                    $("#restartBtn").show();
                }
                else {
                    $("#message1").text("You have defeated " + defenderName + ", you can choose to fight another enemy.");
                }
                $("#message2").text("");
                Ahealth += attackD;
                attacker.find(':nth-child(1)').find(':nth-child(3)').text(Ahealth);
            }
            else if (Ahealth <= 0){
                $("#message1").text("You have been defeated... GAME OVER!!!");
                $("#message2").text("");
                $("#restartBtn").show();
                $("#attack").prop("disabled",true);
            }
            else {
                $("#message1").text("You attacked " + defenderName + " for " + attackA + " damage.")
                $("#message2").text(defenderName + " attacked you back for " + attackD + " damage.");
            }
            attackA += originalAttackA;
        }
        else {
            $("#message1").text("No enemy here.");
            $("#message2").text("");
        }
    });

    $('#restartBtn').click(function restart() {
        document.location.reload();
    });
});