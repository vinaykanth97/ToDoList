let tabItems = document.querySelectorAll('.date-format ul li');
let tabContentItems = document.querySelectorAll('.tab-item-content');
let nextArrow = document.querySelector('#next-arrow');
let prevArrow = document.querySelector('#prev-arrow');
let monthText = document.querySelector('.date-zone .month');
let dayText = document.querySelector('.day')
let dateText = document.querySelector('.date')
let year = document.querySelector('.year')
let current = 1;
let dateMinus = 1;

class UI {
    static Pageload() {
        moment().format();
        dayText.innerHTML = moment().format("dddd");
        monthText.innerHTML = moment().format('MMM');
        dateText.innerHTML = moment().format('D');
        year.innerHTML = moment().format('YYYY');
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
        dayText.innerHTML = moment().add('days', current).format('dddd')
        dayText.innerHTML = moment().add('days', current).format("dddd");
        monthText.innerHTML = moment().add('days', current).format('MMM');
        dateText.innerHTML = moment().add('days', current).format('D');
        year.innerHTML = moment().add('days', current).format('YYYY');
        current++;
    }
    static prevBtn() {
        dayText.innerHTML = moment().subtract(dateMinus, 'days').format('dddd');
        dayText.innerHTML = moment().subtract(dateMinus, 'days').format("dddd");
        monthText.innerHTML = moment().subtract(dateMinus, 'days').format('MMM');
        dateText.innerHTML = moment().subtract(dateMinus, 'days').format('D');
        year.innerHTML = moment().subtract(dateMinus, 'days').format('YYYY');
        dateMinus++;
    }
}

document.addEventListener('DOMContentLoaded', UI.Pageload)
tabItems.forEach((items) => {
    items.addEventListener('click', UI.selectItem)
})
nextArrow.addEventListener('click', UI.nextBtn);
prevArrow.addEventListener('click', UI.prevBtn);
