# Mijn Portfolio

Een persoonlijke portfolio-website om mijn projecten, vaardigheden en ervaring te presenteren.

## Technologieën

- **HTML5** — Structuur en semantiek
- **CSS3** — Styling met CSS Variables, Grid en Flexbox
- **JavaScript** — Interactiviteit (mobiel menu, contactformulier, categoriefilters, detailpagina)

## Projectstructuur

```
portfolio/
├── index.html          # Hoofdpagina
├── project.html        # Detailpagina van één project (?id=1)
├── css/
│   └── style.css       # Alle stijlen
├── js/
│   ├── projects.js     # Projectgegevens (bron voor de pagina's)
│   ├── project.js      # Vult de detailpagina
│   └── main.js         # JavaScript functionaliteit
├── images/             # Afbeeldingen
└── README.md
```

## Kenmerken

- Responsive ontwerp (mobiel, tablet, desktop)
- Donker thema met blauwe accentkleur
- Vloeiende scroll-navigatie
- Interactief contactformulier
- Hover-animaties op projectkaarten
- Categoriefilters om projecten te filteren
- Eigen detailpagina per project, met vorige/volgende-navigatie

## Gebruik

1. Clone de repository:
   ```bash
   git clone https://github.com/jouw-gebruiker/portfolio.git
   ```
2. Open `index.html` in een browser

## Aanpassen

- **Kleuren:** Wijzig de variabelen in `css/style.css` onder `:root`
- **Projecten:** Voeg ze toe aan de `projects`-array in `js/projects.js`. De `id` bepaalt de link (`project.html?id=1`) en de `category` moet overeenkomen met een `data-filter` van een filterknop in `index.html`
- **Afbeeldingen:** Plaat bestanden in de `images/` map

## Specificatie projectpagina

### Eisen per project

| Eis | Keuze | Status |
| --- | --- | --- |
| Naam, korte omschrijving en je rol | Ja, zichtbaar op de detailpagina | Volledig |
| Technieken / tech-stack als chips | Ja, zowel op de kaart als op de detailpagina | Volledig |
| Categoriefilters in de sticky navbar | Ja: Alles, Websites, Tools, Schoolopdrachten | Volledig |
| Eigen detailpagina per project | Ja, via `project.html?id=<id>` | Volledig |
| Vorige/volgende-navigatie tussen projecten | Ja, onderaan de detailpagina | Volledig |
| Links naar live versie en repository | Alleen zichtbaar als ze zijn ingevuld | Volledig |
| Donkere uitstraling, verfijnd | Randen, schaduwen, hover en focusring | Volledig |
| Covers of projectafbeeldingen | Bewust weggelaten | Bewust niet |
| Eigen bestanden per project in mappen | Eén sjabloonpagina met data uit JS | Bewust anders |
| Inhoud: echte projecten | Nog niet ingevuld | Openstaand |
| Detailweergave als vast paneel op mobiel | Nog niet gebouwd | Openstaand |

### Uitvoeringsstappen

| # | Stap | Bestand | Waarom | Status |
| --- | --- | --- | --- | --- |
| 1 | Projectgegevens verzamelen | n.v.t. | Zonder echte inhoud blijven de pagina's placeholders | Openstaand |
| 2 | Categorieën vastleggen | `js/projects.js` | Filterknoppen en kaarten moeten dezelfde waarden gebruiken | Uitgevoerd, categorieën voorlopig gekozen |
| 3 | `data-category` op elke kaart | `index.html` | De filterlogica moet weten welke kaart bij welke knop hoort | Uitgevoerd |
| 4 | Filterknoppen in de markup | `index.html` | De knoppen moeten bestaan voordat de JS ze aanroept | Uitgevoerd |
| 5 | Sticky van `nav` naar `header` verplaatsen | `index.html`, `css/style.css` | De filterrij blijft zo zichtbaar tijdens het scrollen | Uitgevoerd |
| 6 | Styling van de filterrij | `css/style.css` | Chips, actieve stand en horizontale scroll op smalle schermen | Uitgevoerd |
| 7 | Filterlogica | `js/main.js` | Daadwerkelijk tonen en verbergen van kaarten | Uitgevoerd |
| 8 | Melding bij geen resultaten | `index.html`, `js/main.js` | Anders lijkt het of de site leeg of kapot is | Uitgevoerd |
| 9 | Projectdata als centrale bron | `js/projects.js` | Eén plek om projecten toe te voegen, voor beide pagina's | Uitgevoerd |
| 10 | Kaarten laten linken naar de detailpagina | `index.html` | Doorverwijzen van overzicht naar detail | Uitgevoerd |
| 11 | Detailpagina aanmaken | `project.html`, `js/project.js` | Eigen pagina per project met alle details | Uitgevoerd |
| 12 | Vorige/volgende-navigatie | `js/project.js` | Bladeren tussen projecten zonder terug naar het overzicht | Uitgevoerd |
| 13 | Styling van de detailpagina | `css/style.css` | Consistent met de donkere stijl van de rest | Uitgevoerd |
| 14 | `hidden` altijd laten winnen | `css/style.css` | `display` op knoppen overschreef anders het `hidden`-kenmerk | Uitgevoerd |
| 15 | Formulier afschermen als het ontbreekt | `js/main.js` | `project.html` heeft geen formulier en zou anders een error geven | Uitgevoerd |
| 16 | Detailpaneel als vast paneel op mobiel | `css/style.css`, `js/project.js` | Minder scrollen op een telefoon | Openstaand |
| 17 | Documentatie bijwerken | `README.md` | Zodat de werkwijze en status vastgelegd zijn | Uitgevoerd |

### Openstaand

- Echte projecten invullen in plaats van "Project 1/2/3"
- De categorieën bevestigen of aanpassen
- Twee overgebleven regels `.project-toggle` in `css/style.css` opruimen (dode code)
- Controleren in een echte browser; tot nu toe alleen statisch nagekeken
