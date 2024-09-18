document.addEventListener('DOMContentLoaded', function() {
    // Funzione per aggiornare i risultati
    function aggiornaRisultati(nuoviRisultati) {
        document.getElementById('results').innerHTML = nuoviRisultati;
    }

    // Funzione per aggiornare la classifica
    function aggiornaClassifica(classifica) {
        document.getElementById('ranking').innerHTML = classifica;
    }

    // Esempio di dati dinamici per i risultati e la classifica
    const risultati = 'I risultati aggiornati sono: 10-5';
    const classifica = `
        <ul>
            <li>1° Posto: Squadra A - 50 punti</li>
            <li>2° Posto: Squadra B - 40 punti</li>
            <li>3° Posto: Squadra C - 30 punti</li>
        </ul>
    `;

    // Chiamata delle funzioni per aggiornare i dati
    aggiornaRisultati(risultati);
    aggiornaClassifica(classifica);
});
