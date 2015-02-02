$(function() {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            var firstName = $("input#mce-FNAME").val(); // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if(firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache: false,
                dataType: 'jsonp',
                contentType: "application/json; charset=utf-8",
                error: function(err) {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that our bearded mail robot is not responding. Could you kindly try again? Thanks. <br /> " + err.msg + "");
                    $('#success > .alert-danger').append('</div>');
                },
                success: function(data) {
                    if(data.result != "success") {
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that our bearded mail robot had an issue. Could you kindly try again? <i>Pssst...Here's what happened: <span style='color: #000;'>" + data.msg + "</span></i>");
                        $('#success > .alert-danger').append('</div>');
                    } else {
                        // Success message
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        $('#success > .alert-success').append("<strong>Thank you " + firstName + ", your beautiful message is on its way to us right now. </strong>");
                        $('#success > .alert-success').append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
                        $('#mc-embedded-subscribe').hide();
                    }
                }
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });
    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});
/*When clicking on Full hide fail/success boxes */
$('#fname').focus(function() {
    $('#success').html('');
});