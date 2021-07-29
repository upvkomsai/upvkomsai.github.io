const PLACEHOLDER_IMAGE = {
    FEATURED: null,
    NEWS: "resources/img/logo.png",
    GALLERY: "resources/img/logo.png",
    PROJECTS_DONE: "resources/img/logo.png",
    OFFICERS: "resources/img/logo.png",
};

const featured = [
    {
        title: "What Computer Part are You?",
        date: "July 30, 2021",
        content:
        `Are you this? or this?`,
        img_path: "resources/img/featured/Slide1.jpg",
    },
    {
        title: "What Computer Part are You?",
        date: "July 30, 2021",
        content:
        `Are you this? or this?`,
        img_path: "resources/img/featured/Slide2.jpg",
    },
    {
        title: "What Computer Part are You?",
        date: "July 30, 2021",
        content:
        `Are you this? or this?`,
        img_path: "resources/img/featured/Slide3.jpg",
    },
    {
        title: "What Computer Part are You?",
        date: "July 30, 2021",
        content:
        `Are you this? or this?`,
        img_path: "resources/img/featured/Slide4.jpg",
    },
];

const news = [
    {
        title: "UPV Komsai.Org Website Launch",
        date: "July 30, 2021",
        content:
        `UPV Komsai.Org now has an official website. Love this new website OMG! Check it out!!!`,
        url: "https://upv.komsai.org",
        urlText: "Go to Official Website",
    },
    {
        title: "CONGRATULATIONS UPV B.S. in Computer Science Passers!!!",
        date: "July 16, 2021",
        content:
        `CONGRATULATIONS UPV B.S. in Computer Science Passers!!!
        
        UPV Komsai.Org is here to welcome you to a community where interactions between Bits and Bytes are the norm! We fully support your journey towards becoming a future Computer Scientist, Software Engineer, Data Analyst, or any other professional. Choosing this course will be something you are not going to regret as it will aid you in gaining a better understanding of the different fields of computer knowledge.
        
        We hope to meet you this upcoming academic year KOMSAI FRESHIES!!! Stay safe!
        
        We kindly ask you to fill out the form below so we can know you better.`,
        img_path: "resources/img/news/WelcomePassers.gif",
        url: "https://forms.gle/Eahpzh83uzHXgWBd6",
        urlText: "UPV BSCS Qualifiers Form",
    },
    {
        title: "Congratulations on Finishing the Semester!",
        date: "July 7, 2021",
        content:
        `We would like to congratulate everyone (and we mean every single one) who has finally completed this 2nd semester of AY 2020 - 2021.
        
        It was not an easy feat, but still, you managed to exert 💪 a lot of effort and perseverance despite the challenges we have faced in these trying times. Despite the immediate shift to remote learning, you were able to finish your academic requirements with 🏆 Honor and Excellence 🏆 which is what a UP student should be.
        
        UPV Komsai.Org wishes all of you a big Congratulations!!! 🤝 .
        PADAYON 👊 mga Iskos and Iskas!!! 👏👏👏`,
        img_path: "resources/img/news/Congrats_2ndSem.png",
    },
    {
        title: "Congratulations Honorofic Scholars!!!",
        date: "July 7, 2021",
        content:
        `🏆 Congratulations 🏆 to all the CAS University and College Scholars for the 1st Semester of A.Y. 2020 - 2021!!! ❤️❤️❤️`,
        img_path: "resources/img/news/CAS_Honorific_Scholars.png",
    },
];

const homeNews = [news[0], news[1], news[2]];

const gallery = [
    {
        title: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Sir Maynard ❤️❤️❤️`,
        img_path: "resources/img/gallery/GroupPic_wNongMaynard.jpg",
    },
    {
        title: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Ma'am Relyn ❤️❤️❤️`,
        img_path: "resources/img/gallery/GroupPic_wMaamRelyn.jpg",
    },
    {
        title: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Sir Alexis ❤️❤️❤️`,
        img_path: "resources/img/gallery/GroupPic_wSirAlexis.jpg",
    },
    {
        title: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Sir Stephen ❤️❤️❤️`,
        img_path: "resources/img/gallery/GroupPic_wSirStephen.jpg",
    },
];

const homeGallery = [gallery[0], gallery[1], gallery[2]];

const projectsDone = [
    {
        name: "Official Website",
        date_shown: "July 15, 2021",
        description:
        `UPV Komsai.Org now has an official website.
        
        It started as a plan years ago, and eventually the organization finally made it happen. With a website, the organization can finally spread its wings outside its limitations. Here's to a new way of communication.
        
        Visit the website through the link below.`,
        url: "https://upv.komsai.org",
        urlText: "Go to Official Website",
    },
    {
        name: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Learning something new every day is never a bad thing! (unless it's something evil, please unlearn it /srs)
        
        Take your chances with Kom E-Con 2021 to learn awesome information about machine learning, telecommunications, cybersecurity, library and information science, and more.
        
        Join us on May 7, 2021 (Friday) from 9:00 AM - 5:00 PM, and experience new things with our amazing speakers.
        
        We will very much appreciate you joining us! See you there!`,
        img_path: "resources/img/projects/Kom_E-Con_2021.gif",
    },
    {
        name: "Komsai Week 2021",
        date_shown: "May 3-8, 2021",
        description:
        `Tired of staring at your screen for the whole day just doing acads??? How about the idea of having a little break from schoolwork (just for a week) and make staring at your screen more fun!!! You can still work at night, right?
        It's time to stretch those fingers and rack up those remaining brain cells (or whatever is left of it) in this year's Komsai Week!!!
        
        Join us from May 3 - 8, 2021 for exciting games, activities, and more. We've got it all for you!!! Will it involve hacking NASA or the creation of your robot best friend? Who knows! Find that out yourself.`,
        img_path: "resources/img/projects/Komsai_Week_2021.gif",
    },
    {
        name: "League of Legends: Wild Rift Tournament",
        date_shown: "March 24, 2021",
        description:
        `UPV, LET THE GAMES BEGIN! \n\n The UPV USC together with Komsai.Org brings you the UPV League of Legends Wildrift Tournament!
        
        Register your team now to play and get a chance to be one of the top three teams to win cash prizes! See you on March 24, 2021 at 6:00PM!
        
        We will only be accepting team registrations until March 23 at 10PM!`,
        img_path: "resources/img/projects/LoL_WR_Tourna.jpg",
    },
    {
        name: "Kom Mini-cation",
        date_shown: "November 6, 2020",
        description:
        `UPV Komsai.org will be holding its first-ever virtual social event called KOM MINI-CATION (Komsai Mini Vacation).
        
        This will include many activities, games, and other fun stuff that will make you forget about ACADS and have less stress in the meantime. We all need a breather, and we decided to be there for you.
        
        See you there Bits and Bytes!!!`,
        img_path: "resources/img/projects/Kom Mini-cation.png",
    },
];

const homeProjects = [projectsDone[0], projectsDone[1], projectsDone[2]];

const officers = [
    {
        name: "JAYVEE CASTAÑEDA",
        position: "President",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "jbcastaneda@up.edu.ph"
    },
    {
        name: "BRETHREN ACE DE LA GENTE",
        position: "Vice President for Internal Affairs",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com"
    },
    {
        name: "CANDYL JOHN FAELDONEA",
        position: "Vice President for External Affairs",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "cjfaeldonea@up.edu.ph"
    },
    {
        name: "JOHANNA MARIE QUITOVIERA",
        position: "Secretary",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com"
    },
    {
        name: "GRACIELOU JOMOC",
        position: "Assistant Secretary",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com"
    },
];