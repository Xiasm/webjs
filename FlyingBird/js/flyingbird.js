/**
 * Created by root on 17-7-14.
 */
$(document).ready(function () {
    //得到小鸟对象
    var $bird = $("#dbird");

    //得到小鸟的方位对象 top&left
    var pos = $bird.offset();
    //得到小鸟的尺寸值对象
    var birdSize = {width:$bird.width(), height:$bird.height()};
    //设置小鸟的移动速度
    var speed = 10;

    var currentKeyCodeDir = 39;
    $bird.removeClass().addClass("dir_39");

    $(document).keydown(function (even) {
        var keyCode = even.keyCode;

        if (keyCode !== currentKeyCodeDir) {
            $bird.removeClass().addClass("dir_" + keyCode);
        }
        currentKeyCodeDir = keyCode;
        switch (keyCode) {
            case 37://左
                pos.left -= speed;
                if (pos.left <= -birdSize.width) {
                    pos.left = $(window).width();
                }
                break;
            case 38://上
                pos.top -= speed;
                if (pos.top <= -birdSize.height) {
                    pos.top = $(window).height();
                }
                break;
            case 39://右
                pos.left += speed;
                if (pos.left >= $(window).width()) {
                    pos.left = -birdSize.width;
                }
                break;
            case 40://下
                pos.top += speed;
                if (pos.top >= $(window).height()) {
                    pos.top = -birdSize.height;
                }
            break;
        }

        //更新小鸟的位置
        $bird.offset(pos);
    });
});