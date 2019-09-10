;
class Server{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/server.json",
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
        var str1="";
        var str2=""
        for(var i=0;i<this.res.length;i++){
            str1+=`<li class="lists">
                    <a href="#" class="clearfix out">
                        <div class="index-pr">
                            <img a-arc="${this.res[i].img}" alt="" width="120" height="120">
                            <div class="house-ser">
                                <div class="lang">
                                    <span class="point">${this.res[i].point1}</span>
                                </div>
                                <div class="lang">
                                    <span class="point">${this.res[i].point2}</span>
                                </div>
                                <div class="lang">
                                    <span class="point">${this.res[i].point3}</span>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="tittle">${this.res[i].tittle}</div>
                            <div class="price-out">
                                <span>¥</span>
                                <span>${this.res[i].price}</span>
                                起
                            </div>
                            <div class="des">
                                <span>${this.res[i].des1}</span>
                                <span>${this.res[i].des2}</span>
                            </div>
                        </div>
                    </a>
                </li>`
        }
        str2=`<ul>${str1}</ul>`
        $('.houseServer').html(str2);
    }
}

new Server();
;