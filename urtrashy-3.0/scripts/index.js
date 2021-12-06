/** All the stuff for when site loads **/
window.addEventListener("load", setStuff);
const greetings = [
    "Looking good, ",
    "Nice to see you, ",
    "Hey there, ",
    "Howdy, ",
    "Long time no see, ",
    "Greetings, ",
];

function setStuff() {
    if (localStorage.getItem("Theme") == null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
            localStorage.setItem("Theme", "Dark");
        else localStorage.setItem("Theme", "Light");
    }
    setTheme();

    let temp = setTimeout(showPage, 3000); //doesn't show the page and lets the other stuff happen in the background in the meantime
    closeEverything();

    document.getElementById("trash-results").style.display = "none";
    document.getElementById("select-trash").style.display = "none";

    /* end of temp stuff*/
    /** Not logged in */
    if (localStorage.getItem("Logged in") != 1) {
        //window.location.replace("/login.html");
    }

    /** Set total points **/
    if (!isNumeric(localStorage.getItem("points")) ||
        localStorage.getItem("points") === null
    ) {
        localStorage.setItem("points", 0);
    }

    document.getElementById("points").innerHTML = localStorage.getItem("points");

    /** Set recent points **/
    if (!isNumeric(localStorage.getItem("recent-points")) ||
        localStorage.getItem("recent-points") === null
    ) {
        localStorage.setItem("recent-points", 0);
    }
    document.getElementById("recent-points").innerHTML =
        localStorage.getItem("recent-points");

    greeting();
}

function greeting() {
    /** Greeting & set user name **/

    if (localStorage.getItem("User") == null) {
        let greeting = greetings[Math.floor(Math.random() * greetings.length)];
        document.getElementById("greeting").innerHTML = greeting.substring(
            0,
            greeting.length - 2
        );
    } else {
        document.getElementById("greeting").innerHTML =
            greetings[Math.floor(Math.random() * greetings.length)];
        document.getElementById("user-name").innerHTML =
            localStorage.getItem("User");
        document.getElementById("user-name").style.display = "inline";
    }
}

function resetStuff() {
    /* Temp stuff for working on other things, ya know*/
    /** Set total points **/
    document.getElementById("points").innerHTML = localStorage.getItem("points");

    document.getElementById("recent-points").innerHTML =
        localStorage.getItem("recent-points");
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

//get recycle location for a given trash item
function recycleLocation(trash) {
    const paper = [
        "Cardboard carton w/ cap attached",
        "Cardboard carton w/o cap attached",
        "Cardboard box w/o wax coating (< 2ft x 4ft)",
        "Boxboard",
        "Envelope",
        "Magazine",
        "Newsprint/Newspaper",
        "(Shredded) Paper",
        "Paper box",
        "Phone directory or soft-cover book",
        "Pizza box/paper egg carton (empty)",
        "Unwaxed paper and carton",
        "Corrugated carton",
        "Egg carton",
        "Magazine paper",
        "Normal paper",
        "Paper bag",
        "Wrapping paper"
    ];
    const special = [
        "Batteries (rechargeable, non-alkaline)",
        "Construction and demolition debris",
        "Electronics",
        "Fluorescent lamp",
        "Metal name plate (defaced)",
        "Oil",
        "Personal electronic",
        "Plastic/metal drum/bucket",
        "Printer cartridge",
        "Solvent waste distillation",
        "Sneakers",
        "Plastic film",
        "Scrap metal",
        "Shoe",
        "Single-use carrier bag",
    ];
    const recycle = [
        "Aluminum foil/foilware",
        "Beer can",
        "Branches smaller than 4in in diameter",
        "Can made from steel, tin, and/or aluminum",
        "Clean beverage container",
        "Clean non-Pyrex food glass container",
        "Drink/Soup box",
        "Empty aerosol container (non-pesticides/paints)",
        "Glass bottle/jar w/ cap attached",
        "Glass bottle/jar w/o cap attached",
        "Grass clippings/Leaves",
        "High grade paper",
        "High-density polyethylene (HDPE) plastic",
        "Large appliance (non-air conditioner/microwaves/TV)",
        "Metal pot/pan",
        "Low-density polyethylene (LDPE) plastic",
        "Misc clean aluminum can",
        "Plastic bottle/jug/jar/tub",
        "Plastic bottle/jug/jar/tub w/ cap attached",
        "Polyethylene terepthalate (PET) plastic",
        "Soda can",
        "Steel/tin can",
        "Vegetative garden material",
        "Wood waste",
        "Aerosol",
        "Aluminium foil",
        "Clear plastic bottle",
        "Drink can",
        "Drink carton",
        "Food Can",
        "Glass bottle",
        "Glass jar",
        "Metal bottle cap",
        "Metal lid",
        "Other plastic bottle",
        "Plastic bottle cap",
        "Plastic lid",
        "Pop tab",
        "Spread tub",
        "Toilet tube",
        "Tupperware",
    ];
    const trashables = [
        "Air conditioner, microwave, or TV",
        "Auto glass",
        "Batteries (non-rechargeable)",
        "Batteries (rechargeable, alkaline)",
        "Branches larger than 4in in diameter",
        "Broken glass",
        "Bubble wrap",
        "Cardboard box w/ wax coating",
        "Cardboard box w/o wax coating (> 2ft x 4ft)",
        "Cardboard carton cap (detached)",
        "Ceramic",
        "Chemicals",
        "Cleaning product",
        "Clothes hanger",
        "Clothing",
        "Dirty beverage container",
        "Dirty food glass container",
        "Disposable diapers",
        "Drinking glass",
        "Drinking cup",
        "Drink/Soup box",
        "Empty aerosol container (pesticides/paints)",
        "Expired/unused medicines",
        "Flat glass",
        "Fluorescent light tube",
        "Food scrap",
        "Glass bottle/jar cap (un-attached)",
        "Glass art piece",
        "Eyeglasses",
        "Hardcover book",
        "Light bulb",
        "Make-up glass",
        "Mattress",
        "Metal name plate (not defaced)",
        "Metal pot/pan",
        "Medicine bottle",
        "Mirror",
        "Mirrored glass",
        "Misc electronic items",
        "Ovenware",
        "Packing peanuts",
        "Perfume container",
        "Pizza box/paper egg carton (non-empty)",
        "Plastic bag",
        "Plastic bottle/jug/jar/tub",
        "Plastic bottle/jug/jar/tub w/ cap attached",
        "Plastic shower curtain/liner",
        "Plastic straws or utensils",
        "Polyethylene terepthalate (PET) plastic",
        "Polyvinyl chloride (PVC) plastic",
        "Pyrex glass",
        "Recycleable in a plastic bag",
        "Styrofoam/Polystyrene",
        "Syringe or other medical waste",
        "Takeaway coffee cup",
        "Treated wood",
        "Waxed paper and cartons",
        "Other",
        "Other plastic container",
        "Aluminium blister pack",
        "Battery",
        "Broken glass",
        "Cigarette",
        "Crisp packet",
        "Disposable food container",
        "Disposable plastic cup",
        "Foam cup",
        "Foam food container",
        "Food waste",
        "Garbage bag",
        "Glass cup",
        "Meal carton",
        "Other plastic",
        "Other plastic container",
        "Other plastic cup",
        "Other plastic wrapper",
        "Paper cup",
        "Paper straw",
        "Pizza box",
        "Plastic glooves",
        "Plastic straw",
        "Plastic utensils",
        "Polypropylene bag",
        "Rope & strings",
        "Six pack rings",
        "Squeezable tube",
        "Styrofoam piece",
        "Tissues",
        "Unlabeled litter",
    ];

    var trash_type = "";
    if (special.includes(trash)) {
        trash_type = " (🌟)";
        document.getElementById("special").style.display = "block";
    } else if (paper.includes(trash)) trash_type = " (🟦 ♻️)";
    else if (recycle.includes(trash)) trash_type = " (🟩 ♻️)";
    else if (trashables.includes(trash)) trash_type = " (🗑️)";
    else trash_type = "error";
    return trash_type;
}

//get the top trash
function getTop() {
    console.log("I tried to get top!");
    const top = [];
    for (var i = 0; i < localStorage.length; ++i) {
        if (
            localStorage.key(i) == "points" ||
            localStorage.key(i) == "recentTrash" ||
            localStorage.key(i) == "Logged in" ||
            localStorage.key(i) == "recent-points" ||
            localStorage.key(i) == "User" ||
            localStorage.key(i) == "Theme"
        )
            continue;

        var current = localStorage.key(i);

        for (var j = 0; j < top.length; j++) {
            if (j > top.length) {
                console.log("It was empty!");
                top.push(current);
                break;
            }
            if (
                parseInt(localStorage.getItem(current)) >
                parseInt(localStorage.getItem(top[j]))
            ) {
                top.splice(j, 0, current);
                break;
            }
            if (j == 4) break;
        }
        if (i < 5 && !top.includes(current)) top.push(current);
    }

    var result = "";

    for (var k = 0; k < 5; k++) {
        if (top[k] == null) break;

        let trash_type = recycleLocation(top[k]);

        result += top[k] + trash_type + ": " + localStorage.getItem(top[k]) + "\n";
        console.log("Results: " + results);
    }
    document.getElementById("top-trash").innerHTML = result;
}

//get the most recent trash
function getRecent() {
    console.log("I tried to get recent!");

    if (localStorage.getItem("recentTrash") == null) return;

    const recent = localStorage.getItem("recentTrash").split("+");

    var result = "";

    for (var k = 0; k < 5; k++) {
        if (recent[k] == null) break;

        let trash_type = recycleLocation(recent[k]);

        if (trash_type == "error") {
            results = "Oops! Ran into an error.";
            break;
        }

        result += recent[k] + trash_type + "\n";
    }

    document.getElementById("recent-trash").innerHTML = result;
}

//Update to look at data from either droplist or photo upload
function addTrash() {
    var allTrash = $("#Recycleables").select2("data");
    var new_points = 0;
    if (localStorage.getItem("recentTrash") != null) {
        var recentTrash = localStorage.getItem("recentTrash").split("+");
    }
    var response = "";

    console.log("This is the length: " + allTrash.length);
    var trash_or_recycle = "";

    if (allTrash.length == 0) {
        response = "No trash item selected.";
        console.log("Nothing happened!");
        document.getElementById("trash-phrase").innerHTML = response;
        document.getElementById("main-location").style.display = "none";
        document.getElementById("trash-phrase-last").style.display = "none";
    } else {
        console.log("It's not empty!");
        for (let i = 0; i < allTrash.length; i++) {
            trash_or_recycle = recycleLocation(allTrash[i].text);

            if (trash_or_recycle == "error") {
                results = "Oops! Ran into an error.";
                break;
            }

            if (trash_or_recycle != " (🗑️)") {
                new_points += 10;
                console.log("You got points!");
            }

            response += allTrash[i].text + trash_or_recycle + "\n";

            /** Save the trash item in localStorage so we have the stats **/
            if (
                localStorage.getItem(allTrash[i].text) == null ||
                localStorage.getItem(allTrash[i].text) == "undefined"
            ) {
                localStorage.setItem(allTrash[i].text, 1);
                console.log("Added item to localStorage");
            } else {
                localStorage.setItem(
                    allTrash[i].text,
                    parseInt(localStorage.getItem(allTrash[i].text)) + 1
                );
                console.log("Updated item in localStorage");
            }

            /** doing stuff for recent trash **/

            if (recentTrash != null) {
                for (var l = recentTrash.length - 1; l >= 0; l--) {
                    recentTrash[l + 1] = recentTrash[l];
                }
                recentTrash[0] = allTrash[i].text;
            } else var recentTrash = [allTrash[i].text];
        }
        document.getElementById("results").innerHTML = response;
        localStorage.setItem(
            "points",
            parseInt(localStorage.getItem("points")) + new_points
        );
        console.log("Your points: " + new_points);
        localStorage.setItem("recent-points", new_points);
        localStorage.setItem("recentTrash", recentTrash.join("+"));

        if (response.includes(" (🗑️)")) {
            document.getElementById("main-location").innerHTML = "trash ";
        } else {
            document.getElementById("main-location").innerHTML = "recycle ";
        }
        console.log("I finished!");
    }
}

function addSingleTrash(item) {
    var new_points = 0;
    if (localStorage.getItem("recentTrash") != null) {
        var recentTrash = localStorage.getItem("recentTrash").split("+");
    }
    var response = "";

    var trash_or_recycle = recycleLocation(item);

    if (trash_or_recycle == "error") {
        results = "Oops! Ran into an error.";
    }

    if (trash_or_recycle != " (🗑️)") {
        new_points += 10;
        console.log("You got points!");
    }

    response += item + trash_or_recycle + "\n";

    localStorage.setItem(
        item,
        parseInt(localStorage.getItem(item) + 1));
    console.log("Updated item in localStorage");

    /** doing stuff for recent trash **/

    if (recentTrash != null) {
        for (var l = recentTrash.length - 1; l >= 0; l--) {
            recentTrash[l + 1] = recentTrash[l];
        }
        recentTrash[0] = item;
    } else var recentTrash = item;
    document.getElementById("single-item").innerHTML = response;
    document.getElementById("single-item").style.display = "block";
    localStorage.setItem(
        "points",
        parseInt(localStorage.getItem("points")) + new_points
    );
    console.log("Your points: " + new_points);
    localStorage.setItem("recent-points", new_points);
    localStorage.setItem("recentTrash", recentTrash.join("+"));
    document.getElementById("trash-phrase").innerHTML = "";

    console.log("I finished!");
}

function changeName() {
    let name = document.getElementById("name-field").value;
    console.log("This is the new name: " + name);

    if (/^[a-z ]+$/i.test(name)) {
        console.log("Valid name. Changing!");
        localStorage.setItem("User", name);
        document.getElementById("invalid").style.display = "none";
        document.getElementById("name-field").value = "";
        greeting();
        closeName();
    } else {
        document.getElementById("invalid").style.display = "block";
    }
}

/** Toggle Mode */
function toggleMode() {
    if (
        localStorage.getItem("Theme") == "Light" ||
        localStorage.getItem("Theme") != "Dark"
    ) {
        localStorage.setItem("Theme", "Dark");
        console.log("Switching to dark mode");

        openToggle("#loader");
        let temp = setTimeout(showPage, 1000);

        document
            .getElementById("current-style")
            .setAttribute("href", "styles/dark.css"); //need to switch to dark, but test for now

        /** Circles **/
        document
            .getElementById("small-circle")
            .setAttribute("src", "assets/smaller-circle-dark.svg");
        document
            .getElementById("big-circle")
            .setAttribute("src", "assets/bigger-circle-dark.svg");

        document.getElementById("current-mode").classList.remove("fa-moon");
        document.getElementById("current-mode").classList.add("fa-sun");
    } else {
        localStorage.setItem("Theme", "Light");
        console.log("Switching to light mode");

        openToggle("#loader");
        let temp = setTimeout(showPage, 1000);

        document.getElementById("current-mode").classList.add("fa-moon");
        document.getElementById("current-mode").classList.remove("fa-sun");

        /** Circles **/
        document
            .getElementById("small-circle")
            .setAttribute("src", "assets/smaller-circle.svg");
        document
            .getElementById("big-circle")
            .setAttribute("src", "assets/bigger-circle.svg");
        document
            .getElementById("current-style")
            .setAttribute("href", "styles/light.css"); //need to switch to dark, but test for now
    }
}

function setTheme() {
    if (localStorage.getItem("Theme") == "Dark") {
        openToggle("#loader");
        let temp = setTimeout(showPage, 1000);

        document
            .getElementById("current-style")
            .setAttribute("href", "styles/dark.css"); //need to switch to dark, but test for now

        /** Circles **/
        document
            .getElementById("small-circle")
            .setAttribute("src", "assets/smaller-circle-dark.svg");
        document
            .getElementById("big-circle")
            .setAttribute("src", "assets/bigger-circle-dark.svg");

        document.getElementById("current-mode").classList.remove("fa-moon");
        document.getElementById("current-mode").classList.add("fa-sun");
    } else {
        openToggle("#loader");
        let temp = setTimeout(showPage, 1000);

        document.getElementById("current-mode").classList.add("fa-moon");
        document.getElementById("current-mode").classList.remove("fa-sun");

        /** Circles **/
        document
            .getElementById("small-circle")
            .setAttribute("src", "assets/smaller-circle.svg");
        document
            .getElementById("big-circle")
            .setAttribute("src", "assets/bigger-circle.svg");
        document
            .getElementById("current-style")
            .setAttribute("href", "styles/light.css"); //need to switch to dark, but test for now
    }
}

function logOut() {
    localStorage.setItem("Logged in", 0);
    window.location.href = "login.html";
}

function deleteAccount() {
    localStorage.clear();
    window.location.href = "login.html";
}
/** Transitions **/

function closeToggle(element) {
    $(element).fadeOut();
}

function openToggle(element) {
    $(element).fadeIn();
}

function showPage() {
    //end of loading page
    closeToggle("#loader");
    openToggle("#main");
}

function hideAbout() {
    openToggle("#our-team");
    closeToggle("#about-main");
    document.getElementById("about-main").style.display = "none";
    document.getElementById("our-team").style.display = "block";
}

function showAbout() {
    closeToggle("#our-team");
    openToggle("#about-main");
    document.getElementById("about-main").style.display = "block";
    document.getElementById("our-team").style.display = "none";
}

function hideMain() {
    openToggle("#select-trash");
    closeToggle("#recycle-main");
    document.getElementById("recycle-main").style.display = "none";
    document.getElementById("select-trash").style.display = "block";
}

function showMain() {
    $("#Recycleables").val(null).trigger("change");
    closeToggle("#select-trash");
    openToggle("#recycle-main");
    document.getElementById("recycle-main").style.display = "block";
    document.getElementById("select-trash").style.display = "none";
}

function hideMainWizard() {
    openToggle("#recycle-wizard");
    closeToggle("#recycle-main");
    start();
    document.getElementById("recycle-main").style.display = "none";
    document.getElementById("recycle-wizard").style.display = "block";
}

function showMainWizard() {
    closeToggle("#recycle-wizard");
    openToggle("#recycle-main");
    document.getElementById("trash-phrase").style.display = "block";
    stop();
    document.getElementById("recycle-main").style.display = "block";
    document.getElementById("recycle-wizard").style.display = "none";
}

function showResults() {
    closeToggle("#select-trash");
    openToggle("#trash-results");
    document.getElementById("trash-results").style.display = "block";
    document.getElementById("select-trash").style.display = "none";
    addTrash();
    resetStuff();
}

function showResultsWizard() {
    closeToggle("#recycle-wizard");
    openToggle("#trash-results");
    document.getElementById("trash-results").style.display = "block";
    document.getElementById("recycle-wizard").style.display = "none";
    document.getElementById("trash-phrase-last").style.display = "none";
    document.getElementById("single-item").style.display = "block";
    document.getElementById("disclaimer").style.display = "block";
    document.getElementById("trash-phrase").style.display = "none";
    document.getElementById("main-location").style.display = "none";
    stop();
    resetStuff();
}

function toggleDisclaimer() {
    if (document.getElementById("disclaimer").innerHTML == "Disclaimer") {
        document.getElementById('disclaimer-text').style.display = 'block';
        document.getElementById("disclaimer").innerHTML = "Close";
    } else {
        document.getElementById('disclaimer-text').style.display = 'none';
        document.getElementById("disclaimer").innerHTML = "Disclaimer";
    }
}

function resetRecycle() {
    closeToggle("#recycle-page");
}

function backgroundReset() {
    document.getElementById("recycle-main").style.display = "block";
    document.getElementById("trash-results").style.display = "none";
    document.getElementById("recycle-wizard").style.display = "none";
    document.getElementById("select-trash").style.display = "none";
    document.getElementById("results").innerHTML = "";
    document.getElementById("trash-phrase").style.display = "block";
    document.getElementById("single-item").innerHTML = "The Wizard is asleep :(";
    document.getElementById("single-item").style.display = "none";
    $("#Recycleables").val(null).trigger("change");

    document.getElementById("trash-phrase").innerHTML = "Let's ";
    document.getElementById("main-location").style.display = "inline";
    document.getElementById("trash-phrase-last").style.display = "inline";
}

function openRecycle() {
    backgroundReset();
    document.getElementById("special").style.display = "none";
    openToggle("#recycle-page");
}

function clearActive() {
    document.getElementById("settings-button").classList.remove("active");
    document.getElementById("home-button").classList.remove("active");
    document.getElementById("stats-button").classList.remove("active");
}

function openTop() {
    getTop();
    openToggle("#stats-top");
    closeToggle("#stats-main");
}

function closeTop() {
    closeToggle("#stats-top");
    openToggle("#stats-main");
}

function openRecent() {
    getRecent();
    openToggle("#stats-recent");
    closeToggle("#stats-main");
}

function closeRecent() {
    closeToggle("#stats-recent");
    openToggle("#stats-main");
}

function openStats() {
    clearPopUp();
    clearActive();
    document.getElementById("stats-button").classList.add("active");
    openToggle("#pop-up");
    openToggle("#stats-main");
}

function openSettings() {
    clearPopUp();
    clearActive();
    document.getElementById("settings-button").classList.add("active");
    openToggle("#pop-up");
    openToggle("#settings-main");
}

function openName() {
    openToggle("#settings-name");
    closeToggle("#name-button");
}

function closeName() {
    closeToggle("#settings-name");
    openToggle("#name-button");
}

function openDelete() {
    closeToggle("#settings-main");
    openToggle("#settings-delete");
}

function closeDelete() {
    openToggle("#settings-main");
    closeToggle("#settings-delete");
}

function clearPopUp() {
    document.getElementById("home-button").classList.add("active");
    document.getElementById("stats-main").style.display = "none";
    document.getElementById("stats-top").style.display = "none";
    document.getElementById("stats-recent").style.display = "none";
    document.getElementById("settings-main").style.display = "none";
    document.getElementById("settings-delete").style.display = "none";
}

function closePopUp() {
    closeToggle("#pop-up");
    clearPopUp();
}

function closeEverything() {
    closeToggle("#recycle-page");
    closeToggle("#about-page");
    closePopUp();
    clearActive();
    document.getElementById("home-button").classList.add("active");
}
