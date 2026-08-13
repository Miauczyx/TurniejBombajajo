// ============================================
//  PLIK Z DANYMI TURNIEJU - EDYTUJ TYLKO TU!
// ============================================

// Lista wszystkich drużyn: [nazwa, mmr, nazwa_pliku_logo]
const teams = [
    ["Czekotubki", 2609, "czekotubki.png"],
    ["złotówka team", 2604, "zl.png"],
    ["Black Horse", 2600, "black.png"],
    ["Niezbyt szybcy i spokojni", 2595, "spokojni.png"],
    ["Zlew", 2584, "zlew.png"],
    ["Team Psycho", 2572, "psycho.png"],
    ["Open Net Missers", 2563, "open.png"],
    ["dom starców bydgoszcz", 2528, "dom.png"],
    ["Peakers", 2500, "peakers.png"],
    ["Gta6", 2498, "gta.png"],
    ["112", 2498, "112.png"],
    ["Prorocy", 2482, "prorocy.jpg"],
    ["BRACIA KLOPS", 2472, "klops.png"],
    ["bajo", 2458, "bajo.gif"],
    ["Szybcy i Biedni", 2421, "biedni.png"],
    ["Aero Esport", 2419, "aero.png"],
    ["Konduktorzy", 2396, "konduktorzy.png"],
    ["fc nikt nas nie chce", 2365, "fcn.png"],
    ["wyjadacze", 2358, "wyjadacze.png"],
    ["Normalni Ludzie", 2343, "normalni.png"],
    ["Genziary", 2337, "genziary.png"],
    ["inazuma esports", 2325, "inazuma.jpg"],
    ["Banda Bandaży", 2213, "banda.png"],
    ["team overdrive", 2200, "overdrive.png"],
    ["fc Barcelona", 2065, "fcb.webp"],
    ["Obrotni", 1951, "obrotni.gif"],
    ["ogboss", 1925, "logo.png"],
    ["porzeczki", 1857, "porzeczki.png"],
    ["Rzurek", 1772, "rzurek.png"],
    ["Poszukiwacze Złomu", 1768, "zlom.png"],
    ["Jajo", 1413, "jajo.gif"],
    ["Cwordy", 1408, "cwele.jpg"]
];

const swissMatches = {
    s1_round1: [
        { team1: "Czekotubki", team2: "Cwordy", score1: 2, score2: 0 },
        { team1: "Szybcy i Biedni", team2: "fc nikt nas nie chce", score1: 2, score2: 0 },
        { team1: "112", team2: "inazuma esports", score1: 2, score2: 1 },
        { team1: "Open Net Missers", team2: "Obrotni", score1: 2, score2: 1 },
        { team1: "Zlew", team2: "porzeczki", score1: 2, score2: 0 },
        { team1: "Peakers", team2: "team overdrive", score1: 0, score2: 2 },
        { team1: "BRACIA KLOPS", team2: "Normalni Ludzie", score1: 2, score2: 1 },
        { team1: "Black Horse", team2: "Poszukiwacze Złomu", score1: 2, score2: 0 }
    ],

    s1_round2_1_0: [
        { team1: "Czekotubki", team2: "Szybcy i Biedni", score1: 0, score2: 2 },
        { team1: "112", team2: "Open Net Missers", score1: 0, score2: 2 },
        { team1: "Zlew", team2: "team overdrive", score1: 2, score2: 0 },
        { team1: "BRACIA KLOPS", team2: "Black Horse", score1: 0, score2: 2 }
    ],

    s1_round2_0_1: [
        { team1: "Cwordy", team2: "fc nikt nas nie chce", score1: 0, score2: 2 },
        { team1: "inazuma esports", team2: "Obrotni", score1: 1, score2: 2 },
        { team1: "porzeczki", team2: "Peakers", score1: 0, score2: 2 },
        { team1: "Normalni Ludzie", team2: "Poszukiwacze Złomu", score1: 2, score2: 0 }
    ],

    s1_round3_2_0: [
        { team1: "Szybcy i Biedni", team2: "Open Net Missers", score1: 0, score2: 2 },
        { team1: "Zlew", team2: "Black Horse", score1: 2, score2: 0 }
    ],

    s1_round3_1_1: [
        { team1: "Czekotubki", team2: "112", score1: 0, score2: 2 },
        { team1: "team overdrive", team2: "BRACIA KLOPS", score1: 2, score2: 0 },
        { team1: "fc nikt nas nie chce", team2: "Obrotni", score1: 2, score2: 0 },
        { team1: "Peakers", team2: "Normalni Ludzie", score1: 0, score2: 2 }
    ],

    s1_round3_0_2: [
        { team1: "Cwordy", team2: "inazuma esports", score1: 0, score2: 2 },
        { team1: "porzeczki", team2: "Poszukiwacze Złomu", score1: 2, score2: 0 }
    ],

    s1_round4_3_0: [
        { team1: "Open Net Missers", team2: "Zlew" }
    ],

    s1_round4_2_1: [
        { team1: "Szybcy i Biedni", team2: "Black Horse", score1: 0, score2: 2 },
        { team1: "112", team2: "team overdrive", score1: 2, score2: 0 },
        { team1: "fc nikt nas nie chce", team2: "Normalni Ludzie", score1: 0, score2: 0 }
    ],

    s1_round4_1_2: [
        { team1: "Czekotubki", team2: "BRACIA KLOPS", score1: 0, score2: 0 },
        { team1: "Obrotni", team2: "Peakers", score1: 2, score2: 0 },
        { team1: "inazuma esports", team2: "porzeczki", score1: 2, score2: 0 }
    ],

    s1_round4_0_3: [
        { team1: "Cwordy", team2: "Poszukiwacze Złomu" }
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
        { team1: "TBD", team2: "Peakers", team3: "porzeczki" },
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

    s2_round1: [
        { team1: "złotówka team", team2: "Jajo", score1: 2, score2: 0 },
        { team1: "Aero Esport", team2: "Konduktorzy", score1: 2, score2: 0 },
        { team1: "Prorocy", team2: "Genziary", score1: 2, score2: 0 },
        { team1: "dom starców bydgoszcz", team2: "fc Barcelona", score1: 2, score2: 0 },
        { team1: "Team Psycho", team2: "ogboss", score1: 2, score2: 0 },
        { team1: "Gta6", team2: "Banda Bandaży", score1: 1, score2: 2 },
        { team1: "bajo", team2: "wyjadacze", score1: 2, score2: 0 },
        { team1: "Niezbyt szybcy i spokojni", team2: "Rzurek", score1: 2, score2: 0 }
    ],

    s2_round2_1_0: [
        { team1: "złotówka team", team2: "Aero Esport", score1: 2, score2: 1 },
        { team1: "Prorocy", team2: "dom starców bydgoszcz", score1: 0, score2: 2 },
        { team1: "Team Psycho", team2: "Banda Bandaży", score1: 2, score2: 0 },
        { team1: "bajo", team2: "Niezbyt szybcy i spokojni", score1: 1, score2: 2 }
    ],

    s2_round2_0_1: [
        { team1: "Jajo", team2: "Konduktorzy", score1: 1, score2: 2 },
        { team1: "Genziary", team2: "fc Barcelona", score1: 2, score2: 0 },
        { team1: "ogboss", team2: "Gta6", score1: 0, score2: 2 },
        { team1: "wyjadacze", team2: "Rzurek", score1: 2, score2: 0 }
    ],

    s2_round3_2_0: [
        { team1: "złotówka team", team2: "dom starców bydgoszcz", score1: 2, score2: 1 },
        { team1: "Team Psycho", team2: "Niezbyt szybcy i spokojni", score1: 2, score2: 1 }
    ],

    s2_round3_1_1: [
        { team1: "Aero Esport", team2: "Prorocy", score1: 1, score2: 2 },
        { team1: "Banda Bandaży", team2: "bajo", score1: 0, score2: 2 },
        { team1: "Konduktorzy", team2: "Genziary", score1: 1, score2: 2 },
        { team1: "Gta6", team2: "wyjadacze", score1: 2, score2: 1 }
    ],

    s2_round3_0_2: [
        { team1: "Jajo", team2: "fc Barcelona", score1: 2, score2: 0 },
        { team1: "ogboss", team2: "Rzurek", score1: 0, score2: 2 }
    ],

    s2_round4_3_0: [
        { team1: "złotówka team", team2: "Team Psycho" }
    ],

    s2_round4_2_1: [
        { team1: "dom starców bydgoszcz", team2: "Niezbyt szybcy i spokojni", score1: 0, score2: 0 },
        { team1: "Prorocy", team2: "bajo", score1: 0, score2: 0 },
        { team1: "Genziary", team2: "Gta6", score1: 0, score2: 2 }
    ],

    s2_round4_1_2: [
        { team1: "Aero Esport", team2: "Banda Bandaży", score1: 0, score2: 0 },
        { team1: "Konduktorzy", team2: "wyjadacze", score1: 0, score2: 2 },
        { team1: "Jajo", team2: "Rzurek", score1: 0, score2: 2 }
    ],

    s2_round4_0_3: [
        { team1: "fc Barcelona", team2: "ogboss" }
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
        { team1: "TBD", team2: "Konduktorzy", team3: "TBD" },
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
