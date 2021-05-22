import { getTask, addTask } from './controller.js';


// modal

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelector('.show-modal');

const openModel = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModel = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModel.addEventListener('click', openModel)
btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click',closeModel);