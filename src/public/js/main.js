





// function nguoiandanh() {
//     var userOptionsContainer = document.getElementById("user-options-container");
//     if (userOptionsContainer.style.display === "block") {
//         userOptionsContainer.style.display = "none";
//     } else {
//         userOptionsContainer.style.display = "block";
//     }
// }



// //  Xử lý sự kiện cho nút đăng nhập
// var loginButton = document.getElementById("dnhap");
// var loginModal = document.getElementById("loginModal");
// var closeButton = document.getElementById("closeButton");

// loginButton.addEventListener("click", function(event) {
//     event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"
//     loginModal.style.display = "block"; // Hiển thị cửa sổ đăng nhập
// });
//  document.getElementById("dnhap1").addEventListener("click",function(event)
//  {
//     event.preventDefault();
//     loginModal.style.display="block";

//  })

// closeButton.addEventListener("click", function() {
//     loginModal.style.display = "none"; // Ẩn cửa sổ đăng nhập khi nhấn vào nút đóng
// });
// // xử lý sự kiện cho nut đăng ký
//     var nutdangky=document.getElementById("dki");
//     var htdangky=document.getElementById("dangky");
//     nutdangky.addEventListener("click", function(event) {
//         event.preventDefault();
//         htdangky.style.display = "block";
//     });

//     document.getElementById("dki1").addEventListener("click", function(event){
//         event.preventDefault();
//         htdangky.style.display = "block";   
//     })

// // xử lý sự kiện cho nút tắt 
//     document.getElementById("nuttat").addEventListener("click", function()
//     {
//         htdangky.style.display ="none";
//     })

// function lbt() {
//     // Ẩn nội dung của các trang khác và hiển thị trang bài tập
//   // Ẩn tất cả giao diện bên dưới menu

//         document.querySelector(".anhnen").style.display = "none";
//         document.querySelector(".dn").style.display = "none";
//         document.getElementById("trangchuyennganh").style.display="none";
//         document.getElementById("trangktnhanh").style.display="none";
//         document.getElementById("khungbaihoc").style.display = "block"; 
// }
// function tt()
// {
//         document.querySelector(".anhnen").style.display = "block";
//         document.querySelector(".dn").style.display = "block";
//         document.getElementById("trangchuyennganh").style.display="none";
//         document.getElementById("trangktnhanh").style.display="none";
//         document.getElementById("khungbaihoc").style.display = "none"; 
// }
// function cn()
// {
//     document.querySelector(".anhnen").style.display = "none";
//     document.querySelector(".dn").style.display = "none";
//     document.getElementById("khungbaihoc").style.display="none";
//     document.getElementById("trangktnhanh").style.display="none";
//     document.getElementById("trangchuyennganh").style.display="block";
// }
// function ktn()
// {
//     document.querySelector(".anhnen").style.display = "none";
//     document.querySelector(".dn").style.display = "none";
//     document.getElementById("khungbaihoc").style.display="none";
//     document.getElementById("trangchuyennganh").style.display="none";
//     document.getElementById("trangktnhanh").style.display="block";
// }


// function tn()
// {
//     var tracnghiem = document.getElementById("trangbaihoc");
//     if( tracnghiem.style.display ==="none")
//     {
//         tracnghiem.style.display="block";
//     }
//     else{
//         tracnghiem.style.display="none";
//     }
// }
// document.getElementById('dang-nhap-button').addEventListener('click', () => {
//     const tk = document.getElementById('tk').value;
//     const mk = document.getElementById('mk').value;

//     // Gửi yêu cầu đăng nhập đến máy chủ
//     fetch('/dangnhap', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ tk, mk })
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Xử lý phản hồi từ máy chủ
//         if (data.message === 'Đăng nhập thành công') {
//             // Hiển thị thông báo đăng nhập thành công bằng alert
//             alert('Đăng nhập thành công');
//         } else {
//             // Xử lý khi đăng nhập không thành công
//             alert('Tên đăng nhập hoặc mật khẩu không đúng');
//         }
//     });
// });

