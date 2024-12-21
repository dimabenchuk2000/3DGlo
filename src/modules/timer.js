const timer = function (deadline) {
    const timerDay = document.getElementById("timer-day")
    const timerHours = document.getElementById("timer-hours")
    const timerMinutes = document.getElementById("timer-minutes")
    const timerSeconds = document.getElementById("timer-seconds")

    let idSetInterval

    const getTimeRemaining = function () {
        const dateStop = new Date(deadline).getTime()
        const dateNow = new Date().getTime()
    
        const timeRemaining = (dateStop - dateNow) / 1000
    
        const day = Math.floor(timeRemaining / 60 / 60 / 24)
        const hours = Math.floor((timeRemaining / 60 / 60) % 24)
        const minutes = Math.floor((timeRemaining / 60) % 60)
        const seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, day, hours, minutes, seconds }
    }

    const timerRender = function () {
        const getTime = getTimeRemaining()

        if (getTime.timeRemaining > 0) {
            timerDay.textContent = getTime.day.toString().padStart(2, "0")
            timerHours.textContent = getTime.hours.toString().padStart(2, "0")
            timerMinutes.textContent = getTime.minutes.toString().padStart(2, "0")
            timerSeconds.textContent = getTime.seconds.toString().padStart(2, "0")
        } else {
            clearInterval(idSetInterval)
        }
    }

    idSetInterval = setInterval(timerRender, 1000)
}

export default timer