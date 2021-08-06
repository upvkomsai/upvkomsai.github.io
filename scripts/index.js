/**
 * Predefined constants for different Card layouts
 */
const CARD = {
    HORIZONTAL: "card-h",
    VERTICAL: "card-v",
    SMALL: "card-sm",
};

// Carousel 

var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" current", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " current";
    }

/**
 * @param {string} layout - card layout as defined in the CARD constant (horizontal, vertical, or small)
 * @param {boolean} includeModal - bind a modal to the Card item to show more details
 * @param {string} imgPath - path to image file to be displayed on the card
 * @param {string} title - title of the card
 * @param {string} subtitle - subtitle to be displayed on the card
 * @param {string} description - description of the card
 * @param {boolean} showDescription - whether to show description on the card itself
 * @param {string} url - URL pointing to external resources
 * @param {string} urlText - text to display instead of the URL
 * @returns {Node} A preformatted `<div>` element that can be attached to the DOM
 */
const bindToCard = (
    layout,
    includeModal,
    imgPath,
    title,
    subtitle,
    description,
    showDescription,
    url,
    urlText = "More details",
) => {
    layout = layout || CARD.HORIZONTAL; // Default card layout is horizontal

    const clone = document
        .querySelector(`#templates .card.${layout}.template`)
        .cloneNode(true);

    if (imgPath) {
        const img = document.createElement("img");
        img.src = imgPath;
        img.alt = title || "No title provided.";
        clone.querySelector(`.${layout}-img`).appendChild(img);
    }

    if (title) {
        clone.querySelector(`.${layout}-content .${layout}-title`).textContent =
            title;
    }

    if (subtitle) {
        clone.querySelector(
            `.${layout}-content .${layout}-subtitle`
        ).textContent = subtitle;
    }

    if (description && showDescription) {
        clone.querySelector(
            `.${layout}-content .${layout}-description`
        ).textContent = description || "No description.";
    } else {
        clone
            .querySelector(`.${layout}-content .${layout}-description`)
            ?.remove();
    }

    if (url) {
        const link = document.createElement("a");

        link.href = url;
        link.textContent = urlText;

        clone.querySelector(`.${layout}-content`).appendChild(link);
    }

    clone.classList.remove("template");

    if (includeModal) {
        bindToModal(clone, imgPath, title, subtitle, description, url, urlText);
        clone.classList.add("clickable");
    }

    return clone;
};

/**
 * @param {string} layout - card layout as defined in the CARD constant (horizontal, vertical, or small)
 * @param {boolean} includeModal - bind a modal to the Card item to show more details
 * @param {string} imgPath - path to image file to be displayed on the card
 * @param {string} title - title of the card
 * @param {string} subtitle - subtitle to be displayed on the card
 * @param {string} subtitle2 - another subtitle to be displayed on the card
 * @param {string} description - description of the card
 * @param {boolean} showDescription - whether to show description on the card itself
 * @param {string} url - URL pointing to external resources
 * @param {string} urlText - text to display instead of the URL
 * @param {boolean} is_dev - state true for website developers
 * @returns {Node} A preformatted `<div>` element that can be attached to the DOM
 */
 const bindToOfficerCard = (
    layout,
    includeModal,
    imgPath,
    title,
    subtitle,
    subtitle2,
    description,
    showDescription,
    is_dev,
) => {
    layout = layout || CARD.HORIZONTAL; // Default card layout is horizontal

    const clone = document
        .querySelector(`#templates .card.${layout}.template`)
        .cloneNode(true);

    if (imgPath) {
        const img = document.createElement("img");
        img.src = imgPath;
        img.alt = title || "No title provided.";
        clone.querySelector(`.${layout}-img`).appendChild(img);
    }

    if (title) {
        clone.querySelector(`.${layout}-content .${layout}-title`).textContent =
            title;
    }

    if (subtitle) {
        clone.querySelector(
            `.${layout}-content .${layout}-subtitle`
        ).textContent = subtitle;
    }

    if (subtitle2) {
        const sub2 = document.createElement("p");
        sub2.textContent = subtitle2;
        clone.querySelector(
            `.${layout}-content .${layout}-subtitle2`).appendChild(sub2);
    }

    if (description && showDescription) {
        clone.querySelector(
            `.${layout}-content .${layout}-description`
        ).textContent = description || "No description.";
    } else {
        clone
            .querySelector(`.${layout}-content .${layout}-description`)
            ?.remove();
    }

    if (is_dev) {
        const devTitle = document.createElement("p");

        devTitle.className = "modal-dev";
        devTitle.textContent = `✔ "upv.komsai.org" Website Developer`;

        clone.querySelector(`.${layout}-content`).appendChild(devTitle);
    }

    clone.classList.remove("template");

    if (includeModal) {
        bindToOfficerModal(clone, imgPath, title, subtitle, subtitle2, description, is_dev);
        clone.classList.add("clickable");
    }

    return clone;
};

/**
 * Modal
 */
const modal = document.getElementById("modal");

const modalClose = modal.querySelector(".modal-header .modal-close");
modalClose.classList.add("clickable");
modalClose.addEventListener("click", () => (modal.hidden = true));

modal.addEventListener("click", (e) => {
    if (e.target !== modal) {
        return;
    } else {
        modal.hidden = true;
    }
});

/**
 * @param {Node} element - element that triggers the modal
 * @param {string} imgPath
 * @param {string} title
 * @param {string} subtitle
 * @param {string} description
 * @param {string} url
 * @param {string} urlText
 */
 const bindToModal = (
    element,
    imgPath,
    title,
    subtitle,
    description,
    url,
    urlText
) => {
    if (!element) return false;

    element.addEventListener("click", (e) => {

        modal.querySelector(".modal-content .modal-title").textContent =
            title || "No title";
        modal.querySelector(".modal-content .modal-subtitle").textContent =
            subtitle || "N/A";

        const sub2 = modal.querySelector(".modal-content .modal-subtitle2");
        sub2.href = "#";
        sub2.textContent = "";
        sub2.hidden = true;
        
        modal.querySelector(".modal-content .modal-img").src =
            imgPath || "resources/img/logo.png";
        modal.querySelector(".modal-content .modal-description").textContent =
            description || "No description";

        if (url) {
            const link = modal.querySelector(".modal-url");

            link.href = url;
            link.textContent = urlText;
            link.hidden = false;
        } else {
            const link = modal.querySelector(".modal-url");

            link.href = "#";
            link.textContent = "";
            link.hidden = true;
        }
        
        const devTitle = modal.querySelector(".modal-dev");

        devTitle.textContent = "";
        devTitle.hidden = true;

        modal.hidden = false;
    });
};

/**
 * @param {Node} element - element that triggers the modal
 * @param {string} imgPath
 * @param {string} title
 * @param {string} subtitle
 * @param {string} subtitle2
 * @param {string} description
 * @param {boolean} is_dev
 */
const bindToOfficerModal = (
    element,
    imgPath,
    title,
    subtitle,
    subtitle2,
    description,
    is_dev
) => {
    if (!element) return false;

    element.addEventListener("click", (e) => {

        modal.querySelector(".modal-content .modal-title").textContent =
            title || "No title";
        modal.querySelector(".modal-content .modal-subtitle").textContent =
            subtitle || "N/A";

        if (subtitle2) {
            const sub2 = modal.querySelector(".modal-content .modal-subtitle2");
            sub2.classList.add("modal-subtitle2");
            sub2.textContent = subtitle2 || "N/A";
        }
        
        modal.querySelector(".modal-content .modal-img").src =
            imgPath || "resources/img/logo.png";
        modal.querySelector(".modal-content .modal-description").textContent =
            description || "No description";

        const link = modal.querySelector(".modal-content .modal-url");
        link.href = "#";
        link.textContent = "";
        link.hidden = true;

        if (is_dev) {
            const devTitle = modal.querySelector(".modal-content .modal-dev");
    
            devTitle.textContent = `✔ "upv.komsai.org" Website Developer`;
            devTitle.hidden = false;

        } else {
            const devTitle = modal.querySelector(".modal-dev");
    
            devTitle.textContent = "";
            devTitle.hidden = true;
        }

        modal.hidden = false;
    });
};

/**
 * Binds the data to each subsection
 */
const bindData = () => {
    const _homeNews = document.querySelector("#home-news .section-content");
    const _news = document.querySelector("#news .section-content");
    const _homeGallery = document.querySelector("#home-gallery .section-content");
    const _gallery = document.querySelector("#gallery .section-content");
    const _homeProjects = document.querySelector("#home-projects .section-content");
    const _projectsDone = document.querySelector("#projects .section-content");
    const _officers = document.querySelector("#officers .section-content");

    // Clone the template `div` and populate it with necessary data

    if (homeNews.length) {
        _homeNews.querySelector(".nodata").remove();

        homeNews.forEach((e) => {
            const card = bindToCard(
                CARD.VERTICAL,
                true,
                e.img_path || PLACEHOLDER_IMAGE.NEWS,
                e.title,
                e.date,
                e.content,
                true,
                e.url,
                e.urlText || "More Info",
            );

            _homeNews.append(card);
        });
    }

    if (news.length) {
        _news.querySelector(".nodata").remove();

        news.forEach((e) => {
            const card = bindToCard(
                CARD.VERTICAL,
                true,
                e.img_path || PLACEHOLDER_IMAGE.NEWS,
                e.title,
                e.date,
                e.content,
                true,
                e.url,
                e.urlText || "More Info",
            );

            _news.append(card);
        });
    }

    if (homeGallery.length) {
        _homeGallery.querySelector(".nodata").remove();

        homeGallery.forEach((e) => {
            const card = bindToCard(
                CARD.VERTICAL,
                true,
                e.img_path || PLACEHOLDER_IMAGE.GALLERY,
                e.title,
                e.date_shown,
                e.description,
                false,
                e.url,
                e.urlText || "More Info",
            );

            _homeGallery.append(card);
        });
    }

    if (gallery.length) {
        _gallery.querySelector(".nodata").remove();

        gallery.forEach((e) => {
            const card = bindToCard(
                CARD.VERTICAL,
                true,
                e.img_path || PLACEHOLDER_IMAGE.GALLERY,
                e.title,
                e.date_shown,
                e.description,
                false,
                e.url,
                e.urlText || "More Info",
            );

            _gallery.append(card);
        });
    }

    if (homeProjects.length) {
        _homeProjects.querySelector(".nodata").remove();

        homeProjects.forEach((e) => {
            const card = bindToCard(
                CARD.VERTICAL,
                true,
                e.img_path || PLACEHOLDER_IMAGE.PROJECTS_DONE,
                e.name,
                e.date_shown,
                e.description,
                true,
                e.url,
                e.urlText || "More Info",
            );
            _homeProjects.append(card);
        });
    }

    if (projectsDone.length) {
        _projectsDone.querySelector(".nodata").remove();

        projectsDone.forEach((e) => {
            const card = bindToCard(
                CARD.VERTICAL,
                true,
                e.img_path || PLACEHOLDER_IMAGE.PROJECTS_DONE,
                e.name,
                e.date_shown,
                e.description,
                true,
                e.url,
                e.urlText || "More Info",
            );
            _projectsDone.append(card);
        });
    }

    if (officers.length) {
        _officers.querySelector(".nodata").remove();
        var count = 0;
        var container = document.createElement("div");

        officers.forEach((e) => {
            const card = bindToOfficerCard(
                CARD.VERTICAL,
                true,
                e.img_path || PLACEHOLDER_IMAGE.OFFICERS,
                e.name,
                e.position,
                "✉ " + e.email,
                e.description,
                true,
                e.is_dev
            );
            
            if  (count == 0){
                container.classList = "col-3";
                container.append(document.createElement("div"));
                _officers.append(container);

            } else if (count == 3 || count == 11 || count == 15 || count == 19 || count == 23){
                _officers.append(document.createElement("br"));
                _officers.append(document.createElement("br"));

                container = document.createElement("div");
                container.classList = "col-4";
                _officers.append(container);

            } else if (count == 27){
                _officers.append(document.createElement("br"));
                _officers.append(document.createElement("br"));

                container = document.createElement("div");
                container.classList = "col-4";
                container.append(document.createElement("div"));
                _officers.append(container);

            } else if (count == 29){
                container = document.createElement("div");
                _officers.append(container);
            }
            container.append(card);
            count ++;
        });
    }

    document.querySelector("#templates").remove();
};

bindData();


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

const navLink = document.querySelectorAll(".mainMenu");

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
navLink.forEach(n => n.addEventListener("click", autoClose));

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

function autoClose() {
    mainMenu.style.top = '-100%';
}

// Handles button clicks on header navigation
// When adding new pages, create a new 'btn' for the header and a new 'link' for the footer, then duplicate the code below
const home_btn = document.getElementById("home-btn");
const news_btn = document.getElementById("news-btn");
const projects_btn = document.getElementById("projects-btn");
const gallery_btn = document.getElementById("gallery-btn");
const about_btn = document.getElementById("about-btn");
const contact_btn = document.getElementById("contact-btn");
const help_btn = document.getElementById("help-btn");

const home_more = document.getElementById("home-more");
const home_more2 = document.getElementById("home-more2");
const news_more = document.getElementById("news-more");
const projects_more = document.getElementById("projects-more");
const gallery_more = document.getElementById("gallery-more");
const about_more = document.getElementById("about-more");
const help_more = document.getElementById("help-more");

const home_link = document.getElementById("home-link");
const news_link = document.getElementById("news-link");
const projects_link = document.getElementById("projects-link");
const gallery_link = document.getElementById("gallery-link");
const about_link = document.getElementById("about-link");
const contact_link = document.getElementById("contact-link");
const help_link = document.getElementById("help-link");

const buttons = [
    {
        btn: home_btn,
        target: "home",
    },
    {
        btn: news_btn,
        target: "news",
    },
    {
        btn: projects_btn,
        target: "projects",
    },
    {
        btn: gallery_btn,
        target: "gallery",
    },
    {
        btn: about_btn,
        target: "about",
    },
    {
        btn: contact_btn,
        target: "home",
    },
    {
        btn: help_btn,
        target: "help",
    },
    {
        btn: home_more,
        target: "home",
    },
    {
        btn: home_more2,
        target: "home",
    },
    {
        btn: news_more,
        target: "news",
    },
    {
        btn: projects_more,
        target: "projects",
    },
    {
        btn: gallery_more,
        target: "gallery",
    },
    {
        btn: about_more,
        target: "about",
    },
    {
        btn: help_more,
        target: "help",
    },
    {
        btn: home_link,
        target: "home",
    },
    {
        btn: news_link,
        target: "news",
    },
    {
        btn: projects_link,
        target: "projects",
    },
    {
        btn: gallery_link,
        target: "gallery",
    },
    {
        btn: about_link,
        target: "about",
    },
    {
        btn: contact_link,
        target: "home",
    },
    {
        btn: help_link,
        target: "help",
    },
];

const bindButton = ({ btn, target }) => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll("body > div").forEach((element) => {
            if (element.id === target) {
                element.removeAttribute("hidden");
            } else {
                element.setAttribute("hidden", null);
            }
        });
    });
};

const bindButtons = (buttons) => {
    buttons.forEach((e) => {
        bindButton(e);
    });
};

bindButtons(buttons);

var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}