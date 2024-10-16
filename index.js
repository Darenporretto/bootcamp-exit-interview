
const pets = [
    {
        name: 'Noodles',
        species: 'cat',
        age: 7,
        gender: 'male',
        vetVisits: [
            {
                date: 'February 7, 2023',
                type: 'Non-emergency',
                notes: 'Saw Noodles for annual check-up.'
            },
            {
                date: 'October 15, 2024',
                type: 'Emergency',
                notes: 'Noodles ate a plant poisonous to cats.'
            }
        ]
    },
    {
        name: 'Fleur',
        species: 'cat',
        age: 13,
        gender: 'female',
        vetVisits: [
            {
                date: "July 20, 2023",
                type: 'Non-emergency',
                notes: 'Saw Fleur for annual check-up.'
            },
            {
                date: 'July 20, 2024',
                type: 'Non-emergency',
                notes: 'Saw Fleur for annual check-up and administered vaccinations.'
            }
        ]
    },
    {
        name: 'Bernie',
        species: 'dog',
        age: 6,
        gender: 'male',
        vetVisits: [
            {
                date: "September 5, 2024",
                type: 'Emergency',
                notes: 'Bernie was brought in for excessive vomitting.'
            }
        ]
    },
    {
        name: 'Bart',
        species: 'dog',
        age: 3,
        gender: 'male',
        vetVisits: [
            {
                date: 'April 18, 2021',
                type: 'Non-emergency',
                notes: "Performed Bart's neutering."
            },
            {
                date: 'November, 22, 2022',
                type: 'Non-emergency',
                notes: 'Administered vaccinations.'
            }
        ]
    }
];

/*
Use the native filter method to return a new array of only the pets that are dogs
that have had only one vet vist.
*/
const dogsWithOneVist = pets.filter(pet => pet.species === 'dog' && pet.vetVisits.length === 1);
console.log(dogsWithOneVist);

/*
Use the native filter method to return a new array of only the pets that have had
vet vists marked as 'Emergency'.
*/
const emergencyVisits = pets.filter(pet => pet.vetVisits.some(visit => visit.type === 'Emergency'));
console.log(emergencyVisits);

/*
Use the map method to return a new array of strings containing each pet's name, age, 
and gender.

example output =>
[ 
    "Noodles - male - 7 years old"
    "Fleur - female - 13 years old",
    "Bernie - male - 6 years old",
    "Bart - male - 3 years old"
]
*/
const petInfo = pets.map(pet => `${pet.name} - ${pet.gender} - ${pet.age} years old`);
console.log(petInfo);

/*
Use the native map method to return a new array of strings of each pet's vet visit
notes uppercased.

example output =>
[
    "SAW NOODLES FOR ANNUAL CHECK-UP",
    "NOODLES ATE A PLANT POISONOUS TO CATS",
    "SAW FLEUR FOR ANNUAL CHECK-UP",
    "SAW FLEUR FOR ANNUAL CHECK-UP AND ADMINISTERED VACCINATIONS",
    "BERNIE WAS BROUGHT IN FOR EXCESSIVE VOMITTING",
    "PERFORMED BART'S NEUTERING",
    "ADMINISTERED VACCINATIONS",
]
*/
const uppercasedNotes = pets.flatMap(pet => pet.vetVisits.map(visit => visit.notes.toUpperCase())
);
console.log(uppercasedNotes);

/*
Use the native reduce method to return a string of each pet's name followed by the
date of their most recent vet vist (assume the most recent is the visit that is LAST
in the array).

example output =>
"Noodles - last visit: October 15, 2024\nFleur - last visit: July 20, 2024\nBernie - last visit: September 5, 2024\nBart - last visit: November 22, 2022"
*/
const recentVisits = pets.reduce((acc, pet) => {
    const lastVisit = pet.vetVisits[pet.vetVisits.length -1].date;
    return acc + `${pet.name} - last visit: ${lastVisit}\n`;
}, "").trim();
console.log(recentVisits);