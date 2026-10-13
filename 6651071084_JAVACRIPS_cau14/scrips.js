
$(document).ready(function() {

    $("#toggleTheme").change(function() {

        if ($(this).is(":checked")) {
            $("body").addClass("light");
            $("#trangThai").text("On");
        } else {
            $("body").removeClass("light");
            $("#trangThai").text("Off");
        }

    });

});
