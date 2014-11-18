$('#btnCompile').click(function (e) {
    var h = $('#txaHtml').val();
    var c = '<style>' + $('#txaCss').val() + '</style>';
    var j = '<script>' + $('#txaJs').val() + '</script>';

    var data = {
        body: h + c + j
    };
    var source = $("#tmpl").html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $('#viewer').html(html);
});