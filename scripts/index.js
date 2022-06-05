/* массив фото-карточек */
const containerCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/* переменные для попап */
const infoButton = document.querySelector(".profile__info-button");
const userName = document.querySelector(".profile__info-name");
const jobName = document.querySelector(".profile__info-job");
const closeButton = document.querySelector(".popup__button_close-profile");
const popupEditProfile = document.querySelector(".popup_edit_profile");
const popupEditForms = document.querySelector(".popup__edit-forms");
const popupUserButton = document.querySelector(".profile__user-button");

/* переменные для попап place add */
const popupPlaceAdd = document.querySelector(".popup_place_add");
const userNameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const popupContainer = document.querySelector(".popup__container");
const popupInputPlaceTitle = document.querySelector(".popup__input_type_title");
const popupInputPlaceLink = document.querySelector(".popup__input_type_link");

/* переменные для попап фото */
const popupCardPhoto = document.querySelector('.popup_card-photo');
const popupImageCard = document.querySelector('.popup__image-card');
const popupTitleCard = document.querySelector('.popup__title-card');
const popupButtonClosePhoto = document.querySelector(".popup__button_close-photo");
const popupButtonCloseCard = document.querySelector('.popup__button_close-crd');

/* переменные template */
const elementsTemplate = document.querySelector("#elements-add").content.querySelector(".elements__item");
const elementsList = document.querySelector(".elements__list");


/*функция открытия и закрытия попап */

function editOpenForm() {
  openPopup(popupEditProfile);
  userNameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
};
function closePopupFormEdit() {
  closePopup(popupEditProfile);
};
function closePopupViewPhoto() {
  closePopup(popupCardPhoto);
};
function closePopupAddPhoto() {
  closePopup(popupPlaceAdd);
};

function openPopup(elem) {
  elem.classList.add("popup_opened");
};
function openFormAddPhoto() {
  openPopup(popupPlaceAdd);
};

function submitHandlerEdit(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  closePopupFormEdit();
};

const likeHeart = (event) => {
  event.target.classList.toggle("elements__heart_active");
};

  const submitAddCard = (event) => {
    event.preventDefault();
    renderElements({
      name: popupInputPlaceTitle.value,
      link: popupInputPlaceLink.value,
    });
    event.target.reset();
    closePopup(popupPlaceAdd);
  };

/* добавление карточек */
const generateElementList = (cardData) => {
  const templateElements = elementsTemplate.cloneNode(true);
  const titleNewElements = templateElements.querySelector(".elements__title");
  const likeElementsHeart = templateElements.querySelector(".elements__heart");
  const elementsDelete = templateElements.querySelector(".elements__delete");
  const elementsImgCard = templateElements.querySelector(".elements__image");
  const titleElements = templateElements.querySelector(".elements__title");

  elementsImgCard.src = cardData.link;
  titleNewElements.textContent = cardData.name;

  function handleElementsCard() {
    popupImageCard.src = elementsImgCard.src;
    popupImageCard.alt = titleElements.textContent;
    popupTitleCard.textContent = titleElements.textContent;
    openPopup(popupCardPhoto);
  }

  elementsImgCard.addEventListener("click", handleElementsCard);
  elementsDelete.addEventListener("click", handleDeleteCard);
  likeElementsHeart.addEventListener("click", likeHeart);
  
  return templateElements;
};

  const handleDeleteCard = (event) => {
    event.target.closest(".elements__item").remove();
  };

  const renderElements = (cardData) => {
    elementsList.prepend(generateElementList(cardData));
  };

  containerCards.forEach((cardData) => {
    renderElements(cardData);
  });

/* обработчик событий попап */
popupEditForms.addEventListener("submit", submitAddCard);
infoButton.addEventListener("click", editOpenForm);
popupContainer.addEventListener("submit", submitHandlerEdit);
popupUserButton.addEventListener("click", openFormAddPhoto);
popupButtonClosePhoto.addEventListener("click", closePopupViewPhoto);
popupButtonCloseCard.addEventListener("click", closePopupAddPhoto);
closeButton.addEventListener("click", closePopupFormEdit);







