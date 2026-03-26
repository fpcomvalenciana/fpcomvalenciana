import { datos } from '../data/cycles.js';
import { centrosInfo } from '../data/centres.js';
import { comarcaMunicipis, provincies } from '../data/comarques.js';
import { t, tFam, tCicle, currentLang } from './language.js';
import { setTab } from './render-cards.js';

function requestUpdate() { document.dispatchEvent(new CustomEvent('fp:update')); }

const safe = (txt) => txt ?? '';

// Enriquim datos amb info de centre
export const datosEnriquecidos = datos.map(d => ({
  ...d, ...(centrosInfo[d.centro] ?? { municipio:'', comarca:'', provincia:'', lat:39.5, lng:-0.5, privado:false })
}));

// Selectores DOM
export const fProvincia = () => document.getElementById('f-provincia');
export const fComarca   = () => document.getElementById('f-comarca');
export const fMunicipio = () => document.getElementById('f-municipio');
export const fNivel     = () => document.getElementById('f-nivel');
export const fFamilia   = () => document.getElementById('f-familia');
export const fCiclo     = () => document.getElementById('f-ciclo');
export const fCentro    = () => document.getElementById('f-centro');
export const fTipologia = () => document.getElementById('f-tipologia');

export const familias = [...new Set(datosEnriquecidos.map(d => d.familia))].sort();

// ── Base filtrada per província/comarca/municipi/nivell ────────
function getBaseFiltrada(prov, com, mun, niv) {
  return datosEnriquecidos.filter(d => {
    if (prov && comarcaMunicipis[d.comarca]?.provincia !== prov) return false;
    if (com  && d.comarca   !== com)  return false;
    if (mun  && d.municipio !== mun)  return false;
    if (niv  && d.nivel     !== niv)  return false;
    return true;
  });
}

// ── Condició per mostrar resultats ───────────────────────────
// Ara: província O família (no cal comarca)
export function hasFiltreActiu() {
  return !!(safe(fProvincia()?.value) || safe(fFamilia()?.value));
}

// ── Filtrado ──────────────────────────────────────────────────
export function getFiltered() {
  const prov = safe(fProvincia()?.value);
  const com  = safe(fComarca()?.value);
  const mun  = safe(fMunicipio()?.value);
  const niv  = safe(fNivel()?.value);
  const fam  = safe(fFamilia()?.value);
  const cic  = safe(fCiclo()?.value);
  const cen  = safe(fCentro()?.value);
  const tip  = safe(fTipologia()?.value);

  // Sense província ni família: buit
  if (!prov && !fam) return [];

  return getBaseFiltrada(prov, com, mun, niv).filter(d => {
    if (fam  && d.familia   !== fam)  return false;
    if (cic  && d.ciclo     !== cic)  return false;
    if (cen  && d.centro    !== cen)  return false;
    if (tip === 'publico'  && d.privado)  return false;
    if (tip === 'privado'  && !d.privado) return false;
    return true;
  });
}

// ── Poblar provincia ──────────────────────────────────────────
export function poblarProvincies() {
  const sel = fProvincia();
  if (!sel) return;
  const prov = sel.value;
  const placeholder = currentLang === 'val' ? 'Totes les províncies' : 'Todas las provincias';
  sel.innerHTML = `<option value="">${placeholder}</option>` +
    Object.entries(provincies).map(([key, nom]) =>
      `<option value="${key}"${key === prov ? ' selected' : ''}>${currentLang === 'val' ? nom.val : nom.es}</option>`
    ).join('');
}

// ── Poblar municipios directament des de centrosInfo per província ──
function poblarMunicipios() {
  const sel  = fMunicipio();
  if (!sel) return;
  const prov     = safe(fProvincia()?.value);
  const munActual = sel.value;
  const placeholder = t('allMunicipis') || (currentLang === 'val' ? 'Tots els municipis' : 'Todos los municipios');

  // Obtenim municipis únics dels centres d'aquesta província
  const municipis = prov
    ? [...new Set(
        Object.values(centrosInfo)
          .filter(c => c.provincia === prov)
          .map(c => c.municipio)
          .filter(Boolean)
      )].sort()
    : [];

  sel.innerHTML = `<option value="">${placeholder}</option>` +
    municipis.map(m => `<option value="${m}"${m === munActual ? ' selected' : ''}>${m}</option>`).join('');

  // Si el municipi actual no és vàlid per a la nova província, el buidem
  if (munActual && !municipis.includes(munActual)) sel.value = '';
}

// ── Cascada ───────────────────────────────────────────────────
let _actualizando = false;
export function actualizarFiltrosCascada() {
  if (_actualizando) return;
  _actualizando = true;

  const prov = safe(fProvincia()?.value);
  const niv  = safe(fNivel()?.value);
  const fam  = safe(fFamilia()?.value);

  // Municipis vinculats a província (sense comarca)
  poblarMunicipios();

  const mun = safe(fMunicipio()?.value);

  // Base filtrada geogràfica + nivell
  const baseFam = getBaseFiltrada(prov, '', mun, niv);
  const baseCic = baseFam.filter(d => !fam || d.familia === fam);

  // Poblar familias
  const famsDisponibles = new Set(baseFam.map(d => d.familia));
  const fFam = fFamilia();
  if (fFam) {
    const famActual = fam;
    fFam.innerHTML = `<option value="">${t('allFamilies')}</option>` +
      familias
        .filter(f => famsDisponibles.has(f))
        .map(f => `<option value="${f}"${f === famActual ? ' selected' : ''}>${tFam(f)}</option>`)
        .join('');
    if (famActual && !famsDisponibles.has(famActual)) fFam.value = '';
  }

  // Poblar ciclos
  const cicloActual = safe(fCiclo()?.value);
  const ciclosDisponibles = [...new Set(baseCic.map(d => d.ciclo))].sort();
  const fCic = fCiclo();
  if (fCic) {
    fCic.innerHTML = `<option value="">${t('allCicles')}</option>` +
      ciclosDisponibles
        .map(c => `<option value="${c}"${c === cicloActual ? ' selected' : ''}>${tCicle(c)}</option>`)
        .join('');
    if (cicloActual && !ciclosDisponibles.includes(cicloActual)) fCic.value = '';
  }

  // Poblar centros (per província, sense comarca)
  const centros = [...new Set(
    getBaseFiltrada(prov, '', '', '').map(d => d.centro)
  )].sort();
  const fCen = fCentro();
  if (fCen) {
    const cenActual = fCen.value;
    fCen.innerHTML = `<option value="">${t('allCentres') ?? 'Todos los centros'}</option>` +
      centros.map(c => `<option value="${c}"${c === cenActual ? ' selected' : ''}>${c}</option>`).join('');
  }

  _actualizando = false;
}

// ── Reset COMPLET (inclou província) ─────────────────────────
export function resetFilters() {
  ['f-provincia','f-comarca','f-municipio','f-nivel','f-familia','f-ciclo','f-centro','f-tipologia']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });

  // Netejar el label de resultats
  const lbl = document.getElementById('result-label');
  if (lbl) lbl.textContent = '';

  actualizarFiltrosCascada();
  requestUpdate();
}

// ── Init ──────────────────────────────────────────────────────
export function initFilters() {
  const on = (id, fn) => document.getElementById(id)?.addEventListener('change', fn);

  // Província → tab centros + cascada
  on('f-provincia', () => {
    actualizarFiltrosCascada();
    if (fProvincia()?.value) {
      setTab('centros', document.getElementById('tab-centros'));
    }
    requestUpdate();
  });

  // Família → tab familias + cascada
  on('f-familia', () => {
    actualizarFiltrosCascada();
    if (fFamilia()?.value) {
      setTab('familias', document.getElementById('tab-familias'));
    }
    requestUpdate();
  });

  on('f-municipio', () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-nivel',     () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-ciclo',     requestUpdate);
  on('f-centro',    requestUpdate);
  on('f-tipologia', requestUpdate);
  document.getElementById('btn-reset')?.addEventListener('click', resetFilters);

  poblarProvincies();
  actualizarFiltrosCascada();
}
