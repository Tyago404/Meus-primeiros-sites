let list = document.querySelectorAll(".item");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");


let count = list.length; //3
let active = 0;

next.onclick = () =>{
let activeOld = document.querySelector(".active");
activeOld.classList.remove("active");


active = active >= count -1 ? 0 : active + 1;
list[active].classList.add("active");
}

prev.onclick = () =>{
let activeOld = document.querySelector(".active");
activeOld.classList.remove("active"); 


active = active <= 0 ? count -1 : active - 1;
list[active].classList.add("active");

}