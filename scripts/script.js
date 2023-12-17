//1. получить тэги

//2. написать функцию проверки класса

//3. Связать кнопку с функционалом


let headerBurger = document.querySelector('.header__burger')
let navigation = document.querySelector('.navigation')

function toggleActiveClass() {
    headerBurger.classList.toggle('header__burger__active')
    navigation.classList.toggle('navigation__active')
    document.body.classList.toggle('body__hidden')
}


console.log(headerBurger.classList)