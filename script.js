let modal_button = document.querySelector('.modal_button');
let container = document.querySelector('.container');
let modal = document.querySelector('.modal');
let submit__button = document.querySelector('.submit__button');
let cross = document.querySelector('.cross');
let modal_name = document.querySelector('.modal_name');
let modal_surname = document.querySelector('.modal_surname');


let question = "Вы не заполнили одно из полей хотите продолжить?";


modal_button.addEventListener("click", function() {
    modal.classList.add("active");
    container.classList.add("active");
    submit__button.removeAttribute("disabled");
    modal_name.value = " ";
    modal_sername.value = " ";
} );

function close() {
    modal.classList.remove("active");
    container.classList.remove("active");
}

container.addEventListener("click", function(e) {
    if (!e.target.closest('.modal')) {
        close();
    }
} );

submit__button.addEventListener("click", function(event) {
    if (modal_name.value == '' && modal_surname.value == '') {
        alert("Вы не заполнили поля");
    } 
    else if(modal_name.value == '' || modal_surname.value == '') {
        result = confirm(question);
        if (!result == False) {
            close();
        }
    } 
    else {
        close();
    }
    event.preventDefault();
} );

cross.addEventListener("click", close)
