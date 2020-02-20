function uniqueChars (lekcia) {
for ( var i = 0 ; i< lekcia.length ; i++){
for ( var j = i+1 ; j < lekcia.length ; j++)
if ( lekcia[i] === lekcia[j] ){
lekcia=lekcia.replace(lekcia[j] , " ");}}
lekcia=lekcia.replace(/\s/g, "");
return lekcia;
}
alert( uniqueChars("hgtdfffftrlhhmvxz"));
function truncat (str, maxlength, symbol){
	if(str.length > maxlength && arguments[2]) 
	return str.slice(0, maxlength) + symbol;
 return str.slice(0, maxlength) + '...';
}
alert(truncat("ffffrtdc", 2, '---'));
function happy_number(num) 
{
    var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}
 
var cnt = 5;
var num = 1;
var f5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
f5 = f5+(num + ", ") ;

    num++ ;
}
console.log('happy numbers: '+f5);


 function numofarg(){
return arguments.length;}
alert ( numofarg('hcc',15));