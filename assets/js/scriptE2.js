class pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pets = [];

const petForm = document.getElementById('petForm');
const petsListDiv = document.getElementById('petsList');

const petsUl = document.createElement('ul');
petsListDiv.appendChild(petsUl);

petForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const petName = document.getElementById('petName').value;
  const ownerName = document.getElementById('ownerName').value;
  const species = document.getElementById('species').value;
  const breed = document.getElementById('breed').value;

  const newPet = new pet(petName, ownerName, species, breed);
  pets.push(newPet);

  const sameOwner = pets.some(
    (pet) => pet !== newPet && newPet.hasSameOwner(pet)
  );

  displayPetOnList(newPet, sameOwner);

  console.log(sameOwner);

  petForm.reset();
});

function displayPetOnList(pet, sameOwner) {
  const li = document.createElement('li');
  const h3Li = document.createElement('h3');
  const pLi = document.createElement('p');
  h3Li.textContent = `Nome: ${pet.petName} - Specie: ${pet.species} - Razza: ${pet.breed} - Proprietario: ${pet.ownerName}`;
  pLi.textContent = `Ha lo stesso proprietario di un altro animale? ${sameOwner}`;
  li.appendChild(h3Li);
  li.appendChild(pLi);
  petsUl.appendChild(li);
}
