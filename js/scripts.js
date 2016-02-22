$(function () {
    var changetime = 5000,
        transitionspeed = 100,
        boss = $(".ful1"),
        bossitems = boss.children("li"),
        itemslen = bossitems.length,
        i = 0,
        change = function () {
            bossitems.eq(i).fadeOut(transitionspeed, function ()  {
                i += 1;
                                if (i === itemslen) {
                    i = 0;
                }
                bossitems.eq(i).fadeIn( 200);
                
            });
                
        };
    bossitems.not(":first").hide();
    setInterval(change, changetime);
});