/**
 * Created by karlobrien on 31/08/2014.
 */
$(document).ready(function() {
    $('.btn-default').click(function () {
        var toAdd = $('.form-control').val();
        $(".list").append("<div class=\"item\">" + toAdd + "<\/div>");
    });
    $(document).on('click', '.item', function () {
        $(this).remove();
    });
})