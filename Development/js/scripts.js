// قم بإنشاء الدوال التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

function greet(name) {}
let message = "hello";
if(name) {

    message +=name;
    console.log(message);
} else{

    console.log(message);
}
greet();

greet("aziz");


/*
 * isOdd(n) اسم الدالة
 * - n تستقبل رقم
 * - عدا ذلك false إن كان الرقم فردياً وترجع true ترجع القيمة
 */
function isOdd(n) {}

let number = 0;
if(number % 2 == 0) {
    console.log("false");
}else if (number % 2 == 1) {
  console.log("true");  
}
