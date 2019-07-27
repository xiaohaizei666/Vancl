// 全选
(function(){
  // 点全选,下方四个跟随全选和取消
  //1.查找触发时间的元素
  var chbAll=document.querySelector("table>thead>tr>th>input");
  var chbAll2=document.querySelector("div.bar>div.bar-top>input");
  var chbs=document.querySelectorAll("table>tbody>tr>td>input[type='checkbox']");
  //2.绑定事件处理函数
  chbAll.onclick=function(){
    var chbAll=this;
    for(var chb of chbs){
      chb.checked=chbAll.checked;
    }
    chbAll2.checked=chbAll.checked;
  }
  chbAll2.onclick=function(){
    var chbAll2=this;
    for(var chb of chbs){
      chb.checked=chbAll2.checked;
    }
    chbAll.checked=chbAll2.checked;
  }
  //点下边的每个input,都有可能影响上边的全选
  for(var chb of chbs){
    chb.onclick=function(){
      var chb=this;
      //如果当前点的input是取消选中，则上边的input不选中
			if(chb.checked==false){
        chbAll.checked=false;
        chbAll2.checked=false;
			}else{//否则如果当前点的input是选中，上边input不一定选中
				//查找table下tbody下未选中的input
				var unchecked=document.querySelector(
					"table>tbody>tr>td>input[type='checkbox']:not(:checked)"
				)
				//如果找不到未选中的，就说明都选中了！
				if(unchecked===null){
          chbAll.checked=true;//上边input才选中
          chbAll2.checked=true;
        }
      }
    }
  }

  // 首次总计
  var tds=document.querySelectorAll("table>tbody>tr>td:nth-child(7)");
  //找到div.bar下的div.bar-bottom下的p下的span
  var span=document.querySelector("div.bar>div.bar-bottom>p>span");
  var total=0;
  for(var td of tds){
    total+=parseFloat(td.innerHTML.slice(1));
  }
  span.innerHTML=`¥${total.toFixed(2)}`;

  //点击+ - input内的数字加减
  //找table所有button元素
  var btns=document.querySelectorAll("table>tbody>tr>td button");
  //遍历返回的集合中所有button
  for(var btn of btns){
    btn.onclick=function(){
      var btn=this;
      /*点按钮，让旁边的数量变化*/
      //找到当前按钮旁边的input
      //先找爹td 再找爹下第2个孩子span
      var input=btn.parentNode.children[1];
      // 获得input的value,强转为整数
      var n=parseInt(input.value);
      if(btn.innerHTML=="+"){//如果点的是+
        n++;
      }else if(n>1){
        n--;
      }
      input.value=n;//将修改后的内容再放回input的value中

      /* 小计变化 */
      //先获得tbody下的tr:当前btn的爹的爹
      var tr=btn.parentNode.parentNode;
      //获得tr下第5个td的内容单价,去掉开头的人民币符号,再转为数字
      var price=parseFloat(tr.children[4].innerHTML.slice(1));
      //计算小计:单价*数量n
      var subtotal=price*n;
      //将小计放到当前行tr下第7个td中，并格式化为货币的格式
      tr.children[6].innerHTML=`¥${subtotal.toFixed(2)}`;

      /* 计算总计 */
      //找到table下tbody下tr的第7个td
      var tds=document.querySelectorAll("table>tbody>tr>td:nth-child(7)");
      //找到div.bar下的div.bar-bottom下的p下的span
      var span=document.querySelector("div.bar>div.bar-bottom>p>span");
      var total=0;
      for(var td of tds){
        total+=parseFloat(td.innerHTML.slice(1));
      }
      span.innerHTML=`¥${total.toFixed(2)}`;
    }
  }

  // 删除行
  var table=document.querySelector("table");
  var as=document.querySelectorAll("table>tbody>tr>td:last-child a");
  for(var a of as){
    a.onclick=function(){
      var a=this;
      var tr=a.parentNode.parentNode;
      if(confirm(`确认要删除该商品吗？`)){
        table.deleteRow(tr.rowIndex);
      }
    }
  }

})()






