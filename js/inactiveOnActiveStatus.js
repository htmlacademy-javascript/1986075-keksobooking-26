
function toInactive() {
    let adForm = document.querySelector('.ad-form');
    adForm.classList.add('.ad-form--disabled');
    let parentsForm = adForm.querySelectorAll('fieldset');
    parentsForm.forEach((element) => {
        element.setAttribute("disabled", "disabled");
    });
    

    let mapFiltersForm = document.querySelector('.map__filters');
    mapFiltersForm.querySelectorAll('select');
    mapFiltersForm.querySelector('fieldset').setAttribute("disabled", "disabled");
    let disMapFilters = mapFiltersForm.querySelectorAll('select');

    disMapFilters.forEach((element) => {
        element.setAttribute("disabled", "disabled");
    });

};

toInactive();


function toactive() {
    let adForm = document.querySelector('.ad-form');
    adForm.classList.remove('.ad-form--disabled');
    let parentsForm = adForm.querySelectorAll('fieldset');
    parentsForm.forEach((element) => {
        element.setAttribute("disabled", "");
    });
    

    let mapFiltersForm = document.querySelector('.map__filters');
    mapFiltersForm.querySelectorAll('select');
    mapFiltersForm.querySelector('fieldset').setAttribute("disabled", "");
    let disMapFilters = mapFiltersForm.querySelectorAll('select');

    disMapFilters.forEach((element) => {
        element.setAttribute("disabled", "");
    });

};

toactive();