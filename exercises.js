//node.js terminal test with javascript//
console.log ("it works");

// Oefening 1.1
// Declareer een constante 'land' met de waarde "Suriname"
// en een variabele 'inwoners' met de waarde 600000.
// TODO
const land = "Suriname";
let  inwoners = 600000;
//console.log (land, inwoners);
//console.log (`land: ${land} | inwoners: ${inwoners}`);





// Oefening 1.2
// Verander de waarde van 'inwoners' naar 620000.
// TODO
inwoners = 620000;





// Oefening 1.3
// Log beide variabelen naar de console in dit formaat:
// "Land: Suriname | Inwoners: 620000"
console.log (`land: ${land} | inwoners: ${inwoners}`);





// Oefening 1.4
// Maak een if-blok aan. Gebruik let om een variabele 'bericht'
// te declareren BINNEN het blok met de waarde "Ik ben lokaal".
// Log 'bericht' binnen het blok.
// Probeer daarna 'bericht' buiten het blok te loggen en leg uit
// wat er gebeurt (schrijf het antwoord als commentaar).
// TODO

if (true) {
    let bericht = "ik ben lokaal";
    console.log(bericht); //als je log buiten {} zet dan werkt het niet

}
//console.log(bericht);


// Oefening 2.1
// Maak voor elk primitief type één variabele aan
// (String, Number, Boolean, null, undefined, BigInt).
// Log het type van elke variabele met typeof.
// TODO

const vString = "yo, whats up";
const vNumber = 100;
const vBoolean = true;
const vvBoolean = false;
const vNull = null;
const vUndefined = undefined;
const vBigInt = 12345678987654567n;

console.log (vString, typeof vString);
console.log (vNumber,typeof vNumber);
console.log (vBoolean,typeof vBoolean);
console.log (vvBoolean, typeof vvBoolean);
console.log (vNull, typeof vNull);
console.log (vUndefined, typeof vUndefined);
console.log (vBigInt, typeof vBigInt);


// Oefening 2.2
// Gegeven:
const invoer = "42";
// Converteer 'invoer' naar een Number en sla het op in 'getal'.
// Log het resultaat én typeof getal.
// TODO

const getal = Number(invoer);
console.log ('resultaat:', getal, '| type:', typeof getal  )

// Oefening 2.3
// Wat is het type van null? Leg in een commentaar uit
// waarom dit verrassend is.
// TODO


// Oefening 3.1
// Schrijf een function declaration 'kwadraat' die een getal
// als parameter ontvangt en het kwadraat teruggeeft.
// Test: console.log(kwadraat(5)) → 25
// TODO

function kwadraat(getal) {
    return getal * getal;
}
console.log(kwadraat(5));

// Oefening 3.2
// Schrijf dezelfde functie als een arrow function (const kwadraat2).
// TODO

const kwadraat2 = (getal) => getal * getal;
console.log(kwadraat2(5));


// Oefening 3.3
// Schrijf een functie 'begroet' die een naam en een taal ontvangt.
// Als taal "nl" is, return "Hoi [naam]!"
// Als taal "en" is, return "Hello [naam]!"
// Voor alles anders, return "Hallo [naam]!"
// Standaardwaarde voor taal is "nl".
// Test: console.log(begroet("Sara", "en")) → "Hello Sara!"
// TODO

function begroet(naam, taal = "nl") {
    if(taal = "nl") {
        return `Hoi ${naam}!`;
    } else if (taal = 'en') {
        return `hello ${naam}!`; 
    } else {
        return `hallo ${naam}!`;
    }
}
console.log(begroet("Sara", "en"));
console.log(begroet("Gideon"));



// Oefening 3.4
// Schrijf een higher-order functie 'verwerk' die een array van
// getallen en een functie ontvangt. Geef een nieuwe array terug
// waarbij de functie op elk getal is toegepast.
// Test: console.log(verwerk([1, 2, 3], (n) => n * 10)) → [10, 20, 30]
// TODO

function verwerk(array, actie) {
    const resultaat = [];
    for (let i = 0; i < array.length; i++){
        resultaat.push(actie(array[i]));
    }
    return resultaat;
}
console.log(verwerk([1,2,3], (n) => n * 10));

// Oefening 4.1
// Gebruik filter() om alleen de studenten te selecteren die
// geslaagd zijn (punt >= 55). Sla op in 'geslaagd'.
// TODO

const studenten = [
    { naam: "Ali",   punt: 72, vak: "Programmeren" },
    { naam: "Bea",   punt: 45, vak: "Wiskunde"     },
    { naam: "Carlos",punt: 88, vak: "Programmeren" },
    { naam: "Diana", punt: 55, vak: "Wiskunde"     },
    { naam: "Erik",  punt: 93, vak: "Programmeren" },
];

const geslaagd = studenten.filter(student => student.punt >= 55);
console.log ("geslaagde studenten:", geslaagd);

// Oefening 4.2
// Gebruik map() om een nieuwe array 'namenGeslaagd' te maken
// met alleen de namen van de geslaagde studenten.
// TODO

const namenGeslaagd = geslaagd.map(student =>student.naam );
console.log ("geslaagde studenten:", namenGeslaagd);

// Oefening 4.3
// Gebruik reduce() om de gemiddelde score van ALLE studenten
// te berekenen. Sla op in 'gemiddelde' en log het resultaat.
// TODO

const totalScore = studenten.reduce((accumulatie, huidigestudent) => {
    return accumulatie + huidigestudent.punt;
}, 0);
const gemiddelde = totalScore / studenten.length;
console.log("gemiddelde score:", gemiddelde);

//destructuring
const totalscore = studenten.reduce((totalesom,{punt}) => {
    return totalesom + punt;
},0);
const gemiddlde = totalscore / studenten.length;
console.log("gemiddelde score:", gemiddlde);
// die {punt} neemt gelijk wat je wilt optellen

// Oefening 4.4
// Controleer met some() of er een student is met een punt > 90.
// Controleer met every() of alle studenten punt >= 40 hebben.
// Log beide resultaten met een beschrijvende tekst.
// TODO

const topstudent = studenten.some(s => s.punt > 90);
const voldoendestudent = studenten.every(s => s.punt >= 40);
console.log ("Is er een studnt met meer dan 90ptn?:", topstudent);
console.log ("Heeft iedereen minimaal 40 ptn?:", voldoendestudent);

// Oefening 4.5
// Gebruik filter() en map() samen om een array te maken van
// de namen van studenten die Programmeren volgen.
// TODO

const programstudents = studenten
.filter(s => s.vak === "Programmeren")
.map(s => s.naam);
console.log("volgt programmeren:", programstudents);



// Oefening 5.1
// Verwijder de spaties, maak de eerste letter van elk woord
// een hoofdletter en log het resultaat.
// Verwacht: "Hallo Wereld, Dit Is Javascript!"
// Tip: gebruik trim(), split(), map(), join()
// TODO
const zin = "  hallo wereld, dit is javascript!  ";
const nieuwezin = zin.trim()
.split(" ")
.map(woord => woord[0].toUpperCase() + woord.slice(1))
.join(" ");
console.log(nieuwezin);

// Oefening 5.2
// Controleer of het e-mailadres "@" bevat en eindig op ".nl".
// Log een passend bericht.
// TODO

const email = "student@school.nl";
const bevatAt = email.includes('@');
const eindigtopNL = email.endsWith('.nl');
if (bevatAt && eindigtopNL){
    console.log("Dit is een geldig e-mailadres.");
} else {
    console.log("Dit e-mailadres mist een @ of eindigt niet op .nl.");
}

// Oefening 5.3
// Maak een array van steden en log de steden één voor één
// met hun positie: "1. Amsterdam", "2. Rotterdam", enz.
// TODO
const csv = "Amsterdam,Rotterdam,Utrecht,Den Haag";
const steden = csv.split(",");
steden.forEach((stad,index) =>{
    console.log(`${index + 1}. ${stad}`);
} );

// Oefening 5.4
// Schrijf een functie 'telVoorkomen' die telt hoe vaak een
// bepaald woord (niet hoofdlettergevoelig) in een tekst voorkomt.
// Test: telVoorkomen("de kat zit op de mat, de kat is blij", "de") → 3
// TODO

function telVoorkomen(tekst, woord) {
    const woordenArray = tekst.toLowerCase().replace(/[,.!]/g,"").split(" ");
    return woordenArray.filter(w => w === woord.toLowerCase()).length;
}
console.log(telVoorkomen("de kat zit op de mat, de kat is blij", "de"));


// Oefening 6.1
// Maak een object 'auto' aan met de eigenschappen:
// merk, model, jaar, isElektrisch (boolean).
// Voeg een methode 'beschrijf' toe die een string teruggeeft:
// "[merk] [model] (bouwjaar [jaar])"

const auto = {
    merk: 'Toyota',
    model: 'Yaris',
    jaar: 2018,
    iselectrisch: false,
    beschrijf: function() {
        return `${this.merk} ${this.model} (bouwjaar ${this.jaar})`;
    }
};
console.log(auto.beschrijf());


// Oefening 6.2
// Maak een klasse 'Rechthoek' met:
//   - constructor(breedte, hoogte)
//   - methode oppervlakte() → breedte * hoogte
//   - methode omtrek() → 2 * (breedte + hoogte)
//   - methode toString() → "Rechthoek [b]x[h]"
class Rechthoek {
    constructor(breedte, hoogte) {
        this.breedte = breedte;
        this.hoogte = hoogte;
    }

    oppervlakte() {
        return this.breedte * this.hoogte;
    }

    omtrek() {
        return 2 * (this.breedte + this.hoogte);
    }

    toString() {
        return `Rechthoek ${this.breedte}x${this.hoogte}`;
    }
}
const r = new Rechthoek(5, 3);
console.log(r.oppervlakte());
console.log(r.omtrek());
console.log(String(r));

// Oefening 6.3
// Breid de klasse uit: maak een klasse 'Vierkant' die
// erft van Rechthoek. De constructor ontvangt alleen 'zijde'.
// Test: new Vierkant(4).oppervlakte() → 16
class Vierkant extends Rechthoek {
    constructor(zijde) {
        super(zijde, zijde); // super() roept de constructor van Rechthoek aan (breedte = zijde, hoogte = zijde)
    }
}
console.log(new Vierkant(4).oppervlakte());




// Oefening 7.1
// Schrijf een functie 'wacht' die een Promise teruggeeft
// die na 'ms' milliseconden resolve met de waarde "Klaar!".
function wacht(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Klaar!");
        }, ms);
    });
}

// Oefening 7.2
// Gebruik async/await om de volgende stappen uit te voeren:
// 1. Log "Start"
// 2. Wacht 1 seconde (gebruik je 'wacht' functie)
// 3. Log "Na 1 seconde"
// 4. Wacht nog 0.5 seconde
// 5. Log "Einde"
// Verpak dit in een async functie 'volgorde' en roep hem aan.
async function volgorde() {
    console.log("Start");
    await wacht(1000);
    console.log("Na 1 seconde");
    await wacht(500);
    console.log("Einde");
}
volgorde(); // Let op: doordat dit async is, loopt de rest van het bestand alvast door!

// Oefening 7.3
// Schrijf een async functie 'haalWeer' die een willekeurig
// weersbericht ophaalt. Simuleer dit met een Promise die na
// 800ms resolve met { stad: "Paramaribo", temp: 32, beschrijving: "Zonnig" }.
// Voeg ook foutafhandeling toe met try/catch.
async function haalWeer() {
    try {
        const data = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ stad: "Paramaribo", temp: 32, beschrijving: "Zonnig" });
            }, 800);
        });
        console.log(`Het weer in ${data.stad}: ${data.temp}°C, ${data.beschrijving}`);
    } catch (fout) {
        console.error("Er ging iets mis met het ophalen van het weer:", fout);
    }
}
haalWeer();


// Oefening 8.1
// Voorspel (zonder te runnen) de uitkomst van elk === en ==.
// Schrijf je antwoord als commentaar, run daarna om te controleren.

console.log(1 == "1");          // Voorspelling: true  (coercie zet string om naar nummer)
console.log(1 === "1");         // Voorspelling: false (verschillende datatypes)
console.log(null == undefined); // Voorspelling: true  (speciale JS regel voor losse gelijkheid)
console.log(null === undefined);// Voorspelling: false (verschillende types: object vs undefined)
console.log(0 == false);        // Voorspelling: true  (falsy waarden worden gelijkgetrokken)
console.log(0 === false);       // Voorspelling: false (number vs boolean)
console.log("" == false);       // Voorspelling: true  (lege string is falsy)

// Oefening 8.2
// Schrijf een functie 'zijnGelijk' die twee waarden vergelijkt
// met STRIKTE gelijkheid en een beschrijvend bericht logt:
// "42 en 42 zijn GELIJK (===)" of "42 en '42' zijn NIET gelijk"
function zijnGelijk(a, b) {
    if (a === b) {
        console.log(`${a} en ${b} zijn GELIJK (===)`);
    } else {
        // We tonen types erbij om het visueel duidelijk te maken waarom ze ongelijk zijn
        console.log(`${a} (${typeof a}) en ${b} (${typeof b}) zijn NIET gelijk`);
    }
}
zijnGelijk(42, 42);
zijnGelijk(42, "42");


// Oefening 9.1
// Welke van deze waarden zijn truthy? Schrijf T of F als commentaar.
// Controleer daarna met Boolean().

// 0         -> F
// 1         -> T
// ""        -> F (lege string is altijd falsy)
// "0"       -> T (een gevulde string is ALTIJD truthy, zelfs met een nul erin!)
// null      -> F
// []        -> T (lege arrays zijn objecten in JS, dus truthy!)
// {}        -> T (lege objecten zijn ook truthy)
// undefined -> F
// "false"   -> T (is een gevulde string!)
// NaN       -> F
// -1        -> T (elk getal behalve 0 is truthy)

const waarden = [0, 1, "", "0", null, [], {}, undefined, "false", NaN, -1];
waarden.forEach(w => console.log(`Waarde: ${w} ->`, Boolean(w)));

// Oefening 9.2
// Schrijf een functie 'isIngevuld' die een waarde ontvangt
// en true teruggeeft als de waarde truthy is, anders false.
// Test het met lege string, null, 0 en een echte waarde.
function isIngevuld(waarde) {
    return !!waarde; // De dubbele '!!' zet elke waarde direct om naar zijn boolean variant
}
console.log("Gevuld met 'Hi':", isIngevuld("Hi"));
console.log("Gevuld met lege string:", isIngevuld(""));
console.log("Gevuld met null:", isIngevuld(null));

// Oefening 9.3
// Gebruik de || operator om een functie 'geefNaam' te schrijven
// die een optionele parameter 'naam' ontvangt en
// "Gast" gebruikt als standaardwaarde als naam falsy is.
// Doe hetzelfde met de ?? operator in een tweede versie.
// Wat is het verschil als naam = 0 is?
function geefNaamOR(naam) {
    return naam || "Gast";
}

function geefNaamNullish(naam) {
    return naam ?? "Gast";
}

console.log("OR met 0:", geefNaamOR(0));          // Geeft "Gast" omdat 0 falsy is
console.log("Nullish met 0:", geefNaamNullish(0)); // Geeft 0! Omdat ?? alleen reageert op null en undefined.

// VERSCHIL: De || operator kijkt of iets "falsy" is (dus reageert ook op 0 en lege strings). 
// De ?? (nullish coalescing) operator kijkt strikt of iets null of undefined is. 
// Als iemand score 0 heeft, wil je dat behouden, dus gebruik je ??.


// Oefening 10.1
// Gegeven:
const punt = [52.3676, 4.9041]; // [latitude, longitude] Amsterdam
// Destructureer naar variabelen 'lat' en 'lon'.
// Log: "Coördinaten: lat=52.3676, lon=4.9041"
const [lat, lon] = punt; // Volgorde is leidend bij arrays
console.log(`Coördinaten: lat=${lat}, lon=${lon}`);

// Oefening 10.2
// Gegeven:
const product = { naam: "Laptop", prijs: 999, merk: "TechBrand", voorraad: 5 };
// Destructureer naam en prijs. Hernoem prijs naar kostprijs.
// Gebruik een standaardwaarde van "Onbekend" voor garantie.
// Log alle drie variabelen.
const { naam, prijs: kostprijs, garantie = "Onbekend" } = product;
console.log(`Naam: ${naam}, Kostprijs: ${kostprijs}, Garantie: ${garantie}`);

// Oefening 10.3
// Gegeven twee arrays:
const eersteHelft = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun"];
const tweedeHelft = ["Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
// Gebruik spread om één array 'maanden' te maken.
const maanden = [...eersteHelft, ...tweedeHelft];
console.log("Alle maanden:", maanden);

// Oefening 10.4
// Gegeven:
const basisInstelling = { thema: "licht", taal: "nl", lettergrootte: 14 };
// Maak een nieuwe object 'gebruikersInstelling' dat de basis kopieert
// maar thema overschrijft naar "donker" en fontSize toevoegt met waarde 16.
// Het origineel mag NIET worden gewijzigd.
const gebruikersInstelling = {
    ...basisInstelling,
    thema: "donker", // Overschrijft de oude 'thema'
    fontSize: 16     // Voegt een nieuwe property toe
};
console.log("Nieuw:", gebruikersInstelling);
console.log("Origineel intact?:", basisInstelling.thema === "licht");

// Oefening 10.5 — UITDAGING
// Schrijf een functie 'eersteEnRest' die een array ontvangt
// en een object teruggeeft: { eerste: ..., rest: [...] }
// Test: eersteEnRest([10, 20, 30, 40]) → { eerste: 10, rest: [20, 30, 40] }
function eersteEnRest(arr) {
    const [eerste, ...rest] = arr; // De rest-operator (...) verzamelt alle overige elementen
    return { eerste, rest };       // Korte schrijfwijze voor { eerste: eerste, rest: rest }
}
console.log(eersteEnRest([10, 20, 30, 40]));




// Bonus 1
// Gegeven een lijst van producten:
const winkel = [
    { naam: "Laptop",    prijs: 1200, categorie: "elektronica" },
    { naam: "Boek",      prijs: 25,   categorie: "educatie"    },
    { naam: "Telefoon",  prijs: 800,  categorie: "elektronica" },
    { naam: "Pen",       prijs: 3,    categorie: "educatie"    },
    { naam: "Monitor",   prijs: 450,  categorie: "elektronica" },
    { naam: "Rugzak",    prijs: 60,   categorie: "accessoires" },
];

// a) Filter alleen de elektronica-producten.
const elektronica = winkel.filter(p => p.categorie === "elektronica");
console.log("a) Alleen elektronica:", elektronica);

// b) Bereken de totale prijs van de elektronica.
const totalePrijsElektronica = elektronica.reduce((sum, p) => sum + p.prijs, 0);
console.log("b) Totale prijs elektronica:", totalePrijsElektronica);

// c) Geef de namen van de producten onder €100 (alle categorieën), gesorteerd alfabetisch.
const goedkopeProductenNamen = winkel
    .filter(p => p.prijs < 100)
    .map(p => p.naam)
    .sort(); // .sort() sorteert strings standaard alfabetisch
console.log("c) Goedkoop en gesorteerd:", goedkopeProductenNamen);

// d) Maak een object waarbij de sleutels de categorienamen zijn en de waarden het aantal producten per categorie.
// Verwacht: { elektronica: 3, educatie: 2, accessoires: 1 }
const tellingPerCategorie = winkel.reduce((acc, p) => {
    // Als de categorie nog niet bestaat in ons object, zet hem op 0
    if (!acc[p.categorie]) {
        acc[p.categorie] = 0;
    }
    // Hoog de teller op met 1
    acc[p.categorie]++;
    return acc;
}, {}); // We beginnen met een leeg object {}
console.log("d) Aantal per categorie:", tellingPerCategorie);


// Bonus 2
// Schrijf een async functie 'laadGebruikersprofiel' die:
// 1. Simuleert dat het profiel wordt geladen (wacht 500ms)
// 2. Teruggeeft: { naam: "Sam", rol: "student", vakken: ["Programmeren", "Wiskunde"] }
// 3. Log elke stap (laden... → geladen!)
// Destructureer naam en vakken uit het resultaat og ze.
async function laadGebruikersprofiel() {
    console.log("Profiel laden...");
    
    const profiel = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ naam: "Sam", rol: "student", vakken: ["Programmeren", "Wiskunde"] });
        }, 500);
    });
    
    console.log("Profiel geladen!");
    
    // Destructuring van het resultaat
    const { naam, vakken } = profiel;
    console.log(`Gebruiker: ${naam} volgt de vakken: ${vakken.join(", ")}`);
}
laadGebruikersprofiel();