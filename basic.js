
// Variables
    console.log('Variables');
/* JS cho phép ta làm việc với 3 biến nguyên thủy
        Numbers :  123, 120.50, ...
        Strings :  "this text string", "hello world", ...
        Boolean : true or false
    Ngoài ra còn có kiểu null và underfined. */

// Cách khai báo và khởi tạo biến. Có 3 cách: let, const, var
    var name = 'Hoang';
    var money;
    money = 500.000;
    let n1, n2;

console.log('------------------------------------------------');

// Operators
    console.log("Operators \n");
// toán tử toán học 
    console.log("Toan hoc")

    var a = 10, b = 20;
    console.log('Cho a=10, b=20');
    // cộng
        console.log("a+b = ", a+b);
    // trừ
        console.log("a-b = ", a-b);
    // nhân
        console.log('a*b = ', a*b);
    // chia
        console.log('b/a = ', b/a);
    // chia lấy phần dư
        console.log('b%a = ', b%a);
    // tăng một giá trị số nguyên lên 1
        console.log('a++ => ', a);
    // giảm một giá trị số nguyên đi 1
        console.log('b-- => ', b);

    console.log('\n');

// Toán tử so sánh
    console.log('So sanh');

    a = 10, b = 20;
    console.log('Cho a=10, b=20');
    // bằng
        console.log('a==b => ', a==b);
    // không bằng
        console.log('a!= => ', a!=b);
    // lớn hơn
        console.log('a>b => ', a>b);
    // nhỏ hơn
        console.log('a<b => ', a<b);
    // lớn hơn hoặc bằng
        console.log('a>=b => ', a>=b);
    // nhỏ hơn hoặc bằng
        console.log('a<= => ', a<=b);

    console.log('\n');

// Toán tử logic
    console.log('Logic');

    a = 10, b = 20;
    console.log('Cho a=10, b=20');
    // AND
        console.log('a&&b => ', a&&b);
    // OR
        console.log('a||b => ', a||b);
    // NOT
        console.log('!a => ', !a);

    console.log('\n');

// Toán tử Bitwise
    console.log('Bitwise');

    a = 2, b = 3;
    console.log('Cho a=2, b=3');
    // AND
        console.log('a&b =>', a&b);
    // OR
        console.log('a|b => ', a|b);
    // XOR
        console.log('a^b => ', a^b);
    // NOT
        console.log('~b => ', ~b);
    // Left Shift
        console.log('a<<1 => ', a<<1);
    // Right Shift
        console.log('a>>1 => ', a>>1);
    // Right Shift with Zero
        console.log('a>>>1 => ', a>>>1);

    console.log('\n');

// Toán tử phân công
    console.log('Phan cong');

    a = 33, b = 10;
    console.log('Cho a = 33, b = 10');

    // Simple
        console.log('a=b => ', a=b);
    // Add
        console.log('a+=b => ', a+=b);
    // Subtract
        console.log('a-=b => ', a-=b);
    // Multiply
        console.log('a*=b => ', a*=b);
    // Divide
        console.log('a/=b => ', a/=b);
    // Module
        console.log('a%=b => ', a&=b);

    console.log('\n');

// Toán tử Miscellaneous 
    console.log('Miscellaneous');

    a = 10, b = 20;
    console.log('Cho a = 10, b = 20');

    // If Condition is true? Then value X : Otherwise value Y
        console.log('((a>b) ? 100:200) => ', (a>b) ? 100 : 200);
        console.log('((a<b) ? 100:200) => ', (a<b) ? 100 : 200);

    console.log('\n');

// Toán tử Typeof: Number, String, Boolean, Object, Function, Underfined, Null
    console.log('typeof');

    a = 10, b = 'String';
    console.log('Cho a = 10, b = String');

    console.log("Result => ", typeof b == "string" ? "B is String" : "B is Numeric");
    console.log("Result => ", typeof a == "string" ? "A is String" : "A is Numeric");

console.log('-------------------------------------------------')

// If...Else
    console.log('If...Else \n');

    console.log('If: ');
    // if (expression) {
    // Statement(s) to be executed if expression is true }
    // nếu tuổi >18 thì in ra tuổi
    var age = 20;
    if( age > 18 ) 
        { console.log('Da du tuoi\n'); }  
    
    console.log('If...else:');
    // if..else statement
    // if (expression) { Statement(s) to be executed if expression is true } 
    // else {  Statement(s) to be executed if expression is false }
    var age = 15;
    if (age>18)
        { console.log('Da du tuoi\n') }
    else
        { console.log('Chua du 18 tuoi\n')}

    console.log('If...else if...:');
    // if...else if.... statement
    // if (expression 1) { Statement(s) to be executed if expression 1 is true }
    // else if (expression 2) { Statement(s) to be executed if expression 2 is true }
    // else if (expression 3) { Statement(s) to be executed if expression 3 is true }
    // else { Statement(s) to be executed if no expression is true }
    // Sách tên gì thì in ra tên nấy
    var book = "maths";
    if( book == "history" ) 
        { console.log('History book'); }
    else if( book == "maths" ) 
        { console.log('Maths book'); } 
    else if( book == "economics" ) 
        { document.write('Economics book'); }
    else 
        { document.write('Unknown Book'); }
    console.log('\n');
console.log('-------------------------------------------------');

// Switch case
    // switch (expression) {
    //    case condition 1: statement(s)
    //    break;
    
    //    case condition 2: statement(s)
    //    break;
    //    ...
    
    //    case condition n: statement(s)
    //    break;
    
    //    default: statement(s)
    // }

    console.log('Switch Case:');

    // duyệt từng trường hợp xem cái nào trùng với grade thì in ra dòng tương ứng
    var grade = 'C';
    console.log("Entering switch block");
    switch (grade) {
       case 'A': console.log("Good job");
       break;
    
       case 'B': console.log("Pretty good");
       break;
    
       case 'C': console.log("Passed");
       break;
    
       case 'D': console.log("Not so good");
       break;
    
       case 'F': console.log("Failed");
       break;
    
       default:  console.log("Unknown grade")
    }
    console.log("Exiting switch block");

console.log('-------------------------------------------------'); 

// While Loops
    console.log('While Loops\n');

    console.log('While loop: ');
    // While loop
    // while (expression)
    // { Statement(s) to be executed if expression is true }
    var count = 0;
    console.log("Starting Loop ");
         
    while (count < 10) {
        console.log("Current Count : " + count + '\n');
        count++;
    }
    console.log("Loop stopped!\n");

    console.log('do...While:');
    // do...While loop
    // do { Statement(s) to be executed; }
    // while (expression);
    var count = 0;
    console.log("Starting Loop" + "<br />");
    do {
        console.log("Current Count : " + count + "<br />");
        count++;
    }
    while (count < 5);
    console.log("Loop stopped!\n");

console.log('-------------------------------------------------');

// For loop
    console.log('For loop');
    // for (initialization; test condition; iteration statement) 
    // { Statement(s) to be executed if test condition is true }
    var count;
    console.log("Starting Loop" + "\n");
    for(count = 0; count < 10; count++) {
        console.log("Current Count : " + count );
        console.log("<br />");
    }         
    console.log("Loop stopped!");

console.log('-------------------------------------------------');

// For...in
    console.log('For...in');
    // for (variablename in object) 
    // { statement or block to execute }
    var aProperty = ['ab', 'ac', 'ad'];
    var i;      
    for (i in aProperty) {
        console.log(aProperty[i]);
    }
    console.log("Exiting from the loop!");

console.log('-------------------------------------------------');

// Loop Control
    console.log('Loop control\n');

    console.log('Su dung break:')
    // break: khi gặp điều kiện đúng thì câu lệnh sẽ thoát vòng lặp
    var x = 1;
    console.log("Entering the loop");
    while (x < 20) {
       if (x == 5) {
          break;   // breaks out of loop completely
       }
       x = x + 1;
       console.log(x);
    }         
    console.log("Exiting the loop!\n");
    
    console.log('Su dung continue:');
    //continue: khi gặp điều kiện đúng thì sẽ bỏ qua và tiếp tục vòng lặp.
    var x = 1;
    console.log("Entering the loop");
    while (x < 10) {
       x = x + 1;
       if (x == 5) {
          continue;   // skip rest of the loop body
       }
       console.log(x);
    }         
    console.log("Exiting the loop!\n ");

    console.log('Su dung labels:');
    console.log("Entering the loop!");
    outerloop:        // This is the label name         
    for (var i = 0; i < 5; i++) {
        console.log("Outerloop: " + i);
       innerloop:
       for (var j = 0; j < 5; j++) {
          if (j > 3 ) break ;           // Quit the innermost loop
          if (i == 2) break innerloop;  // Do the same thing
          if (i == 4) break outerloop;  // Quit the outer loop
          console.log("Innerloop: " + j);
       }
    }        
    console.log("Exiting the loop!");

console.log('-------------------------------------------------');

// Function
    console.log('Function: ');
    var fname, fage;
    function sayHello(fname, fage)
    {
        console.log('Hello ' + fname + ", I'm " + fage + " years old!");
    }
    sayHello('Hoang', 20);

    var ffirst, flast;

    function concatenate(ffirst, flast) {
        var ffull;
        ffull = ffirst + flast;
        return ffull;
    }
    function secondFunction() {
        var fresult;
        fresult = concatenate('Day la vi du ve ', 'Return Statement');
        console.log(fresult );
    }
    secondFunction();

console.log('-------------------------------------------------');

// Events
    console.log('Events');
    console.log('khi click vào button onClick thì hàm sẽ được thực thi.');
    console.log('khi click vào button onSubmit thì hàm sẽ kiểm tra, nếu đúng thì trả về 1 kết quả cho trước, action sẽ được thực thi theo cài đặt của người viết');
    console.log('ngoài ra còn nhiều loại Event nữa như onmouseover, onmouseout, onafterprint, ....');

console.log('-------------------------------------------------');

// Cookies
    console.log('Cookies');
    
    // tạo mới cookies
    // const createCookies = (name, value, expDay)=>{
    //     let now = new Date();
    //     now.setTime(now.getTime()+expDay*24*60*60*1000);
    //     document.cookie = name+"="+value+";expires="+now.toUTCString()+";path=/"
    // }
    // createCookies("C1", "1521164");
    // createCookies("cookies1", "qwer");
    // createCookies("cookies2", "zxcv");

    //xoá cookies bằng cách set thời gian hết hạn trong quá khứ
    // const deleteCookies = (name)=>{
    //     let now = new Date();
    //     now.setTime(now.getTime()-60*1000)
    //     document.cookie = name+"=;expires="+now.toUTCString()+";path=/"
    // }
    // deleteCookies("cookies1");

console.log('-------------------------------------------------');

// Page Redirection
    console.log('Page Redirection');
    // chuyen huong ngay
    // const pr1 = ()=>{
    //     window.location="https://github.com/";
    // }

    // chuyen huong sau 1 thoi gian
    // const pr2 = ()=>{
    //     alert("Chờ 5s")
    //     setTimeout(()=>window.location="https://github.com/", 5000)
    // }

    // chuyển hướng theo trình duyệt
    // const pr3 = () => {
    //     var browsername = navigator.appName;
    //     if( browsername == "Netscape" ) {
    //        window.location = "http://www.location.com/ns.htm";
    //     } else if ( browsername =="Microsoft Internet Explorer") {
    //        window.location = "http://www.location.com/ie.htm";
    //     } else {
    //        window.location = "http://www.location.com/other.htm";
    //     }
    // }

console.log('-------------------------------------------------');

// Alert Dialog Box
    console.log('Alert Diaglog Box');

    // có 3 loại dialog box
    // Alert 
    // function Warn() {
    //     alert ("This is a warning message!");
    //     console.log("This is a warning message!");
    // }
    // Warn();

    // Confirmation
    // function getConfirmation() {
    //     var retVal = confirm("Do you want to continue ?");
    //     if( retVal == true ) {
    //        document.write ("User wants to continue!");
    //        return true;
    //     } else {
    //        document.write ("User does not want to continue!");
    //        return false;
    //     }
    // }
    // getConfirmation()

    // Prompt 
    // function getValue() {
    //     var retVal = prompt("Enter your name : ", "your name here");
    //     console.log("You have entered : " + retVal);
    // }
    // getValue()

console.log('-------------------------------------------------');

// Void keyword
    console.log('Void Keyword');
    // void là một từ khóa quan trọng trong JavaScript có thể được sử dụng như một toán tử một ngôi xuất hiện trước
    // toán hạng đơn của nó, có thể thuộc bất kỳ loại nào. Toán tử này chỉ định một biểu thức được đánh giá mà không trả về giá trị.
    // const voidKeyAlert = () =>{
    //     javascript:void(alert('warning'))
    // }

    // một cách sử dụng khác là tạo ra giá trị không xác định
    const voidKeyUndefined = () =>{
        let va,vb,vc ;
        va = void(vb=5, vc=7);
        console.log('a='+va+ ' b='+vb+ ' c='+vc);
    }
    voidKeyUndefined();

console.log('-------------------------------------------------');

// Page Printing
    console.log('Page Printing');
    // In trang web hiện tại
    // const print = ()=>{
    //     window.print();
    // }

console.log('.....................................................');







    

    