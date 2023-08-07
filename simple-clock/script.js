const secondHand = document.querySelector('.sec')
const minuteHand = document.querySelector('.min')
const hourHand = document.querySelector('.hour')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hoursDegrees = calculateHourAngle(hours, minutes);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    function calculateHourAngle(hours, minutes) {
        const hourFraction = (minutes / 60);
        const adjustedHour = hours % 12 + hourFraction;
        const hoursDegrees = (adjustedHour / 12) * 360 + 90;
        return hoursDegrees;
    }
}

setInterval(setDate, 1000);