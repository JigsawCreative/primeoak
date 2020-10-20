const $ = jQuery;

function hideVideo() {
    $('#video-container').css('display', 'none');
}

function hideVideoTitles() {
    $('.video-titles').css('display', 'none');
}
setTimeout(hideVideoTitles, 4000);
setTimeout(hideVideo, 4500);