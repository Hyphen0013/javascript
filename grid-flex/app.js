// Skills
function getAllSkills() {
    let skills = document.getElementById('skills');
    let val = "";
    for(let i = 0; i < skills.length; i++) {
        if(skills[i].checked) {
            val = val + skills[i].value + "</br>";
        }
    }

    document.getElementById('skillsValue').innerHTML = val;
}

// Cities
function getAllCities() {
    let cities = document.getElementById('cities');
    let val = "";
    for(let i = 0; i < cities.length; i++) {
        if(cities[i].checked) {
            val = val + cities[i].value + "</br>";
        }
    }

    document.getElementById('citiesValues').innerHTML = val;
}