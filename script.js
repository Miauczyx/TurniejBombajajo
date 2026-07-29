// ============================================
//  GŁÓWNY SKRYPT - NIE EDYTUJ!
// ============================================

// Funkcja pomocnicza do tworzenia elementu z logo
function createTeamElement(teamName) {
    const container = document.createElement('span');
    container.className = 'team-with-logo';
    
    const teamData = teams.find(t => t[0] === teamName);
    const logoFile = teamData ? teamData[2] : 'logo.png';
    
    const logo = document.createElement('img');
    logo.className = 'team-logo';
    logo.src = `loga/${logoFile}`;
    logo.alt = teamName;
    logo.onerror = function() {
        this.src = 'loga/logo.png';
    };
    
    // Kontener na nazwę z przewijaniem
    const nameWrapper = document.createElement('span');
    nameWrapper.className = 'team-name-scroll';
    
    const nameInner = document.createElement('span');
    nameInner.className = 'team-name-inner';
    nameInner.textContent = teamName;
    
    // Jeśli nazwa dłuższa niż 12 znaków - dodaj klasę scroll
    if (teamName.length > 12) {
        nameWrapper.classList.add('scroll');
    }
    
    nameWrapper.appendChild(nameInner);
    
    container.appendChild(logo);
    container.appendChild(nameWrapper);
    return container;
}

function setTeamElement(elementId, teamName) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = '';
    if (teamName && teamName !== 'TBD') {
        const teamElement = createTeamElement(teamName);
        element.appendChild(teamElement);
    } else {
        element.textContent = 'TBD';
    }
}

function setTeamElementDirect(element, teamName) {
    if (!element) return;
    element.innerHTML = '';
    if (teamName && teamName !== 'TBD') {
        const teamElement = createTeamElement(teamName);
        element.appendChild(teamElement);
    } else {
        element.textContent = 'TBD';
    }
}

// ============================================
//  INICJALIZACJA - LISTA DRUŻYN
// ============================================

const sortedTeams = [...teams].sort((a, b) => b[1] - a[1]);

for (let i = 0; i < sortedTeams.length; i++) {
    const element = document.getElementById('tml' + (i + 1));
    if (element) {
        element.innerHTML = '';
        const teamElement = createTeamElement(sortedTeams[i][0]);
        element.appendChild(teamElement);
    }
}

// ============================================
//  INICJALIZACJA - SWISS STAGE
// ============================================

function fillSwissMatches() {
    const swissMaps = {
        's1_round1': { ids: ['s1zz01', 's1zz02', 's1zz03', 's1zz04', 's1zz05', 's1zz06', 's1zz07', 's1zz08'], type: 'team' },
        's1_round2_1_0': { ids: ['s1jz01', 's1jz02', 's1jz03', 's1jz04'], type: 'team' },
        's1_round2_0_1': { ids: ['s1zj01', 's1zj02', 's1zj03', 's1zj04'], type: 'team' },
        's1_round3_2_0': { ids: ['s1dz01', 's1dz02'], type: 'team' },
        's1_round3_1_1': { ids: ['s1jj01', 's1jj02', 's1jj03', 's1jj04'], type: 'team' },
        's1_round3_0_2': { ids: ['s1zd01', 's1zd02'], type: 'team' },
        's1_round4_3_0': { ids: ['s1q101'], type: 'fteam' },
        's1_round4_2_1': { ids: ['s1dj01', 's1dj02', 's1dj03'], type: 'team' },
        's1_round4_1_2': { ids: ['s1jd01', 's1jd02', 's1jd03'], type: 'team' },
        's1_round4_0_3': { ids: ['s1e101'], type: 'fteam' },
        's1_round5_3_1': { ids: ['s1q201'], type: 'ffteam' },
        's1_round5_2_2': { ids: ['s1dd01', 's1dd02', 's1dd03'], type: 'team' },
        's1_round5_1_3': { ids: ['s1e201'], type: 'ffteam' },
        's1_round6_3_2': { ids: ['s1q301'], type: 'ffteam' },
        's1_round6_2_3': { ids: ['s1e301'], type: 'ffteam' },
        's2_round1': { ids: ['s2zz01', 's2zz02', 's2zz03', 's2zz04', 's2zz05', 's2zz06', 's2zz07', 's2zz08'], type: 'team' },
        's2_round2_1_0': { ids: ['s2jz01', 's2jz02', 's2jz03', 's2jz04'], type: 'team' },
        's2_round2_0_1': { ids: ['s2zj01', 's2zj02', 's2zj03', 's2zj04'], type: 'team' },
        's2_round3_2_0': { ids: ['s2dz01', 's2dz02'], type: 'team' },
        's2_round3_1_1': { ids: ['s2jj01', 's2jj02', 's2jj03', 's2jj04'], type: 'team' },
        's2_round3_0_2': { ids: ['s2zd01', 's2zd02'], type: 'team' },
        's2_round4_3_0': { ids: ['s2q101'], type: 'fteam' },
        's2_round4_2_1': { ids: ['s2dj01', 's2dj02', 's2dj03'], type: 'team' },
        's2_round4_1_2': { ids: ['s2jd01', 's2jd02', 's2jd03'], type: 'team' },
        's2_round4_0_3': { ids: ['s2e101'], type: 'fteam' },
        's2_round5_3_1': { ids: ['s2q201'], type: 'ffteam' },
        's2_round5_2_2': { ids: ['s2dd01', 's2dd02', 's2dd03'], type: 'team' },
        's2_round5_1_3': { ids: ['s2e201'], type: 'ffteam' },
        's2_round6_3_2': { ids: ['s2q301'], type: 'ffteam' },
        's2_round6_2_3': { ids: ['s2e301'], type: 'ffteam' }
    };

    for (const [key, config] of Object.entries(swissMaps)) {
        const matches = swissMatches[key] || [];
        const ids = config.ids;
        const type = config.type;
        
        for (let i = 0; i < matches.length && i < ids.length; i++) {
            const match = matches[i];
            const matchId = ids[i];
            const matchEl = document.getElementById(matchId);
            if (!matchEl) continue;
            
            if (type === 'team') {
                const teamEls = matchEl.querySelectorAll('.team');
                if (teamEls.length >= 2) {
                    setTeamElement(teamEls[0].id, match.team1);
                    setTeamElement(teamEls[1].id, match.team2);
                }
                const scores = matchEl.querySelectorAll('.score');
                if (scores.length >= 2) {
                    scores[0].textContent = match.score1 || 0;
                    scores[1].textContent = match.score2 || 0;
                }
            } else if (type === 'fteam') {
                const teamEls = matchEl.querySelectorAll('.fteam');
                if (teamEls.length >= 2) {
                    setTeamElement(teamEls[0].id, match.team1 || 'TBD');
                    setTeamElement(teamEls[1].id, match.team2 || 'TBD');
                }
            } else if (type === 'ffteam') {
                const teamEls = matchEl.querySelectorAll('.ffteam');
                if (teamEls.length >= 3) {
                    setTeamElement(teamEls[0].id, match.team1 || 'TBD');
                    setTeamElement(teamEls[1].id, match.team2 || 'TBD');
                    setTeamElement(teamEls[2].id, match.team3 || 'TBD');
                }
            }
        }
    }
}

// ============================================
//  INICJALIZACJA - GROUP STAGE
// ============================================

function fillGroupStage() {
    const groups = ['A', 'B', 'C', 'D'];
    const groupKeys = ['groupA', 'groupB', 'groupC', 'groupD'];
    
    for (let g = 0; g < groups.length; g++) {
        const groupData = groupMatches[groupKeys[g]];
        if (!groupData) continue;
        
        const gmeczElements = document.querySelectorAll(`.gr:nth-child(${g+1}) .gmecz`);
        for (let t = 0; t < groupData.teams.length && t < gmeczElements.length; t++) {
            const teamEl = gmeczElements[t];
            if (!teamEl) continue;
            
            const team = groupData.teams[t];
            const gteamEl = teamEl.querySelector('.gteam');
            const scoreEls = teamEl.querySelectorAll('.gscore');
            
            if (gteamEl) {
                gteamEl.innerHTML = '';
                if (team.name && team.name !== 'TBD') {
                    const teamElement = createTeamElement(team.name);
                    gteamEl.appendChild(teamElement);
                } else {
                    gteamEl.textContent = 'TBD';
                }
            }
            
            if (scoreEls.length >= 1) {
                scoreEls[0].innerHTML = `<b>${team.record || '0-0'}</b>`;
            }
            if (scoreEls.length >= 2) {
                scoreEls[1].textContent = team.games || '0-0';
            }
            if (scoreEls.length >= 3) {
                scoreEls[2].innerHTML = `<i>${team.points || 0}</i>`;
            }
        }
        
        const grElement = document.querySelectorAll('.gr')[g];
        if (!grElement) continue;
        
        const allMeczElements = grElement.querySelectorAll('.mecz');
        const matchElements = [];
        for (let i = 0; i < allMeczElements.length; i++) {
            if (!allMeczElements[i].classList.contains('gmecz')) {
                matchElements.push(allMeczElements[i]);
            }
        }
        
        for (let m = 0; m < groupData.matches.length && m < matchElements.length; m++) {
            const match = groupData.matches[m];
            const matchEl = matchElements[m];
            if (!matchEl) continue;
            
            const teamEls = matchEl.querySelectorAll('.team');
            if (teamEls.length >= 2) {
                setTeamElementDirect(teamEls[0], match.team1);
                setTeamElementDirect(teamEls[1], match.team2);
            }
            
            const scores = matchEl.querySelectorAll('.score');
            if (scores.length >= 2) {
                scores[0].textContent = match.score1 || 0;
                scores[1].textContent = match.score2 || 0;
            }
        }
    }
}

// ============================================
//  INICJALIZACJA - PLAYOFFS
// ============================================

function fillPlayoffs() {
    const lbr1Matches = playoffMatches.lbr1 || [];
    const lbr1Ids = ['lbr1', 'lbr2', 'lbr3', 'lbr4'];
    for (let i = 0; i < lbr1Matches.length && i < lbr1Ids.length; i++) {
        const match = lbr1Matches[i];
        const matchEl = document.getElementById(lbr1Ids[i]);
        if (!matchEl) continue;
        
        const teamEls = matchEl.querySelectorAll('.pteam');
        if (teamEls.length >= 2) {
            setTeamElementDirect(teamEls[0], match.team1);
            setTeamElementDirect(teamEls[1], match.team2);
        }
        const scores = matchEl.querySelectorAll('.pscore');
        if (scores.length >= 2) {
            scores[0].textContent = match.score1 || 0;
            scores[1].textContent = match.score2 || 0;
        }
    }
    
    const ubqfMatches = playoffMatches.ubqf || [];
    const ubqfElements = document.querySelectorAll('.col:nth-child(3) .pmecz');
    for (let i = 0; i < ubqfMatches.length && i < ubqfElements.length; i++) {
        const match = ubqfMatches[i];
        const matchEl = ubqfElements[i];
        if (!matchEl) continue;
        
        const teamEls = matchEl.querySelectorAll('.pteam');
        if (teamEls.length >= 2) {
            setTeamElementDirect(teamEls[0], match.team1);
            setTeamElementDirect(teamEls[1], match.team2);
        }
        const scores = matchEl.querySelectorAll('.pscore');
        if (scores.length >= 2) {
            scores[0].textContent = match.score1 || 0;
            scores[1].textContent = match.score2 || 0;
        }
    }
    
    const lbqfMatches = playoffMatches.lbqf || [];
    const lbqfIds = ['xd3', 'xd4'];
    for (let i = 0; i < lbqfMatches.length && i < lbqfIds.length; i++) {
        const match = lbqfMatches[i];
        const matchEl = document.getElementById(lbqfIds[i]);
        if (!matchEl) continue;
        
        const teamEls = matchEl.querySelectorAll('.pteam');
        if (teamEls.length >= 2) {
            setTeamElementDirect(teamEls[0], match.team1);
            setTeamElementDirect(teamEls[1], match.team2);
        }
        const scores = matchEl.querySelectorAll('.pscore');
        if (scores.length >= 2) {
            scores[0].textContent = match.score1 || 0;
            scores[1].textContent = match.score2 || 0;
        }
    }
    
    const semifinalsMatches = playoffMatches.semifinals || [];
    const semifinalsIds = ['xd5', 'xd6'];
    for (let i = 0; i < semifinalsMatches.length && i < semifinalsIds.length; i++) {
        const match = semifinalsMatches[i];
        const matchEl = document.getElementById(semifinalsIds[i]);
        if (!matchEl) continue;
        
        const teamEls = matchEl.querySelectorAll('.pteam');
        if (teamEls.length >= 2) {
            setTeamElementDirect(teamEls[0], match.team1);
            setTeamElementDirect(teamEls[1], match.team2);
        }
        const scores = matchEl.querySelectorAll('.pscore');
        if (scores.length >= 2) {
            scores[0].textContent = match.score1 || 0;
            scores[1].textContent = match.score2 || 0;
        }
    }
    
    const grandfinalsMatch = playoffMatches.grandfinals?.[0];
    if (grandfinalsMatch) {
        const matchEl = document.getElementById('xd7');
        if (matchEl) {
            const teamEls = matchEl.querySelectorAll('.pteam');
            if (teamEls.length >= 2) {
                setTeamElementDirect(teamEls[0], grandfinalsMatch.team1);
                setTeamElementDirect(teamEls[1], grandfinalsMatch.team2);
            }
            const scores = matchEl.querySelectorAll('.pscore');
            if (scores.length >= 2) {
                scores[0].textContent = grandfinalsMatch.score1 || 0;
                scores[1].textContent = grandfinalsMatch.score2 || 0;
            }
        }
    }
    
    const thirdplaceMatch = playoffMatches.thirdplace?.[0];
    if (thirdplaceMatch) {
        const matchEl = document.getElementById('xd9');
        if (matchEl) {
            const teamEls = matchEl.querySelectorAll('.pteam');
            if (teamEls.length >= 2) {
                setTeamElementDirect(teamEls[0], thirdplaceMatch.team1);
                setTeamElementDirect(teamEls[1], thirdplaceMatch.team2);
            }
            const scores = matchEl.querySelectorAll('.pscore');
            if (scores.length >= 2) {
                scores[0].textContent = thirdplaceMatch.score1 || 0;
                scores[1].textContent = thirdplaceMatch.score2 || 0;
            }
        }
    }
    
    const lbr2Matches = playoffMatches.lbr2 || [];
    const lbr2Ids = ['xd1', 'xd2'];
    for (let i = 0; i < lbr2Matches.length && i < lbr2Ids.length; i++) {
        const match = lbr2Matches[i];
        const matchEl = document.getElementById(lbr2Ids[i]);
        if (!matchEl) continue;
        
        const teamEls = matchEl.querySelectorAll('.pteam');
        if (teamEls.length >= 2) {
            setTeamElementDirect(teamEls[0], match.team1);
            setTeamElementDirect(teamEls[1], match.team2);
        }
        const scores = matchEl.querySelectorAll('.pscore');
        if (scores.length >= 2) {
            scores[0].textContent = match.score1 || 0;
            scores[1].textContent = match.score2 || 0;
        }
    }
    
    const rteamElements = document.querySelectorAll('.rteam');
    if (rteamElements.length >= 3) {
        if (finalResults.first) {
            rteamElements[0].innerHTML = '';
            if (finalResults.first !== 'TBD') {
                const teamElement = createTeamElement(finalResults.first);
                rteamElements[0].appendChild(teamElement);
            } else {
                rteamElements[0].textContent = 'TBD';
            }
        }
        if (finalResults.second) {
            rteamElements[1].innerHTML = '';
            if (finalResults.second !== 'TBD') {
                const teamElement = createTeamElement(finalResults.second);
                rteamElements[1].appendChild(teamElement);
            } else {
                rteamElements[1].textContent = 'TBD';
            }
        }
        if (finalResults.third) {
            rteamElements[2].innerHTML = '';
            if (finalResults.third !== 'TBD') {
                const teamElement = createTeamElement(finalResults.third);
                rteamElements[2].appendChild(teamElement);
            } else {
                rteamElements[2].textContent = 'TBD';
            }
        }
    }
}

// ============================================
//  URUCHOMIENIE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    fillSwissMatches();
    fillGroupStage();
    fillPlayoffs();
});