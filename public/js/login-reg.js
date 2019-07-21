
(function(){
    var as=document.querySelectorAll("#tab>li>[data-toggle=tab]"); 
    var container=document.getElementById("container");
    var Divs=container.children;
    for(var i=0;i<as.length;i++){
        as[i].index=i;
        as[i].onclick=function(){
            // for(var a of as){
            //     a.className="";
            // }
            for(var j=0;j<as.length;j++){
                as[j].className="not-active";
                Divs[j].className="hide";
            }
            this.className="active";
            Divs[this.index].className="show";
        }
    }
})()