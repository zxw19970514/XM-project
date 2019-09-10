;
class Chufang{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/f4li.json",
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
                $('.mc_c_chufang').terseBanner({
                    arrow:false,
                })
            }
        })
    }
    display(){
        var str=""
        str=`<div class="mc_c mc_c_chufang">
                <ul>
                    <li><a href="#"><img a-arc="${this.res[0].img1}" alt=""></a></li>
                    <li><a href="#"><img a-arc="${this.res[0].img2}" alt=""></a></li>
                </ul>
            </div>
            <div class="mc_r">
                <a href="#" class="mc_r_img"><img a-arc="${this.res[0].img3}" alt=""></a>
                <a href="#" class="mc_r_img"><img a-arc="${this.res[0].img4}" alt=""></a>
                <a href="#" class="mc_r_img"><img a-arc="${this.res[0].img5}" alt=""></a>
                <a href="#" class="mc_r_img"><img a-arc="${this.res[0].img6}" alt=""></a>
                <a href="#" class="mc_r_img"><img a-arc="${this.res[0].img7}" alt=""></a>
                <a href="#" class="mc_r_img"><img a-arc="${this.res[0].img8}" alt=""></a>
            </div>`
        $('.spe_li_chufang').html(str);
    }
}

new Chufang();
;