// Thiết lập API YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Biến toàn cục cho player
var player;

// Gọi hàm này khi API đã sẵn sàng
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'VIDEO_ID', // ID video YouTube
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Hàm này được gọi khi player đã sẵn sàng
function onPlayerReady(event) {
    event.target.playVideo();
}

// Hàm này được gọi khi trạng thái phát đổi (play, pause, stop)
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        // Xử lý khi video kết thúc
    }
}

// Thêm các hàm xử lý phát nhạc khác (play, pause, stop, vv.)
