console.log("hello js");

// const h1 = document.querySelector(".heading-primary");

// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = "بسم الله الرحمان الرحيم";
//   h1.style.backgroundColor = "orange";
//   h1.style.padding = "5rem";
//   h1.style.textAlign = "right";
// });

// show the current year in copyright section
const yearEl = document.querySelector(".year");
console.log(yearEl.textContent);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// making the mobile menu button work
const menu_btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
menu_btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("menu-open");
});

// ==================================
// fixing smooth scrolling on safari
// ==================================
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // hide the mobile nav menu
    headerEl.classList.remove("menu-open");

    const hrefAtt = link.getAttribute("href");
    // scroll to the top
    if (hrefAtt === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (hrefAtt.startsWith("#")) {
      //  scroll to other links
      const targetEl = document.querySelector(hrefAtt);
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
