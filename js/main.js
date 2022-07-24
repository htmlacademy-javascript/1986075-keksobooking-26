// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
import {getRandomIntInclusive} from './util.js';

const nameOfTheBookingObject = ['Дворец', 'Квартира', 'Дом', 'Бунгало', 'Отель'];
const registrationTime = ['12:00', '13:00', '14:00'];
const departureTime = ['12:00', '13:00', '14:00'];
const comfortLevel = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosOfRooms = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const author = {
  avatar: 'img/avatars/user01.png'
};


const location = {
  lat: getRandomIntInclusive(35.65000, 35.70000, 4),
  lng: getRandomIntInclusive(139.70000, 139.80000, 4),
};

const offer = {
  title: 'Прекрасное предложение об аренде жилья',
  address: location,
  price: getRandomIntInclusive(5000, 50000, 2),
  type: nameOfTheBookingObject[nameOfTheBookingObject.length - 1],
  rooms: getRandomIntInclusive(1, 50, 1),
  guests: getRandomIntInclusive(1, 5, 0),
  checkin: registrationTime[1],
  checkout: departureTime[2],
  features: comfortLevel[1],
  description: 'Тип помещения',
  photos: photosOfRooms,
};

const advertisement = {
  offer: offer,
  author: author,
  location: location,
};

const offerTitle = document.querySelector('.popup__title');
const template = document.querySelector('#card');
const title = template.content.querySelector('.popup__title');
const popup = template.content.querySelector('.popup');
const clonePopup = popup.cloneNode(true);

const offerAddress = clonePopup.querySelector('.popup__text--address');
offerAddress.textContent = advertisement.offer.address;
clonePopup.querySelector('.popup__title').textContent = advertisement.offer.title;
// document.body.appendChild(clonePopup);

const offerPrice = clonePopup.querySelector('.popup__text--price');
offerPrice.textContent = `${advertisement.offer.price} ₽/ночь`;

const offertType = clonePopup.querySelector('.popup__type');
offertType.textContent = advertisement.offer.type;

const popupTextCapacity  = clonePopup.querySelector('.popup__text--capacity');
popupTextCapacity.textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;

const popupTextTime = clonePopup.querySelector('.popup__text--time');
popupTextTime.textContent = `Заезд после ${advertisement.offer.checkin}, выезд до ${advertisement.offer.checkout}`;


const popupFeaturesLi = clonePopup.querySelectorAll('.popup__features li');

popupFeaturesLi.forEach((element) => {
  element.classList.add('hidden');
});

clonePopup.querySelector(`.popup__feature--${advertisement.offer.features}`).classList.remove('hidden');

const popupDescription = clonePopup.querySelector('.popup__description');
popupDescription.textContent = advertisement.offer.description;

const popupPhoto = clonePopup.querySelector('.popup__photo');
popupPhoto.src = advertisement.offer.photos[0];

const popupAvatar = clonePopup.querySelector('.popup__avatar');
popupAvatar.src = advertisement.author.avatar;


const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(clonePopup);
