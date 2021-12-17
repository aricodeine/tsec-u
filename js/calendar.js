const date = new Date();



const rendercalendar = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.querySelector('.date h1').innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;
    document.querySelector('.date p').innerHTML = new Date().toDateString();



    const monthDays = document.querySelector('.days');


    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const previousLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
    // console.log(lastDay);

    date.setDate(1);
    const firstDayIndex = date.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;



    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${previousLastDay.getDate() - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() == new Date().getFullYear()) {
          if(i == 18) days += `<div class="today event1 dot" onclick="isEvent(this)">${i}</div>`;
          else if(i == 22) days += `<div class="today event2 dot" onclick="isEvent(this)">${i}</div>`;
          else if(i == 12) days += `<div class="today event3 dot" onclick="isEvent(this)">${i}</div>`;
          else days += `<div class="clas today" onclick="isEvent(this)">${i}</div>`;
        }
        else if (i == 18 && date.getMonth() == 11 && date.getFullYear() == 2021) {
          days += `<div class="clas event1 dot" onclick="isEvent(this)">${i}</div>`;
        }else if (i == 22 && date.getMonth() == 11 && date.getFullYear() == 2021) {
          days += `<div class="clas event2 dot" onclick="isEvent(this)">${i}</div>`;
        }else if (i == 12 && date.getMonth() == 0 && date.getFullYear() == 2022) {
          days += `<div class="clas event3 dot" onclick="isEvent(this)">${i}</div>`;
        }
        else days += `<div class="clas" onclick="isEvent(this)">${i}</div>`;
        monthDays.innerHTML = days;
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

    var upcoming = document.querySelector('.upcoming');
var upcomingCal = document.querySelector('.calendar');
var manageBlur = document.querySelector('nav:not(.container div)');
var eventSection = document.querySelector('.eventSection');

upcoming.addEventListener('click', function () {
  
    if (upcomingCal.classList.contains('hidden')) {
      
      upcomingCal.classList.remove('hidden');
      eventSection.classList.remove('hidden');
      setTimeout(function () {
        upcomingCal.classList.remove('visuallyhidden');
        eventSection.classList.remove('visuallyhidden');
        document.querySelector('body > *:not(.container)').style.filter = 'blur(1px)';
      }, 20);
    } else {
      
      upcomingCal.classList.add('visuallyhidden');
      eventSection.classList.add('visuallyhidden');
      document.querySelector('body > *:not(.container)').style.filter = 'blur(0px)';   
      upcomingCal.addEventListener('transitionend', function(e) {
        upcomingCal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });

      eventSection.addEventListener('transitionend', function(e) {
        eventSection.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
    
  }, false);




// const selet = document.getElementById('event1')[0];
// selet.addEventListener('click', () => {
//   document.getElementById('eventdata').innerHTML = "Thampi is alive";
// });

}

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


function isEvent(el) {
  var some = document.getElementById('eventdata');
  if(el.classList.contains('event1')) {
    some.innerHTML = '<p id="eventname"><strong>Event name:</strong> 👨🏻‍💻 Rubix Hackathon\'22 👨🏻‍💻</p> <p id="eventtime"><strong>Event duration:</strong> 18th January 2022 - 20th January 2022</p> <p id="eventdescription"><strong>Description:</strong> This year Rubix is going to organize a  48 Hour Online Hackathon🏃‍♀👨🏻‍💻 side events and webinars!👨🏻‍💻🧾<br><br>Further details regarding the hackathon to be out soon!!🤩</p>';
  }else if(el.classList.contains('event2')) {
    some.innerHTML = '<p id="eventname"><strong>Event name:</strong> BidWiser CP contest\'22</p> <p id="eventtime"><strong>Event duration:</strong> 22nd December 2021</p> <p id="eventdescription"><strong>Description:</strong> This is a competitive programming contest organized specially in response to the requests of students.</p>';
  }else if(el.classList.contains('event3')) {
    some.innerHTML = '<p id="eventname"><strong>Event name:</strong> TSEC GDSC Machine Learning Bootcamp</p> <p id="eventtime"><strong>Event duration:</strong> 12th January 2022 - 16th January 2022</p> <p id="eventdescription"><strong>Description:</strong> Get a taste of learning Machine Learning with GDSC.</p>';
  }else {
    some.innerHTML = "No event scheduled";
  }
}

console.log(date.getFullYear());

rendercalendar();

