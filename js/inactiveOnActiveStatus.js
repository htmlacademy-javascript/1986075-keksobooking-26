
function toInactive() {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('.ad-form--disabled');
  const parentsForm = adForm.querySelectorAll('fieldset');
  parentsForm.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  const mapFiltersForm = document.querySelector('.map__filters');
  mapFiltersForm.querySelectorAll('select');
  mapFiltersForm.querySelector('fieldset').setAttribute('disabled', '');
  const disMapFilters = mapFiltersForm.querySelectorAll('select');

  disMapFilters.forEach((element) => {
    element.setAttribute('disabled', '');
  });

}

toInactive();


function toactive() {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('.ad-form--disabled');
  const parentsForm = adForm.querySelectorAll('fieldset');
  parentsForm.forEach((element) => {
    element.setAttribute('disabled', '');
  });

  const mapFiltersForm = document.querySelector('.map__filters');
  mapFiltersForm.querySelectorAll('select');
  mapFiltersForm.querySelector('fieldset').setAttribute('disabled', '');
  const disMapFilters = mapFiltersForm.querySelectorAll('select');

  disMapFilters.forEach((element) => {
    element.setAttribute('disabled', '');
  });

}

toactive();
