
/* ==============================
   1. XỬ LÝ MENU TRÊN ĐIỆN THOẠI
   ============================== */

// Lấy nút hamburger và menu điện thoại
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

// Khi bấm nút hamburger
menuButton.addEventListener("click", function () {

    // Nếu menu đang ẩn thì hiện, nếu đang hiện thì ẩn
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    // Cập nhật trạng thái của nút
    const dangMo = !mobileMenu.classList.contains("hidden");
    menuButton.setAttribute("aria-expanded", dangMo);

    // Đổi biểu tượng
    if (dangMo) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
});

// Khi bấm vào một đường dẫn trong menu điện thoại
const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        // Đóng menu
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");

        // Đưa nút về trạng thái ban đầu
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});


/* ==============================
   2. NÚT LÊN ĐẦU TRANG
   ============================== */

// Lấy nút lên đầu trang
const backToTop = document.getElementById("backToTop");

// Kiểm tra vị trí cuộn trang
window.addEventListener("scroll", function () {

    // Nếu cuộn xuống hơn 300px thì hiện nút
    if (window.scrollY > 300) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
    }
});

// Khi bấm nút thì cuộn về đầu trang
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ==============================
   3. XỬ LÝ FORM ĐẶT BÁNH
   ============================== */

// Lấy form và vùng hiển thị thông báo
const orderForm = document.getElementById("orderForm");
const formMessage = document.getElementById("formMessage");

// Khi người dùng gửi form
orderForm.addEventListener("submit", function (event) {

    // Ngăn trang tải lại
    event.preventDefault();

    // Lấy tên người đặt bánh
    const hoTen = document.getElementById("hoTen").value;

    // Hiện thông báo xác nhận
    formMessage.textContent =
        "Cảm ơn " + hoTen +
        "! Bạn đã gửi yêu cầu đặt bánh thành công.";

    // Xóa dữ liệu đã nhập sau khi gửi thử
    orderForm.reset();
});
