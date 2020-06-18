/**var timestamp = Date.parse(new Date());**/
var time = (Date.parse("2020/02/14") - Date.parse("2020/01/11"))/1000 + 43200;

function timedCount()
{
document.getElementById('shijian').innerHTML = fmoney(time,0);
time = time + 1;
t = setTimeout("timedCount()",1000);
}

/** ÿ��λ��������һ�����ţ������Ķ� **/

function fmoney(s, n)   
{   
   n = n > 0 && n 