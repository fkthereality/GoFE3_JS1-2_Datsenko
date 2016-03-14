/*
 function insert(arr) {
 arr.push();
 }

 var arr = [];
 arr[5] = true;
 insert(arr);
 console.log(arr.length);
 */
/*
 var arr = [];
 for( var i = 0; i < 5; i++ ) {

 var name = prompt ("Введите любое имя" , 'Имя');
 arr.push = (name);
 console.log(arr);
 console.log(arr.length);
 }
 */

var arr = [];
for (var i = 0; i < 5; i++) {
    var name = prompt("Введите любое имя "+i , 'Имя');
    arr.push(name);
    console.log(arr.length);
}
console.log(arr);

var admin = prompt("Введите имя пользователя", 'админ');
console.log(admin);
var j = false;
for (var i = 0; i < arr.length; i++) {
    var check = (arr[i] != (admin)) ?
        "сообщение об ошибке"
         : j = true;

}
if (j != true) {
    alert("сообщение об ошибке");
} else {
    alert(admin + ", вы успешно вошли ");
}