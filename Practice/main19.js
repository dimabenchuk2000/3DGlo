const greetings = document.getElementById("greetings")
const dayWeek = document.getElementById("dayWeek")
const time = document.getElementById("time")
const dayUntil = document.getElementById("dayUntil")

const timeUpdate = function () {
    const newYear = new Date("1 january 2025")
    const dateNow = new Date()

    const timeRemaining = newYear.getTime() - dateNow.getTime()
    const dateRemaining = Math.floor(timeRemaining / 1000 / 60 / 60 / 24)

    const hours = dateNow.getHours()
    const day = dateNow.getDay()
    const time = dateNow.toLocaleTimeString("en")

    return { dateNow, hours, day, time, dateRemaining }
}

const renderTime = function () {
    const getTime = timeUpdate()

    if (getTime.hours >= 4) greetings.textContent = "Доброе утро"
    if (getTime.hours >= 10) greetings.textContent = "Добрый день"
    if (getTime.hours >= 16) greetings.textContent = "Добрый вечер"
    if (getTime.hours >= 22 || getTime.hours < 4) greetings.textContent = "Доброй ночи"
    
    if (getTime.day === 0) dayWeek.textContent = "Воскресенье"
    if (getTime.day === 1) dayWeek.textContent = "Понедельник"
    if (getTime.day === 2) dayWeek.textContent = "Вторник"
    if (getTime.day === 3) dayWeek.textContent = "Среда"
    if (getTime.day === 4) dayWeek.textContent = "Четверг"
    if (getTime.day === 5) dayWeek.textContent = "Пятница"
    if (getTime.day === 6) dayWeek.textContent = "Суббота"

    time.textContent = getTime.time
    dayUntil.textContent = getTime.dateRemaining
}

setInterval(renderTime, 1000)