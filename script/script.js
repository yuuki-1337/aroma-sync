let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;
let refreshSlider = setInterval(() => {nexst.click()}, 7000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(() => {nexst.click()}, 10000)
}
prev.onclick = function(){
    if(active -1 < 0){
        active = lengthItems;

    }else{
        active = active -1;
    }
    reloadSlider();
    clearInterval(refreshSlider);
}
next.onclick = function(){
    if(active +1 > lengthItems){
        active = 0;
    }else{
        active = active +1
    }
    reloadSlider();
}

dots.forEach((list, key) => {
    list.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

function openDescription(){
    description = document.querySelector('.description-content');
    active = description.classList.toggle('active');
}