;
class Car{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/f7li.json",
            success:function(res){
                that.res=res;
                that.display();
                $('.mc_c_car').terseBanner({
                    arrow:true,
                })
            }
        })
    }
    display(){
        var str=""
        str=`<div class="mc_c mc_c_car">
                <ul>
                    <li><a href="#"><img src="${this.res[0].img1}" alt=""></a></li>
                    <li><a href="#"><img src="${this.res[0].img2}" alt=""></a></li>
                </ul>
            </div>
            <div class="mc_r">
                <a href="#" class="mc_r_img"><img src="${this.res[0].img3}" alt=""></a>
                <a href="#" class="mc_r_img"><img src="${this.res[0].img4}" alt=""></a>
                <a href="#" class="mc_r_img"><img src="${this.res[0].img5}" alt=""></a>
                <a href="#" class="mc_r_img"><img src="${this.res[0].img6}" alt=""></a>
                <a href="#" class="mc_r_img"><img src="${this.res[0].img7}" alt=""></a>
                <a href="#" class="mc_r_img"><img src="${this.res[0].img8}" alt=""></a>
            </div>`
        $('.spe_li_car').html(str);
    }
}

new Car();
;