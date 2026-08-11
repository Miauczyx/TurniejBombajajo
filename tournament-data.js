// ============================================
//  PLIK Z DANYMI TURNIEJU - EDYTUJ TYLKO TU!
// ============================================

// Lista wszystkich drużyn: [nazwa, mmr, nazwa_pliku_logo]
const teams = [
    ["Czekotubki", 0, "czekotubki.png"],
    ["złotówka team", 0, "zl.png"],
    ["zlew", 0, "zlew.png"],
    ["2136", 0, "logo.png"],
    ["Team Psycho", 0, "psycho.png"],
    ["Open Net Missers", 0, "open.png"],
    ["Peakers ", 0, "peakers.png"],
    ["112", 0, "112.png"],
    ["Prorocy", 0, "prorocy.jpg"],
    ["BRACIA KLOPS", 0, "klops.png"],
    ["bajo", 0, "bajo.gif"],
    ["jajo", 0, "jajo.gif"],
    ["Aero Esport", 0, "aero.png"],
    ["Konduktorzy", 0, "konduktorzy.png"],
    ["TBD", 0, "logo.png"],
    ["Genziary", 0, "genziary.png"],
    ["inazuma esports", 0, "inazuma.jpg"],
    ["Wina Tuska", 0, "logo.png"],
    ["wyjadacze", 0, "logo.gif"],
    ["Normalni Ludzie", 0, "normalni.png"],
    ["drużyna bossów", 0, "sigiemka.png"],
    ["team overdrive", 0, "overdrive.png"],
    ["fc Barcelona", 0, "fcb.webp"],
    ["BDJQP", 0, "bdjqp.png"],
    ["ogboss", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["Serowi Bracia", 0, "logo.png"],
    ["porzeczki", 0, "logo.png"],
    ["Rzurek", 0, "rzurek.png"],
    ["Poszukiwacze Złomu", 0, "zlom.png"],
    ["MAJA MA GIGA CYRKONIE", 0, "maja.jpg"],
    ["Cwele", 0, "cwele.jpg"]
];

// ============================================
//  WYNIKI MECZÓW - SWISS STAGE
// ============================================

const swissMatches = {
    // === SWISS GROUP 1 ===
    s1_round1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round2_1_0: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round2_0_1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round3_2_0: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round3_1_1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round3_0_2: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round4_3_0: [
        { team1: "TBD", team2: "TBD" }
    ],
    s1_round4_2_1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round4_1_2: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round4_0_3: [
        { team1: "TBD", team2: "TBD" }
    ],
    s1_round5_3_1: [
        { team1: "TBD", team2: "TBD", team3: "TBD" },
        { team1: "TBD", team2: "TBD", team3: "TBD" }
    ],
    s1_round5_2_2: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s1_round5_1_3: [
        { team1: "TBD", team2: "TBD", team3: "TBD" },
        { team1: "TBD", team2: "TBD", team3: "TBD" }
    ],
    s1_round6_3_2: [
        { team1: "TBD", team2: "TBD", team3: "TBD" },
        { team1: "TBD", team2: "TBD", team3: "TBD" }
    ],
    s1_round6_2_3: [
        { team1: "TBD", team2: "TBD", team3: "TBD" },
        { team1: "TBD", team2: "TBD", team3: "TBD" }
    ],

    // === SWISS GROUP 2 ===
    s2_round1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round2_1_0: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round2_0_1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round3_2_0: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round3_1_1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round3_0_2: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round4_3_0: [
        { team1: "TBD", team2: "TBD" }
    ],
    s2_round4_2_1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round4_1_2: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round4_0_3: [
        { team1: "TBD", team2: "TBD" }
    ],
    s2_round5_3_1: [
        { team1: "TBD", team2: "TBD", team3: "TBD" },
        { team1: "TBD", team2: "TBD", team3: "TBD" }
    ],
    s2_round5_2_2: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    s2_round5_1_3: [
        { team1: "TBD", team2: "TBD", team3: "TBD" },
        { team1: "TBD", team2: "TBD", team3: "TBD" }
    ],
    s2_round6_3_2: [
        { team1: "TBD", team2: "TBD", team3: "TBD" },
        { team1: "TBD", team2: "TBD", team3: "TBD" }
    ],
    s2_round6_2_3: [
        { team1: "TBD", team2: "TBD", team3: "TBD" },
        { team1: "TBD", team2: "TBD", team3: "TBD" }
    ]
};

// ============================================
//  WYNIKI MECZÓW - GROUP STAGE
// ============================================

const groupMatches = {
    groupA: {
        teams: [
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 }
        ],
        matches: [
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
        ]
    },
    groupB: {
        teams: [
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 }
        ],
        matches: [
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
        ]
    },
    groupC: {
        teams: [
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 }
        ],
        matches: [
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
        ]
    },
    groupD: {
        teams: [
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 },
            { name: "TBD", record: "0-0", games: "0-0", points: 0 }
        ],
        matches: [
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
            { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
        ]
    }
};

// ============================================
//  WYNIKI MECZÓW - PLAYOFFS
// ============================================

const playoffMatches = {
    lbr1: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    lbr2: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    ubqf: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    lbqf: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    semifinals: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 },
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    grandfinals: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ],
    thirdplace: [
        { team1: "TBD", team2: "TBD", score1: 0, score2: 0 }
    ]
};

// Wyniki końcowe (miejsce 1-3)
const finalResults = {
    first: "TBD",
    second: "TBD",
    third: "TBD"
};
