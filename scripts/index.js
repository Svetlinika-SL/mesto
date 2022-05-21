const infoButton = document.querySelector(".profile__info-button");
const closeButton = document.querySelector(".popup__button-close");

let formElement = document.querySelector(".popup");
let userNameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let userName = document.querySelector(".profile__info-name");
let jobName = document.querySelector(".profile__info-job");
let popupForm = document.querySelector(".popup__edit-form");


function openPopup() {
  formElement.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
}

function closePopup() {
  formElement.classList.remove('popup_opened');
}

function savePopup(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  closePopup();
}

infoButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
popupForm.addEventListener("submit", savePopup);


