/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const reveal = ScrollReveal({
  reset: true,
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

reveal.reveal(".home__data, .footer__container, .footer__group");
reveal.reveal(".home__img", { delay: 700, origin: "bottom" });
reveal.reveal(".logos__img, .program__card, .pricing__card", { interval: 50 });
reveal.reveal(".choose__img, .calculate__content", { origin: "left" });
reveal.reveal(".choose__content, .calculate__img", { origin: "right" });
/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form");
const calculateCm = document.getElementById("calculate-cm");
const calculateKg = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");
// console.log(calculateForm, calculateCm, calculateKg, calculateMessage);

const calculateBmi = (e) => {
  e.preventDefault();

  // Check if the fields have a value.
  if (calculateCm.value === "" || calculateKg.value === "") {
    // alert("Please fill all required field.");

    // Add and Remove color.
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // Show message
    calculateMessage.textContent = `Fill in the Height and Weight`;

    // Remove message three seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    // BMI Formula
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const bmi = Math.round(kg / (cm * cm));
    console.log(bmi);

    // Show your health status.
    if (bmi < 18.5) {
      // Add color and display message.
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
    }

    // To clear the input field
    calculateCm.value = " ";
    calculateKg.value = " ";

    // Remove mesage four seconds
    setTimeout(() => {
      calculateMessage.textContent = " ";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const contactUser = document.getElementById("contact-user");

const sendMail = (e) => {
  e.preventDefault();

  //   Check if the field has a value
  if (contactUser.value === "") {
    // Add and remove color
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    // Show message
    contactMessage.textContent = `You must enter your mail !`;

    // remove message three seconds
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_vd8p5nu",
        "template_674ogxp",
        "#contact-form",
        "H8rWOO0gEV_uMdjSj"
      )
      .then(
        () => {
          // Show message and add color
          contactMessage.classList.add("color-green");
          contactMessage.textContent = `You registered successfully !`;

          // remove message three seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 3000);
        },
        (error) => {
          // Mail sending error
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );

    //   To clear the input field
    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendMail);
