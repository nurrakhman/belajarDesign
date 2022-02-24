function getFormattedTime(sec) {
    let time = ''
    if (sec >= 3600) {
        let hours = Math.floor(sec / 3600)
        if (hours < 10) {
            time += '0' + hours + ':'
        } else {
            time += hours + ':'
        }
    } else {
        time += '00:'
    }

    if (sec >= 60) {
        let minutes = sec % 3600
        minutes = Math.floor(minutes /60)
        if (minutes < 10) {
            time += '0' + minutes + ':'
        } else {
            time += minutes + ':'
        }
    } else {
        time += '00' + ':'
    }

    let seconds = sec % 3600
    seconds = seconds % 60
    if (seconds < 10) {
        time += '0' + seconds
    } else {
        time += seconds
    }

    return time
}

module.exports = getFormattedTime
// console.log(getFormattedTime(36500));