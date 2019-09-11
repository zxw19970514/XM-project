;
class Ele{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/f3li.json",
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str=""
        str=`<div class="mc_c mc_c_ele">
                <ul>
                    <li><a href="#"><img data-original="${this.res[0].img1}" alt=""></a></li>
                    <li><a href="#"><img data-original="${this.res[0].img2}" alt=""></a></li>
                    <li><a href="#"><img data-original="${this.res[0].img3}" alt=""></a></li>
                </ul>
            </div>
            <div class="mc_r">
                <a href="#" class="mc_r_img"><img data-original="${this.res[0].img4}" alt=""></a>
                <a href="#" class="mc_r_img"><img data-original="${this.res[0].img5}" alt=""></a>
                <a href="#" class="mc_r_img"><img data-original="${this.res[0].img6}" alt=""></a>
                <a href="#" class="mc_r_img"><img data-original="${this.res[0].img7}" alt=""></a>
                <a href="#" class="mc_r_img"><img data-original="${this.res[0].img8}" alt=""></a>
                <a href="#" class="mc_r_img"><img data-original="${this.res[0].img9}" alt=""></a>
            </div>`
        $('.spe_li_ele').html(str);
    }
}

new Ele();
;