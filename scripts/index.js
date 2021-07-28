/**
 * Predefined constants for different Card layouts
 */
const CARD = {
    HORIZONTAL: "card-h",
    VERTICAL: "card-v",
    SMALL: "card-sm",
};

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
    urlText = "More details"
) => {
    layout = layout || CARD.HORIZONTAL; // Default card layout is horizontal

    const clone = document
        .querySelector(`#templates .card.${layout}.template`)
        .cloneNode(true);

    if (imgPath) {
        const img = document.createElement("img");
        img.src = imgPath;
        img.alt = title || "No image provided.";
        clone.querySelector(`.${layout}-img`).appendChild(img);
    } else {
        const img = document.createElement("img");
        img.src = "resources/img/logo.png";
        img.alt = title || "No image provided.";
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
        ).textContent = description;
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
        clone.classList.add("clickable", null);
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
        if (e.target === element.querySelector("a")) {
            return;
        }

        modal.querySelector(".modal-content .modal-img").src =
            imgPath || "resources/img/logo.png";
        modal.querySelector(".modal-content .modal-title").textContent =
            title || "No title";
        modal.querySelector(".modal-content .modal-subtitle").textContent =
            subtitle || "N/A";
        modal.querySelector(".modal-content .modal-description").textContent =
            description || "No description";
        modal.hidden = false;

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
    });
};

/**
 * Binds the data to each subsection
 */
const bindData = () => {
    const _homeNews = document.querySelector("#home-news .section-content");
    const _news = document.querySelector("#news .section-content");
    const _homeProjects = document.querySelector(
        "#home-projects .section-content"
    );
    const _projectsDone = document.querySelector("#projects .section-content");

    // Clone the template `div` and populate it with necessary data

    if (homeNews.length) {
        _homeNews.querySelector(".nodata").remove();

        homeNews.forEach((e) => {
            const card = bindToCard(
                CARD.VERTICAL,
                true,
                e.img_path,
                e.title,
                e.date,
                e.content,
                true,
                e.url,
                e.urlText || "More Info"
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
                e.img_path,
                e.title,
                e.date,
                e.content,
                true,
                e.url,
                e.urlText || "More Info"
            );

            _news.append(card);
        });
    }

    if (homeProjects.length) {
        _homeProjects.querySelector(".nodata").remove();

        homeProjects.forEach((e) => {
            const card = bindToCard(
                CARD.VERTICAL,
                true,
                e.img_path,
                e.name,
                e.date_shown,
                e.description,
                true,
                e.url,
                e.urlText || "More Info"
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
                e.img_path,
                e.name,
                e.date_shown,
                e.description,
                true,
                e.url,
                e.urlText || "More Info"
            );
            _projectsDone.append(card);
        });
    }

    document.querySelector("#templates").remove();
};

bindData();

// Handles button clicks on header navigation
// When adding new pages, create a new 'btn' for the header and a new 'link' for the footer, then duplicate the code below
const news_btn = document.getElementById("news-btn");
const projects_btn = document.getElementById("projects-btn");
const gallery_btn = document.getElementById("gallery-btn");
const about_btn = document.getElementById("about-btn");
const contact_btn = document.getElementById("contact-btn");

const news_link = document.getElementById("news-link");
const projects_link = document.getElementById("projects-link");
const gallery_link = document.getElementById("gallery-link");
const about_link = document.getElementById("about-link");
const contact_link = document.getElementById("contact-link");

const buttons = [
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
        btn: contact_btn,
        target: "contact",
    },
    {
        btn: contact_link,
        target: "contact",
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