$(document).ready(function() {
    $("div.card-text").text("hi");
    var dice1 = "images/dice-1.svg";
    var dice2 = "images/dice-2.svg";
    var dice3 = "images/dice-3.png";
    var dice4 = "images/dice-4.png";
    var dice5 = "images/dice-5.png";
    var dice6 = "images/dice-6.png";

    $("#throw").click(function() {
        var num = 0;
        var x = 1;
        var interval = setInterval(function() {
            num += 1;
            x = Math.floor((Math.random() * 10) + 1) % 6 + 1;
            switch (x) {
                case 1:
                    $("#dice_img").attr("src", dice1);
                    break;
                case 2:
                    $("#dice_img").attr("src", dice2);
                    break;
                case 3:
                    $("#dice_img").attr("src", dice3);
                    break;
                case 4:
                    $("#dice_img").attr("src", dice4);
                    break;
                case 5:
                    $("#dice_img").attr("src", dice5);
                    break;
                case 6:
                    $("#dice_img").attr("src", dice6);
                    break;
                default:
                    $("#dice_img").attr("src", dice1);
            }
            if (num == 30) {
                clearInterval(interval);
                var texts = "點擊按鈕來擲骰子，您的結果是：" + x;
                $("p.card-text").text(texts);
            }
        }, 50);
    });
});