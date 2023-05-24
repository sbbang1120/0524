$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/A5AmE_b68cg',
        containment: '#main_visual',
        autoPlay: true,
        showControls: true,
        playOnlyIfVisible: true,
    });

    $('#conVideo1').YTPlayer({
        videoURL: 'https://youtu.be/qStRYrJUMrI',
        containment: '#bgm1',
        autoPlay: true,
        showControls: true,
    });

    $('#conVideo2').YTPlayer({
        videoURL: 'https://youtu.be/qStRYrJUMrI',
        containment: '#bgm2',
        autoPlay: true,
        showControls: true,
    });

    $('#conVideo3').YTPlayer({
        videoURL: 'https://youtu.be/qStRYrJUMrI',
        containment: '#bgm3',
        autoPlay: true,
        showControls: true,
    });

    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
})