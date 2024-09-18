document.addEventListener('DOMContentLoaded', function() {
    // Funzione per aggiornare i risultati
    function aggiornaRisultati(gruppo, risultati) {
        document.getElementById(gruppo).innerHTML = risultati;
    }

    // Funzione per aggiornare la classifica
    function aggiornaClassifica(gruppo, classifica) {
        document.getElementById(gruppo).innerHTML = classifica;
    }

    // Esempi di dati dinamici per i risultati e la classifica
    const risultatiGruppoA = '<ul><li>Squadra 1: 10 punti</li><li>Squadra 2: 8 punti</li><li>Squadra 3: 6 punti</li><li>Squadra 4: 4 punti</li></ul>';
    const risultatiGruppoB = '<ul><li>Squadra 5: 12 punti</li><li>Squadra 6: 9 punti</li><li>Squadra 7: 7 punti</li><li>Squadra 8: 5 punti</li></ul>';
    // Aggiungi dati simili per Gruppo C e Gruppo D

    const classificaGruppoA = '<ul><li>Squadra 1 - 25 punti</li><li>Squadra 2 - 20 punti</li></ul>';
    const classificaGruppoB = '<ul><li>Squadra 5 - 30 punti</li><li>Squadra 6 - 22 punti</li></ul>';
    // Aggiungi dati simili per Gruppo C e Gruppo D

    // Chiamata delle funzioni per aggiornare i dati
    aggiornaRisultati('group-a-results', risultatiGruppoA);
    aggiornaRisultati('group-b-results', risultatiGruppoB);
    // Aggiungi chiamate simili per Gruppo C e Gruppo D

    aggiornaClassifica('group-a-ranking', classificaGruppoA);
    aggiornaClassifica('group-b-ranking', classificaGruppoB);
    // Aggiungi chiamate simili per Gruppo C e Gruppo D
});
