elems = document.querySelectorAll('.modal');
let modalopen = elems[0]; //можно и через queryselector, т.к. возьмет первый по списку селектор .modal, который и нужен;

let openModal = document.querySelector('.open-modal');
let closeModal = document.querySelector('.modal__close');
let btn = document.querySelector('.btn')
console.log(btn);

function handleModalOpen() {
    modalopen.classList.add('modal_active');
}

function handleModalClose() {
    modalopen.classList.remove('modal_active');
}

let clickAmount = 0;

function btnChanging() {
    clickAmount++
    if (clickAmount % 2 !== 0) {
    btn.classList.replace('btn_danger', 'btn_success');

    this.textContent = 'Хорошо сделано!'
    }
    else {
        btn.classList.replace('btn_success', 'btn_danger');
        this.textContent = 'Сделать хорошо'
    }    
}

openModal.addEventListener('click', handleModalOpen);
closeModal.addEventListener('click', handleModalClose);
btn.addEventListener('click', btnChanging);