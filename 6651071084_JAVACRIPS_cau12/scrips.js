
$(document).ready(function() {
    $("input[name='passport']").change(function() {
        if ($(this).val() == "Yes") {
            $("#nhapPassport").show();
        } else {
            $("#nhapPassport").hide();
        }
    });
    $("input[name='creditCard']").change(function() {
        if ($(this).val() == "Yes") {
            $("#nhapCreditCard").show();
        } else {
            $("#nhapCreditCard").hide();
        }
    });
});
