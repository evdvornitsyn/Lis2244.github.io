let productItemOne = document.querySelector('.products_item_one');
let productItemTwo = document.querySelector('.products_item_two');
let productItemThree = document.querySelector('.products_item_three');
let productItemFour = document.querySelector('.products_item_four');
let productItemFife = document.querySelector('.products_item_fife');
let productItemSix = document.querySelector('.products_item_six');

let buttonOne = document.querySelector('.one_button');
let buttonTwo = document.querySelector('.two_button');
let buttonThree = document.querySelector('.three_button');
let buttonFour = document.querySelector('.four_button');
let buttonFife = document.querySelector('.fife_button');
let buttonSix = document.querySelector('.six_button');

let transformPlus = document.querySelector('.plus');
let transformPlusTwo = document.querySelector('.two');
let transformPlusThree = document.querySelector('.three');
let transformPlusFour = document.querySelector('.four');
let transformPlusFife = document.querySelector('.fife');
let transformPlusSix = document.querySelector('.six');

buttonOne.onclick = function () {
    productItemOne.classList.toggle('products_hover');
    transformPlus.classList.toggle('plus_transform');
}
buttonTwo.onclick = function () {
    productItemTwo.classList.toggle('products_hover');
    transformPlusTwo.classList.toggle('plus_transform');
}
buttonThree.onclick = function () {
    productItemThree.classList.toggle('products_hover');
    transformPlusThree.classList.toggle('plus_transform');
}
buttonFour.onclick = function () {
    productItemFour.classList.toggle('products_hover');
    transformPlusFour.classList.toggle('plus_transform');
}
buttonFife.onclick = function () {
    productItemFife.classList.toggle('products_hover');
    transformPlusFife.classList.toggle('plus_transform');
}
buttonSix.onclick = function () {
    productItemSix.classList.toggle('products_hover');
    transformPlusSix.classList.toggle('plus_transform');
}
