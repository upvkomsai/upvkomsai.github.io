const PLACEHOLDER_IMAGE = {
    NEWS: null,
    PROJECTS_DONE: null,
};

const news = [
    {
        title: "News item title",
        date: "dummy", // date object in string form, for now, contains a dummy string
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut suscipit velit, a vestibulum felis. Vestibulum vestibulum, turpis ut condimentum accumsan, mauris orci fringilla justo, et mattis nibh ipsum sed sem. Aenean ornare libero at lorem tempus ullamcorper. Nam ullamcorper cursus odio, vel consequat ligula sollicitudin quis. Phasellus quis erat sagittis risus bibendum aliquet id pretium nisi.`,
        img_path:
            "http://mediad.publicbroadcasting.net/p/vpr/files/styles/x_large/public/201808/stack-of-newspapers-istock-bernie_photo.jpg",
    },
];

const skills = [
    {
        name: "Software Development",
        img_path: "resources/img/skills/undraw_programming.svg",
    },
    {
        name: "Web Development",
        img_path: "resources/img/skills/undraw_Code_typing.svg",
    },
];

const projectsDone = [
    {
        name: "Zest",
        date_started: "Oct 2020",
        date_completed: "Jun 2021",
        description: "An innovative approach to organizing your day.",
        img_path: "resources/img/projects/zest.png",
        url: "https://github.com/jvc1019/Zest",
    },
];
