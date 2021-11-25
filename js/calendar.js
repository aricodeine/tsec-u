const date = new Date();



const rendercalendar = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    document.querySelector('.date h1').innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;
    document.querySelector('.date p').innerHTML = new Date().toDateString();

    

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const previousLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
    console.log(lastDay);

    date.setDate(1);
    const firstDayIndex = date.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${previousLastDay.getDate() - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) days += `<div class="today">${i}</div>`;
        else days += `<div class="clas">${i}</div>`;
        monthDays.innerHTML = days;
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
}


	
var upcoming = document.querySelector('.upcoming');
var upcomingCal = document.querySelector('.calendar');
upcoming.addEventListener('click', () => {
    if(upcomingCal.style.display == "block") {
        
        upcomingCal.style.display = "none";
        console.log('changed');
    }else {
        upcomingCal.style.display = "block";
    }
});

document.querySelector('.prev').
    addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        rendercalendar();
    });

document.querySelector('.next').
    addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        rendercalendar();
    });

rendercalendar();
