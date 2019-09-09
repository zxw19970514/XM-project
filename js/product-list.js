;
class Page{
    constructor(options){
        this.url = options.url;
        this.list = options.list;
        this.pageBox = options.pageBox;
        this.num = options.num;
        this.index = options.index;

        this.load()
    }
    load(){
        var that = this;
        $.ajax({
            url:this.url,
            success:function(res){
                that.res = res;
                that.createPage();
            }
        })
    }
    createPage(){
        var that = this;
        this.pageBox.pagination(this.res.length,{
            items_per_page:this.num,
            current_page:this.index,
            prev_text:'上一页',
            next_text:'下一页',
            callback:function(i){
                that.index = i;
                that.display();
            }
        })
    }
    display(){
        var str = "";
        for(var i=this.index*this.num;i<this.index*this.num+this.num;i++){
            if(i < this.res.length){
                str += `<li>
                    <div class="item-tab">
                        <p class="item-img">
                            <a href="#" class="item-link">
                                <img src="${this.res[i].url}" alt="">
                            </a>
                        </p>
                        <div class="item-price">
                            <span class="price">${this.res[i].price}</span>
                        </div>
                        <p class="item-name">
                            <a href="#" class="item-link">
                                    ${this.res[i].name}
                            </a>
                        </p>
                        <p class="item-comment">
                            <span></span>
                            <a href="#" class="comment">
                                <span>已有</span>
                                ${this.res[i].commend}
                                <span>人评价</span>
                            </a>
                        </p>
                        <p class="item-shop">
                            <span class="nnamezy">自营</span><a href="#" class="nname">${this.res[i].tip}</a>
                        </p>
                    </div>
                </li>`;
            }
        }
        str=`<ul class="product-lists clearfix">
                    ${str}
                </ul>`
                console.log(str);
        this.list.html(str);
    }
}

class Prtleft{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:'http://127.0.0.1/XM-project/data/prtleft.json',
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str="";
        for( var i=0;i<this.res.length;i++){
            str+=`<li>
            <div class="prtleft-img"><a href="#"><img src="${this.res[i].img}" alt=""></a></div>
            <div class="prtleft-price"><span>¥${this.res[i].price}</span></div>
            <div class="prtleft-name"><a href="#">${this.res[i].name}</a></div>
        </li>`
        }
        $('.prtleft ul').html(str);
    }
}

new Prtleft();
new Page({
    url:"http://127.0.0.1/XM-project/data/goods.json",
    list:$(".product-box"),
    pageBox:$(".pagination"),
    num:8,
    index:0
})


;