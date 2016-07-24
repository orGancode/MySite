/**
 * Created by UFEI on 2016/7/23.
 */
$(function () {
    $('#mainIntro').css('height',document.documentElement.clientHeight+'px');//测试过发现都支持此方式
    document.onscroll=function(){
        if($(document).scrollTop()>=10){
            $('#head').css({'top':'2px','box-shadow':'0px 1px 30px #000','background-color':'#1a1a1a','border-bottom': '1px solid #8c8c8c','opacity':'0.5'});
            $('.toTop').fadeIn();
        }
        else{
            $('#head').css({'top':'0','box-shadow':'','background-color':'','border-bottom': '','opacity':'1'});
            $('.toTop').fadeOut();
        }
        //$('#head').animate({'top':'-100px'},10);
    };
    $('.toTop').on('click', function () {
        $(document).scrollTop(0);
    });
});


