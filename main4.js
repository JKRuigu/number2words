var ONES = ['','one','two','three','four','five','six','seven','eight','nine'];
var ten = ['','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var tens = ['','ten','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
var values = ['hundred','thousand','million','billion'];
var strings = '9873160211';

var len = strings.length;
var x = strings[len-2] !== '1'?ONES[strings[len-1]]:''; //displays ones;
var x2 = strings[len-2] == '1' && strings[len-1] != '0' ?ten[strings[len-1]]:strings[len-2] == '0' ?' ':tens[strings[len-2]];
var x3 = strings[len-3] != '0' ? `${ONES[strings[len-3]]} ${values[0]}`:'';


var x4 = strings[len-4] != '0' && strings[len-5] != '1'?ONES[strings[len-4]]:'';
var x5 = strings[len-5] == '1' && strings[len-4] != '0' ?ten[strings[len-4]]:strings[len-5] == '0' ?' ':tens[strings[len-5]];
var x6 = strings[len-6] != '0' ? `${ONES[strings[len-6]]} ${values[0]}`:'';
var x66 = strings[len-6] != 0 || strings[len-5] != 0 || strings[len-4] != 0 ? values[1]:'';

var x7 = strings[len-7] != '0' && strings[len-8] != '1'?ONES[strings[len-7]]:'';
var x8 = strings[len-8] == '1' && strings[len-7] != '0' ?ten[strings[len-7]]:strings[len-8] == '0' ?' ':tens[strings[len-8]];
var x9 = strings[len-9] != '0' ? `${ONES[strings[len-9]]} ${values[0]}`:'';
var x99 = strings[len-9] != 0 || strings[len-8] != 0 || strings[len-7] != 0 ? values[2]:'';

console.log( x9+' '+' '+x8+' '+' '+x7+' '+x99+' '+x6+' '+x5+' '+x4+' '+x66+' '+x3+' '+x2+' '+x);