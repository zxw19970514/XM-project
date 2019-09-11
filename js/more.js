;
$('.plus').on('click',function(){
    var count=parseInt($('.count').val());
    count++;
    $('.count').val(count);
})
$('.minus').on('click',function(){
    var count=parseInt($('.count').val());
    if(count==0){
        $('.minus').css('cursor','not-allowed');
    }else{
        count--;
    }
    $('.count').val(count);
})
$("#exzoom").exzoom({
    "navWidth": 60,//列表每个宽度,该版本中请把宽高填写成一样
    "navHeight": 60,//列表每个高度,该版本中请把宽高填写成一样
    "navItemNum": 5,//列表显示个数
    "navItemMargin": 7,//列表间隔
    "navBorder": 1,//列表边框，没有边框填写0，边框在css中修改
    "autoPlay": true,//是否自动播放
    "autoPlayTimeout": 2000,//播放间隔时间
});

info=JSON.parse(getCookie('current'));
str1=`<p><span>品牌:</span>${info.pinpai}</p>
        <p><span>型号:</span>${info.xinghao}</p>
        <p><span>颜色:</span>${info.yanse}</p>
        <p><span>操作系统:</span>${info.xitong}</p>
        <p><span>CPU型号:</span>${info.CPU}</p>
        <p><span>机身内存:</span>${info.jicun}</p>
        <p><span>运行内存:</span>${info.yuncun}</p>
        <p><span>屏幕尺寸:</span>${info.pinmu}</p>
        <p><span>后置摄像头:</span>${info.shexiang}</p>
        <p><span>电池更换:</span>${info.dianchi}</p>`
$('.more-info').html(str1);
$('.exzoom_img_ul').find('img').attr("src",info.url)
$('.more-hgroup').find('h1').html(info.name);
$('.more-hgroup').find('h4').html(info.mes);
$('#prdPrice').html(info.price);


if(getCookie('loginon')=='true'){
        console.log($('.use-name-login').children().html());
        $('.use-name-login').children().html(getCookie('name'))
        $('#denglu').children().html('欢迎您 '+getCookie('name'))
        $('#zhuce').css('display','none');
        $('#zhuce').next().css('display','none');
    }
class Addcart{
    constructor(){
        this.addEvent();
    }
    addEvent(){
        var that=this;
        var user=getCookie('name');
        $('.addCart').on('click',function(){
            that.goods=localStorage.getItem(user+"goods")?JSON.parse(localStorage.getItem(user+'goods')):[];
            var nnum=parseInt($('.count').val());

            if(that.goods.length<1){
                that.goods.push({
                    id:info.goodsId,
                    num:nnum
                })
            }else{
                var i;
                //console.log(this.goods);
                var o = that.goods.some((val,index)=>{
                    i = index;
                    console.log(val.id,info.goodsId)
                    return val.id == info.goodsId;
                })
                if(o){
                    that.goods[i].num=nnum;
                }else{  
                    that.goods.push({
                        id:info.goodsId,
                        num:nnum
                    })
                }
            }
            localStorage.setItem(user+"goods",JSON.stringify(that.goods));
            if(getCookie('loginon')=='true'){
                $('#numberId').html(JSON.parse(localStorage.getItem(user+'goods')).length)
            }else{
                $('#numberId').html(0)
            }
        })
    }
}
new Addcart();
$('.addCart').shoping({
    endElement: ".shopnum", //结束元素节点，即页面上购物车位置
    iconCSS: "", //飞过的图片样式
    iconImg: "img/cart.png", //飞过的图片信息
    endFunction: function(element) { //动画结束后的回调
    }
})
;