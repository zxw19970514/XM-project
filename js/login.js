;
var loginOn=false;
//new Login();
if(getCookie('loginon')=='true'){
    console.log($('.use-name-login').children().html());
    $('.use-name-login').children().html(getCookie('name'))
    var str=`欢迎您 ${getCookie('name')}`
    $('#denglu').children().html(str)
    var box=$("<li><a class='zhuxiao'>注销</a></li>")
    $('.headerLeft').append(box);
    $('#zhuce').css('display','none');
    $('#zhuce').next().css('display','none');
}

$('.shopcar').on('mouseover',function(){
    $(this).css('cursor','pointer');
})

$('.shopcar').on('click',function(){
    if(getCookie('loginon')=='true'){
        window.location.href="car.html"
    }else{
        alert('请先登陆');
    }
})

$('.zhuxiao').on('click',function(){
    removeCookie('name');
    setCookie('loginon','flase');
    window.location.href="index.html";
})

$('.tijiao').on('click',function(){
    setCookie('listtype',$('.key').val())
    window.open('list.html')
})

$('#numberId').html(JSON.parse(localStorage.getItem('goods')).length)
;