var time;
var resultsPage;

const startTimer = (duration, nextPage) => {
    time = duration;
    resultsPage = nextPage;
    setInterval(timer, 1000);
}

const formatTime = (time) => {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    if (minutes > 0) {
        return minutes + ":" + seconds;
    } else {
        return seconds
    }

    
}

const timer = () => {
    if (time > 0) {
        time--;
        formattedTime = formatTime(time);
        document.getElementById("timer").innerHTML = formattedTime;
    } else {
       // PUT CODE TO CHANGE PAGE HERE.
       window.open(resultsPage, '_self', false);
    }
    


}