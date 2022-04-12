 
function login() {
    var USER = "phamnhu@gmail.com";
    var PASS = "quocbao";

    var inputUsername = document.getElementById('emailId');
    var inputPassword = document.getElementById('passId'); 

    var email = inputUsername.value;
    var pass = inputPassword.value;

    if (USER == email && PASS == pass) {
        alert('Dang nhap thanh cong!');
        window.open("management.html");
    } else if (USER == email && PASS != pass) {
        alert('Mat Khau khong dung!');
    } else if (USER != email) {
        alert('Tai khoan khong ton tai!');
    }
}

// function