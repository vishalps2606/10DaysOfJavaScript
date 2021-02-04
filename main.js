
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60)*360)+90;
    console.log(secondDegree);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const min = now.getMinutes();
    const minDegree = ((min/60)*360)+90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = now.getHours();
    console.log(hour);
    const hourDegree = ((hour/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate,1000);