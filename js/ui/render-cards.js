import { getFiltered }    from './filters.js';
import { updateInfoPanel } from './render-info.js';
import { initMap, renderMap } from './render-map.js';
import { t, tFam, tCicle, currentLang } from './language.js';
import { centrosInfo }    from '../data/centres.js';
import { familiaEmoji, datosEnriquecidos } from '../data/cycles.js';
import { actualizarFiltrosCascada, fNivel, fFamilia, fCiclo, fComarca, fMunicipio } from './filters.js';
import { comarcaMunicipis } from '../data/comarques.js';

const safe = (txt) => txt ?? '';

export let currentTab = 'familias';

// ── Punto de entrada central ──────────────────────────────────
export function updateView() {
  const comarcaVal = fComarca()?.value ?? '';
  actualizarTitulo(comarcaVal);
  actualizarEstadoVacio(comarcaVal);
  if (!comarcaVal) return; // web en blanco sin comarca

  const data = getFiltered();
  renderStats(data, comarcaVal);
  updateInfoPanel(data);
  renderCards(data);
}

// ── Título dinámico ───────────────────────────────────────────
function actualizarTitulo(comarca) {
  const h1 = document.querySelector('h1');
  const sub = document.querySelector('.header-sub');
  const tag = document.querySelector('.header-tag');
  if (!h1) return;

  if (!comarca) {
    h1.innerHTML  = currentLang === 'val'
      ? "FP a <span>la Comunitat Valenciana</span>"
      : "FP en <span>la Comunitat Valenciana</span>";
    if (sub) sub.textContent = currentLang === 'val'
      ? "Tota l'oferta de Formació Professional de la Comunitat en un sol lloc"
      : "Toda la oferta de Formación Profesional de la Comunitat en un solo lugar";
  } else {
    const nomComarca = currentLang === 'val'
      ? comarcaMunicipis[comarca]?.val ?? comarca
      : comarcaMunicipis[comarca]?.es ?? comarca;
    h1.innerHTML  = currentLang === 'val'
      ? `FP a <span>${nomComarca}</span>`
      : `FP en <span>${nomComarca}</span>`;
    if (sub) sub.textContent = currentLang === 'val'
      ? "Tota l'oferta de Formació Professional de la comarca en un sol lloc"
      : "Toda la oferta de Formación Profesional de la comarca en un solo lugar";
  }
}

// ── Estado vacío (sin comarca) ────────────────────────────────
function actualizarEstadoVacio(comarca) {
  const emptyEl   = document.getElementById('comarca-empty-state');
  const tabsEl    = document.querySelector('.tabs');
  const statsEl   = document.getElementById('stats-panel');
  const infoEl    = document.getElementById('info-panel');
  const cardsEl   = document.getElementById('cards-container');
  const mapEl     = document.getElementById('map-container');

  if (!comarca) {
    if (emptyEl)  emptyEl.style.display  = '';
    if (tabsEl)   tabsEl.style.display   = 'none';
    if (statsEl)  statsEl.style.display  = 'none';
    if (infoEl)   infoEl.classList.remove('visible');
    if (cardsEl)  cardsEl.style.display  = 'none';
    if (mapEl)    mapEl.style.display    = 'none';
    // Actualizar contadores globales
    const totalCentres = new Set(datosEnriquecidos.map(d => d.centro)).size;
    const totalCicles  = datosEnriquecidos.length;
    const totalFams    = new Set(datosEnriquecidos.map(d => d.familia)).size;
    const elC = document.getElementById('total-centros');
    const elCi = document.getElementById('total-ciclos');
    const elF = document.getElementById('total-familias');
    if (elC)  elC.textContent  = totalCentres;
    if (elCi) elCi.textContent = totalCicles;
    if (elF)  elF.textContent  = totalFams;
    // Labels en idioma correcto
    const elLblC  = document.getElementById('lbl-total-centros');
    const elLblCi = document.getElementById('lbl-total-ciclos');
    const elLblF  = document.getElementById('lbl-total-familias');
    if (elLblC)  elLblC.textContent  = t('statCentres')  || 'centros';
    if (elLblCi) elLblCi.textContent = t('statCicles')   || 'ciclos';
    if (elLblF)  elLblF.textContent  = t('statFamiliesPro') || 'familias';
    const prompt = document.getElementById('comarca-prompt-text');
    if (prompt) prompt.textContent = currentLang === 'val'
      ? "Selecciona una comarca per veure l'oferta d'FP"
      : "Selecciona una comarca para ver la oferta de FP";
  } else {
    if (emptyEl)  emptyEl.style.display  = 'none';
    if (tabsEl)   tabsEl.style.display   = '';
    if (cardsEl)  cardsEl.style.display  = currentTab === 'mapa' ? 'none' : '';
    if (mapEl)    mapEl.style.display    = currentTab === 'mapa' ? 'block' : 'none';
  }
}

function renderStats(data, comarca) {
  const count = data.length;
  const el = document.getElementById('result-label');
  if (el) el.innerHTML =
    safe(t('mostrant')) + ' <strong>' + count + '</strong> ' +
    (count !== 1 ? safe(t('cicle_s')) : safe(t('cicle_1')));
}

function renderCards(data) {
  if (currentTab === 'familias')     renderFamilias(data);
  else if (currentTab === 'centros') renderCentros(data);
  else                               renderMap(data);
}

// ── Vista familias ────────────────────────────────────────────
function renderFamilias(data) {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;
  if (!data.length) { grid.innerHTML = emptyState(); return; }

  grid.innerHTML = data.map(d => {
    const ci  = centrosInfo[d.centro] ?? {};
    const pub = !ci.privado;
    const niv = d.nivel.toLowerCase();
    return `<div class="card ${pub ? 'pub' : 'priv'} ${niv}">
      <div class="card-top">
        <span class="card-nivel ${niv}">${d.nivel === 'FPB' ? t('fpbLabel') : d.nivel === 'GM' ? t('gmLabel') : t('gsLabel')}</span>
        ${!pub ? '<span class="card-privado-tag">' + t('privat') + '</span>' : ''}
      </div>
      <div class="card-centro">${safe(d.centro)}</div>
      <div class="card-municipio">📍 ${safe(d.municipio)}</div>
      <div class="fam-tag">${safe(familiaEmoji[d.familia])} ${tFam(d.familia)}</div>
      ${d.centro === 'EASDA' ? '<div class="easda-badge">' + t('easdaBadge') + '</div>' : ''}
      <div style="font-size:.85rem;font-weight:600;margin-top:.4rem">${tCicle(d.ciclo)}</div>
      ${ci.web ? '<a href="' + safe(ci.web) + '" target="_blank" class="card-web">' + t('webCentre') + '</a>' : ''}
      <div class="card-contacto">
        ${ci.tel ? '📞 ' + safe(ci.tel) : ''}
        ${ci.email ? '<br>✉️ <a href="mailto:' + safe(ci.email) + '">' + safe(ci.email) + '</a>' : ''}
      </div>
    </div>`;
  }).join('');
}

// ── Vista centros ─────────────────────────────────────────────
function renderCentros(data) {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;
  if (!data.length) { grid.innerHTML = emptyState(); return; }

  const byCentro = {};
  data.forEach(d => {
    if (!byCentro[d.centro]) byCentro[d.centro] = { info: centrosInfo[d.centro] ?? {}, ciclos: [] };
    byCentro[d.centro].ciclos.push({ nivel: d.nivel, ciclo: d.ciclo, familia: d.familia });
  });

  grid.innerHTML = Object.entries(byCentro).map(([nombre, { info, ciclos }]) => {
    const pub     = info.privado !== true;
    const tieneGS = ciclos.some(c => c.nivel === 'GS');
    const tieneGM = ciclos.some(c => c.nivel === 'GM');
    const niv     = tieneGS ? 'gs' : tieneGM ? 'gm' : 'fpb';
    const esEASDA = nombre === 'EASDA';
    const ciclosHtml = ciclos.map(c => `
      <div class="ciclo-item"
           data-familia="${c.familia.replace(/"/g,'&quot;')}"
           data-ciclo="${c.ciclo.replace(/"/g,'&quot;')}"
           data-nivel="${c.nivel}">
        <span class="ciclo-badge ${c.nivel.toLowerCase()}">${c.nivel}</span>
        <span>${tCicle(c.ciclo)}</span>
        <span class="ciclo-arrow">→</span>
      </div>`).join('');
    return `<div class="card ${pub ? 'pub' : 'priv'} ${niv}">
      <div class="card-top">
        <span style="font-size:.65rem;font-weight:600;color:var(--muted)">${safe(info.municipio)}</span>
        ${!pub ? '<span class="card-privado-tag">' + t('privat') + '</span>' : ''}
      </div>
      <div class="card-centro">${safe(nombre)}</div>
      <div class="card-municipio">📍 ${safe(info.dir)}</div>
      ${esEASDA ? '<div class="easda-badge" style="margin-bottom:.5rem">' + t('easdaBadge') + '</div>' : ''}
      <div class="ciclos-list">${ciclosHtml}</div>
      ${info.web ? '<a href="' + safe(info.web) + '" target="_blank" class="card-web" style="margin-top:.7rem">' + t('webCentre') + '</a>' : ''}
      <div class="card-contacto">
        ${info.tel ? '📞 ' + safe(info.tel) : ''}
        ${info.email ? '<br>✉️ <a href="mailto:' + safe(info.email) + '">' + safe(info.email) + '</a>' : ''}
      </div>
    </div>`;
  }).join('');

  grid.addEventListener('click', e => {
    const item = e.target.closest('.ciclo-item[data-familia]');
    if (!item) return;
    document.dispatchEvent(new CustomEvent('fp:goto-ciclo', {
      detail: { familia: item.dataset.familia, ciclo: item.dataset.ciclo, nivel: item.dataset.nivel }
    }));
  });
}

// ── Tabs ──────────────────────────────────────────────────────
export function setTab(tab, btn) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn?.classList.add('active');

  const modoCentros = tab === 'centros';
  document.getElementById('fg-familia').style.display   = modoCentros ? 'none' : '';
  document.getElementById('fg-ciclo').style.display     = modoCentros ? 'none' : '';
  document.getElementById('fg-centro').style.display    = modoCentros ? '' : 'none';
  document.getElementById('fg-tipologia').style.display = modoCentros ? '' : 'none';

  const mapC   = document.getElementById('map-container');
  const cardsC = document.getElementById('cards-container');
  if (tab === 'mapa') {
    mapC.style.display = 'block'; cardsC.style.display = 'none';
    initMap(); renderMap(getFiltered());
  } else {
    mapC.style.display = 'none'; cardsC.style.display = 'block';
    updateView();
  }
}

// ── Helpers ───────────────────────────────────────────────────
function emptyState() {
  return '<div class="empty-state"><span class="emoji">🔍</span><p>' +
    (t('empty') || 'No hay ciclos que coincidan con los filtros.<br>Prueba a cambiar algún filtro.') +
    '</p></div>';
}
