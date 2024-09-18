document.addEventListener('DOMContentLoaded', function() {
    const squadreGruppoA = ['Squadra 1', 'Squadra 2', 'Squadra 3', 'Squadra 4'];

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

    // Esempio di dati dinamici per i risultati e la classifica
    const partiteGruppoA = generaPartite(squadreGruppoA);
    aggiornaRisultati('group-a-results', partiteGruppoA);

    // Esempio di risultati (da aggiornare in base ai dati reali)
    const risultatiGruppoA = [
        'Squadra 1 vs Squadra 2: 1-0',
        'Squadra 3 vs Squadra 4: 2-2',
        'Squadra 1 vs Squadra 3: 0-1',
        'Squadra 2 vs Squadra 4: 3-1',
        'Squadra 1 vs Squadra 4: 2-1',
        'Squadra 2 vs Squadra 3: 1-1'
    ];
    // Aggiungi i risultati alle partite
    const partiteConRisultati = partiteGruppoA.map(partita => {
        const risultato = risultatiGruppoA.find(r => r.startsWith(partita));
        return risultato ? risultato : `${partita}: 0-0`;
    });

    // Calcola e aggiorna la classifica
    const classificaGruppoA = calcolaClassifica(risultatiGruppoA);
    document.querySelector('#group-a-ranking .ranking-content').innerHTML = classificaGruppoA;

    // Mostra i risultati aggiornati
    aggiornaRisultati('group-a-results', partiteConRisultati);
});
