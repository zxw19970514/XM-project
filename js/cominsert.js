;
class Cominsert{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/computer.json",
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str="";
        for(var i=0;i<this.res.length;i++){
            str+=`<li class="main_inner" style="display:none">
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img1}" alt="">
                        <p class="f_name">${this.res[i].name1}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price1}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img2}" alt="">
                        <p class="f_name">${this.res[i].name2}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price2}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img3}" alt="">
                        <p class="f_name">${this.res[i].name3}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price3}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img4}" alt="">
                        <p class="f_name">${this.res[i].name4}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price4}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img5}" alt="">
                        <p class="f_name">${this.res[i].name5}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price5}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img6}" alt="">
                        <p class="f_name">${this.res[i].name6}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price6}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img7}" alt="">
                        <p class="f_name">${this.res[i].name7}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price7}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img8}" alt="">
                        <p class="f_name">${this.res[i].name8}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price8}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img9}" alt="">
                        <p class="f_name">${this.res[i].name9}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price9}</p>
                    </a>
                    <a href="#" class="mc_r_img">
                        <img data-original="${this.res[i].img10}" alt="">
                        <p class="f_name">${this.res[i].name10}</p>
                        <p class="f_price"><span>¥</span>${this.res[i].price10}</p>
                    </a>
                </li>`
        }
        var str2=$('.main_computer').html();
        str2=str2+str;
        $('.main_computer').html(str2)
    }
}
new Cominsert();
;