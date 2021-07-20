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
function bindToCard(
    layout,
    includeModal,
    imgPath,
    title,
    subtitle,
    description,
    showDescription,
    url,
    urlText = "More details"
) {
    layout = layout || CARD.HORIZONTAL; // Default card layout is horizontal

    var clone = document
        .querySelector(`#templates .card.${layout}.template`)
        .cloneNode(true);

    if (imgPath) {
        var img = document.createElement("img");
        img.src = imgPath;
        img.alt = title || "No image provided.";
        clone.querySelector(`.${layout}-img`).appendChild(img);
    } else {
        var img = document.createElement("img");
        img.src = imgPath || "resources/img/logo.png";
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
        var link = document.createElement("a");

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
}

/**
 * Modal
 */
var modal = document.getElementById("modal");

var modalClose = modal.querySelector(".modal-header .modal-close");
modalClose.classList.add("clickable");
modalClose.addEventListener("click", () => (modal.hidden = true));

modal.addEventListener("click", function (e) {
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
function bindToModal(
    element,
    imgPath,
    title,
    subtitle,
    description,
    url,
    urlText
) {
    if (!element) return false;

    element.addEventListener("click", function (e) {
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
            var link = modal.querySelector(".modal-url");

            link.href = url;
            link.textContent = urlText;
            link.hidden = false;
        } else {
            var link = modal.querySelector(".modal-url");

            link.href = "#";
            link.textContent = "";
            link.hidden = true;
        }
    });
}

/**
 * Binds the data to each subsection
 */
function bindData() {
    const _news = document.querySelector("#news .section-content");
    const _projectsDone = document.querySelector("#projects .section-content");

    // Clone the template `div` and populate it with necessary data

    if (news.length) {
        _news.querySelector(".nodata").remove();

        news.forEach(function (e) {
            var card = bindToCard(
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

    if (projectsDone.length) {
        _projectsDone.querySelector(".nodata").remove();

        projectsDone.forEach(function (e) {
            var card = bindToCard(
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
}

bindData();

// Handles button clicks on header navigation
// When adding new pages, create a new 'btn' for the header and a new 'link' for the footer, then duplicate the code below
var news_btn = document.getElementById("news-btn");
var projects_btn = document.getElementById("projects-btn");
var about_btn = document.getElementById("about-btn");

var news_link = document.getElementById("news-link");
var projects_link = document.getElementById("projects-link");
var about_link = document.getElementById("about-link");

news_btn.addEventListener("click", function (e) {
    document.querySelectorAll("body > div").forEach(function (element) {
        if (element.id === "news") {
            element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden", null);
        }
    });
});

news_link.addEventListener("click", function (e) {
    document.querySelectorAll("body > div").forEach(function (element) {
        if (element.id === "news") {
            element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden", null);
        }
    });
});

projects_btn.addEventListener("click", function (e) {
    document.querySelectorAll("body > div").forEach(function (element) {
        if (element.id === "projects") {
            element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden", null);
        }
    });
});

projects_link.addEventListener("click", function (e) {
    document.querySelectorAll("body > div").forEach(function (element) {
        if (element.id === "projects") {
            element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden", null);
        }
    });
});

about_btn.addEventListener("click", function (e) {
    document.querySelectorAll("body > div").forEach(function (element) {
        if (element.id === "about") {
            element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden", null);
        }
    });
});

about_link.addEventListener("click", function (e) {
    document.querySelectorAll("body > div").forEach(function (element) {
        if (element.id === "about") {
            element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden", null);
        }
    });
});
