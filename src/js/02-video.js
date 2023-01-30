import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const LOCALESTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    const currentTime = e.seconds;
    console.log(e.seconds);
    localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(currentTime))
}

const currentTime = localStorage.getItem(LOCALESTORAGE_KEY);
// const startTime = JSON.parse(currentTime);
// console.log(startTime);

player.setCurrentTime(currentTime).then(function (seconds) {

}).catch(function(error) {
     switch (error.name) {
       case 'RangeError':
            break;
        default:
            break;
     }
 }); 
