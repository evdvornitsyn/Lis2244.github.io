
let weather;
let gormon;
let sleep;
let people;

let weatherResult;
let gormonResult;
let sleepResult;
let peopleResult;

let finishResult;
let paragraph = document.querySelector('.text_finish_item');
let themButton = document.querySelector('.button');


let monsterResultOne = function (weather, gormon, sleep, people) {
    if (weather <= 4) {
        weatherResult = 1;
    }
    if (weather > 4 && weather <= 7) {
        weatherResult = 2;
    }
    if (weather > 7 && weather <= 10) {
        weatherResult = 3;
    }

    if (gormon <= 4) {
        gormonResult = 1;
    }
    if (gormon > 4 && gormon <= 7) {
        gormonResult = 2;
    }
    if (gormon > 7 && gormon <= 10) {
        gormonResult = 3;
    }

    if (sleep <= 4) {
        sleepResult = 1;
    }
    if (sleep > 4 && sleep <= 7) {
        sleepResult = 2;
    }
    if (sleep > 7 && sleep <= 10) {
        sleepResult = 3;
    }

    if (people <= 4) {
        peopleResult = 1;
    }
    if (people > 4 && people <= 7) {
        peopleResult = 2;
    }
    if (people > 7 && people <= 10) {
        peopleResult = 3;
    }
     finishResult = weatherResult + gormonResult + sleepResult + peopleResult;
     if (finishResult < 5) {
        paragraph.textContent = "Много пить";
    }
    if (finishResult > 4 && finishResult <= 8) {
        paragraph.textContent = "Немного выпить";
    }
    if (finishResult > 8 && finishResult <= 12) {
        paragraph.textContent = "Не стоит поддерживать своё хорошее настроение алкоголем";
    }
}
themButton.onclick = function (weather, gormon, sleep, people) {
    weather = document.querySelector('.weather');
    weather = weather.value;
    console.log(weather);
    gormon = document.querySelector('.gormon');
    gormon = gormon.value;
    console.log(gormon);
    sleep = document.querySelector('.sleep');
    sleep = sleep.value;
    console.log(sleep);
    people = document.querySelector('.people');
    people = people.value;
    console.log(sleep);
    monsterResultOne(weather, gormon, sleep, people);
    return false;
}
