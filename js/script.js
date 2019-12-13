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

dayText.innerHTML = days[d.getDay()];
monthText.innerHTML = months[d.getMonth()]
dateText.innerHTML = d.getDate();
yearText.innerHTML = d.getFullYear();
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
