
$(document).ready(function() {

    $(".tieude").click(function() {

        // An tat ca noi dung
        $(".noidung").slideUp();

        // Neu noi dung dang an thi hien ra
        if ($(this).next(".noidung").is(":hidden")) {
            $(this).next(".noidung").slideDown();
        }

    });

});