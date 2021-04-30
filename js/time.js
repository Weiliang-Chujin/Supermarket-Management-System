fun();
function fun(){ 
   var date = new Date();  //创建对象  
   var y = date.getFullYear();     //获取年份  
   var m =date.getMonth()+1;   //获取月份  返回0-11  
   var d = date.getDate(); // 获取日  
   var w = date.getDay();   //获取星期几  返回0-6   (0=星期天) 
   var ww = ' 星期'+'日一二三四五六'.charAt(new Date().getDay()) ;//星期几，charat返回所在位置的字符
   var h = date.getHours();  //时
   var minute = date.getMinutes()  //分
   var s = date.getSeconds(); //秒
   if(m<10){
       m = "0"+m;
   }
   if(d<10){
       d = "0"+d;
   }
   if(h<10){
       h = "0"+h;
   }
   if(minute<10){
       minute = "0"+minute;
   }
   if(s<10){
       s = "0"+s;
   }
   document.getElementById('timee').innerHTML =  +y+"-"+m+"-"+d+" "+h+":"+minute;
   document.getElementById('timeee').innerHTML =  +y+"-"+m+"-"+d+" "+h+":"+minute;
}