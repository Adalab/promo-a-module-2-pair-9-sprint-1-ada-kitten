'use strict';

const elementList = document.querySelector('.js_list');
const labelMessageError = document.querySelector('.js-label-error');
const form = document.querySelector('.js_form');
const addKitten = document.querySelector('.js_plus');
const cancel = document.querySelector('.js_cancel');
const addElement = document.querySelector('.js-btn-add');
const input_Search_desc = document.querySelector('.js_in_search_desc');
const button_search = document.querySelector('.js_btn_search');

const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 = `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenBreed1 = 'Siamés';

const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenBreed2 = 'Sphynx';

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 = `  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenBreed3 = 'Maine Coon';

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage1}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenBreed1}</h4>
  <p class="card_description">${kittenDesc1}</p>
</article>
</li>`;


/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenTwo = `<li class="card">
<article>
<img 
class="card_img" 
src="${kittenImage2}" 
alt="sphynx-cat" />
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenBreed2}</h4>
<p class="card_description">${kittenDesc2}</p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
<img class="card_img" 
src="${kittenImage3}" 
alt="maine-coon-cat" />
<h3 class="card_title">${kittenName3}</h3>
<h4 class="card_race">${kittenBreed3}</h4>
<p class="card_description">${kittenDesc3}</p>
</article>
</li>`;

elementList.innerHTML = kittenOne + kittenTwo + kittenThree;

form.classList.add('collapsed');

addKitten.addEventListener('click', handleClickNewCatForm);

cancel.addEventListener('click', hideNewCatForm);

addElement.addEventListener('click', (event) => {
  event.preventDefault();
  const inputDesc = document.querySelector('.js-input-desc');
  const inputPhoto = document.querySelector('.js-input-photo');
  const inputName = document.querySelector('.js-input-name');
  const inputBreed = document.querySelector('.js-input-breed');
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;
  console.log('Input Desc:', inputDesc.value);
  console.log('Input Photo:', inputPhoto.value);
  console.log('Input Name:', inputName.value);
  console.log('Input Breed:', inputBreed.value);

  if (!valueDesc || !valuePhoto || !valueName || !valueBreed) {
    labelMessageError.innerHTML = "Campo requerido";
  } else {
    /* Código HTML de un gatito */
    const newKittenHTML = `<li class="card">
<article>
  <img
    class="card_img"
    src="` + valuePhoto + `"
    alt="gatito"
  />
  <h3 class="card_title">` + valueName + `</h3>
  <h4 class="card_race">` + valueBreed + `</h4>
  <p class="card_description">
      ` + valueDesc + `
   </p>
</article>
</li>`;

    elementList.innerHTML += newKittenHTML;
    form.classList.add('collapsed');
    form.reset();
  }
});

button_search.addEventListener('click', (event) => {
  event.preventDefault();
  const descrSearchText = input_Search_desc.value;
  if (kittenDesc1.includes(descrSearchText)) {
    elementList.innerHTML = kittenOne;
  }
  if (kittenDesc2.includes(descrSearchText)) {
    elementList.innerHTML += kittenTwo;
  }
  if (kittenDesc3.includes(descrSearchText)) {
    elementList.innerHTML += kittenThree;
  }

  console.log(descrSearchText);
});


function hideNewCatForm  () {
  form.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (form.classList.contains('collapsed')) {
    form.classList.remove('collapsed');
  } else {
    form.classList.add('collapsed');
  }
}
