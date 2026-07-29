// ============================================
//  PLIK Z DANYMI TURNIEJU - EDYTUJ TYLKO TU!
// ============================================

// Lista wszystkich drużyn: [nazwa, mmr, nazwa_pliku_logo]
const teams = [
    ["bombajajo", 0, "logo.png"],
    ["cioty", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"],
    ["TBD", 0, "logo.png"]
];

// ============================================
//  WYNIKI MECZÓW - SWISS STAGE
// ============================================

const swissMatches = {
    // === SWISS GROUP 1 ===
    s1_round1: [
        { team1: "bombajajo", team2: "cioty", score1: 2, score2: 0 },
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
