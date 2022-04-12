# Tranning-JS
Web sẽ có các chức nắng như: Đăng Nhập, Thêm, Sửa, Xoá.
1. Đăng Nhập 
  - Khi người dùng nhập sai tài khoản, web sẽ thông báo "Tài Khoản Không Tồn Tại".
  - Khi người dùng nhập đúng tài khoản và sai mật khẩu, web sẽ thông báo "Mật Khẩu Không Chính Xác".
  - Khi người dùng nhập đúng tài khoản và đúng mật khẩu, web sẽ thông báo "Đăng Nhập Thành Công" và trang web sẽ chuyển đến thư viện quản lí sách.
2. Thêm Sách
  - Sau khi nhập thông tin sách cần add, click "Thêm" để lưu dữ liệu vào localStorage và dữ liệu trên màn hình sẽ được hiển thị.
  - Với mỗi dòng dữ liệu trên table sẽ có 2 button chức năng ở cuối. "Sửa" và "Xoá".
  - (Chưa làm chức năng kiểm tra các ô input đã nhập dữ liệu hay chưa)!.
3. Sửa
  - Với mỗi button "Sửa" nó sẽ truyền vị trí tương ứng của đối tượng được lưu trong mảng localStorage vào hàm. Sau khi click "Sửa", dữ liệu record tương ứng sẽ được đẩy lên các ô input để người dùng sửa.
  - Sau khi "Sửa" thành công, người dùng click "Cập Nhật" dữ liệu trong localStorage sẽ được thay đổi ứng với vị trí mà nút "Sửa" đã truyền vào hàm. Dữ liệu trên màn hình cũng sẽ được reset lại.
4. Xoá
  - Tương Tự với nút "Sửa", sau khi click "Xoá" dữ liệu trong localStorage sẽ bị xoá khỏi mảng tương ứng với vị trí mà mình cần xoá.
