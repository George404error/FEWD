import { menuControl } from "./menu_load.js";

menuControl

const climbingLevel = document.querySelector(`#climbingLevel`);
const bolderingLevel = document.querySelector(`#bolderingLevel`);
const climbingLevelIndicator = document.querySelector(`#climbingLevelIndicator`);
const bolderingLevelIndicator = document.querySelector(`#bolderingLevelIndicator`);
const routeContainer = document.querySelector(`#routeContainer`);
const rbAll = document.querySelector(`#all`)
const rbRockClimbing = document.querySelector(`#rockClimbing`)
const rbBoldering = document.querySelector(`#bouldering`)


const routes = [
    { name: `C++`, difficulty: `7a`, climbingType: `traditional`, img: `/images/routes/c++.jpg`, alt: `a flat rock rock climbing wall with a climber half way up it`, lat: `41`, lon: `30`, gridID: `BOU` },
    { name: `cryptic`, difficulty: `5c`, climbingType: `traditional`, img: `/images/routes/cryptic.jpg`, alt: `dester area, with a pile of bolders and pointy one at the top`, lat: `67`, lon: `80`, gridID: `HNX` },
    { name: `indeian wave`, difficulty: `VB`, climbingType: `boldering`, img: `/images/routes/indian_wave_bolder.jpg`, alt: `a big bolder`, lat: `67`, lon: `80`, gridID: `HNX` },
    { name: `license to thrill`, difficulty: `7a`, climbingType: `traditional`, img: `/images/routes/license_to_thrill.jpg`, alt: `a wall in a forsest with a climber and the wall is made out of cirular picese of rock`, lat: `100`, lon: `110`, gridID: `SLC` },
    { name: `whipping post boulder`, difficulty: `V3`, climbingType: `boldering`, img: `/images/routes/whipping_post_boulder.jpg`, alt: `a big bolders that is very long and low to the ground`, lat: `117`, lon: `54`, gridID: `SJT` },
    { name: `mrs fields follies`, difficulty: `5c`, climbingType: `traditional`, img: `/images/routes/mrs_fields_follies.jpg`, alt: `a tall wall that looks like it is made up of quares on top of each othere`, lat: `97`, lon: `84`, gridID: `RLX` },
    { name: `spawn`, difficulty: `6b`, climbingType: `traditional`, img: `/images/routes/spawn.jpg`, alt: `very tall flat wall with someone climbing it`, lat: `81`, lon: `41`, gridID: `MRX` },
    { name: `Alcove`, difficulty: `V2`, climbingType: `boldering`, img: `/images/routes/the_alcove.jpg`, alt: `a medium size wall with loads of cracks in it which is in a forest`, lat: `71`, lon: `90`, gridID: `BOX` },
    { name: `haleakala`, difficulty: `V5`, climbingType: `boldering`, img: `/images/routes/haleakala.jpg`, alt: `small clif, on a beach with a over hand and with someone climbing it and`, lat: `151`, lon: `151`, gridID: `HFO` },

]

function setClimbingLevelIndicator() {
    climbingLevelIndicator.textContent = `max rock climbing difficulity = ${intToClimbingGrade(climbingLevel.value)}`;
}
function setBolderingLevelIndicator() {
    bolderingLevelIndicator.textContent = `max bouldering difficulity = ${intToBolderingGrade(bolderingLevel.value)}`;
}
//gets the saved state and implements it
//lscl = local storage climbing
let lscl = localStorage.getItem(`cl`);
let lsbl = localStorage.getItem(`bl`);
let lsType = localStorage.getItem(`type`);

if (lscl != null) {
    climbingLevel.value = lscl
    setClimbingLevelIndicator()
}

if (lsbl != null) {
    bolderingLevel.value = lsbl
    setBolderingLevelIndicator()
}

if (lsType != null) {

    if (lsType == `all`) {
        rbAll.checked = true;
    } else if (lsType == `rockClimbing`) {
        rbRockClimbing.checked = true;
    } else {
        rbBoldering.checked = true;
    }

}

//loads the original list
createList();






function intToClimbingGrade(grade) {
    switch (grade) {
        case `1`: return `1`;
        case `2`: return `2`;
        case `3`: return `3`;
        case `4`: return `4`;
        case `5`: return `5a`;
        case `6`: return `5b`;
        case `7`: return `5c`;
        case `8`: return `6a`;
        case `9`: return `6b`;
        case `10`: return `6c`;
        case `11`: return `7a`;
        case `12`: return `7b`;
        case `13`: return `7c`;
        default: return `invalid input`

    }
}

function climbingGradeToInt(grade) {
    switch (grade) {
        case `1`: return `1`;
        case `2`: return `2`;
        case `3`: return `3`;
        case `4`: return `4`;
        case `5a`: return `5`;
        case `5b`: return `6`;
        case `5c`: return `7`;
        case `6a`: return `8`;
        case `6b`: return `9`;
        case `6c`: return `10`;
        case `7a`: return `11`;
        case `7b`: return `12`;
        case `7c`: return `13`;
        default: return `invalid input`

    }
}

function intToBolderingGrade(grade) {
    if (parseInt(grade) < 4) {
        switch (grade) {
            case `1`: return `VB`;
            case `2`: return `V0`;
            case `3`: return `V0+`;
        }

    } else {
        return `V` + (parseInt(grade) - 3);
    }

}

function bolderingGradeToInt(grade) {
    switch (grade) {
        case `VB`: return `1`;
        case `V0`: return `2`;
        case `V0+`: return `3`;
    }

    return (parseInt(String(grade).substring(1)) + 3);

}


climbingLevel.addEventListener(`change`, ev => {
    createList();
});

bolderingLevel.addEventListener(`change`, ev => {
    createList();
});

climbingLevel.addEventListener(`input`, ev => {
    setClimbingLevelIndicator()

});

bolderingLevel.addEventListener(`input`, ev => {
    setBolderingLevelIndicator()

});

rbAll.addEventListener(`change`, ev => {
    createList();
});

rbRockClimbing.addEventListener(`change`, ev => {
    createList();
});

rbBoldering.addEventListener(`change`, ev => {
    createList();
});

async function createList() {

    if (document.querySelector(`#emptyListMessage`) != null) {
        routeContainer.removeChild(document.querySelector(`#emptyListMessage`))
    }

    //need as empty container are simply destroyed, so need to leave something in it
    while (document.querySelector(`#routeContainer article`) != null) {
        routeContainer.removeChild(document.querySelector(`#routeContainer article`))
    }

    let rbSelection = `all`;

    routes.forEach(route => {

        function create() {
            let body = document.createElement(`article`)
            let img = document.createElement(`img`)
            let h2 = document.createElement(`h2`)
            let p1 = document.createElement(`p`)
            let p2 = document.createElement(`p`)
            let frontSide = document.createElement(`section`)
            let weather = document.createElement(`section`)
            let routeName = document.createElement(`h2`)
            let wind = document.createElement(`p`)
            let windD = document.createElement(`p`)
            let shotForeCast = document.createElement(`p`)
            let temperature = document.createElement(`p`)

            routeContainer.appendChild(body);

            body.classList.add(`identifier`)
            body.appendChild(weather)
            body.appendChild(frontSide)

            weather.appendChild(routeName)
            weather.appendChild(shotForeCast)
            weather.appendChild(wind)
            weather.appendChild(windD)
            weather.appendChild(temperature)

            frontSide.appendChild(h2)
            frontSide.appendChild(img)
            frontSide.appendChild(p1)
            frontSide.appendChild(p2)

            body.classList.add(`notFilpped`)
            body.classList.add(`body`)
            body.classList.add(`imageSectionLayout`)
            body.classList.add(`marginRemover`)

            weather.classList.add(`flipEndWrongWayUp`)
            weather.classList.add(`back`)
            weather.classList.add(`weather`)

            routeName.textContent = `Todays weather at ${route.name}`

            frontSide.classList.add(`flipEndWriteWayUp`)
            frontSide.classList.add(`frontside`)
            frontSide.classList.add(`front`)

            img.src = route.img
            img.className = `routesImageSizing`
            img.alt = route.alt

            h2.textContent = route.name
            p1.textContent = `over all difficulty for this wall is ${route.difficulty}`
            p2.textContent = `main climbing style is ${route.climbingType}`

            p1.classList.add(`overAllDifficulity`)
            p2.classList.add(`mainClimbingType`)



            fetch(`https://api.weather.gov/gridpoints/${route.gridID}/${route.lat},${route.lon}/forecast`).then(Response => Response.json())
                .then(data => {

                    wind.textContent = `Windspeed = ${data.properties.periods[0].windSpeed}`;
                    temperature.textContent = `Temperature = ${data.properties.periods[0].temperature} F`;
                    shotForeCast.textContent = `Short Forecast = ${data.properties.periods[0].shortForecast}`
                    windD.textContent = `Wind direction = ${data.properties.periods[0].windDirection}`

                }).catch(error => {
                    wind.textContent = `Data currently not available try refresing the page`;
                })




        }


        if (rbAll.checked) {
            if ((route.climbingType == `traditional` && parseInt(climbingGradeToInt(route.difficulty)) >= parseInt(climbingLevel.value)) || (route.climbingType == `boldering` && parseInt(bolderingGradeToInt(route.difficulty)) >= parseInt(bolderingLevel.value))) {
                create()
            }
            rbSelection = `all`;
        } else if (rbRockClimbing.checked) {
            if ((route.climbingType == `traditional` && parseInt(climbingGradeToInt(route.difficulty)) >= parseInt(climbingLevel.value))) {
                create()
            }
            rbSelection = `rockClimbing`;
        } else {
            if ((route.climbingType == `boldering` && parseInt(bolderingGradeToInt(route.difficulty)) >= parseInt(bolderingLevel.value))) {
                create()
            }
            rbSelection = `bouldering`;
        }




    });

    if (routeContainer.childElementCount == 0) {
        let emptyListMessage = document.createElement(`p`)
        emptyListMessage.textContent = `Empty List`
        emptyListMessage.id = `emptyListMessage`
        routeContainer.appendChild(emptyListMessage)
    }


    localStorage.setItem(`cl`, climbingLevel.value);
    localStorage.setItem(`bl`, bolderingLevel.value);
    localStorage.setItem(`type`, rbSelection);


    document.querySelectorAll(`.identifier`).forEach(x => {


        let info = x.querySelector(`.front`)
        let weather = x.querySelector(`.back`)


        function toggleClasses() {
            info.classList.toggle(`flipEndWriteWayUp`)
            info.classList.toggle(`flipEndWrongWayUp`)
            weather.classList.toggle(`flipEndWriteWayUp`)
            weather.classList.toggle(`flipEndWrongWayUp`)
        }


        info.addEventListener(`click`, y => {
            toggleClasses()

        })
        weather.addEventListener(`click`, y => {

            toggleClasses()

        })

    })


}

