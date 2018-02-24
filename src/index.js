module.exports = function solveEquation(equation) {
  var a, b, c, D, x, y;
  var arr = [];
  var str = equation.replace(/\s+/g,'');
  var pos = str.indexOf('*'); 
 
  a = +str.slice(0, pos);
  str = str.slice(pos+4);
  pos = str.indexOf('*');
  b = +str.slice(0, pos);
  c = str.slice(pos+2);

  D = b*b - 4*a*c;
  x = ((b*(-1) + Math.sqrt(D))/(2*a));
  y = ((b*(-1) - Math.sqrt(D))/(2*a));

  if(x < y){
     arr.push(Math.round(x));
     arr.push(Math.round(y));
   } else {
     arr.push(Math.round(y));
     arr.push(Math.round(x));
   }
   
   return arr;
}