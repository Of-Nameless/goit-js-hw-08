import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALESTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(function(e) {
    const currentTime = e.seconds;
    // console.log(currentTime);
    localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(currentTime))
}, 1000));

player.setCurrentTime(localStorage.getItem(LOCALESTORAGE_KEY));
