import { getFiltered } from './filters.js';
import { updateInfoPanel } from './render-info.js';
import { renderMap } from './render-map.js';
import { t } from './language.js';
import { centrosInfo } from '../data/centres.js';
import { familiaEmoji } from '../data/cycles.js';

const safe = (txt) => txt ?? '';

export let currentTab = 'familias';

// ── Punto de entrada central ──────────────────────────────────
export function updateView() {
  const data = getFiltered();
  renderStats(data);
  renderPanels(data);
  renderCards(data);
}

function renderStats(data) {
  const count = data.length;
  const el = document.getElementById('result-label');
  if (el) el.innerHTML =
    safe(t('mostrant')) + ' <strong>' + count + '</strong> ' +
    (count !== 1 ? safe(t('cicle_s')) : safe(t('cicle_1')));
}

function renderPanels(data) {
  updateInfoPanel(data);
}

function renderCards(data) {
  if (currentTab === 'familias')     renderFamilias(data);
  else if (currentTab === 'centros') renderCentros(data);
  else                               renderMap(data);
}

// ── Vista familias ────────────────────────────────────────────
import { tFam, tCicle } from './language.js';

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
    const pub       = info.privado !== true;
    const tieneGS   = ciclos.some(c => c.nivel === 'GS');
    const tieneGM   = ciclos.some(c => c.nivel === 'GM');
    const niv       = tieneGS ? 'gs' : tieneGM ? 'gm' : 'fpb';
    const esEASDA   = nombre === 'EASDA';
    const ciclosHtml = ciclos.map(c => `
      <div class="ciclo-item" data-familia="${c.familia.replace(/"/g,'&quot;')}" data-ciclo="${c.ciclo.replace(/"/g,'&quot;')}" data-nivel="${c.nivel}">
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

  // Delegación: click en ciclo dentro de tarjeta de centro
  grid.addEventListener('click', e => {
    const item = e.target.closest('.ciclo-item[data-familia]');
    if (!item) return;
    filtrarDesdeCentro(item.dataset.familia, item.dataset.ciclo, item.dataset.nivel);
  }, { once: false });
}

// ── Navegación desde centro hacia familias ────────────────────
import { fNivel, fFamilia, fCiclo, actualizarFiltrosCascada } from './filters.js';

function filtrarDesdeCentro(familia, ciclo, nivel) {
  setTab('familias', document.getElementById('tab-familias'));
  mostrarFiltrosFamilias();
  fNivel().value = nivel;
  fFamilia().value = familia;
  actualizarFiltrosCascada();
  setTimeout(() => { fCiclo().value = ciclo; updateView(); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 60);
}

export function irAGM(familia, ciclo) {
  setTab('familias', document.getElementById('tab-familias'));
  mostrarFiltrosFamilias();
  fNivel().value = 'GM'; fFamilia().value = familia;
  actualizarFiltrosCascada();
  setTimeout(() => { fCiclo().value = ciclo; updateView(); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 60);
}

export function irAGS(familia, ciclo) {
  setTab('familias', document.getElementById('tab-familias'));
  mostrarFiltrosFamilias();
  fNivel().value = 'GS'; fFamilia().value = familia;
  actualizarFiltrosCascada();
  setTimeout(() => { fCiclo().value = ciclo; updateView(); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 60);
}

// ── Tabs ──────────────────────────────────────────────────────
export function setTab(tab, btn) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn?.classList.add('active');

  const modoCentros = tab === 'centros';
  document.getElementById('fg-familia').style.display  = modoCentros ? 'none' : '';
  document.getElementById('fg-ciclo').style.display    = modoCentros ? 'none' : '';
  document.getElementById('fg-centro').style.display   = modoCentros ? '' : 'none';
  document.getElementById('fg-tipologia').style.display= modoCentros ? '' : 'none';

  const mapC   = document.getElementById('map-container');
  const cardsC = document.getElementById('cards-container');
  if (tab === 'mapa') {
    mapC.style.display   = 'block';
    cardsC.style.display = 'none';
    import('./render-map.js').then(({ initMap, renderMap }) => {
      initMap();
      renderMap(getFiltered());
    });
  } else {
    mapC.style.display   = 'none';
    cardsC.style.display = 'block';
    updateView();
  }
}

function mostrarFiltrosFamilias() {
  document.getElementById('fg-familia').style.display  = '';
  document.getElementById('fg-ciclo').style.display    = '';
  document.getElementById('fg-centro').style.display   = 'none';
  document.getElementById('fg-tipologia').style.display= 'none';
}

// ── Helpers ───────────────────────────────────────────────────
export function emptyState() {
  return '<div class="empty-state"><span class="emoji">🔍</span><p>' +
    'No hay ciclos que coincidan con los filtros.<br>Prueba a cambiar algún filtro.</p></div>';
}
