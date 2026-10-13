
const app = Vue.createApp({

    // 1. DATA: Khai báo dữ liệu của trang web
    data() {
        return {
            // Danh sách 8 sản phẩm
            products: [
                {
                    id: 1,
                    ten: "Ốp lưng điện thoại",
                    gia: 80000,
                    moTa: "Ốp lưng đẹp, bảo vệ điện thoại.",
                    anh: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=600&q=80"
                },
                {
                    id: 2,
                    ten: "Tai nghe Bluetooth",
                    gia: 350000,
                    moTa: "Tai nghe không dây tiện lợi.",
                    anh: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
                },
                {
                    id: 3,
                    ten: "Củ sạc nhanh",
                    gia: 180000,
                    moTa: "Hỗ trợ sạc nhanh cho thiết bị.",
                    anh: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80"
                },
                {
                    id: 4,
                    ten: "Cáp sạc USB",
                    gia: 90000,
                    moTa: "Cáp sạc bền, dễ sử dụng.",
                    anh: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=600&q=80"
                },
                {
                    id: 5,
                    ten: "Pin sạc dự phòng",
                    gia: 420000,
                    moTa: "Sạc điện thoại khi di chuyển.",
                    anh: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80"
                },
                {
                    id: 6,
                    ten: "Giá đỡ điện thoại",
                    gia: 70000,
                    moTa: "Giúp đặt điện thoại chắc chắn.",
                    anh: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80"
                },
                {
                    id: 7,
                    ten: "Loa Bluetooth",
                    gia: 550000,
                    moTa: "Loa nhỏ gọn, thuận tiện mang theo.",
                    anh: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
                },
                {
                    id: 8,
                    ten: "Miếng dán màn hình",
                    gia: 50000,
                    moTa: "Hỗ trợ bảo vệ màn hình điện thoại.",
                    anh: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=600&q=80"
                }
            ],

            // Danh sách sản phẩm đã thêm vào giỏ
            cart: [],

            // Từ khóa tìm kiếm
            tuKhoa: ""
        };
    },

    // 2. COMPUTED: Tính toán dữ liệu tự động
    
computed: {
    // Tính tổng số món trong giỏ hàng
    cartCount() {
        return this.cart.length;
    },

    // Tính tổng tiền
    tongTien() {
        let tong = 0;

        for (let i = 0; i < this.cart.length; i++) {
            tong = tong + this.cart[i].gia;
        }

        return tong;
    },

    // Lọc sản phẩm theo từ khóa
    danhSachLoc() {
        return this.products.filter((sanPham) => {
            return sanPham.ten
                .toLowerCase()
                .includes(this.tuKhoa.toLowerCase());
        });
    }
},


    // 3. METHODS: Những hành động của người dùng
    methods: {

        // Thêm một sản phẩm vào giỏ hàng
        themVaoGio(sanPham) {
            this.cart.push(sanPham);
        },

        // Xóa sản phẩm khỏi giỏ theo vị trí
        xoaKhoiGio(index) {
            this.cart.splice(index, 1);
        },

        // Định dạng giá tiền thành tiền Việt Nam
        dinhDangTien(gia) {
            return gia.toLocaleString("vi-VN") + "đ";
        }

    }
});
app.mount("#app");
