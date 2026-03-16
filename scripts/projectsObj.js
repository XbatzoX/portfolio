const projects = [
    {
        "title" : "Join",
        "duration" : "7 Wochen",
        "list" : [{
            "description" : "Kanban Board",
            "content" : "Ein Projektmanagement-Tool im Kanban-Stil, inspiriert von Trello."
        },
        {
            "description" : "Organisation meiner Aufgaben im Projekt",
            "content" : "Um meinen Code sauber und wartbar zu halten, habe ich das Projekt in wiederverwendbare Module und Komponenten aufgeteilt. Dabei habe ich besonders auf eine klare Struktur, verständliche Benennung von Dateien, Variablen und Klassen sowie eine gute Dokumentation geachtet."
        },
        {
            "description" : "Praxis der Teamarbeit",
            "content" : "In unserem dreiköpfigen Projektteam war die Arbeit klar strukturiert. Mein Schwerpunkt lag auf dem Design sowie der Datenverwaltung für die Registrierung und die Verwaltung der Kontakte."
        }],
        "tecIcons" : [
            'assets/icons/html_projects.svg',
            'assets/icons/css_projects.svg',
            'assets/icons/javascript_projects.svg'
        ],
        "imagePath" : "assets/img/join_screen.svg",
        "githubPath" : "https://github.com/XbatzoX/JOIN-2"
    },
    {
        "title" : "El pollo loco",
        "duration" : "5 Wochen",
        "list" : [{
            "description" : "Jump and run game",
            "content" : "Ein Jump-, Run- und Throw-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Flaschen zu finden, um gegen die verrückte Henne zu kämpfen."
        },
        {
            "description" : "Organisation meiner Tätigkeiten im Projekt",
            "content" : "Ich habe mein Spiel objektorientiert aufgebaut, indem ich Klassen, Instanzen und Vererbung verwendet habe, um den Code übersichtlich und modular zu halten. Dadurch lassen sich einzelne Komponenten leichter warten, erweitern und wiederverwenden."
        },
        {
            "description" : "Skillerweiterung durch das Projekt",
            "content" : "Durch das Projekt konnte ich meine Kenntnisse in der Arbeit mit dem Canvas-Element und der Spielelogik vertiefen. Außerdem habe ich gelernt, wie man durch objektorientierte Programmierung in JavaScript komplexere Anwendungen strukturierter und wartbarer entwickelt."
        }],
        "tecIcons" : [
            'assets/icons/html_projects.svg',
            'assets/icons/css_projects.svg',
            'assets/icons/javascript_projects.svg'
        ],
        "imagePath" : "assets/img/el_pollo_loco_screen.svg",
        "githubPath" : "https://github.com/XbatzoX/el-pollo-loco"
    },
    {
        "title" : "Ongoing project",
        "list" : {
            "description" : "Über das Projekt",
            "content" : "Das Projekt wird ein HMI mittels Panel-PC und Schnittstelle zu einer Siemens S7-1500er SPS, um industrielle Anlagen zu visualisieren und bedienen. Den Vorteil gegenüber eines Siemens HMI sehe ich im Design und in der Unabhängigkeit der Datenverwaltung."
        },
        "tecIcons" : [
            'assets/icons/angular_projects.svg',
            'assets/icons/typescript_projects.svg',
            'assets/icons/html_projects.svg',
            'assets/icons/css_projects.svg',
            'assets/icons/vue_js_projects.svg',
            'assets/icons/react_projects.svg'
        ],
        "imagePath" : "assets/img/ongoing_img.svg"
    }
];

const navData = [
    {
        "de" : [
            'Warum ich',
            'Fähigkeiten',
            'Projekte',
            'Kontakt'
        ]
    },
    {
        "en" : [
            'Why me',
            'Skills',
            'Projects',
            'Contact'
        ]
    }
];

const whyMeData = {
    "de" : {
        "caption" : "Warum ich",
        "city_1" : "Ich bin&nbsp;",
        "city_2" : "in Lübeck ansässig..",
        "description" : `Ich bin Benjamin, angehender Frontend-Entwickler in Weiterbildung.
                        Ich setze UI-Designs in sauberen, strukturierten Code um und lege Wert auf klare Logik, gute Struktur und wartbare Lösungen.
                        HTML, CSS und JavaScript sind dabei mein Fundament - pragmatisch, zuverlässig und Schritt für Schritt so umgesetzt, dass es im Projektalltag funktioniert.
                        Ich arbeite lösungsorientiert, lerne schnell und bleibe dran, bis ein Feature wirklich sauber sitzt. Ich bewerbe mich als Junior Frontend-Entwickler
                        und suche ein Team, in dem ich an echten Anwendungen mitbauen, Verantwortung übernehmen und mich fachlich weiterentwickeln kann.`
        },
        "en" : {
            "caption" : "Why me",
            "city_1" : "I am&nbsp;",
            "city_2" : "located in Lübeck..",
            "description" : `I am Benjamin, an aspiring frontend developer currently in training.
                             I turn UI designs into clean, well-structured code and focus on clear logic, solid structure, and maintainable solutions.
                             HTML, CSS, and JavaScript are my foundation — applied pragmatically, reliably, and step by step so that everything works in real project environments.
                             I work in a solution-oriented way, learn quickly, and stay focused until a feature is implemented cleanly and properly.
                             I am applying for a position as a Junior Frontend Developer and am looking for a team where I can contribute to real applications, take on responsibility, and continue to grow professionally.`
        }
};

const mySkillsData = {
    "de" : {
        "caption" : "Meine Fähigkeiten",
        "actualLearning" : "Ich lerne gerade aktuell",
        "actualLearningText" : `Eine kurze Darstellung meiner Skills und welche Skills gerade angeeignet werden.
                                Dabei liegt der Fokus auf Frontend-Technologien, saubere Umsetzung und die Bereitschaft,
                                neue Tools und Standards schnell zu lernen und im Projekt sauber einzusetzen.`
    },
    "en" : {
        "caption" : "My Skills",
        "actualLearning" : "I am currently learning",
        "actualLearningText" : `An overview of my current skills and the ones I am currently developing.
                                The focus is on frontend technologies, clean implementation, and the willingness
                                to quickly learn new tools and standards and apply them effectively in projects.`
    }
}