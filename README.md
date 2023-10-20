1/ Vào project, mở terminal lên gõ npm i để install các package trong project
2/ Các thư mục models, migrations chỉ là ví dụ để tham khảo sequelize hoạt động như thế nào, bạn phải cần xóa đi (xóa thư mục seeder, models, migrations, file config.json trong thư mục configs) 
nếu bạn muốn định nghĩa các models mới
3/ Để tạo các models mới hãy vào mục migration của page sequelize để đọc thêm tài liệu và biết cách sử dụng chúng
4/ Lưu ý về cách đặt tên các thuộc tính trong 1 models, khi bạn muốn set mối quan hệ giữa các models với nhau thì hãy đặt như vd sau: 
tên cột của model quan hệ (tên cột này sẽ tương thích với tên model, vd: tên thuộc tính là nhanvienId tức là sẽ tương thích với models nhanvien.js) 
+ Id [Id này bắt buộc phải gõ như vậy, tại sequelize nó thích như vậy :))]
5/ Trong project này, ở file userService có một số hàm không export ra ngoài nhằm để hỗ trợ bạn lấy getDate và format theo đúng định dạng trên csdl, hãy đọc code để hiểu thêm về cách dùng
