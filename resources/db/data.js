const PLACEHOLDER_IMAGE = {
    FEATURED: "resources/img/logo.png",
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
        date: "August 6, 2021",
        content:
        `On August 6, 2021, UPV Komsai.Org has now launched its official website to the public.
        
        Check it out by typing "upv.komsai.org" on your browser or by clicking the link below.`,
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

const homeNews = [news[0], news[1], news[2], news[3]];

const gallery = [
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `Raffle Draw Winners`,
        img_path: "resources/img/gallery/raffle.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `Trivia Night BONUS ROUND Winners`,
        img_path: "resources/img/gallery/triviaBonus.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `Trivia Night HARD ROUND Winners`,
        img_path: "resources/img/gallery/triviaHard.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `Trivia Night MEDIUM ROUND Winners`,
        img_path: "resources/img/gallery/triviaMedium.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `Trivia Night EASY ROUND Winners`,
        img_path: "resources/img/gallery/triviaEasy.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `"What Do You Meme?" 3rd Place`,
        img_path: "resources/img/gallery/wdym3.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `"What Do You Meme?" 2nd Place`,
        img_path: "resources/img/gallery/wdym2.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `"What Do You Meme?" 1st Place`,
        img_path: "resources/img/gallery/wdym1.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `Over-Riddle-ing Winners`,
        img_path: "resources/img/gallery/over-riddle-ing.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `CSS Challenge Winner #2`,
        img_path: "resources/img/gallery/css2.png",
    },
    {
        title: "Komsai Week 2021 Winners",
        date_shown: "May 8, 2021",
        description:
        `CSS Challenge Winner #1`,
        img_path: "resources/img/gallery/css1.png",
    },
    {
        title: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Group Picture with Mr. Maynard Vargas ❤️❤️❤️`,
        img_path: "resources/img/gallery/GroupPic_wNongMaynard.jpg",
    },
    {
        title: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Group Picture with Ms. Relyn Dela Cruz ❤️❤️❤️`,
        img_path: "resources/img/gallery/GroupPic_wMaamRelyn.jpg",
    },
    {
        title: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Group Picture with Mr. Alexis Lingad ❤️❤️❤️`,
        img_path: "resources/img/gallery/GroupPic_wSirAlexis.jpg",
    },
    {
        title: "Kom E-Con 2021",
        date_shown: "May 7, 2021",
        description:
        `Group Picture with Mr. Stephen Alayon ❤️❤️❤️`,
        img_path: "resources/img/gallery/GroupPic_wSirStephen.jpg",
    },
    {
        title: "LoL: Wild Rift Tournament with USC",
        date_shown: "March 27, 2021",
        description:
        `LoL: Wild Rift Tournament Brackets`,
        img_path: "resources/img/gallery/USCTournamentBrackets.png",
    },
    {
        title: "LoL: Wild Rift Tournament with USC",
        date_shown: "March 27, 2021",
        description:
        `LoL: Wild Rift Tournament Teams`,
        img_path: "resources/img/gallery/USCTournamentTeams.png",
    },
    {
        title: "YEP NICL 2020 Valorant Leg",
        date_shown: "November 10, 2020",
        description:
        `Team "Kuya Marjo Supporters" for YEP NICL 2020`,
        img_path: "resources/img/gallery/kuyamarjo.png",
    },
    {
        title: "YEP NICL 2020 Valorant Leg",
        date_shown: "November 10, 2020",
        description:
        `Team "Op Ja Kaw?" for YEP NICL 2020`,
        img_path: "resources/img/gallery/opjakaw.png",
    },
];

const homeGallery = [gallery[0], gallery[1], gallery[2], gallery[3]];

const projectsDone = [
    {
        name: "Official Website",
        date_shown: "July 2 - August 6, 2021",
        description:
        `UPV Komsai.Org now has an official website.
        
        It started as a plan years ago, and eventually the organization finally made it happen. Over the span of a month, we designed a website so that it will be easier for our followers to contact us and know more about the organization.
        
        With a website, the organization can finally spread its wings outside its limitations. Cheers to a new way of communication.
        
        You may visit the website by typing "upv.komsai.org" on your browser or by clicking the link below.`,
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

const homeProjects = [projectsDone[0], projectsDone[1], projectsDone[2], projectsDone[3]];

const officers = [
    {
        name: "JAYVEE B. CASTAÑEDA",
        position: "President",
        description:
        `Derived from the Lost Equation...
        where Chaos must stay chaotic
        
        Things come and go...`,
        email: "jbcastaneda@up.edu.ph",
        img_path: "resources/img/officers/castañeda.jpg",
        is_dev: true,
    },
    {
        name: "BRETHREN ACE D. DE LA GENTE",
        position: "Vice President for Internal Affairs",
        description:
        `50% human, 50% unsure`,
        email: "bddelagente@up.edu.ph",
        img_path: "resources/img/officers/delagente.jpg",
    },
    {
        name: "CANDYL JOHN F. FAELDONEA",
        position: "Vice President for External Affairs",
        description:
        `Part-time computer science student. Wanna join [other] orgs? 
        SKL, hindi applicable sa akin ang mga komsai stereotypes, bakit kaya?`,
        email: "cjfaeldonea@up.edu.ph",
        img_path: "resources/img/officers/faeldonea.jpg",
        is_dev: true,
    },
    {
        name: "JOHANNA MARIE P. QUITOVIERA",
        position: "Secretary",
        description:
        `A third year student at the University of the Philippines Visayas na patuloy lumalaban emz`,
        email: "jpquitoviera@up.edu.ph",
        img_path: "resources/img/officers/quitoviera.jpg",
    },
    {
        name: "GRACIELOU L. JOMOC",
        position: "Assistant Secretary",
        description:
        `Drinks coffee and takes photographs of food (and does a bit with learning technologies too).`,
        email: "gljomoc@up.edu.ph",
        img_path: "resources/img/officers/jomoc.jpg",
    },
    {
        name: "MICHAEL VINCENT DOSADO",
        position: "Treasurer",
        description:
        `ESFJ`,
        email: "mcdosado@up.edu.ph",
        img_path: "resources/img/officers/dosado.jpg",
    },
    {
        name: "RICA EUNICE L. DORDAS",
        position: "Assistant Treasurer",
        description:
        `Hi. I make crochet products. Follow me on FB and IG: @heycrushe`,
        email: "rldordas@up.edu.ph",
        img_path: "resources/img/officers/dordas.jpg",
    },
    {
        name: "KRISTEN ANN JOY F. LUCIANO",
        position: "Business Manager",
        description:
        `INTP`,
        email: "kfluciano@up.edu.ph",
        img_path: "resources/img/officers/luciano.jpg",
    },
    {
        name: "RUSSEL JADE F. TUMANON",
        position: "Assistant Business Manager",
        description:
        `Team Free Will 2.0`,
        email: "rftumanon@up.edu.ph",
        img_path: "resources/img/officers/tumanon.jpg",
        is_dev: true,
    },
    {
        name: "ALYSSA ALEXANDRA S. LEE",
        position: "Auditor",
        description:
        `Demonstrates time management, decision making, and leadership skills`,
        email: "aslee2@up.edu.ph",
        img_path: "resources/img/officers/lee.jpg",
    },
    {
        name: "JOHN GABRIEL CABATU-AN",
        position: "Assistant Auditor",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com",
    },
    {
        name: "JANLEY R. MOLINA",
        position: "P.I.O.",
        description:
        `No description.`,
        email: "jrmolina2@up.edu.ph",
        img_path: "resources/img/officers/molina.jpg",
        is_dev: true,
    },
    {
        name: "CHRISTIAN DALE P. CELESTIAL",
        position: "P.I.O.",
        description:
        `A minimalist.`,
        email: "cpcelestial@up.edu.ph",
        img_path: "resources/img/officers/celestial.jpg",
        is_dev: true,
    },
    {
        name: "ANN BEATRICE L. DESTAJO",
        position: "P.I.O.",
        description:
        `A cosmic glitch`,
        email: "aldestajo@up.edu.ph",
        img_path: "resources/img/officers/destajo.jpg",
        is_dev: true,
    },
    {
        name: "TBA",
        position: "P.I.O.",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com",
    },
    {
        name: "TBA",
        position: "1st Year Batch Representative",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com",
    },
    {
        name: "TBA",
        position: "1st Year Batch Representative",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com",
    },
    {
        name: "TBA",
        position: "1st Year Batch Representative",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com",
    },
    {
        name: "TBA",
        position: "1st Year Batch Representative",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com",
    },
    {
        name: "SOPHIA FEONA O. CANTILLER",
        position: "2nd Year Batch Representative",
        description:
        `Brimming creativity is the fuel that keeps me going. I'm a freelance content writer and graphic artist, both in traditional and digital mediums.
        I live for the arts and literary, and everything in between—with my love for computers squeezed in. `,
        email: "socantiller@up.edu.ph",
        img_path: "resources/img/officers/cantiller.jpg",
    },
    {
        name: "LLOYD WALLYS M. DELA CRUZ",
        position: "2nd Year Batch Representative",
        description:
        `I am an Isko who enjoys calculus and programming. Also, I am a casual gamer, an illustrator and a concept artist.`,
        email: "lmdelacruz4@up.edu.ph",
        img_path: "resources/img/officers/delacruz.jpg",
    },
    {
        name: "JOHN KYLE N. JUNSAY",
        position: "2nd Year Batch Representative",
        description:
        `I'm into photography and cinematography. My favorite music is the sound of the ocean waves clashing into the shore. 

        I always believe that we make our own reality so I try to look through the brighter side of everything.`,
        email: "jnjunsay@up.edu.ph",
        img_path: "resources/img/officers/junsay.jpg",
    },
    {
        name: "RHEYMART G. TUGADO",
        position: "2nd Year Batch Representative",
        description:
        `I don't have description ~~~ mema lang
        hahahahaha`,
        email: "tempemail@email.com",
    },
    {
        name: "JAN KRISTINE A. MOSONG",
        position: "3rd Year Batch Representative",
        description:
        `3rd Year Batch Representative`,
        email: "jamosong@up.edu.ph",
        img_path: "resources/img/officers/mosong.jpg",
    },
    {
        name: "HANNAH BELLA C. ARCEÑO",
        position: "3rd Year Batch Representative",
        description:
        `perpetually in pursuit of learning and experience`,
        email: "hcarceno@up.edu.ph",
        img_path: "resources/img/officers/arceño.jpg",
    },
    {
        name: "NHILBERT JAY E. VALENTE",
        position: "3rd Year Batch Representative",
        description:
        `:)`,
        email: "nevalente@up.edu.ph",
        img_path: "resources/img/officers/valente.jpg",
    },
    {
        name: "ERRU G. TORCULAS",
        position: "3rd Year Batch Representative",
        description:
        `*insert inspiring quote* just a small town boi, living in a lonely world. Just crating illustrations to keep me sane. `,
        email: "egtorculas@up.edu.ph",
        img_path: "resources/img/officers/torculas.jpg",
    },
    {
        name: "RENZEL E. BUATAG",
        position: "4th Year Batch Representative",
        description:
        `ngeee. idunno. `,
        email: "rebuatag@up.edu.ph",
        img_path: "resources/img/officers/buatag.jpg",
    },
    {
        name: "JOECEL EMAN I. CARPIO",
        position: "4th Year Batch Representative",
        description:
        `"Pero ma, kahit gaga at pasaway ako, gusto ko lang naman maging proud ka sa'kin eh. Kaya nga inaayos ko 'yung buhay ko ngayon eh." - Alex on The Confrontation scene

        "Don't give comments about my personal life because I don't give comments about yours!" - Alex to Bobbie on their confrontation about their ex-boyfriend.`,
        email: "jicarpio1@up.edu.ph",
        img_path: "resources/img/officers/carpio.jpg",
    },
];