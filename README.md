# FP Comunitat Valenciana

Web d'orientació educativa sobre l'oferta de **Formació Professional** a la Comunitat Valenciana per al curs 2025-26.

🌐 **[fpcomvalenciana.es](https://fpcomvalenciana.es)**

---

## Contingut

- **296 centres** educatius (públics i privats/concertats)
- **1.868 cicles** formatius
- **26 famílies** professionals
- **27 comarques** de les tres províncies (Alacant, Castelló, València)

Cobreix els tres nivells: **FP Bàsica · Grau Mitjà · Grau Superior**

Font de dades: [Oferta FP 2025-26 — GVA](https://ceice.gva.es/documents/388109149/392295572/Oferta2526.pdf) (23/05/2025)

---

## Característiques

- Filtratge per província, comarca, municipi, nivell, família professional i cicle
- Dos modes de visualització: per famílies i per centres
- Mapa interactiu (OpenStreetMap / Leaflet)
- Progressions FPB→GM→GS per família professional
- Bilingüe: castellà / valencià
- Web estàtica, sense servidor ni base de dades

---

## Estructura del projecte

```
fp-alacanti/
├── index.html
├── css/
│   ├── main.css
│   ├── header.css
│   ├── filters.css
│   ├── cards.css
│   ├── info-panel.css
│   ├── map.css
│   ├── tabs.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── data/
│   │   ├── centres.js       ← 296 centres amb coords GPS i contacte
│   │   ├── cycles.js        ← 1.868 cicles + cicloInfo + familiaDescripcion
│   │   ├── comarques.js     ← 27 comarques i municipis (es/val)
│   │   ├── transitions.js   ← progressions FPB→GM→GS
│   │   └── translations.js  ← traduccions UI + cicles al valencià
│   └── ui/
│       ├── filters.js       ← lògica de filtratge en cascada
│       ├── render-cards.js  ← targetes per famílies i per centres
│       ├── render-info.js   ← panell d'informació del cicle
│       ├── render-map.js    ← mapa Leaflet
│       └── language.js      ← canvi d'idioma i traduccions UI
└── img/
```

---

## Tecnologia

- HTML + CSS + JavaScript vanilla (ES Modules)
- [Leaflet](https://leafletjs.com/) per al mapa
- Sense frameworks, sense build step, sense dependències npm

---

## Responsable

**Emili Peiró**
✉️ fpcomvalenciana@gmail.com

---

*Informació orientativa, sense caràcter oficial. Consulta sempre les fonts oficials de la GVA.*
