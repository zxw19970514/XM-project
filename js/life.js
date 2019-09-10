;
class Life{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/life.json",
            success:function(res){
                that.res=res;
                // console.log(res);
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
        var str1="";
        var str2="";
        for(var i=0;i<this.res.length;i++){
            str1+=`<li>
                    <div class="list-li-box">
                        <a href="#" class="list-img">
                            <img a-arc="${this.res[i].img1}" alt="">
                            <span class="list-bg"></span>
                            <div class="list-cont">
                                <p class="cont-item"><span>${this.res[i].item}</span></p>
                                <p class="cont-tile">${this.res[i].tile}</p>
                                <p class="cont-info">${this.res[i].info}</p>
                            </div>
                        </a>
                    </div>
                    <ul class="list-ul clearfix">
                        <li><a href="#" class="list-img"><img a-arc="${this.res[i].img2}" alt=""></a></li>
                        <li><a href="#" class="list-img"><img a-arc="${this.res[i].img3}" alt=""></a></li>
                        <li><a href="#" class="list-img"><img a-arc="${this.res[i].img4}" alt=""></a></li>
                    </ul>
                </li>`
        }
        str2=`<ul class="list clearfix">
                    ${str1}
                </ul>`
        $('.quality-list').html(str2);
    }
}
new Life();
;