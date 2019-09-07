;
class Gomehelp{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/gome-help.json",
            success:function(res){
                that.res=res;
                that.display();
            }
        })
    }
    display(){
        var str=""
        for(var i=0;i<this.res.length;i++){
            str+=`<dl>
                    <dt>${this.res[i].dt}</dt>
                    <dd>
                        <ul>
                            <li><a href="#">${this.res[i].l1}</a></li>
                            <li><a href="#">${this.res[i].l2}</a></li>
                            <li><a href="#">${this.res[i].l3}</a></li>
                            <li><a href="#">${this.res[i].l4}</a></li>
                            <li><a href="#">${this.res[i].l5}</a></li>
                        </ul>
                    </dd>
                </dl>`
        }
        $('.gome-help-box').html(str);
    }
}

new Gomehelp();
;