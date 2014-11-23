$(document).ready(function () {
    $('.sharebtn.popup').on('click', function (e) {
        var _this = $(this);
        popupCenter(_this.attr('href'), _this.find('.rrssb-text').html(), 580, 470);
        e.preventDefault();
    });

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

    /*
     * This hook adds autosizing functionality
     * to your textarea
     */
    BehaveHooks.add(['keydown'], function (data) {
        var numLines = data.lines.total,
            fontSize = parseInt(getComputedStyle(data.editor.element)['font-size']),
            padding = parseInt(getComputedStyle(data.editor.element)['padding']);
        data.editor.element.style.height = (((numLines * fontSize) + padding)) + 'px';
    });

    /*
     * This hook adds Line Number Functionality
     */
    BehaveHooks.add(['keydown'], function (data) {
        var numLines = data.lines.total,
            house = document.getElementsByClassName('line-nums')[0],
            html = '',
            i;
        for (i = 0; i < numLines; i++) {
            html += '<div>' + (i + 1) + '</div>';
        }
        house.innerHTML = html;
    });

    var editorHtml = new Behave({

        textarea: document.getElementById('txaHtml'),
        replaceTab: true,
        softTabs: true,
        tabSize: 4,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true
    });
    var editorCSS = new Behave({

        textarea: document.getElementById('txaCss'),
        replaceTab: true,
        softTabs: true,
        tabSize: 4,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true
    });
    var editorJava = new Behave({

        textarea: document.getElementById('txaJs'),
        replaceTab: true,
        softTabs: true,
        tabSize: 4,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true
    });
});

var popupCenter = function (url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 3) - (h / 3)) + dualScreenTop;

    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
};