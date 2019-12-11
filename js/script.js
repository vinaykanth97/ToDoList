let tabItems = document.querySelectorAll('.date-format ul li');
let tabContentItems = document.querySelectorAll('.tab-item-content');
let nextArrow = document.querySelector('#next-arrow');
let prevArrow = document.querySelector('#prev-arrow');
let monthText = document.querySelector('.date-zone .month');
let dayText = document.querySelector('.day')
let dateText = document.querySelector('.date')
let year = document.querySelector('.year')
let days = ['monday', 'tuesday', 'Wednesday', 'Thursday', 'friday', 'saturday', 'sunday'];
let current = 0;
let initialDate = 1;
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d = new Date();
class UI {
    static Pageload() {
        dayText.innerHTML = days[d.getDay()];
        monthText.innerHTML = months[d.getMonth()]
        dateText.innerHTML = d.getDate();
        year.innerHTML = d.getFullYear();
    }
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
    static nextBtn() {
        if (current === months.length - 1) {
            current = -1;
        }
        monthText.innerHTML = months[current + 1]
        current++;
		//if(initialDate === months.length - 1)
		dateText.innerHTML = d.getDate() + initialDate;
		initialDate++;
		
		//dayText.innerHTML = days[d.getDay() + 1];
		//days++;
    }
    static prevBtn() {
        if (current === 0) {
            current = months.length;
        }
        monthText.innerHTML = months[current - 1];
        current--;

    }
}

document.addEventListener('DOMContentLoaded', UI.Pageload)
tabItems.forEach((items) => {
    items.addEventListener('click', UI.selectItem)
})
nextArrow.addEventListener('click', UI.nextBtn);
prevArrow.addEventListener('click', UI.prevBtn);
