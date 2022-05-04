$('#button').on('click', function() {
    $('#error').css('display', 'block');
    $('#button').on('mouseout', function() {
        $('#error').css('display', 'none');
    });
});