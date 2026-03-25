import { datosEnriquecidos } from '../data/cycles.js';
import { comarcaMunicipis, comarques } from '../data/comarques.js';
import { t, tFam, tCicle, currentLang } from './language.js';

// Evitar dependencia circular con render-cards.js
function requestUpdate() { document.dispatchEvent(new CustomEvent('fp:update')); }

const safe = (txt) => txt ?? '';

// Selectores DOM
export const fComarca   = () => document.getElementById('f-comarca');
export const fMunicipio = () => document.getElementById('f-municipio');
export const fNivel     = () => document.getElementById('f-nivel');
export const fFamilia   = () => document.getElementById('f-familia');
export const fCiclo     = () => document.getElementById('f-ciclo');
export const fCentro    = () => document.getElementById('f-centro');
export const fTipologia = () => document.getElementById('f-tipologia');

// Lista base de familias (ordenada, sin duplicados)
export const familias = [...new Set(datosEnriquecidos.map(d => d.familia))].sort();

// ── Filtrado ──────────────────────────────────────────────────
export function getFiltered() {
  const com = safe(fComarca()?.value);
  const mun = safe(fMunicipio()?.value);
  const niv = safe(fNivel()?.value);
  const fam = safe(fFamilia()?.value);
  const cic = safe(fCiclo()?.value);
  const cen = safe(fCentro()?.value);
  const tip = safe(fTipologia()?.value);

  // Si no hay comarca: devolvemos vacío (web en blanco)
  if (!com) return [];

  return datosEnriquecidos.filter(d => {
    if (d.comarca    !== com)  return false;
    if (mun && d.municipio !== mun) return false;
    if (niv && d.nivel     !== niv) return false;
    if (fam && d.familia   !== fam) return false;
    if (cic && d.ciclo     !== cic) return false;
    if (cen && d.centro    !== cen) return false;
    if (tip === 'publico'  && d.privado)  return false;
    if (tip === 'privado'  && !d.privado) return false;
    return true;
  });
}

// ── Poblar select de comarcas ────────────────────────────────
export function poblarComarcas() {
  const sel = fComarca();
  if (!sel) return;
  const placeholder = currentLang === 'val'
    ? 'Selecciona una comarca…'
    : 'Selecciona una comarca…';
  sel.innerHTML = `<option value="">${placeholder}</option>` +
    comarques.map(c => {
      const nom = currentLang === 'val'
        ? comarcaMunicipis[c].val
        : comarcaMunicipis[c].es;
      return `<option value="${c}">${nom}</option>`;
    }).join('');
}

// ── Filtros en cascada ────────────────────────────────────────
let _actualizando = false;
export function actualizarFiltrosCascada() {
  if (_actualizando) return;
  _actualizando = true;

  const com = safe(fComarca()?.value);
  const niv = safe(fNivel()?.value);
  const fam = safe(fFamilia()?.value);

  // Poblar municipios según comarca
  const fMun = fMunicipio();
  if (fMun) {
    const munActual = fMun.value;
    const municipisDeComarca = com ? Object.keys(comarcaMunicipis[com]?.municipis ?? {}) : [];
    fMun.innerHTML = `<option value="">${t('allMunicipis')}</option>` +
      municipisDeComarca.map(m => {
        const nom = currentLang === 'val'
          ? (comarcaMunicipis[com]?.municipis[m]?.val ?? m)
          : m;
        return `<option value="${m}"${m === munActual ? ' selected' : ''}>${nom}</option>`;
      }).join('');
    if (munActual && !municipisDeComarca.includes(munActual)) fMun.value = '';
  }

  // Base filtrada por comarca + municipio + nivel
  const mun = safe(fMunicipio()?.value);
  const baseFam = datosEnriquecidos.filter(d =>
    (!com || d.comarca    === com) &&
    (!mun || d.municipio  === mun) &&
    (!niv || d.nivel      === niv)
  );
  const baseCic = baseFam.filter(d => !fam || d.familia === fam);

  // Poblar familias
  const famsDisponibles = new Set(baseFam.map(d => d.familia));
  const famActual = fam;
  const fFam = fFamilia();
  if (fFam) {
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

  // Poblar centros (solo de la comarca)
  const centros = [...new Set(
    datosEnriquecidos.filter(d => !com || d.comarca === com).map(d => d.centro)
  )].sort();
  const fCen = fCentro();
  if (fCen) {
    const cenActual = fCen.value;
    fCen.innerHTML = `<option value="">${t('allCentres') ?? 'Todos los centros'}</option>` +
      centros.map(c => `<option value="${c}"${c === cenActual ? ' selected' : ''}>${c}</option>`).join('');
  }

  _actualizando = false;
}

// ── Reset (mantiene comarca) ──────────────────────────────────
export function resetFilters() {
  const comarcaActual = fComarca()?.value ?? '';
  ['f-municipio','f-nivel','f-familia','f-ciclo','f-centro','f-tipologia']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  // Restaurar comarca
  if (fComarca()) fComarca().value = comarcaActual;
  actualizarFiltrosCascada();
  requestUpdate();
}

// ── Inicializar listeners ─────────────────────────────────────
export function initFilters() {
  const on = (id, fn) => document.getElementById(id)?.addEventListener('change', fn);

  on('f-comarca',   () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-municipio', () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-nivel',     () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-familia',   () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-ciclo',     requestUpdate);
  on('f-centro',    requestUpdate);
  on('f-tipologia', requestUpdate);
  document.getElementById('btn-reset')?.addEventListener('click', resetFilters);

  // Inicializar select de comarcas
  poblarComarcas();
}
