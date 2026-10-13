
$(document).ready(function() {

    $(".tablinks").click(function() {

        // Xoa trang thai active cua cac tab
        $(".tablinks").removeClass("active");

        // An tat ca noi dung
        $(".tabcontent").removeClass("active");

        // Them active cho tab duoc chon
        $(this).addClass("active");

        // Lay ID noi dung can hien thi
        var idTab = $(this).attr("data-tab");

        // Hien thi noi dung tuong ung
        $("#" + idTab).addClass("active");

    });

});
