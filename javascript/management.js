var listData = localStorage.getItem("list_books") ? JSON.parse(localStorage.getItem("list_books")) : [];

function addData() {
    
    let id = document.getElementById("Id").value;
    let name = document.getElementById("name").value;
    let title = document.getElementById("title").value;
    let gender = document.getElementById("gender").value;
    let company = document.getElementById("company").value;
    let year = document.getElementById("year").value;
    let quantity = document.getElementById("quantity").value;
    let page = document.getElementById("page").value;
    let pay = document.getElementById("pay").value; 

            
        book = {
            id : id,
            name : name,
            title : title,
            gender : gender,
            company : company,
            year : year,
            quantity : quantity,
            page : page,
            pay : pay
        };
        listData.push(book);
        localStorage.setItem("list_books", JSON.stringify(listData));

        renderData();
       
}

function renderData() {
    var listData = localStorage.getItem("list_books") ? JSON.parse(localStorage.getItem("list_books")) : [];

    table = `<tr>
                <td>ID Sách</td>
                <td>Tên Sách</td>
                <td>Thể Loại</td>
                <td>Tác Giả</td>
                <td>Nhà Xuất Bản</td>
                <td>Năm Xuất Bản</td>
                <td>Số Lượng</td>
                <td>Số Trang</td>
                <td>Đơn Giá</td>
                <td>Xử Lí</td>           
            </tr>`;
    
    listData.map((books, index) => {
        table += `<tr>
                    <td>${books.id}</td>
                    <td>${books.name}</td>
                    <td>${books.title}</td>
                    <td>${books.gender}</td>
                    <td>${books.company}</td>
                    <td>${books.year}</td>
                    <td>${books.quantity}</td>
                    <td>${books.page}</td>
                    <td>${books.pay}</td>
                    <td><button onclick="editData(${index})" style="border: none; background-color: rgb(123, 81, 228);">Sửa</button>
                    <button onclick="deleteData(${index})" style="border: none; background-color: rgb(123, 81, 228);">Xoá</button></td>

                </tr>`;
    })
    document.getElementById("list_data").innerHTML = table;
}

function editData(index) {
    var listData = localStorage.getItem("list_books") ? JSON.parse(localStorage.getItem("list_books")) : [];
    //đưa dữ liệu trong localStorage tương ứng ra các ô input
    document.getElementById("Id").value = listData[index].id;
    document.getElementById("name").value = listData[index].name;
    document.getElementById("title").value = listData[index].title;
    document.getElementById("gender").value = listData[index].gender;
    document.getElementById("company").value = listData[index].company;
    document.getElementById("year").value = listData[index].year;
    document.getElementById("quantity").value = listData[index].quantity;
    document.getElementById("page").value = listData[index].page;
    document.getElementById("pay").value = listData[index].pay;
    //gán vị trí cho 1 input ẩn. Mục đích để lấy vị trí, tiện cho việc chính sửa
    document.getElementById("index").value = index;
    
    // Chuyển đổi tiêu đề
    document.getElementById("title1").style.display = "none";
    document.getElementById("title2").style.display = "inline-block";
    document.getElementById("title2").style.width = "100%";

}

function changeData() {
    var listData = localStorage.getItem("list_books") ? JSON.parse(localStorage.getItem("list_books")) : [];
    // tạo biến index để lưu vị trí của dữ liệu cần chỉnh sửa
    var index = document.getElementById("index").value;
    // chỉnh sửa dữ liệu của đối tượng 
    listData[index] = {
        id : document.getElementById("Id").value,
        name : document.getElementById("name").value,
        title : document.getElementById("title").value,
        gender : document.getElementById("gender").value,
        company : document.getElementById("company").value,
        year : document.getElementById("year").value,
        quantity : document.getElementById("quantity").value,
        page : document.getElementById("page").value,
        pay : document.getElementById("pay").value
    }
    // sửa dữ liệu trong localStorage
    localStorage.setItem("list_books", JSON.stringify(listData));
    // đẩy dữ liệu lên lại danh sách quản lí
    renderData();
}

function deleteData(index) {
    var listData = localStorage.getItem("list_books") ? JSON.parse(localStorage.getItem("list_books")) : [];
    listData.splice(index, 1);
    localStorage.setItem("list_books", JSON.stringify(listData));
    renderData();
}