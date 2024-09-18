document.addEventListener('DOMContentLoaded', function() {
    const squadreGruppoA = ['Squadra 1', 'Squadra 2', 'Squadra 3', 'Squadra 4'];
    const squadreGruppoB = ['Squadra 5', 'Squadra 6', 'Squadra 7', 'Squadra 8'];
    const squadreGruppoC = ['Squadra 9', 'Squadra 10', 'Squadra 11', 'Squadra 12'];
    const squadreGruppoD = ['Squadra 13', 'Squadra 14', 'Squadra 15', 'Squadra 16'];

    function generaPartite(squadre) {
        const partite = [];
        for (let i = 0; i < squadre.length; i++) {
            for (let j = i + 1; j < squadre.length; j++) {
                partite.push(`${squadre[i]} vs ${squadre[j]}`);
            }
        }
        return partite;
    }

    function aggiornaRisultati(gruppo, partite) {
        const contenuto = partite.map(partita => `<li>${partita}: <span class="risultato">0-0</span></li>`).join('');
        document.querySelector(`#${gruppo} .results-content`).innerHTML = `<ul>${contenuto}</ul>`;
    }

    function calcolaClassifica(partite) {
        const punteggi = squadreGruppoA.reduce((acc, squadra) => {
            acc[squadra] = { punti: 0, gol: 0, subiti: 0 };
            return acc;
        }, {});

        partite.forEach(partita => {
            const [squadra1, squadra2] = partita.match(/(.*) vs (.*)/).slice(1);
            const risultato = partita.match(/(\d+)-(\d+)/);
            if (risultato) {
                const gol1 = parseInt(risultato[1]);
                const gol2 = parseInt(risultato[2]);

                punteggi[squadra1].gol += gol1;
                punteggi[squadra1].subiti += gol2;
                punteggi[squadra2].gol += gol2;
                punteggi[squadra2].subiti += gol1;

                if (gol1 > gol2) {
                    punteggi[squadra1].punti += 3;
                } else if (gol1 < gol2) {
                    punteggi[squadra2].punti += 3;
                } else {
                    punteggi[squadra1].punti += 1;
                    punteggi[squadra2].punti += 1;
                }
            }
        });

        const classifica = Object.entries(punteggi)
            .sort(([, a], [, b]) => b.punti - a.punti || b.gol - a.gol)
            .map(([squadra, dati]) => `<li>${squadra} - ${dati.punti} punti</li>`)
            .join('');

        return `<ul>${classifica}</ul>`;
    }

    function aggiornaTutto(gruppo, squadre, risultati) {
        const partite = generaPartite(squadre);
        aggiornaRisultati(`${gruppo}-results`, partite);

        const partiteConRisultati = partite.map(partita => {
            const risultato = risultati.find(r => r.startsWith(partita));
            return risultato ? risultato : `${partita}: 0-0`;
        });

        const classifica = calcolaClassifica(risultati);
        document.querySelector(`#${gruppo}-ranking .ranking-content`).innerHTML = classifica;

        aggiornaRisultati(`${gruppo}-results`, partiteConRisultati);
    }

    // Esempi di dati per i risultati e la classifica
    const risultatiGruppoA = [
        'Squadra 1 vs Squadra 2: 1-0',
        'Squadra 3 vs Squadra 4: 2-2',
        'Squadra 1 vs Squadra 3: 0-1',
        'Squadra 2 vs Squadra 4: 3-1',
        'Squadra 1 vs Squadra 4: 2-1',
        'Squadra 2 vs Squadra 3: 1-1'
    ];
    const risultatiGruppoB = [
        'Squadra 5 vs Squadra 6: 2-2',
        'Squadra 7 vs Squadra 8: 1-0',
        'Squadra 5 vs Squadra 7: 1-3',
        'Squadra 6 vs Squadra 8: 0-1',
        'Squadra 5 vs Squadra 8: 2-1',
        'Squadra 6 vs Squadra 7: 0-2'
    ];
    const risultatiGruppoC = [
        'Squadra 9 vs Squadra 10: 2-2',
        'Squadra 11 vs Squadra 12: 1-0',
        'Squadra 9 vs Squadra 11: 1-3',
        'Squadra 10 vs Squadra 12: 0-1',
        'Squadra 9 vs Squadra 12: 2-1',
        'Squadra 10 vs Squadra 11: 0-2'
    ];
    const risultatiGruppoD = [     
        'Squadra 13 vs Squadra 14: 2-2',
        'Squadra 15 vs Squadra 16: 1-0',
        'Squadra 13 vs Squadra 15: 1-3',
        'Squadra 14 vs Squadra 16: 0-1',
        'Squadra 13 vs Squadra 16: 2-1',
        'Squadra 14 vs Squadra 15: 0-2'
    ];

    aggiornaTutto('group-a', squadreGruppoA, risultatiGruppoA);
    aggiornaTutto('group-b', squadreGruppoB, risultatiGruppoB);
    aggiornaTutto('group-c', squadreGruppoC, risultatiGruppoC);
    aggiornaTutto('group-d', squadreGruppoD, risultatiGruppoD);
});
