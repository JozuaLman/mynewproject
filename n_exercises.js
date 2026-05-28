// Oefening 1.1

// Log de huidige Node.js versie, het platform en de PID

// (process ID) van dit script.

// TODO

console.log(`Node Versie: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`PID: ${process.pid}`);


// Oefening 1.2

// Controleer of 'window' bestaat in Node.js (gebruik typeof).

// Log een beschrijvend bericht.

// TODO

if (typeof window ==='undefined') {
    console.log("status check: window bestaat niet in Node.js omdat er geen DOM is");
} else {
    console.log("status check: 'window' bestaat");
}


// Oefening 1.3

// Log de huidige datum en tijd op deze manier:

// "Vandaag is: [datum] om [tijd]"

// Gebruik toLocaleDateString en toLocaleTimeString met locale "nl-NL".

// TODO

const nu = new Date();
const datumStr = nu.toLocaleDateString("nl-NL");
const tijdSR = nu.toLocaleTimeString("nl-NL");
console.log(`vandaag is: ${datumStr} om ${tijdStr}`);


// Oefening 1.4

// Gebruik setTimeout om na 1 seconde "1 seconde later!" te loggen.

// Log ook direct daarna (vóór de timeout): "Dit verschijnt eerst."

// TODO





// ============================================================

//  BLOK 2 — Modules (import / export)

// ============================================================



console.log("\n===== BLOK 2: Modules =====");



// Oefening 2.1

// Maak een nieuw bestand: exercises/helpers/rekenen.js

// Exporteer daarin 3 functies:

//   - optellen(a, b)

//   - aftrekken(a, b)

//   - procent(deel, geheel) → geeft het percentage terug (b.v. 25% → 25)

// TODO: maak het bestand aan



// Oefening 2.2

// Importeer de 3 functies uit helpers/rekenen.js

// en test ze hieronder.

// TODO

import { optellen, aftrekken, procent } from './helpers/rekenen.js';
console.log(`Oefening 2.2 - Optellen (5 + 3): ${optellen(5, 3)}`);
console.log(`Oefening 2.2 - Aftrekken (10 - 4): ${aftrekken(10, 4)}`);
console.log(`Oefening 2.2 - Procent (25 van 200): ${procent(25, 200)}%`);

// Oefening 2.3

// Maak een nieuw bestand: exercises/helpers/tekst.js

// Exporteer:

//   - hoofdletterEerste(woord)   → eerste letter hoofdletter

//   - telWoorden(tekst)          → aantal woorden in de tekst

//   - omdraaien(tekst)           → tekst achterstevoren

// Importeer en test ze hieronder.

// TODO





// ============================================================

//  BLOK 3 — fs module (bestanden)

// ============================================================



console.log("\n===== BLOK 3: Bestandssysteem =====");



import fs from 'node:fs/promises';

import path from 'node:path';

import { fileURLToPath } from 'node:url';



const __dirname = path.dirname(fileURLToPath(import.meta.url));



// Oefening 3.1

// Schrijf een async functie 'schrijfNotitieTxt' die:

//   1. Een bestand 'notitie.txt' aanmaakt in de exercises/ map

//   2. De tekst "Mijn eerste notitie!" erin schrijft

//   3. Logt: "Notitie aangemaakt!"

// Roep de functie aan.

// TODO



// Oefening 3.2

// Schrijf een async functie 'leesNotitie' die:

//   1. 'notitie.txt' inleest

//   2. De inhoud logt

//   3. De fout netjes opvangt als het bestand niet bestaat

// Roep de functie aan NADAT 3.1 klaar is.

// TODO



// Oefening 3.3

// Schrijf een async functie 'slaStudentenOp' die:

//   1. Een array van 3 studenten objecten aanmaakt

//      (elk object: naam, leeftijd, gemiddeld)

//   2. De array als JSON opslaat in exercises/studenten.json

//   3. Het bestand teruglaadt en de studenten logt

// TODO



// Oefening 3.4 — UITDAGING

// Schrijf een async functie 'telRegels' die:

//   - Een bestandspad als argument ontvangt

//   - Het bestand leest

//   - Het AANTAL regels logt

//   - Test met dit bestand zelf: telRegels(import.meta.url)

// Hint: gebruik split('\n')

// TODO





// ============================================================

//  BLOK 4 — path module

// ============================================================



console.log("\n===== BLOK 4: Paden =====");



// Oefening 4.1

// Log de volgende paden met path.join():

//   a) Het pad naar de 'exercises' map (gebruik __dirname)

//   b) Het pad naar een (niet bestaand) bestand: exercises/data/rapport.csv

//   c) Het pad naar de root van het project (één map omhoog)

// TODO



// Oefening 4.2

// Gegeven dit pad: '/projecten/app/src/routes/user.routes.js'

// Log via path methodes:

//   - De mapnaam (dirname)

//   - De bestandsnaam met extensie (basename)

//   - De bestandsnaam zonder extensie

//   - De extensie

// TODO



// Oefening 4.3

// Schrijf een functie 'bouwPad' die drie strings ontvangt

// (map1, map2, bestandsnaam) en het gecombineerde pad teruggeeft

// met path.join(). Test het met 3 eigen waarden.

// TODO





// ============================================================

//  BLOK 5 — process object

// ============================================================



console.log("\n===== BLOK 5: process =====");



// Oefening 5.1

// Log het geheugengebruik (heapUsed) in MB.

// Formule: bytes / 1024 / 1024, afgerond op 2 decimalen.

// TODO



// Oefening 5.2

// Lees de command-line argumenten uit (process.argv).

// Als er geen extra argumenten zijn (argv.length <= 2), log:

//   "Geen argumenten meegegeven."

// Als er wel argumenten zijn, log elk argument op een nieuwe regel:

//   "Argument 1: ..."

//   "Argument 2: ..."

// Test: node exercises/node-oefeningen.js hallo wereld

// TODO



// Oefening 5.3

// Log de waarden van de volgende process.env variabelen.

// Als een variabele niet bestaat, gebruik dan een standaardwaarde:

//   - PORT      (standaard: 3000)

//   - NODE_ENV  (standaard: "development")

//   - APP_NAAM  (standaard: "Onbekende App")

// TODO





// ============================================================

//  BLOK 6 — Async patronen

// ============================================================



console.log("\n===== BLOK 6: Async =====");



// Oefening 6.1

// Schrijf een functie 'vertraging' die een Promise teruggeeft

// die na 'ms' milliseconden resolvet met de tekst "Klaar na Xms".

// Test: const bericht = await vertraging(500);

//       console.log(bericht); → "Klaar na 500ms"

// TODO



// Oefening 6.2

// Schrijf een async functie 'stappen' die dit doet:

//   1. Log "Stap 1: begin"

//   2. Wacht 300ms

//   3. Log "Stap 2: na 300ms"

//   4. Wacht 200ms

//   5. Log "Stap 3: klaar"

// Gebruik je 'vertraging' functie.

// TODO



// Oefening 6.3

// Schrijf een async functie 'laadAlles' die 3 taken

// TEGELIJK uitvoert (niet na elkaar) met Promise.all:

//   - taak1: wacht 400ms, geeft "Gebruikers geladen" terug

//   - taak2: wacht 200ms, geeft "Producten geladen" terug

//   - taak3: wacht 300ms, geeft "Bestellingen geladen" terug

// Log alle 3 resultaten na afloop. Gebruik console.time om

// te bewijzen dat het sneller is dan sequentieel.

// TODO



// Oefening 6.4 — UITDAGING

// Schrijf een async functie 'leesBestandVeilig' die:

//   - Een bestandspad ontvangt

//   - Het bestand probeert te lezen

//   - Bij succes: de inhoud teruggeeft

//   - Bij ENOENT (niet gevonden): null teruggeeft

//   - Bij andere fouten: de fout opnieuw gooit

// Test met een bestaand én niet-bestaand pad.

// TODO





// ============================================================

//  BLOK 7 — .env & process.env

// ============================================================



console.log("\n===== BLOK 7: Environment variabelen =====");



import 'dotenv/config';



// Oefening 7.1

// Lees PORT, APP_NAAM en API_KEY uit process.env.

// Als API_KEY niet bestaat, log een waarschuwing.

// TODO



// Oefening 7.2

// Maak een config object aan met alle waarden uit .env,

// inclusief standaardwaarden voor ontbrekende variabelen.

// Log het config object.

// TODO



// Oefening 7.3

// Schrijf een functie 'valideerEnv' die een array van

// vereiste sleutelnamen ontvangt.

// Als een sleutel ontbreekt in process.env, gooi een Error:

//   "Ontbrekende env variabele: [sleutel]"

// Test met ['PORT', 'APP_NAAM'] (aanwezig)

// en met ['PORT', 'GEHEIM_WACHTWOORD'] (GEHEIM_WACHTWOORD ontbreekt).

// TODO





// ============================================================

//  BONUS — Alles samen

// ============================================================



console.log("\n===== BONUS: Mini logboek app =====");



// Schrijf een async functie 'logboek' die:

//   1. Een map 'exercises/logboek/' aanmaakt (als die niet bestaat)

//   2. Een bestandsnaam genereert op basis van de datum:

//      bv. "2025-05-10.log"

//   3. De volgende informatie naar dat bestand schrijft:

//      - Tijdstip

//      - Node.js versie

//      - APP_NAAM uit .env

//      - Een bericht dat je als parameter meegeeft

//   4. Logt: "Logboek bijgewerkt: [bestandsnaam]"

//   5. Het bestand inleest en de inhoud toont

//

// Test: logboek("Applicatie gestart door student!")

// TODO 

