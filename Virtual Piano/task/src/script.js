document.addEventListener('keydown', logKey);
function logKey(e) {

    const keys = ['a','s','d','f','g','h','j','e','t','u','w','y']
    if(keys.includes(e.key)) {
        createAudio(e.key);
    }
    else {
        console.log('Another key is pressed')
    }
}

function createAudio(key){
    const audio = new Audio(`audio/${key.toUpperCase()}.mp3`);
    audio.play();
}
