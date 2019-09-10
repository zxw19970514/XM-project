;class F_m_l{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/fml.json",
            success:function(res){
                that.res=res;
                that.display();
                var clientH = document.documentElement.clientHeight;
                var aimg = document.querySelectorAll("img");
                var arr = [];
                for(var i=0;i<aimg.length;i++){
                    arr.push(aimg[i])
                }
            
                lazy();
            
                onscroll = function(){
                    lazy();
                }
            
            
                function lazy(){
                    // 滚动的top
                    var scrollT = document.documentElement.scrollTop;
                    console.log(arr)
                    for(var i=0;i<arr.length;i++){
                        // 滚动的top > 图片距离顶部的距离 - 可视区域的高度
                        if(scrollT > arr[i].offsetTop - clientH){
                            // 要出现了，要加载了
                            arr[i].src = arr[i].getAttribute("a-arc");
                            // 当图片已经被加载了，就从数组中将元素删除
                            arr.splice(i,1);
                            // 在循环中改变了数组的成员的排列方式，要将索引，回退1，才能拿到向前补位的成员
                            i--;
                        }
                    }
                }
            }
        })
    }
    display(){
        var str="";
        str=`<div class="fl_title">
                <h2>${this.res[0].title}</h2>
                <span>${this.res[0].disp}</span>
            </div>
            <div class="fl_inner">
                <a href="#"><img a-arc="${this.res[0].img1}" alt="" class="_special"></a>
                <a href="#"><img a-arc="${this.res[0].img2}" alt="" class="img_w199"></a>
                <a href="#"><img a-arc="${this.res[0].img3}" alt="" class="img_w199"></a>
            </div>`
        $('.f_m_l').html(str);
    }
}
class F_m_c{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/fmc.json",
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str="";
        str=`<div class="fl_title">
                <h2>${this.res[0].title}</h2>
                <span>${this.res[0].disp}</span>
            </div>
            <div class="fl_inner">
                <a href="#"><img a-arc="${this.res[0].img1}" alt="" class="_special"></a>
                <a href="#"><img a-arc="${this.res[0].img2}" alt="" class="img_w199"></a>
                <a href="#"><img a-arc="${this.res[0].img3}" alt="" class="img_w199"></a>
            </div>`
        $('.f_m_c').html(str);
    }
}
class F_m_r{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/fmr.json",
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str="";
        str=`<div class="fl_title">
                <h2>${this.res[0].title}</h2>
                <span>${this.res[0].disp}</span>
            </div>
            <div class="fl_inner">
                <div class="f_inner_l">
                    <a href="#" class="line-dash"><img a-arc="${this.res[0].img1}" alt=""></a>
                    <a href="#" class="line-dash"><img a-arc="${this.res[0].img2}" alt=""></a>
                </div>
                <div class="f_inner_r">
                    <a href="#"><img a-arc="${this.res[0].img3}" alt=""></a>
                    <a href="#"><img a-arc="${this.res[0].img4}" alt=""></a>
                    <a href="#"><img a-arc="${this.res[0].img5}" alt=""></a>
                    <a href="#"><img a-arc="${this.res[0].img6}" alt=""></a>
                    <a href="#"><img a-arc="${this.res[0].img7}" alt=""></a>
                    <a href="#"><img a-arc="${this.res[0].img8}" alt=""></a>
                    <a href="#"><img a-arc="${this.res[0].img9}" alt=""></a>
                </div>
            </div>`
        $('.f_m_r').html(str);
    }
}
class Catch{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/catch.json",
            success:function(res){
                that.res=res;
                that.display();
                $('.countdown_lists').terseBanner({
                    arrow:false,
                    btn:false
                });
            }
        })
    }
    display(){
        var str2="";
        var str1="";
        var count=0;
        for(var i=0;i<this.res.length;i++){
            count++;
            str1+=`<div class="first_0 list_li">
                                <a href="#">
                                    <img a-arc="${this.res[i].img}" alt="" width="120" height="120">
                                    <div class="c-price">
                                        <span>¥</span>
                                        <i>${this.res[i].Yprice}</i>

                                        <i class="del">${this.res[i].Zprice}</i>
                                    </div>
                                    <p class="c-name">${this.res[i].name}</p>
                                </a>
                            </div>`
            if(parseInt(count%4)==0){
                str2+=`<li class="first lay">
                            ${str1}
                    </li>`;
                str1="";
            }
        }
        $('.c_list').html(str2);
    }
}
class Category{
    constructor(){
        this.insertTitle();
        this.insertFont();
    }
    insertTitle(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/category.json",
            success:function(res){
                // console.log(res);
                that.res=res;
                // console.log($(".listNav").children().length)
                that.displayTitle();
            }
        })
    }
    displayTitle(){
        var str2="";
        for(var i=0;i<this.res.length;i++){
            var arr=[];
            var str1="";
            for(var a in this.res[i]){
                let o="";
                o=this.res[i][a];
                arr.push(o);
            }
            for(var j=0;j<arr.length;j++){
                str1+=`<a href="#">${arr[j]}</a>`
            }
            str2=`<div class="category-title">${str1}</div>
            <div class="category-content-box"></div>`
            $(".category-left").eq(i).html(str2);
        }
    }
    insertFont(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/category-font.json",
            success:function(res){
                that.res=res;
                // console.log(res);
                that.displayFont();
            }
        })
    }
    displayFont(){
        var str2="";
        for(var i=0;i<this.res.length;i++){
            var arr=[];
            var str1="";
            for(var a in this.res[i]){
                let o="";
                o=this.res[i][a];
                arr.push(o);
            }
            // console.log(arr);
            for(var j=0;j<arr.length;j++){
                str1+=`<div class="category-content"><ul class="category-list" style="width:769px;">
                    <div class="title" style="margin-top: -8px;">${arr[j]}</div>
                    <div class="list" style="width:700px"></div>
                </ul></div>`
            }
            str2=str1
            $(".category-content-box").eq(i).html(str2);
        }
    }
}
class Glist{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/glist.json",
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str="";
        for(var i=0;i<this.res.length;i++){
            str+=`<li>
                    <div class="mai_img">
                        <a href="#"><img a-arc="${this.res[i].img}" alt=""></a>
                    </div>
                    <div class="mai_matter">
                        <div class="matter-title"><a href="#">${this.res[i].title}</a></div>
                        <div class="matter-info"><a href="#">${this.res[i].info}</a></div>
                        <div class="matter-data">
                            <a class="matter-assist" href="javascript:;">${this.res[i].good1}</a>
                            <a class="matter-discuss" href="javascript:;">${this.res[i].good2}</a>
                        </div>
                    </div>
                </li>
            `
            $('#g-list').html(str);
        }
    }
}
class Interest{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/interest.json",
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str="";
        str=`<div><a href="#" class="list-img"><img a-arc="${this.res[0].img}" alt=""></a></div>
            <div class="list-txt-t clearfix">
                <span class="txt-title">
                    <span>设计</span>
                    <a href="#">生活家</a>
                </span>
                <span class="txt-num">
                    成员
                    <span class="list-txt-num">${this.res[0].num1}</span>
                    话题
                    <span class="list-txt-num">${this.res[0].num2}</span>
                </span>
            </div>
            <p class="txt-cont"><a href="#">${this.res[0].cont1}</a></p>
            <p class="txt-cont"><a href="#">${this.res[0].cont2}</a></p>
            <p class="txt-cont"><a href="#">${this.res[0].cont3}</a></p>
            <p class="txt-cont"><a href="#">${this.res[0].cont4}</a></p>`
        $('.interest-wrap').html(str);
    }
}
$('.banner').terseBanner({
    animation:'fade',
    arrow:false,
});
class ListNav{
    constructor(){
        this.insertAjax();
    }
    insertAjax(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/listNav.json",
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str2="";
        var hml=$("#extNav").html();
        for(var i=0;i<this.res.length;i++){
            var arr=[];
            var str1="";
            for(var a in this.res[i]){
                let o="";
                o=this.res[i][a];
                arr.push(o);
            }
            for(var j=0;j<arr.length;j++){
                str1+=`<a href="#">${arr[j]}</a>`
            }
            str1=`<h3>${str1}</h3>`
            str2+=`<li index="${i}">${str1}
                        <div class="category">
                            <div class="category-left"></div>
                            <div class="category-right"></div>
                        </div>
                    </li>`
        }
        $('#listNav').html(str2);
    }
}
new Catch();
new ListNav();
new Category();
new F_m_l();
new F_m_c();
new F_m_r();
new Glist();
new Interest();


$('#listNav').on('mouseenter','li',function(){
    var ind=$(this)[0].getAttribute('index');
    $(this).css({
        "background":"#fff",
    })
    $(this).find('a').css("color","#000");
    $(".extNav").css("display","block");
    $(".category").eq(ind).css("display","block");
    flag1=true;
})
$('#listNav').on('mouseleave','li',function(){
    var ind=$(this)[0].getAttribute('index');  
    $(this).css({
        "background":"#333",
    })
    $(this).find('a').css("color","#fff");
    $(".extNav").css("display","none");
    $(".category").eq(ind).css("display","none");
})

// $('.user-swiper').terseBanner({
//     btn:true,
// })
var clientH = document.documentElement.clientHeight;
var aimg = document.querySelectorAll("img");
var arr = [];
for(var i=0;i<aimg.length;i++){
    arr.push(aimg[i])
}

lazy();

onscroll = function(){
    lazy();
}


function lazy(){
    // 滚动的top
    var scrollT = document.documentElement.scrollTop;
    console.log(arr)
    for(var i=0;i<arr.length;i++){
        // 滚动的top > 图片距离顶部的距离 - 可视区域的高度
        if(scrollT > arr[i].offsetTop - clientH){
            // 要出现了，要加载了
            arr[i].src = arr[i].getAttribute("a-arc");
            // 当图片已经被加载了，就从数组中将元素删除
            arr.splice(i,1);
            // 在循环中改变了数组的成员的排列方式，要将索引，回退1，才能拿到向前补位的成员
            i--;
        }
    }
};
