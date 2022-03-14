// Error Handling
// Có 3 kiểu lỗi trong lập trình: lỗi cú pháp, lỗi thời gian chạy, lỗi logic
// Lỗi cú pháp xảy ra tại thời điểm biên dịch trong ngôn ngữ lập trình truyền thống và tại thời điểm diễn giải trong JS
// Lỗi logic là lỗi khó theo dõi nhất, xảy ra khi mắc lỗi logic điều khiển tập lệnh và không nhận được kết quả như mong đợi.
// Lỗi thời gian chạy xảy ra trogn quá trình thực thi chương trình.
// Phương thức onerror() là tính năng đầu tiên hỗ trọ xử lý lỗi trong JS. Sự kiện lỗi được kích hoạt trên đối tượng cửa số bất cứ khi nào một ngoại lệ xảy ra trên trang.

// _________________________________________________
// Validations
// JS cung cấp một cách để xác thực dữ liệu của biểu mẫu trên máy tính của khách trước khi gửi nó đến máy chủ Web. 
// Xác thực biểu mẫu thường thực hiện 2 chức năng:
// Xác thực cơ bản: biểu mẫu phải được kiểm tra để đảm bảo  tất cả trường hợp bắt buộc được điền vào.
// Xác thực định dạng dữ liệu: dữ liệu được nhập vào phải được kiểm tra xem có đúng định dạng và giá trị hay không.

// _________________________________________________
// Animation
// Ta có thể sử dụng JS để tạo một hoạt ảnh phức tạp nhưng không giới hạn ở các yếu tố sau:
// bắn pháo hoa, hiệu ứng mờ, cuộn vào/ra, trang vào/ra, chuyển động của đối tượng.

// JS có thể được sử dụng để di chuyển một số phần tử DOM (<img />, <div> hoặc bất kỳ phần tử HTML nào khác) xung quanh trang theo một số loại mẫu được xác định bởi một phương trình hoặc hàm logic.
// JS cung cấp 2 hàm sau thường được sử dụng trong các chương trình hoạt hình
// + setTimout(function, duration)
// + setInterval(function, duration)
// + clearTimeout(setTimeout_variable)

// Có 2 loại Animation là Animation thủ công và Animation tự động.

// __________________________________________________
// Multimedia
// Đối tượng điều hướng JS bao gồm một đối tượng con được gọi là plugin. Đối tượng này là một mảng với một mục nhập cho mỗi trình
// plugin được cài đặt trênn trình duyệt. Đối tượng navigator.plugins chỉ được hỗ trợ bởi Nétcape, Firefox và Mozilla

// __________________________________________________
// Debugging
// Thỉnh thoảng, các nhà phát triển mắc lỗi trong khi viết mã. Một lỗi trong một chương trình hoặc một tập lệnh được gọi là một lỗi.
// Quá trình tìm và sửa lỗi được gọi là gỡ lỗi và là một phần bình thường của quá trình phát triển. Phần này bao gồm các công cụ và kỹ thuật có thể giúp bạn thực hiện các tác vụ gỡ lỗi ..
// Các cách để debug JS
// + sử dụng trình xác thực JS
// + thêm debug code cho chương trình
// + sử dụng JS Debugger
// + sử dụng mẹo của nhà phát triển

// __________________________________________________
// Image Map
// Ta có thể sử dụng JavaScript để tạo bản đồ hình ảnh phía máy khách. Bản đồ hình ảnh phía máy khách được kích hoạt bởi thuộc tính usemap cho thẻ <img /> và được xác định bởi các thẻ tiện ích mở rộng <map> và <areblank> đặc biệt.
// Hình ảnh sẽ tạo thành bản đồ được chèn vào trang bằng phần tử <img /> như bình thường, ngoại trừ việc nó mang một thuộc tính bổ sung gọi là usemap. Giá trị của thuộc tính usemap là giá trị của thuộc tính name trên phần tử <map> mà ta sắp gặp, đứng trước dấu thăng hoặc dấu thăng.

// __________________________________________________
// Browsers
// Để nhận thông tin về trình duyệt mà trang web của bạn hiện đang chạy, hãy sử dụng đối tượng điều hướng được tích hợp sẵn.

// Tính chất của điều hướng:
// appCodeName, appVersion, language, mimType[], platform[], plugins[], userAgent[]

// Phương thức của điều hướng
// javaEnabled(), plugings.refresh, preference(name,value), taintEnabled()

