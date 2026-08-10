// ============================================
//  PLIK Z DANYMI TURNIEJU - EDYTUJ TYLKO TU!
// ============================================

// Lista wszystkich drużyn: [nazwa, mmr, nazwa_pliku_logo]
const teams = [
    1["Czekotubki", 0, "aero.png"],
    2["złotówka team", 0, "normalni.png"],
    3["zlew", 0, "kaucja.png"],
    4["2136", 0, "logo.png"],
    5["Team Psycho", 0, "logo.png"],
    6["Open Net Missers", 0, "klops.png"],
    7["Peakers ", 0, "logo.png"],
    8["112", 0, "polish masters.jpg"],
    9["Prorocy", 0, "szkola.png"],
    10["BRACIA KLOPS", 0, "logo.png"],
    11["bajo", 0, "zwyrolek.jpg"],
    12["Aero Esport", 0, "logo.png"],
    13["Konduktorzy", 0, "logo.png"],
    14["Totalny Przypadek ", 0, "overdrive.png"],
    15["Genziary", 0, "logo.png"],
    16["inazuma esports", 0, "logo.png"],
    17["Wina Tuska", 0, "logo.png"],
    18["wyjadacze", 0, "logo.gif"],
    19["Normalni Ludzie", 0, "zl.png"],
    20["drużyna bossów", 0, "fcb.webp"],
    21["team overdrive", 0, "logo.png"],
    22["fc Barcelona", 0, "piwo.png"],
    23["BDJQP", 0, "sigiemka.png"],
    24["ogboss", 0, "logo.png"],
    25["kokosy", 0, "leczo.png"],
    26["Serowi Bracia", 0, "logo.png"],
    27["porzeczki", 0, "logo.png"],
    28["Rzurek", 0, "logo.png"],
    29["Poszukiwacze Złomu", 0, "logo.png"],
    30["MAJA MA GIGA CYRKONIE", 0, "logo.png"],
    31["jajo", 0, "logo.png"],
    32["Cwele", 0, "nalewka.png"]
];

// ============================================
//  WYNIKI MECZÓW - SWISS STAGE
// ============================================

const swissMatches = {
    // === SWISS GROUP 1 ===
    s1_round1: [
        { team1: "Czekotubki", team2: "Cwele", score1: 0, score2: 0 },
        { team1: "Genziary", team2: "wyjadacze", score1: 0, score2: 0 },
        { team1: "bajo", team2: "fc Barcelona", score1: 0, score2: 0 },
        { team1: "Peakers", team2: "Serowi Bracia", score1: 0, score2: 0 },
        { team1: "Team Psycho", team2: "Rzurek", score1: 0, score2: 0 },
        { team1: "Prorocy", team2: "ogboss", score1: 0, score2: 0 },
        { team1: "Konduktorzy", team2: "drużyna bossów", score1: 0, score2: 0 },
        { team1: "zlew", team2: "MAJA MA GIGA CYRKONIE", score1: 0, score2: 0 }
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
        { team1: "złotówka team", team2: "jajo", score1: 0, score2: 0 },
        { team1: "inazuma esports", team2: "Wina Tuska", score1: 0, score2: 0 },
        { team1: "Aero Esport", team2: "team overdrive", score1: 0, score2: 0 },
        { team1: "112", team2: "kokosy", score1: 0, score2: 0 },
        { team1: "Open Net Missers", team2: "porzeczki", score1: 0, score2: 0 },
        { team1: "BRACIA KLOPS", team2: "BDJQP", score1: 0, score2: 0 },
        { team1: "Totalny Przypadek", team2: "Normalni Ludzie", score1: 0, score2: 0 },
        { team1: "2136", team2: "Poszukiwacze Złomu", score1: 0, score2: 0 }
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
