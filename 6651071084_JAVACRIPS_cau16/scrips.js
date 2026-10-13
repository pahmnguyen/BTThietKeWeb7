
$(document).ready(function() {

    // Them hang moi
    $("#addRow").click(function() {

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var birthdate = $("#birthdate").val();

        // Kiem tra khong de trong
        if (name == "" || email == "" || birthdate == "") {
            $("#thongBao").text("Vui long nhap day du thong tin!");
            return;
        }

        // Kiem tra email
        var mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!mauEmail.test(email)) {
            $("#thongBao").text("Email khong dung dinh dang!");
            return;
        }

        // Kiem tra ngay sinh
        var ngaySinh = new Date(birthdate + "T00:00:00");

        if (isNaN(ngaySinh.getTime())) {
            $("#thongBao").text("Ngay sinh khong hop le!");
            return;
        }

        // Them hang vao bang
        var hangMoi = "<tr>" +
            "<td><input type='checkbox' class='chonHang'></td>" +
            "<td></td>" +
            "<td></td>" +
            "<td></td>" +
            "</tr>";

        var dong = $(hangMoi);

        // Dua du lieu vao cac o
        dong.find("td").eq(1).text(name);
        dong.find("td").eq(2).text(email);
        dong.find("td").eq(3).text(birthdate);

        $("#myTable tbody").append(dong);

        $("#thongBao").css("color", "green");
        $("#thongBao").text("Them hang thanh cong!");

        // Xoa du lieu da nhap
        $("#name").val("");
        $("#email").val("");
        $("#birthdate").val("");
    });


    // Xoa hang duoc chon
    $("#deleteRow").click(function() {

        var soHang = 0;

        $("#myTable tbody tr").each(function() {

            if ($(this).find(".chonHang").is(":checked")) {
                $(this).remove();
                soHang++;
            }

        });

        if (soHang > 0) {
            $("#thongBao").css("color", "green");
            $("#thongBao").text("Da xoa " + soHang + " hang!");
        } else {
            $("#thongBao").css("color", "red");
            $("#thongBao").text("Vui long chon hang can xoa!");
        }

    });

});
