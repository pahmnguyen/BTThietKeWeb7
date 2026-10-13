
$(document).ready(function() {

    $("#hienMatKhau").click(function() {

        if ($("#matKhau").attr("type") == "password") {
            $("#matKhau").attr("type", "text");
        } else {
            $("#matKhau").attr("type", "password");
        }

    });

});
