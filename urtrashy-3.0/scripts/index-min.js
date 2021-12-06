window.addEventListener("load",setStuff);const greetings=["Looking good, ","Nice to see you, ","Hey there, ","Howdy, ","Long time no see, ","Greetings, "];function setStuff(){null==localStorage.getItem("Theme")&&(window.matchMedia("(prefers-color-scheme: dark)").matches?localStorage.setItem("Theme","Dark"):localStorage.setItem("Theme","Light")),setTheme();setTimeout(showPage,3e3);closeEverything(),document.getElementById("trash-results").style.display="none",document.getElementById("select-trash").style.display="none",localStorage.getItem("Logged in"),isNumeric(localStorage.getItem("points"))&&null!==localStorage.getItem("points")||localStorage.setItem("points",0),document.getElementById("points").innerHTML=localStorage.getItem("points"),isNumeric(localStorage.getItem("recent-points"))&&null!==localStorage.getItem("recent-points")||localStorage.setItem("recent-points",0),document.getElementById("recent-points").innerHTML=localStorage.getItem("recent-points"),greeting()}function greeting(){if(null==localStorage.getItem("User")){let e=greetings[Math.floor(Math.random()*greetings.length)];document.getElementById("greeting").innerHTML=e.substring(0,e.length-2)}else document.getElementById("greeting").innerHTML=greetings[Math.floor(Math.random()*greetings.length)],document.getElementById("user-name").innerHTML=localStorage.getItem("User"),document.getElementById("user-name").style.display="inline"}function resetStuff(){document.getElementById("points").innerHTML=localStorage.getItem("points"),document.getElementById("recent-points").innerHTML=localStorage.getItem("recent-points")}function isNumeric(e){return/^-?\d+$/.test(e)}function recycleLocation(e){var t="";return["Batteries (rechargeable, non-alkaline)","Construction and demolition debris","Electronics","Fluorescent lamp","Metal name plate (defaced)","Oil","Personal electronic","Plastic/metal drum/bucket","Printer cartridge","Solvent waste distillation","Sneakers","Plastic film","Scrap metal","Shoe","Single-use carrier bag"].includes(e)?(t=" (🌟)",document.getElementById("special").style.display="block"):t=["Cardboard carton w/ cap attached","Cardboard carton w/o cap attached","Cardboard box w/o wax coating (< 2ft x 4ft)","Boxboard","Envelope","Magazine","Newsprint/Newspaper","(Shredded) Paper","Paper box","Phone directory or soft-cover book","Pizza box/paper egg carton (empty)","Unwaxed paper and carton","Corrugated carton","Egg carton","Magazine paper","Normal paper","Paper bag","Wrapping paper"].includes(e)?" (🟦 ♻️)":["Aluminum foil/foilware","Beer can","Branches smaller than 4in in diameter","Can made from steel, tin, and/or aluminum","Clean beverage container","Clean non-Pyrex food glass container","Drink/Soup box","Empty aerosol container (non-pesticides/paints)","Glass bottle/jar w/ cap attached","Glass bottle/jar w/o cap attached","Grass clippings/Leaves","High grade paper","High-density polyethylene (HDPE) plastic","Large appliance (non-air conditioner/microwaves/TV)","Metal pot/pan","Low-density polyethylene (LDPE) plastic","Misc clean aluminum can","Plastic bottle/jug/jar/tub","Plastic bottle/jug/jar/tub w/ cap attached","Polyethylene terepthalate (PET) plastic","Soda can","Steel/tin can","Vegetative garden material","Wood waste","Aerosol","Aluminium foil","Clear plastic bottle","Drink can","Drink carton","Food Can","Glass bottle","Glass jar","Metal bottle cap","Metal lid","Other plastic bottle","Plastic bottle cap","Plastic lid","Pop tab","Spread tub","Toilet tube","Tupperware"].includes(e)?" (🟩 ♻️)":["Air conditioner, microwave, or TV","Auto glass","Batteries (non-rechargeable)","Batteries (rechargeable, alkaline)","Branches larger than 4in in diameter","Broken glass","Bubble wrap","Cardboard box w/ wax coating","Cardboard box w/o wax coating (> 2ft x 4ft)","Cardboard carton cap (detached)","Ceramic","Chemicals","Cleaning product","Clothes hanger","Clothing","Dirty beverage container","Dirty food glass container","Disposable diapers","Drinking glass","Drinking cup","Drink/Soup box","Empty aerosol container (pesticides/paints)","Expired/unused medicines","Flat glass","Fluorescent light tube","Food scrap","Glass bottle/jar cap (un-attached)","Glass art piece","Eyeglasses","Hardcover book","Light bulb","Make-up glass","Mattress","Metal name plate (not defaced)","Metal pot/pan","Medicine bottle","Mirror","Mirrored glass","Misc electronic items","Ovenware","Packing peanuts","Perfume container","Pizza box/paper egg carton (non-empty)","Plastic bag","Plastic bottle/jug/jar/tub","Plastic bottle/jug/jar/tub w/ cap attached","Plastic shower curtain/liner","Plastic straws or utensils","Polyethylene terepthalate (PET) plastic","Polyvinyl chloride (PVC) plastic","Pyrex glass","Recycleable in a plastic bag","Styrofoam/Polystyrene","Syringe or other medical waste","Takeaway coffee cup","Treated wood","Waxed paper and cartons","Other","Other plastic container","Aluminium blister pack","Battery","Broken glass","Cigarette","Crisp packet","Disposable food container","Disposable plastic cup","Foam cup","Foam food container","Food waste","Garbage bag","Glass cup","Meal carton","Other plastic","Other plastic container","Other plastic cup","Other plastic wrapper","Paper cup","Paper straw","Pizza box","Plastic glooves","Plastic straw","Plastic utensils","Polypropylene bag","Rope & strings","Six pack rings","Squeezable tube","Styrofoam piece","Tissues","Unlabeled litter"].includes(e)?" (🗑️)":"error",t}function getTop(){console.log("I tried to get top!");const e=[];for(var t=0;t<localStorage.length;++t)if("points"!=localStorage.key(t)&&"recentTrash"!=localStorage.key(t)&&"Logged in"!=localStorage.key(t)&&"recent-points"!=localStorage.key(t)&&"User"!=localStorage.key(t)&&"Theme"!=localStorage.key(t)){for(var o=localStorage.key(t),n=0;n<e.length;n++){if(n>e.length){console.log("It was empty!"),e.push(o);break}if(parseInt(localStorage.getItem(o))>parseInt(localStorage.getItem(e[n]))){e.splice(n,0,o);break}if(4==n)break}t<5&&!e.includes(o)&&e.push(o)}for(var l="",a=0;a<5&&null!=e[a];a++){let t=recycleLocation(e[a]);l+=e[a]+t+": "+localStorage.getItem(e[a])+"\n",console.log("Results: "+results)}document.getElementById("top-trash").innerHTML=l}function getRecent(){if(console.log("I tried to get recent!"),null==localStorage.getItem("recentTrash"))return;const e=localStorage.getItem("recentTrash").split("+");for(var t="",o=0;o<5&&null!=e[o];o++){let n=recycleLocation(e[o]);if("error"==n){results="Oops! Ran into an error.";break}t+=e[o]+n+"\n"}document.getElementById("recent-trash").innerHTML=t}function addTrash(){var e=$("#Recycleables").select2("data"),t=0;if(null!=localStorage.getItem("recentTrash"))var o=localStorage.getItem("recentTrash").split("+");var n="";console.log("This is the length: "+e.length);var l="";if(0==e.length)n="No trash item selected.",console.log("Nothing happened!"),document.getElementById("trash-phrase").innerHTML=n,document.getElementById("main-location").style.display="none",document.getElementById("trash-phrase-last").style.display="none";else{console.log("It's not empty!");for(let s=0;s<e.length;s++){if("error"==(l=recycleLocation(e[s].text))){results="Oops! Ran into an error.";break}if(" (🗑️)"!=l&&(t+=10,console.log("You got points!")),n+=e[s].text+l+"\n",null==localStorage.getItem(e[s].text)||"undefined"==localStorage.getItem(e[s].text)?(localStorage.setItem(e[s].text,1),console.log("Added item to localStorage")):(localStorage.setItem(e[s].text,parseInt(localStorage.getItem(e[s].text))+1),console.log("Updated item in localStorage")),null!=o){for(var a=o.length-1;a>=0;a--)o[a+1]=o[a];o[0]=e[s].text}else o=[e[s].text]}document.getElementById("results").innerHTML=n,localStorage.setItem("points",parseInt(localStorage.getItem("points"))+t),console.log("Your points: "+t),localStorage.setItem("recent-points",t),localStorage.setItem("recentTrash",o.join("+")),n.includes(" (🗑️)")?document.getElementById("main-location").innerHTML="trash ":document.getElementById("main-location").innerHTML="recycle ",console.log("I finished!")}}function addSingleTrash(e){var t=0;if(null!=localStorage.getItem("recentTrash"))var o=localStorage.getItem("recentTrash").split("+");var n="",l=recycleLocation(e);if("error"==l&&(results="Oops! Ran into an error.")," (🗑️)"!=l&&(t+=10,console.log("You got points!")),n+=e+l+"\n",localStorage.setItem(e,parseInt(localStorage.getItem(e)+1)),console.log("Updated item in localStorage"),null!=o){for(var a=o.length-1;a>=0;a--)o[a+1]=o[a];o[0]=e}else o=e;document.getElementById("single-item").innerHTML=n,document.getElementById("single-item").style.display="block",localStorage.setItem("points",parseInt(localStorage.getItem("points"))+t),console.log("Your points: "+t),localStorage.setItem("recent-points",t),localStorage.setItem("recentTrash",o.join("+")),document.getElementById("trash-phrase").innerHTML="",console.log("I finished!")}function changeName(){let e=document.getElementById("name-field").value;console.log("This is the new name: "+e),/^[a-z ]+$/i.test(e)?(console.log("Valid name. Changing!"),localStorage.setItem("User",e),document.getElementById("invalid").style.display="none",document.getElementById("name-field").value="",greeting(),closeName()):document.getElementById("invalid").style.display="block"}function toggleMode(){if("Light"==localStorage.getItem("Theme")||"Dark"!=localStorage.getItem("Theme")){localStorage.setItem("Theme","Dark"),console.log("Switching to dark mode"),openToggle("#loader");setTimeout(showPage,1e3);document.getElementById("current-style").setAttribute("href","styles/dark.css"),document.getElementById("small-circle").setAttribute("src","assets/smaller-circle-dark.svg"),document.getElementById("big-circle").setAttribute("src","assets/bigger-circle-dark.svg"),document.getElementById("current-mode").classList.remove("fa-moon"),document.getElementById("current-mode").classList.add("fa-sun")}else{localStorage.setItem("Theme","Light"),console.log("Switching to light mode"),openToggle("#loader");setTimeout(showPage,1e3);document.getElementById("current-mode").classList.add("fa-moon"),document.getElementById("current-mode").classList.remove("fa-sun"),document.getElementById("small-circle").setAttribute("src","assets/smaller-circle.svg"),document.getElementById("big-circle").setAttribute("src","assets/bigger-circle.svg"),document.getElementById("current-style").setAttribute("href","styles/light.css")}}function setTheme(){if("Dark"==localStorage.getItem("Theme")){openToggle("#loader");setTimeout(showPage,1e3);document.getElementById("current-style").setAttribute("href","styles/dark.css"),document.getElementById("small-circle").setAttribute("src","assets/smaller-circle-dark.svg"),document.getElementById("big-circle").setAttribute("src","assets/bigger-circle-dark.svg"),document.getElementById("current-mode").classList.remove("fa-moon"),document.getElementById("current-mode").classList.add("fa-sun")}else{openToggle("#loader");setTimeout(showPage,1e3);document.getElementById("current-mode").classList.add("fa-moon"),document.getElementById("current-mode").classList.remove("fa-sun"),document.getElementById("small-circle").setAttribute("src","assets/smaller-circle.svg"),document.getElementById("big-circle").setAttribute("src","assets/bigger-circle.svg"),document.getElementById("current-style").setAttribute("href","styles/light.css")}}function logOut(){localStorage.setItem("Logged in",0),window.location.href="login.html"}function deleteAccount(){localStorage.clear(),window.location.href="login.html"}function closeToggle(e){$(e).fadeOut()}function openToggle(e){$(e).fadeIn()}function showPage(){closeToggle("#loader"),openToggle("#main")}function hideAbout(){openToggle("#our-team"),closeToggle("#about-main"),document.getElementById("about-main").style.display="none",document.getElementById("our-team").style.display="block"}function showAbout(){closeToggle("#our-team"),openToggle("#about-main"),document.getElementById("about-main").style.display="block",document.getElementById("our-team").style.display="none"}function hideMain(){openToggle("#select-trash"),closeToggle("#recycle-main"),document.getElementById("recycle-main").style.display="none",document.getElementById("select-trash").style.display="block"}function showMain(){$("#Recycleables").val(null).trigger("change"),closeToggle("#select-trash"),openToggle("#recycle-main"),document.getElementById("recycle-main").style.display="block",document.getElementById("select-trash").style.display="none"}function hideMainWizard(){openToggle("#recycle-wizard"),closeToggle("#recycle-main"),start(),document.getElementById("recycle-main").style.display="none",document.getElementById("recycle-wizard").style.display="block"}function showMainWizard(){closeToggle("#recycle-wizard"),openToggle("#recycle-main"),document.getElementById("trash-phrase").style.display="block",stop(),document.getElementById("recycle-main").style.display="block",document.getElementById("recycle-wizard").style.display="none"}function showResults(){closeToggle("#select-trash"),openToggle("#trash-results"),document.getElementById("trash-results").style.display="block",document.getElementById("select-trash").style.display="none",addTrash(),resetStuff()}function showResultsWizard(){closeToggle("#recycle-wizard"),openToggle("#trash-results"),document.getElementById("trash-results").style.display="block",document.getElementById("recycle-wizard").style.display="none",document.getElementById("trash-phrase-last").style.display="none",document.getElementById("single-item").style.display="block",document.getElementById("disclaimer").style.display="block",document.getElementById("trash-phrase").style.display="none",document.getElementById("main-location").style.display="none",stop(),resetStuff()}function toggleDisclaimer(){"Disclaimer"==document.getElementById("disclaimer").innerHTML?(document.getElementById("disclaimer-text").style.display="block",document.getElementById("disclaimer").innerHTML="Close"):(document.getElementById("disclaimer-text").style.display="none",document.getElementById("disclaimer").innerHTML="Disclaimer")}function resetRecycle(){closeToggle("#recycle-page")}function backgroundReset(){document.getElementById("recycle-main").style.display="block",document.getElementById("trash-results").style.display="none",document.getElementById("recycle-wizard").style.display="none",document.getElementById("select-trash").style.display="none",document.getElementById("results").innerHTML="",document.getElementById("trash-phrase").style.display="block",document.getElementById("single-item").innerHTML="The Wizard is asleep :(",document.getElementById("single-item").style.display="none",$("#Recycleables").val(null).trigger("change"),document.getElementById("trash-phrase").innerHTML="Let's ",document.getElementById("main-location").style.display="inline",document.getElementById("trash-phrase-last").style.display="inline"}function openRecycle(){backgroundReset(),document.getElementById("special").style.display="none",openToggle("#recycle-page")}function clearActive(){document.getElementById("settings-button").classList.remove("active"),document.getElementById("home-button").classList.remove("active"),document.getElementById("stats-button").classList.remove("active")}function openTop(){getTop(),openToggle("#stats-top"),closeToggle("#stats-main")}function closeTop(){closeToggle("#stats-top"),openToggle("#stats-main")}function openRecent(){getRecent(),openToggle("#stats-recent"),closeToggle("#stats-main")}function closeRecent(){closeToggle("#stats-recent"),openToggle("#stats-main")}function openStats(){clearPopUp(),clearActive(),document.getElementById("stats-button").classList.add("active"),openToggle("#pop-up"),openToggle("#stats-main")}function openSettings(){clearPopUp(),clearActive(),document.getElementById("settings-button").classList.add("active"),openToggle("#pop-up"),openToggle("#settings-main")}function openName(){openToggle("#settings-name"),closeToggle("#name-button")}function closeName(){closeToggle("#settings-name"),openToggle("#name-button")}function openDelete(){closeToggle("#settings-main"),openToggle("#settings-delete")}function closeDelete(){openToggle("#settings-main"),closeToggle("#settings-delete")}function clearPopUp(){document.getElementById("home-button").classList.add("active"),document.getElementById("stats-main").style.display="none",document.getElementById("stats-top").style.display="none",document.getElementById("stats-recent").style.display="none",document.getElementById("settings-main").style.display="none",document.getElementById("settings-delete").style.display="none"}function closePopUp(){closeToggle("#pop-up"),clearPopUp()}function closeEverything(){closeToggle("#recycle-page"),closeToggle("#about-page"),closePopUp(),clearActive(),document.getElementById("home-button").classList.add("active")}
