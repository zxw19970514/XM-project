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
                            <img data-original="${this.res[i].img}" alt="" width="120" height="120">
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