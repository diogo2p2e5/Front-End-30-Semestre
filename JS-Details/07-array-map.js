const hobbies = [
     "Jogar Basquete", 
     "Coversar Muito", 
     "Ouvir Música", 
     "Jogar Hideo Game",
     "Fazer brownie",
     "Cozinhar",
     "Academia"           
];

const novosHobbies = hobbies.map((hobby) => {
    return `"<p>"${hobby}"</p>"`;
});

console.log(novosHobbies);