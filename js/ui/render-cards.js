import { getFiltered, datosEnriquecidos, actualizarFiltrosCascada,
         fComarca, fProvincia, fFamilia, fNivel, fCiclo, fMunicipio } from './filters.js';
import { updateInfoPanel } from './render-info.js';
import { initMap, renderMap } from './render-map.js';
import { t, tFam, tCicle, tSalidas, currentLang } from './language.js';
import { centrosInfo }    from '../data/centres.js';
import { familiaEmoji } from '../data/cycles.js';
import { comarcaMunicipis } from '../data/comarques.js';

const safe = (txt) => txt ?? '';

export let currentTab = 'familias';

// ── Punto de entrada central ──────────────────────────────────
export function updateView() {
  const comarcaVal   = fComarca()?.value   ?? '';
  const provinciaVal = fProvincia()?.value ?? '';
  const familiaVal   = fFamilia()?.value   ?? '';
  const hayFiltro = comarcaVal || provinciaVal || familiaVal;
  actualizarTitulo(comarcaVal, provinciaVal);
  actualizarEstadoVacio(hayFiltro);
  if (!hayFiltro) {
    // Netejar result-label quan es torna a l'estat buit
    const lbl = document.getElementById('result-label');
    if (lbl) lbl.textContent = '';
    return;
  }

  const data = getFiltered();
  renderStats(data, comarcaVal);
  updateInfoPanel(data);
  renderCards(data);
}

// ── Título dinámico ───────────────────────────────────────────
function actualizarTitulo(comarca, provincia) {
  const h1 = document.querySelector('h1');
  const sub = document.querySelector('.header-sub');
  if (!h1) return;

  if (comarca) {
    const nomComarca = currentLang === 'val'
      ? comarcaMunicipis[comarca]?.val ?? comarca
      : comarcaMunicipis[comarca]?.es ?? comarca;
    h1.innerHTML = currentLang === 'val'
      ? `FP a <span>${nomComarca}</span>`
      : `FP en <span>${nomComarca}</span>`;
    if (sub) sub.textContent = currentLang === 'val'
      ? "Tota l'oferta de Formació Professional de la comarca en un sol lloc"
      : "Toda la oferta de Formación Profesional de la comarca en un solo lugar";
  } else if (provincia) {
    const nomProv = currentLang === 'val'
      ? (provincia === 'Alicante' ? 'Alacant' : provincia === 'Castellon' ? 'Castelló' : 'València')
      : (provincia === 'Alicante' ? 'Alicante' : provincia === 'Castellon' ? 'Castellón' : 'Valencia');
    h1.innerHTML = currentLang === 'val'
      ? `FP a <span>${nomProv}</span>`
      : `FP en <span>${nomProv}</span>`;
    if (sub) sub.textContent = currentLang === 'val'
      ? "Tota l'oferta de Formació Professional de la província en un sol lloc"
      : "Toda la oferta de Formación Profesional de la provincia en un solo lugar";
  } else {
    h1.innerHTML = currentLang === 'val'
      ? "FP a <span>la Comunitat Valenciana</span>"
      : "FP en <span>la Comunitat Valenciana</span>";
    if (sub) sub.textContent = currentLang === 'val'
      ? "Tota l'oferta de Formació Professional de la Comunitat en un sol lloc"
      : "Toda la oferta de Formación Profesional de la Comunitat en un solo lugar";
  }
}

// ── Estado vacío (sin comarca ni provincia) ───────────────────
function actualizarEstadoVacio(hayFiltro) {
  const emptyEl   = document.getElementById('comarca-empty-state');
  const tabsEl    = document.querySelector('.tabs');
  const statsEl   = document.getElementById('stats-panel');
  const infoEl    = document.getElementById('info-panel');
  const cardsEl   = document.getElementById('cards-container');
  const mapEl     = document.getElementById('map-container');

  if (!hayFiltro) {
    if (emptyEl)  emptyEl.style.display  = '';
    if (tabsEl)   tabsEl.style.display   = 'none';
    if (statsEl)  statsEl.style.display  = 'none';
    if (infoEl)   infoEl.classList.remove('visible');
    if (cardsEl)  cardsEl.style.display  = 'none';
    if (mapEl)    mapEl.style.display    = 'none';
    // Netejar result-label
    const lbl = document.getElementById('result-label');
    if (lbl) lbl.textContent = '';
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
      ? "Selecciona una província o una família professional per descobrir el teu futur a la FP"
      : "Selecciona una provincia o una familia profesional para descubrir tu futuro en la FP";
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

// ── Format unificat de targeta ───────────────────────────────
function cardHtml(nombre, municipio, pub, niv, familia, ciclo, dir, web, tel, email) {
  const salidas = tSalidas(ciclo);
  const nivOrd = { fpb: 'FPB', gm: 'GM', gs: 'GS' };
  return `<div class="card ${pub ? 'pub' : 'priv'} ${niv}">
    <div class="card-centro">${safe(nombre)}</div>
    <div class="card-municipio">📍 ${safe(municipio)}</div>
    <div class="fam-tag">${safe(familiaEmoji[familia])} ${tFam(familia)}</div>
    <div class="card-ciclo-nombre">${tCicle(ciclo)}</div>
    ${salidas ? '<div class="card-salidas">' + t('salidas') + ' ' + salidas + '</div>' : ''}
    <div class="card-contacto-block">
      ${web ? '<a href="' + safe(web) + '" target="_blank" class="card-web">🌐 ' + t('webCentre') + '</a>' : ''}
      ${tel ? '<span class="card-tel">📞 ' + safe(tel) + '</span>' : ''}
      ${email ? '<a href="mailto:' + safe(email) + '" class="card-email">✉️ ' + safe(email) + '</a>' : ''}
    </div>
  </div>`;
}

// ── Vista familias ────────────────────────────────────────────
// Ordre: nom centre → nivel (FPB→GM→GS) → nom cicle
function renderFamilias(data) {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;
  if (!data.length) { grid.innerHTML = emptyState(); return; }

  const nivelOrd = { FPB: 0, GM: 1, GS: 2 };
  const sorted = [...data].sort((a, b) =>
    a.centro.localeCompare(b.centro, 'es') ||
    (nivelOrd[a.nivel] - nivelOrd[b.nivel]) ||
    a.ciclo.localeCompare(b.ciclo, 'es')
  );

  grid.innerHTML = sorted.map(d => {
    const ci  = centrosInfo[d.centro] ?? {};
    const pub = !ci.privado;
    const niv = d.nivel.toLowerCase();
    return cardHtml(d.centro, d.municipio, pub, niv, d.familia, d.ciclo,
                    ci.dir, ci.web, ci.tel, ci.email);
  }).join('');
}

// ── Vista centros ─────────────────────────────────────────────
// Ordre: municipi → nom centre. Una targeta per cicle (format unificat).
function renderCentros(data) {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;
  if (!data.length) { grid.innerHTML = emptyState(); return; }

  const nivelOrd = { FPB: 0, GM: 1, GS: 2 };
  const sorted = [...data].sort((a, b) => {
    const ciA = centrosInfo[a.centro] ?? {};
    const ciB = centrosInfo[b.centro] ?? {};
    return (ciA.municipio ?? '').localeCompare(ciB.municipio ?? '', 'es') ||
           a.centro.localeCompare(b.centro, 'es') ||
           (nivelOrd[a.nivel] - nivelOrd[b.nivel]) ||
           a.ciclo.localeCompare(b.ciclo, 'es');
  });

  grid.innerHTML = sorted.map(d => {
    const ci  = centrosInfo[d.centro] ?? {};
    const pub = !ci.privado;
    const niv = d.nivel.toLowerCase();
    return cardHtml(d.centro, ci.municipio || d.municipio, pub, niv, d.familia, d.ciclo,
                    ci.dir, ci.web, ci.tel, ci.email);
  }).join('');
}
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
