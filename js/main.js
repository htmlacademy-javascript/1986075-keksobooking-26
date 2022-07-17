// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
import {getRandomIntInclusive} from './util.js';

const nameOfTheBookingObject = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const registrationTime = ['12:00', '13:00', '14:00'];
const departureTime = ['12:00', '13:00', '14:00'];
const comfortLevel = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosOfRooms = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const author = {
  avatar: 'img/avatars/user1.png'
};


const location = {
  lat: getRandomIntInclusive(35.65000, 35.70000, 4),
  lng: getRandomIntInclusive(139.70000, 139.80000, 4),
};

const offer = {
  title: 'Прекрасное предложение об аренде жилья',
  address: location,
  price: getRandomIntInclusive(5000, 50000, 2),
  type: nameOfTheBookingObject[-1],
  rooms: getRandomIntInclusive(1, 50, 1),
  guests: getRandomIntInclusive(1, 5, 0),
  chekin: registrationTime[1],
  chekout: departureTime[2],
  features: comfortLevel[0],
  description: 'Тип помещения',
  photos: photosOfRooms[2],
};

const advertisement = {
  offer: offer,
  author: author,
  location: location,
};
print(advertisement);
