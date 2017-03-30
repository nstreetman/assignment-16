function countdown() {
    if(clock > 0) {
        clock = clock - 1;
        document.getElementById("timer").innerHTML = " ''<p>' + '.clock' + '</p>' ";
    } else {
        // Stop timer
        clearInterval(countdownId);
    }
}
