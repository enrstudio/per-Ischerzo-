let diametro; // Diametro della stella
let coloreStella; // Colore della stella

// Funzione di avvio di p5.js
function setup() {

    let overlay = createCanvas(windowWidth, windowHeight); // Crea un canvas che copre l'intera finestra
    overlay.position(0, 0); // Posiziona il canvas sopra tutto il contenuto HTML
    noCursor(); // Nasconde il cursore predefinito del mouse
    diametro = 0; // Inizializza il diametro della stella
    bordoStella = color(256, 0, 0, 80); // Imposta il colore della stella (rosso)
    coloreStella = color(0, 0, 0, 0); // Imposta il colore della stella (rosso)
}

// Funzione di disegno di p5.js, chiamata ad ogni frame
function draw() {
    clear(); // Pulisce il canvas

    // Posiziona il centro della stella sulle coordinate del mouse
    let x = mouseX;
    let y = mouseY;

    // Numero di punte della stella
    let numPunte = 32;

    // Angolo di rotazione per ogni punta
    let angolo = TWO_PI / numPunte;

    // Imposta il colore della stella
    stroke(bordoStella);
    fill(coloreStella);

    // Inizia a disegnare la stella
    beginShape();
    for (let i = 0; i < numPunte; i++) {
        // Calcola le coordinate del vertice attuale
        let raggio = diametro / 2;
        let vx = x + raggio * cos(i * angolo);
        let vy = y + raggio * sin(i * angolo);

        // Aggiungi il vertice alla stella
        vertex(vx, vy);
        
        // Calcola le coordinate del vertice successivo (la punta della stella)
        let vx2 = x + (raggio / 2) * cos((i + 0.5) * angolo);
        let vy2 = y + (raggio / 2) * sin((i + 0.5) * angolo);
        
        // Aggiungi il vertice alla stella
        vertex(vx2, vy2);
    }
    endShape(CLOSE); // Chiude la forma della stella

    // Aggiorna il diametro della stella per l'effetto di feedback
    diametro += 10;
    if (diametro > 600) {
        diametro = 0; // Ripristina il diametro quando raggiunge un certo limite
    }
}