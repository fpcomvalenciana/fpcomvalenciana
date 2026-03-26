import { t, tCicle } from './language.js';
import { centrosInfo } from '../data/centres.js';

const safe = (txt) => txt ?? '';

let map, markersLayer;

export function initMap() {
  if (map) return;
  if (typeof L === 'undefined') { console.warn('Leaflet no cargado'); return; }
  map = L.map('map').setView([38.385, -0.490], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  markersLayer = L.layerGroup().addTo(map);
}

export function renderMap(data) {
  if (typeof L === 'undefined' || !map) return;
  markersLayer.clearLayers();

  const byCentro = {};
  data.forEach(d => {
    if (!byCentro[d.centro]) byCentro[d.centro] = { ...centrosInfo[d.centro], ciclos: [] };
    byCentro[d.centro].ciclos.push({ nivel: d.nivel, ciclo: d.ciclo, familia: d.familia });
  });

  const bounds = [];
  Object.entries(byCentro).forEach(([nombre, info]) => {
    if (!info.lat) return;
    bounds.push([info.lat, info.lng]);

    const color = info.privado ? '#6366f1' : '#f97316';
    const icon  = L.divIcon({
      html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,
      className: '', iconSize: [14, 14], iconAnchor: [7, 7]
    });

    const ciclosHtml = info.ciclos.map(c =>
      `<div class="popup-item"
            data-familia="${c.familia}" data-ciclo="${c.ciclo}" data-nivel="${c.nivel}">
        <span class="popup-nivel ${c.nivel.toLowerCase()}">${
          c.nivel === 'FPB' ? t('fpbLabel') : c.nivel === 'GM' ? t('gmLabel') : t('gsLabel')
        }</span>
        ${tCicle(c.ciclo)}
        <span style="float:right;color:#aaa">→</span>
      </div>`
    ).join('');

    const popup = L.popup({ maxWidth: 280 }).setContent(
      `<div class="popup-title">${safe(nombre)}</div>
       <div style="font-size:.7rem;color:#999;margin-bottom:.4rem">
         ${safe(info.municipio)} ${info.privado ? '· Privado' : ''}
       </div>
       ${ciclosHtml}`
    );

    const marker = L.marker([info.lat, info.lng], { icon }).bindPopup(popup).addTo(markersLayer);
    marker.on('popupopen', () => {
      document.querySelectorAll('.popup-item').forEach(el => {
        el.addEventListener('click', () => {
          marker.closePopup();
          // Usar eventos para evitar imports circulares
          document.dispatchEvent(new CustomEvent('fp:goto-ciclo', {
            detail: { familia: el.dataset.familia, ciclo: el.dataset.ciclo, nivel: el.dataset.nivel }
          }));
        });
      });
    });
  });

  if (bounds.length === 1)      map.setView(bounds[0], 14, { animate: true });
  else if (bounds.length > 1)   map.fitBounds(bounds, { padding: [30, 30], maxZoom: 14, animate: true });
  else                          map.setView([38.385, -0.490], 11, { animate: true });
}
