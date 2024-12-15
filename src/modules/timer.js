const timer = function (deadline) {
    const timerHours = document.getElementById("timer-hours")
    const timerMinutes = document.getElementById("timer-minutes")
    const timerSeconds = document.getElementById("timer-seconds")

    const getTimeRemaining = function () {
        const dateStop = new Date(deadline).getTime()
        const dateNow = new Date().getTime()
    
        const timeRemaining = (dateStop - dateNow) / 1000
    
        const hours = Math.floor(timeRemaining / 60 / 60)
        const minutes = Math.floor((timeRemaining / 60) % 60)
        const seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, hours, minutes, seconds }
    }

    const timerRender = function () {
        const getTime = getTimeRemaining()

        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if (getTime.timeRemaining > 1) setTimeout(timerRender, 1000)
    }

    timerRender()
}

export default timer