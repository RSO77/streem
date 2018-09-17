window.onload = function () {

    var canvas = document.getElementById('canvas_js');
    var video = document.getElementById('video_js');
    var button1 = $('#button1_js');
    var button2 = $('#button2_js');
    var button3 = $('#button3_js');
    var num = document.getElementById('number_js');
    var context = canvas.getContext('2d');

    //
    // $.getJSON("test.json", function (data) {
    //     alert(data);
    // });

    var i=1;
    function score (){
        num.innerHTML = i;
        $("#number_js").addClass('transit');
        $('#number_js').css('font-size', 170+'px');
        setTimeout(function () {
            if (i < 3){
                i += 1;
                score();}}, "1000");
        setTimeout(function () {
                $("#number_js").removeClass('transit');
                $('#number_js').css('font-size', 17+'px');}, "900");
        if (i == 3){
            video.src = 'http://192.168.101.147/addons/get-camera-stream.php';
            setTimeout(function () {
                num.innerHTML = '';
                context.drawImage(video, 0, 0, 600, 450);
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
        $(".overlay").removeClass('display');
        $(".bg-block").addClass('display');
        $(this).removeClass('display');
        $('.bg-photo').width('700');
        button1.removeClass('display');
        button2.removeClass('display');
        button3.removeClass('display');
        score();
    });

    button1.click( function () {
        start();
    });


    function img() {
        if(screen.width > 767)
            context.drawImage(video, 0, 0, 600, 450);
        else
            context.drawImage(video, 0, 0, 450, 600);
    };
    function videoCam() {
        $('.photo_js').addClass('display');
        $('.stream_js').removeClass('display');
        video.src = 'http://192.168.101.147/addons/get-camera-stream.php';
    }


    button2.click(function () {
        img();
        $('.stream').addClass('display');
        $('.photo').removeClass('display');
    });
    // console.log('что-то не так с видеостримом или пользователь запретил его использовать :P');
};