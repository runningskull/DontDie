(function() {

$(document).ready(function() {

    $(document).inputPlaceholder();
    $('#start-date, #end-date')
        .datepicker()
        .datepicker('option', 'dateFormat', 'DD, MM d')
    ;

    $('#details-toggle').change(function() {
        if ($(this).is(':checked')) {
            $('#details').show().focus();
            $('label').addClass('checked');
        } else {
            $('#details').hide();
            $('label').removeClass('checked');
        }
    });

});

}());

