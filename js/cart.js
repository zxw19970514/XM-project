;
class Car123{
    constructor(){
        this.tbody=document.querySelector('tbody');
        this.num1=0;
        this.sum1=0;
        this.flag=0;
        this.load();
        this.addEvent();
    }
    load(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/goods.json",
            success:function(a,b,c){
                that.res=a;
                that.setlocal();
            },
        })
    }
    setlocal(){
        this.user=getCookie('name');
        this.goods=localStorage.getItem(this.user+'goods')? JSON.parse(localStorage.getItem(this.user+'goods')):[];

        this.display();
    }
    display(){
        $('.car-empty').css('display','block');
        if(localStorage.getItem(this.user+'goods')!='[]'){
            $('.car-empty').css('display','none');
            var str="";
            for(var i=0;i<this.res.length;i++){
                for(var j=0;j<this.goods.length;j++){
                    if(this.res[i].goodsId == this.goods[j].id){
                        // this.num1+=parseInt(this.goods[j].num);
                        var nn=this.res[i].price;
                        nn=nn.substr(1,4);
                        // this.sum1+=nn*this.goods[j].num;
                        str+=`<tr index="${this.res[i].goodsId}">
                            <td><input type="checkbox" name="good" class="good"></td>
                            <td><img src="${this.res[i].url}"></td>
                            <td>${this.res[i].name}</td>
                            <td>${this.res[i].price}</td>
                            <td style="width:50px"><input style="width:50px" type="number" value="${this.goods[j].num}" class="num" ></td>
                            <td class="priceSum">${this.res[i].price*this.goods[j].num}</td>
                            <td class="delete">删除</td>
                        </tr>`
                    }
                }
            }
            str+=`<tr>
                    <td>全选:<input type="checkbox" class="boxId" id="bbox"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td id="snum">${this.num1}</td>
                    <td id="ssum">${this.sum1}</td>
                    <td><div class="lkf">
                    <i class="submit">提交订单</i>
                </div></td>
                </tr>`
            this.tbody.innerHTML=str;
            }else if(localStorage.getItem(this.user+'goods')=="[]"){
                $('.car-empty').css('display','block');
                $('.ttt').css('display','none');
            }
    }
    addEvent(){
        var that=this;
        $('tbody').on('click.qwe',function(){
            var tar=event.target;
            if(tar.name=="good"){
                    var str="";
                    var s=0;
                    for(var i=0;i<$('.good').length;i++){
                        if(!$('.good').eq(i)[0].checked){
                            $('.boxId')[0].checked=false;
                            that.flag=0;
                        }
                    }
                    for(var i=0;i<$('.good').length;i++){
                        if($('.good').eq(i)[0].checked){
                            s+=1;
                            console.log($('.good').length,s);
                            if(s==$('.good').length){
                                $('#bbox')[0].checked=true;
                            }
                        }
                    }
                    if(tar.checked){
                        that.id= $(tar).parent().parent().attr("index");
                        that.goods=localStorage.getItem(that.user+'goods')? JSON.parse(localStorage.getItem(that.user+'goods')):[];
                        console.log(that.goods)
                        for(var j=0;j<that.goods.length;j++){
                        if(that.goods[j].id==that.id){
                            that.num1+=parseInt(that.goods[j].num);
                            that.sum1+=parseInt(that.goods[j].num*$(tar).parent().parent().children().next().next().next().html());
                            
                        }}
                        $('#snum').html(that.num1);
                        $('#ssum').html(that.sum1);
                     
                    }else{
                        that.id=tar.parentNode.parentNode.getAttribute("index");
                        that.goods=localStorage.getItem(that.user+'goods')? JSON.parse(localStorage.getItem(that.user+'goods')):[];
                        for(var j=0;j<that.goods.length;j++){
                        if(that.goods[j].id==that.id){
                            that.num1-=parseInt(that.goods[j].num);
                            that.sum1-=parseInt(that.goods[j].num*$(tar).parent().parent().children().next().next().next().html());
                        }}
                        $('#snum').html(that.num1);
                        $('#ssum').html(that.sum1);
                    }
            }

            if(tar.className == "delete"){
                that.id= $(tar).parent().attr("index");
                $(tar).parent().remove();
                that.setLocal(function(i){
                    that.goods.splice(i,1)
                })
                console.log(localStorage.getItem(that.user+'goods'))
                if(localStorage.getItem(that.user+'goods')=="[]"){
                    $('.car-empty').css('display','block');
                    $('.ttt').css('display','none');
                }
            }

            if(tar.className=="num"){
                if(parseInt($(tar).val())<1){
                    $(tar)[0].value=0;
                }
                that.val = $(tar).val();
                that.id =  $(tar).parent().parent().attr("index");
                var numA=0;
                var priceA=0;
                that.setLocal(function(i){
                    that.goods[i].num = that.val;
                })
                for(var i=0;i<$('.num').length;i++){
                if($('.num').eq(i).parent().parent().find('.good')[0].checked){
                    var te=parseInt($('.num').eq(i).val());
                    numA+=te;
                    var tt=parseInt($('.num').eq(i).val()*$(tar).parent().prev().html());
                    priceA+=tt;
                }}
                $('#snum').html(numA);
                $('#ssum').html(priceA);
                that.num1=numA;
                that.sum1=priceA;
                $(tar).parent().next().html(that.val*$(tar).parent().prev().html())
                // that.display();
            }

            if(tar.className=="boxId"){
                var numA=0;
                var priceA=0;
                this.num1=0;
                this.sum1=0;
                if(that.flag==0){
                    for(var i=0;i<$('.good').length;i++){
                        $('.good')[i].checked=true;
                    }
                    that.flag=1;
                    for(var i=0;i<$('.num').length;i++){
                        numA+=parseInt($('.num').eq(i).val());
                        priceA+=parseInt($('.priceSum').eq(i).html());
                    }
                    $('#snum').html(numA);
                    $('#ssum').html(priceA);
                    that.num1=numA;
                    that.sum1=priceA;
                }else{
                    for(var i=0;i<$('.good').length;i++){
                        $('.good')[i].checked=false;
                    }
                    that.flag=0;
                    that.sum1=0;
                    that.num1=0;
                    $('#snum').html(0);
                    $('#ssum').html(0);
                }
            }
        })
    }
    setLocal(fn){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                fn(i);
            }
        }
        localStorage.setItem(this.user+"goods",JSON.stringify(this.goods));
    }
}

new Car123();

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
    $('.zhuxiao').on('click',function(){
        removeCookie('name');
        setCookie('loginon','flase');
        window.location.href="index.html";
    })

if($('#shopnn').val()<=0){
    $('#shopnn').val()=0;
}
;