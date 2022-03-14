// JS là một ngôn ngữ lập tình hướng đối tượng (OOP)
// Đối tượng bao gồm các thuộc tính. Nếu một thuộc tính chứa một hàm, nó được coi là
// một phương thức của đối tượng, nếu không thuộc tính được coi là một thuộc tính

// Thuộc tính đối tượng có thể là bất kỳ trong ba kiểu dữ liệu nguyên thuỷ hoặc bất kỳ kiểu
// dữ liệu trừu tượng nào. Thuộc tính đối tượng thường là các biến được sử dụng nội bộ trong 
// các phương thức của đối tượng, nhưng cũng có thể hiển thị toàn cục được sử dụng trên toàn bộ trang.

// Phương thúc là các chức năng cho phép đối tượng làm điều gì đó hoặc cho phép thực hiện điều gì đó với nó

// Tất cả các đối tượng do người dùng định nghĩa và các đối tượng dựng sẵn đều là con của một đối tượng gọi là đối tượng.

// Ví dụ

function addPrice(amount) {
    with(this) {
       price = amount;
    }
}
function book(title, author) {
    this.title = title;
    this.author = author;
    this.price = 0;
    this.addPrice = addPrice;  
}

var myBook = new book("Perl", "Mohtashim");
myBook.addPrice(100);

console.log("Book title is : " + myBook.title);
console.log("Book author is : " + myBook.author);
console.log("Book price is : " + myBook.price);

// ___________________________
// Number đại diện cho ngày tháng bằng số nguyên hoặc số thập phân
    var val = new Number(number);
// nếu không cung cấp số thì câu lệnh không thể chuyển thành số và nó sẽ trả về NaN

// Các tính chất của Number: 
// MAX_VALUE, MIN_VALUE, NaN, NEGATIVE_INFINITY, POSITIVE_INFINITY, prototype, constructor

// Các phương thức của Number:
// toExponential(), toFixed(), toLocaleString(), toPrecision(), toString(), valueOf()

// ___________________________
// Boolean đại diện cho hai giá trị "true" hoặc "false". Nếu tham số giá trị bị bỏ qua 
// hoặc là 0, -0, null, false, NaN, không xác định hoặc chuỗi trống ("") thì đối tượng có giá trị ban đầu là false.
    var val = new Boolean(value);

// Các tính chất của Boolean:
// constructor: trả về một tham chiếu đến hàm boolean đã tạo đối tượng
// prototype: cho phép thêm thuộc tính và phương thức vào một đối tượng

// Các phương thức của Boolean:
// toSource(): trả về một chuỗi chứa nguồn của đối tượng Boolean hoặc sử dụng để tạo một đối tượng tương đương.
// toString(): trả về một true hoặc false phụ thuộc vào giá trị của đối tượng.
// valueOf(): trả về giá trị nguyên thuỷ của đối tượng Boolean

// ___________________________
// String cho phép làm việc với một loạt các ký tự. Nó bao bọc kiểu dữ liệu nguyên thuỷ của JS với một số phương thức trợ giúp
// Vì JS tự động chuyển đổi giữa các chuỗi nguyên thuỷ và đối tượng String nên bạn có thể gọi bất kỳ phương thức trợ giúp nào của đối tượng String trên một chuỗi nguyên thuỷ
    var val = new String(string);
// tham số String là một chuỗi các ký tự đã được mã hoá

// Các tính chất của String
// constructor, length, prototype

// Các phương thức của String
// charAt(), charCodeAt(), concat(), indexOf(), lastIndexOf(), localeCompare(), match(), replace(), search(), slice(), split(),
// substr(), substring(), toLocaleLowerCase(), toLocaleUpperCase(), toLowerCase(), toString(), toUpperCase(), valueOf().

// ___________________________
// Array cho phép lưu trữ nhiều giá trị trong một biến duy nhất. Nó lưu trữ một tập hợp tuần tự có kích thước cố định của các phần tử
// cùng loại. Mảng được sử dụng để lưu trữ một tập hợp dữ liệu, nhưng thương hữu ích hơn nếu coi một mảng là một tập hợp các biến cùng kiểu.
    var fruits = new Array( "apple", "orange", "mango" );
    // hoặc 
    var fruits = [ "apple", "orange", "mango" ];

// Các tính chất của Array:
// constructor, index, input, length, prototype.

// Các phương thức của Array:
// concat(), every(), filter(), forEach(), indexOf(), join(), lastIndexOf(), map(), pop(), push(), reduce(), reduceRight(),
// reverse(), shift(), slice(), some(), toSource(), sort(), splice(), toString, unshift().

// ___________________________
// Date là một kiểu dữ liệu được tích hợp trong ngôn ngữ JS.
    new Date( );
    new Date(milliseconds);
    new Date(datestring);
    new Date(year,month,date[hour,minute,second,millisecond]);

// Tính chất của Date:
// constructor, prototype.

// Một số phương thức của Date:
// Date(), getDate(), getDay(), getFullYear(), getHours(), getMiliseconds(), getMinutes(), ....

// Phương thức static của Date:
// Date.parse(), Date.UTC().

// ___________________________
// Math cung cấp các thuộc tính và phương thức cho các hằng số và hàm toán học. Không giống như các đối tượng toàn cục khác, 
// Math không phải là một phương thức khởi tạo. Tất cả các thuộc tính và phương thức của Math là tĩnh và có thể gọi bằng cách
// sử dụng Math như một đối tượng mà không cần tạo ra nó.
    var pi_val = Math.PI;
    var sine_val = Math.sin(30);

// Tính chất của Math
// E\, LN2, LN10, LOG2E, LOG10E, PI, SQRT1_2, SQRT2.

// Phương thức của Math
// abs(), acos(), asin(), atan(), atan2(), ceil(), cos(), exp(), floor(), max(), min(), pow(), random(), round(), sin(), sqrt(), tan(), toSource().

// ___________________________
// Biểu thức chính quy là một đối tượng mô tả một mẫu ký tự
    var pattern = new RegExp(pattern, attributes);
    // hoặc
    var pattern = /pattern/attributes;

// Dấu ngoặc vuông
// [...], [^...], [0-9], [a-z], [A-Z], [a-Z]

// Bộ định lượng
// p+, p*, p?, p{N}, p{2,3}, p{2, }, p$, ^p

// Ký tự chữ
// Alphanumeric, \0, \t, \n, \v, \f, \r, \xnn, \uxxxx, \cX

// Metacharacters
// ., \s, \S, \d, \D, \w, \W, [\b], [aiou], [^aeiou], (foo|bar|baz)

// Bổ ngữ
// i, m, g

// tính chất của RegExp
// constructor, global, ignoreCase, lastIndex, multiline, source.

// phương thức của RegExp
// exec(), test(), toSource(), toString()

// ___________________________
// Mỗi trang web nằm trong cửa sổ trình duyệt có thể coi là một đối tượng

// Đối tượng Document đại diện cho Document HTML được hiển thị trong cửa sổ đó. Đối tượng Document
// có nhiều thuộc tính tham chiếu đến các đối tượng khác cho phép truy cập và sửa đổi nội dung tài liệu.

// Cách nội dung tải liệu được truy cập và sửa đổi được gọi là Document Object Model (DOM). Các đối tượng được 
// tổ chức theo một hệ thống phân cấp. Cấu trúc phân cấp này áp dụng cho việc tổ chức các đối tượng trong tài liệu Web:
// + Window object
// + Document object
// + Form object
// + Form control elements





