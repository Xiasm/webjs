/**
 * Created by root on 17-7-13.
 */

// 一下代码就表示页面加载完成
// $(function () {
//
// });

var timer;
var i = 0;

$(document).ready(function () {
    //第零步：鼠标放到图片上，显示左右两个按钮
    $("#container").hover(
        function () {
            $(".btn").show();
        },
        function () {
            $(".btn").hide();
        }
    );

    //第一步：页面打开之后，让第一张图片显示，其余图片不显示
    $(".simgclass").eq(0).show().siblings().hide();
    $(".tabclass").eq(i).addClass("bg").siblings().removeClass("bg");

    //第二步：轮播,间隔4秒换下一张图片
    showTime();

    //hover()函数，鼠标移上去执行第一个函数，鼠标离开执行第二个函数
    $(".tabclass").hover(
        function () {
            //将当前鼠标放在的tab上索引给i
            i = $(this).index();
            show();

            //清除轮播
            clearInterval(timer);
        },
        function () {
            showTime();
        }
    );

    $(".btnLeft").click(function () {
        clearInterval(timer);
        if (i === 0)
        {
            i = 6;
        }
        i--;
        show();
        showTime();
    });

    $(".btnRight").click(function () {
        clearInterval(timer);
        if (i === 5)
        {
            i = -1;
        }
        i++;
        show();
        showTime();
    });

});

function show() {
    $(".simgclass").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".tabclass").eq(i).addClass("bg").siblings().removeClass("bg");
}

function showTime() {
    timer = setInterval(function () {
            i++;
            if (i === 6) {
                i = 0;
            }
            show();
        }
        , 4000);
}

//setInterval（）传入这个方法不行，可能是因为变量的生命周期
// function changeImage(i) {
//     i++;
//     if (i === 6)
//     {
//         i = 0;
//     }
//     $(".simgclass").eq(i).fadeIn(300).siblings().fadeOut(300);
// }