//kategoriebuttons und div boxen
const godbutton = document.getElementById("clickedgod");
const goodbutton = document.getElementById("clickedgood");
const midbutton = document.getElementById("clickedmid");
const badbutton = document.getElementById("clickedbad");

const fmkOne = document.getElementById("fmkone");
const fmkTwo = document.getElementById("fmktwo");
const fmkThree = document.getElementById("fmkthree");

const fmktestDiv = document.getElementById("fmk-testdiv");


/*
//testbutton und testdiv
const testbutton = document.getElementById("clickedtest");
const testDiv = document.getElementById("testdiv");

//klick ereignis für testbutton hinzufügen
testbutton.addEventListener("click", function(){
    testDiv.textContent = "testing person one";


});
*/


//filter eingeben
const malefilter = document.getElementById("male");
const femalefilter = document.getElementById("female");

const youngfilter = document.getElementById("young");
const middlefilter = document.getElementById("middle");
const oldfilter = document.getElementById("old");

const youfilter = document.getElementById("you");
const mefilter = document.getElementById("me");


let genderFilters = [];
let ageFilters = [];
let whoFilters = ["both"];


//daten laden

let data = [];

fetch("data/data2.json")
  .then(res => res.json())
  .then(json => {
    data = json;                       // <-- Daten verfügbar machen


    //testbutton und testdiv
    const testbutton = document.getElementById("clickedtest");
    const testDiv = document.getElementById("testdiv");
    


    //function um die filter anzuwenden
    function filterCharacters(characters, category, genderFilters, ageFilters, whoFilters) {
    let filtered_characters = characters.filter(character =>
        (genderFilters.length === 0 || genderFilters.includes(character.gender)) &&
        (ageFilters.length === 0 || ageFilters.includes(character.age)) &&
        (whoFilters.length < 2 || whoFilters.includes(character.who)) &&
        category.includes(character.category));
        return filtered_characters
 }

    function handleFilterChange(filterArray, value, checked) {
        if (checked) {
            // Add only if not already in array
            if (!filterArray.includes(value)) {
            filterArray.push(value);            
            }            
        } else {
            filterArray = filterArray.filter(item => item !== value);
        }

        return filterArray
    }

    function randomizer(filtered_characters) {
        if (filtered_characters.length < 3) {
            alert("not enough people!!!!");
            return []
        }
        const randomIndices = new Set();
        while(randomIndices.size < 3) {
            const selectedPerson = Math.floor(Math.random() * filtered_characters.length);
            randomIndices.add(selectedPerson);
        }
        return Array.from(randomIndices).map(index => filtered_characters[index]);        
    }

    //character an der richtigen stelle anzeigen auf der card & who anzeigen &  fragezeichen weg
    function putCharacter(cardElement, name, who) {
        const output = cardElement.querySelector(".fmk-output");
        const label  = cardElement.querySelector(".fmk-label");
        const cardTitle = cardElement.querySelector(".cardtitle");

        if (output) output.textContent = name ?? "";

        if (label) {
            if (who === "you" || who === "me") {
                label.textContent = who;
            } else {
                label.textContent = ""; // "both" oder unbekannt -> nichts anzeigen
            }
        }

        cardTitle.style.display = "none";
        
    }



    malefilter.addEventListener("change", function(){
        genderFilters = handleFilterChange(genderFilters, "male", malefilter.checked);        
    });

    femalefilter.addEventListener("change", function(){
        genderFilters = handleFilterChange(genderFilters, "female", femalefilter.checked);        
    });

    youngfilter.addEventListener("change", function(){
        ageFilters = handleFilterChange(ageFilters, "young", youngfilter.checked);
    });

    middlefilter.addEventListener("change", function(){
        ageFilters = handleFilterChange(ageFilters, "middle", middlefilter.checked);
    });

    oldfilter.addEventListener("change", function(){
        ageFilters = handleFilterChange(ageFilters, "old", oldfilter.checked);
    });

    youfilter.addEventListener("change", function(){
        whoFilters = handleFilterChange(whoFilters, "you", youfilter.checked);
    });

    mefilter.addEventListener("change", function(){
        whoFilters = handleFilterChange(whoFilters, "me", mefilter.checked);
    });


    godbutton.addEventListener("click", function(){
        console.log(ageFilters);
        console.log(genderFilters);
        console.log(whoFilters);
        console.log(filterCharacters(data, "god", genderFilters, ageFilters, whoFilters));
        let filteredCharacters = filterCharacters(data, "god", genderFilters, ageFilters, whoFilters);
        console.log(filteredCharacters.length);
        let finalCharacters = randomizer(filteredCharacters);
        console.log(finalCharacters.map(character => character.who));

        let finalWhos = finalCharacters.map(character => character.who);
        let finalNames = finalCharacters.map(character => character.person);

        putCharacter(fmkOne, finalNames[0], finalWhos[0]);
        putCharacter(fmkTwo, finalNames[1], finalWhos[1]);
        putCharacter(fmkThree, finalNames[2], finalWhos[2]);
    });

    goodbutton.addEventListener("click", function(){
        console.log(ageFilters);
        console.log(genderFilters);
        console.log(whoFilters);
        console.log(filterCharacters(data, "good", genderFilters, ageFilters, whoFilters));
        let filteredCharacters = filterCharacters(data, "good", genderFilters, ageFilters, whoFilters);
        console.log(filteredCharacters.length);
        let finalCharacters = randomizer(filteredCharacters);
        console.log(finalCharacters.map(character => character.who));

        let finalWhos = finalCharacters.map(character => character.who);
        let finalNames = finalCharacters.map(character => character.person);

        putCharacter(fmkOne, finalNames[0], finalWhos[0]);
        console.log(finalWhos[0]);
        putCharacter(fmkTwo, finalNames[1], finalWhos[1]);
        putCharacter(fmkThree, finalNames[2], finalWhos[2]);
    });

    midbutton.addEventListener("click", function(){
        console.log(ageFilters);
        console.log(genderFilters);
        console.log(whoFilters);
        console.log(filterCharacters(data, "mid", genderFilters, ageFilters, whoFilters));
        let filteredCharacters = filterCharacters(data, "mid", genderFilters, ageFilters, whoFilters);
        console.log(filteredCharacters.length);
        let finalCharacters = randomizer(filteredCharacters);
        console.log(finalCharacters.map(character => character.who));

        let finalWhos = finalCharacters.map(character => character.who);
        let finalNames = finalCharacters.map(character => character.person);

        putCharacter(fmkOne, finalNames[0], finalWhos[0]);
        putCharacter(fmkTwo, finalNames[1], finalWhos[1]);
        putCharacter(fmkThree, finalNames[2], finalWhos[2]);
    });

    badbutton.addEventListener("click", function(){
        console.log(ageFilters);
        console.log(genderFilters);
        console.log(whoFilters);
        console.log(filterCharacters(data, "bad", genderFilters, ageFilters, whoFilters));
        let filteredCharacters = filterCharacters(data, "bad", genderFilters, ageFilters, whoFilters);
        console.log(filteredCharacters.length);
        let finalCharacters = randomizer(filteredCharacters);
        console.log(finalCharacters.map(character => character.who));

        let finalWhos = finalCharacters.map(character => character.who);
        let finalNames = finalCharacters.map(character => character.person);

        putCharacter(fmkOne, finalNames[0], finalWhos[0]);
        putCharacter(fmkTwo, finalNames[1], finalWhos[1]);
        putCharacter(fmkThree, finalNames[2], finalWhos[2]);
    });
  });

  