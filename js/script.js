let tabItems = document.querySelectorAll('.date-format ul li');
let tabContentItems = document.querySelectorAll('.tab-item-content');
let nextArrow = document.querySelector('#next-arrow');
let prevArrow = document.querySelector('#prev-arrow');
let monthText = document.querySelector('.date-zone .month');
let dayText = document.querySelector('.day')
let dateText = document.querySelector('.date')
let yearText = document.querySelector('.year')
let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let initial = 1;
let d = new Date();
let addtodoValue = document.getElementById('task-field');
let myForm = document.querySelector('.submit-task')
let content = document.querySelectorAll('.content')
dayText.innerHTML = days[d.getDay()];
monthText.innerHTML = months[d.getMonth()]
dateText.innerHTML = d.getDate();
yearText.innerHTML = d.getFullYear();
let weekly = document.getElementsByClassName('weekly')
class Tabs {

    static selectItem() {
        tabItems.forEach((item) => {
            item.classList.remove('active')
        });
        tabContentItems.forEach((item) => {
            item.classList.remove('show')
        });
        this.classList.add('active')
        const contId = document.getElementById(`${this.id}-content`);
        contId.classList.add('show')
    }
}
class DateLogic {
    static nextBtn() {
        d.setDate(d.getDate() + initial)
        dateText.innerHTML = d.getDate();
        monthText.innerHTML = months[d.getMonth()];
        yearText.innerHTML = d.getFullYear();
        dayText.innerHTML = days[d.getDay()];
    }
    static prevBtn() {
        d.setDate(d.getDate() - initial)
        dateText.innerHTML = d.getDate();
        monthText.innerHTML = months[d.getMonth()];
        yearText.innerHTML = d.getFullYear();
        dayText.innerHTML = days[d.getDay()];
    }
}
tabItems.forEach((items) => {
    items.addEventListener('click', Tabs.selectItem)
})
nextArrow.addEventListener('click', DateLogic.nextBtn);
prevArrow.addEventListener('click', DateLogic.prevBtn);



// weekly filter
function getWeekDates() {

    let now = new Date();

    let dayOfWeek = now.getDay();
    let numDay = now.getDate();

    let start = new Date(now);
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);


    let end = new Date(now);
    end.setDate(numDay + (7 - dayOfWeek));
    end.setHours(0, 0, 0, 0);

    return [start, end];
}
let [start, end] = getWeekDates();

let Emptarray = [];

function appendListLogic() {
    let TimeStamp = `Task Added on ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    Emptarray.push([addtodoValue.value, d.getDate()]);
    let output = "";
    for (let i = 0; i < Emptarray.length; i++) {
        const element = Emptarray[i];
        output += `
            <div class="task-card" id="content-block">
                <div class="task-content">
                    <h6 class="content">${element[0]}</h6>
                    <small class="datestamp">To do added on ${element[1]} ${months[d.getMonth()]} ${d.getFullYear()}</small>
                </div>
                <div class="task-option"><img src="images/ellipsis.svg"></div>
            </div>
  `;

    }
    let from = start.getDate();
    let to = end.getDate();
    let check = d.getDate();
    weekendOutput = "";
    let weekfilt = Emptarray.filter(emp => {
        if (emp[1] >= from && emp[1] <= to) {
            weekendOutput += `
            <div class="task-card" id="content-block">
                <div class="task-content">
                    <h6 class="content">${emp[0]}</h6>
                    <small class="datestamp">To do added on ${emp[1]} ${months[d.getMonth()]} ${d.getFullYear()}</small>
                </div>
                <div class="task-option"><img src="images/ellipsis.svg"></div>
            </div>
    `;
            document.getElementById('week').innerHTML = weekendOutput;
        } else {
            return false;
        }
    })

    document.getElementById('todo-current').innerHTML = output;
};

function AppendTodo(e) {
    e.preventDefault();
    appendListLogic();
}

myForm.addEventListener('submit', (e) => {
    AppendTodo(e);
})
