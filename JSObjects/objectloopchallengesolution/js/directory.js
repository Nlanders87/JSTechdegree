let petList = '';
for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    petList += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt ="${pet.breed}">
    `;
}

document.querySelector('main').innerHTML = petList;