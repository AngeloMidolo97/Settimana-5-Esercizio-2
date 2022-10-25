function scrivi() {
    let budget = document.getElementById('valore').value;
    let spese = 0;
    let limite = document.getElementById('limite').value;
    while(budget > 0) {
        let numeroRandom = Math.floor(Math.random() * 100);
        if (numeroRandom <= budget) {
            spese += 1;
            budget -= numeroRandom;
            document.getElementById('spese').innerHTML += `<li>Ammontare della spesa: €${numeroRandom}</li>`;
            document.getElementById('spese').innerHTML += `<li>Nuovo budget aggiornato: €${budget}</li>`;
            
        }

        if (budget < limite) {
            break;
        }
        
    }   
    document.getElementById('avviso').innerHTML = `Hai acquistato ${spese} oggetti`
    document.getElementById('budgetFinale').innerHTML = `Hai raggiunto il limite di €${limite} stai spendendo troppo`
}

