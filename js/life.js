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
                            <img src="${this.res[i].img1}" alt="">
                            <span class="list-bg"></span>
                            <div class="list-cont">
                                <p class="cont-item"><span>${this.res[i].item}</span></p>
                                <p class="cont-tile">${this.res[i].tile}</p>
                                <p class="cont-info">${this.res[i].info}</p>
                            </div>
                        </a>
                    </div>
                    <ul class="list-ul clearfix">
                        <li><a href="#" class="list-img"><img src="${this.res[i].img2}" alt=""></a></li>
                        <li><a href="#" class="list-img"><img src="${this.res[i].img3}" alt=""></a></li>
                        <li><a href="#" class="list-img"><img src="${this.res[i].img4}" alt=""></a></li>
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