;
class Goodlist{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/list.json",
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
                // console.log($('.category'));
            }
        })
    }
    display(){
        var str1="";
        var num=0;
        // console.log(this.res);
        for(var i=0;i<this.res.length;i++){
            // console.log(this.res[i]);
            for(var n in this.res[i]){
                this.res[i][n]=this.res[i][n].split(',');
                // console.log(this.res[i][n])
                for(var m=0;m<this.res[i][n].length;m++){
                    // console.log(this.res[i][n][m]);
                    str1+=`<a href="#">${this.res[i][n][m]}</a>`
                }
                $('.category').eq(i).find('.list')[num].innerHTML=str1;
                str1="";
                num++;
            }
            num=0;
            
            
        }
    }
}
new Goodlist();
;