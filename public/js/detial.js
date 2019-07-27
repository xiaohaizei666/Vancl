// 图片跟随切换
$(function(){
  $("img.my-small").mouseover(function(){
    $("img.my-middle").attr("src",$(this).attr("data-target"))
  })

  //颜色选择
  var $as=$("#main .detial_main .right p.color a");
  var $spancolor=$("#main .detial_main .right p.select span");
  for(var aitem of $as ){
    $a=$(aitem);
    $a.click(function(){
      var $span = $(this).html() ;
      $(this).addClass('active').siblings().removeClass('active');
      $spancolor.html( $span );
    })
  }

  // 尺码选中或取消
  var $lis=$("ul#size>li");
  for(var liitem of $lis){
    $li = $(liitem);
    $li.click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })
  }
  
})

// 数量增减
var vm=new Vue({
  el:"#app",
  data:{
    counts:1
  },
  methods:{
    add(i){
      this.counts=parseInt(this.counts)+i;
      if(this.counts==0){
        this.counts=1;
      }
    }
  }
})


