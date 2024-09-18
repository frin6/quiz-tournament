document.addEventListener('DOMContentLoaded', function() {
    // Funzione per aggiornare i risultati
    function aggiornaRisultati(gruppo, risultati) {
        document.querySelector(`#${gruppo} .results-content`).innerHTML = risultati;
    }

    // Funzione per aggiornare la classifica
    function aggiornaClassifica(gruppo, classifica) {
        document.querySelector(`#${gruppo} .ranking-content`).innerHTML = classifica;
    }

    // Esempi di dati dinamici per i risultati e la classifica
    const risultatiGruppoA = '<ul><li>Squadra 1: 10 punti</li><li>Squadra 2: 8 punti</li><li>Squadra 3: 6 punti</li><li>Squadra 4: 4 punti</li></ul>';
    const risultatiGruppoB = '<ul><li>Squadra 5: 12 punti</li><li>Squadra 6: 9 punti</li><li>Squadra 7: 7 punti</li><li>Squadra 8: 5 punti</li></ul>';
    const risultatiGruppoC = '<ul><li>Squadra 9: 11 punti</li><li>Squadra 10: 8 punti</li><li>Squadra 11: 7 punti</li><li>Squadra 12: 6 punti</li></ul>';
    const risultatiGruppoD = '<ul><li>Squadra 13: 15 punti</li><li>Squadra 14: 10 punti</li><li>Squadra 15: 7 punti</li><li>Squadra 16: 5 punti</li></ul>';

    const classificaGruppoA = '<ul><li>Squadra 1 - 25 punti</li><li>Squadra 2 - 20 punti</li></ul>';
    const classificaGruppoB = '<ul><li>Squadra 5 - 30 punti</li><li>Squadra 6 - 22 punti</li></ul>';
    const classificaGruppoC = '<ul><li>Squadra 9 - 28 punti</li><li>Squadra 10 - 24 punti</li></ul>';
    const classificaGruppoD = '<ul><li>Squadra 13 - 35 punti</li><li>Squadra 14 - 28 punti</li></ul>';

    // Chiamata delle funzioni per aggiornare i dati
    aggiornaRisultati('group-a-results', risultatiGruppoA);
    aggiornaRisultati('group-b-results', risultatiGruppoB);
    aggiornaRisultati('group-c-results', risultatiGruppoC);
    aggiornaRisultati('group-d-results', risultatiGruppoD);

    aggiornaClassifica('group-a-ranking', classificaGruppoA);
    aggiornaClassifica('group-b-ranking', classificaGruppoB);
    aggiornaClassifica('group-c-ranking', classificaGruppoC);
    aggiornaClassifica('group-d-ranking', classificaGruppoD);
});
