window.onload = function () {

    var canvas = document.getElementById('canvas_js');
    var video = document.getElementById('video_js');
    var button1 = $('#button1_js');
    var button2 = $('#button2_js');
    var button3 = $('#button3_js');
    var num = document.getElementById('number_js');
    var context = canvas.getContext('2d');
    var section = document.querySelector(".section");
    var main = document.querySelector(".my_main");
    var container = document.querySelector(".container");

    $.getJSON("js/test.json", function(json) {
        console.log(json);
        if($.isEmptyObject(json) == 0) content(json);
    });

    function content(json) {
        // установка цвета беграунда
        main.style.backgroundColor = json.main_theme.background.color;

        // установка ширины и высоты
        section.style.height = json.main_theme.height + "px";
        section.style.width = json.main_theme.width + "px";
        // layout
        // if(json.layout.orientation == "portrait"){$(".bg-block").addClass('bg-block2');}

        // проверка наличия ada_theme
        if(json.ada_theme){

        }
    }

    var i=1;
    function score (){
        num.innerHTML = i;
        $("#number_js").addClass('transit');
        $('#number_js').css('font-size', 170+'px');
        videoCam();
        setTimeout(function () {
            if (i < 3){
                i += 1;
                score();}}, "1000");
        setTimeout(function () {
                $("#number_js").removeClass('transit');
                $('#number_js').css('font-size', 17+'px');}, "900");
        if (i == 3){
            setTimeout(function () {
                num.innerHTML = '';
                img();
                $('.stream_js').addClass('display');
                $('.photo_js').removeClass('display');
            },900);}};

    function start() {
        $(".overlay,.photo_js, .stream_js").addClass('display');
        $(".bg-block").removeClass('display');
        $('.bg-photo').width('250');
        button1.addClass('display');
        button2.addClass('display');
        button3.addClass('display');
        i=1;
    }

    $(".bg-block").click( function () {
        if($('.bg-photo').width() == 250){
            $(".overlay").removeClass('display');
            $(".bg-block").addClass('display');
            $(this).removeClass('display');
            $('.bg-photo').width('700');
            button1.removeClass('display');
            button2.removeClass('display');
            button3.removeClass('display');
            score();}
    });

    button1.click( function () {
        start();
    });


    function img() {
        context.drawImage(video, 0, 0);}
    function videoCam() {
        video.src = 'http://192.168.101.147/addons/get-camera-stream.php';}


    button2.click(function () {
        img();
        // $('.stream').addClass('display');
        $('.photo').removeClass('display');
    });
    // console.log('что-то не так с видеостримом или пользователь запретил его использовать :P');
};