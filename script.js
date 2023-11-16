const pinValeria = document.getElementById("pin-valeria");
const pinPetlin = document.getElementById("pin-petlin");
const pinCastel = document.getElementById("pin-castel");
const pinSetil = document.getElementById("pin-setil");
const pinRegina = document.getElementById("pin-regina");

//ICONS

const iconSeceda = document.getElementById("icon-seceda");
const iconSeiseralm = document.getElementById("icon-seiseralm");
const iconRasciesa = document.getElementById("icon-rasciesa");
const iconColraiser = document.getElementById("icon-colraiser");

/* Infobox */
const infoboxValeria = document.getElementById("infobox-valeria");
const infoboxPetlin = document.getElementById("infobox-petlin");
const infoboxCastel = document.getElementById("infobox-castel");
const infoboxSetil = document.getElementById("infobox-setil");
const infoboxRegina = document.getElementById("infobox-regina");

/* Info Location */

const infoOrtisei = document.getElementById("info-ortisei");
const infoSelva = document.getElementById("info-selva");
const infoSeceda = document.getElementById("info-seceda");
const infoSeiseralm = document.getElementById("info-seiseralm");
const infoRasciesa = document.getElementById("info-rasciesa");
const infoColraiser = document.getElementById("info-colraiser");

//OTHER

//Navigation

const langbtnIt = document.getElementById("langbtn-it");
const langbtnDe = document.getElementById("langbtn-de");
const langbtnEn = document.getElementById("langbtn-en");
const langbtnRu = document.getElementById("langbtn-ru");
const navbtnAbout = document.getElementById("navbtn-about");
const navbtnContact = document.getElementById("navbtn-contact");

//Error

const wrapperError = document.querySelector(".wrapper-error");
const errormsgOverlay = document.querySelector(".errormsg-overlay");
const errorClose = document.querySelector(".error-close");
/* F */

// Errormsg add
[
  langbtnIt,
  langbtnDe,
  langbtnEn,
  langbtnRu,
  navbtnAbout,
  navbtnContact,
].forEach(function (languageOption) {
  languageOption.addEventListener("click", function () {
    wrapperError.classList.remove("hidden");
  });
});
//Errormsg remove
[errormsgOverlay, errorClose].forEach(function (x) {
  x.addEventListener("click", function () {
    wrapperError.classList.add("hidden");
  });
});

// Hovers

function handleMouseEvents(pin, infobox, location) {
  pin.addEventListener("mouseover", function () {
    if (infobox) {
      infobox.style.opacity = "100%";
      location.style.opacity = "100%";
    }
    location.style.opacity = "100%";
  });

  pin.addEventListener("mouseout", function () {
    if (infobox) {
      infobox.style.opacity = "0%";
      location.style.opacity = "0%";
    }
    location.style.opacity = "0%";
  });
}

const pins = [
  { pin: pinValeria, infobox: infoboxValeria, location: infoOrtisei },
  { pin: pinPetlin, infobox: infoboxPetlin, location: infoOrtisei },
  { pin: pinCastel, infobox: infoboxCastel, location: infoOrtisei },
  { pin: pinSetil, infobox: infoboxSetil, location: infoOrtisei },
  { pin: pinRegina, infobox: infoboxRegina, location: infoSelva },
  { pin: iconSeceda, infobox: undefined, location: infoSeceda },
  { pin: iconSeiseralm, infobox: undefined, location: infoSeiseralm },
  { pin: iconRasciesa, infobox: undefined, location: infoRasciesa },
  { pin: iconColraiser, infobox: undefined, location: infoColraiser },
];

pins.forEach(({ pin, infobox, location }) => {
  handleMouseEvents(pin, infobox, location);
});

/*
let onInfo = function (pin, house, location) {
  pin.addEventListener("mouseover", function () {
    house.style.opacity = "100%";
    location.style.opacity = "100%";
  });
  pin.addEventListener("mouseout", function () {
    house.style.opacity = "0%";
    location.style.opacity = "0%";
  });
};

document.addEventListener("mouseover", function () {
  onInfo(pinValeria, infoboxValeria, infoOrtisei);
});
*/

/*
pinValeria.addEventListener("mouseover", function () {
  infoboxValeria.style.opacity = "100%";
  infoOrtisei.style.opacity = "100%";
});
pinValeria.addEventListener("mouseout", function () {
  infoboxValeria.style.opacity = "0%";
  infoOrtisei.style.opacity = "0%";
});

pinPetlin.addEventListener("mouseover", function () {
  infoboxPetlin.style.opacity = "100%";
  infoOrtisei.style.opacity = "100%";
});
pinPetlin.addEventListener("mouseout", function () {
  infoboxPetlin.style.opacity = "0%";
  infoOrtisei.style.opacity = "0%";
});

pinCastel.addEventListener("mouseover", function () {
  infoboxCastel.style.opacity = "100%";
  infoOrtisei.style.opacity = "100%";
});
pinCastel.addEventListener("mouseout", function () {
  infoboxCastel.style.opacity = "0%";
  infoOrtisei.style.opacity = "0%";
});

pinSetil.addEventListener("mouseover", function () {
  infoboxSetil.style.opacity = "100%";
  infoOrtisei.style.opacity = "100%";
});
pinSetil.addEventListener("mouseout", function () {
  infoboxSetil.style.opacity = "0%";
  infoOrtisei.style.opacity = "0%";
});

pinRegina.addEventListener("mouseover", function () {
  infoboxRegina.style.opacity = "100%";
  infoSelva.style.opacity = "100%";
});
pinRegina.addEventListener("mouseout", function () {
  infoboxRegina.style.opacity = "0%";
  infoSelva.style.opacity = "0%";
});
*/

let houses = {
  petlin: {
    name: "Villa Valeria",
    title: "x",
    shortdescr: "y",
    description: "lorem ipsum",
    image: "url()",
    logo: "url()",
  },
};
