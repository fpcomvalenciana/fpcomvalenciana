import { datosEnriquecidos } from '../data/cycles.js';
import { t, tFam, tCicle } from './language.js';

// Evitar dependencia circular con render-cards.js:
// disparamos un evento personalizado que main.js conecta a updateView
function requestUpdate() {
  document.dispatchEvent(new CustomEvent('fp:update'));
}

const safe = (txt) => txt ?? '';

// Referencias a los selectores del DOM
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
  const mun = safe(fMunicipio()?.value);
  const niv = safe(fNivel()?.value);
  const fam = safe(fFamilia()?.value);
  const cic = safe(fCiclo()?.value);
  const cen = safe(fCentro()?.value);
  const tip = safe(fTipologia()?.value);

  return datosEnriquecidos.filter(d => {
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

// ── Filtros en cascada ────────────────────────────────────────
let _actualizando = false;
export function actualizarFiltrosCascada() {
  if (_actualizando) return;
  _actualizando = true;

  const mun = safe(fMunicipio()?.value);
  const niv = safe(fNivel()?.value);
  const fam = safe(fFamilia()?.value);

  const baseFam = datosEnriquecidos.filter(d =>
    (!mun || d.municipio === mun) && (!niv || d.nivel === niv));
  const baseCic = datosEnriquecidos.filter(d =>
    (!mun || d.municipio === mun) && (!niv || d.nivel === niv) && (!fam || d.familia === fam));

  const famsDisponibles = new Set(baseFam.map(d => d.familia));
  const famActual = fam;
  const fFam = fFamilia();
  if (fFam) {
    fFam.innerHTML = '<option value="">' + t('allFamilies') + '</option>' +
      familias.filter(f => famsDisponibles.has(f))
              .map(f => `<option value="${f}"${f === famActual ? ' selected' : ''}>${tFam(f)}</option>`)
              .join('');
    if (famActual && !famsDisponibles.has(famActual)) fFam.value = '';
  }

  const cicloActual = safe(fCiclo()?.value);
  const ciclosDisponibles = [...new Set(baseCic.map(d => d.ciclo))].sort();
  const fCic = fCiclo();
  if (fCic) {
    fCic.innerHTML = '<option value="">' + t('allCicles') + '</option>' +
      ciclosDisponibles.map(c => `<option value="${c}"${c === cicloActual ? ' selected' : ''}>${tCicle(c)}</option>`)
                       .join('');
    if (cicloActual && !ciclosDisponibles.includes(cicloActual)) fCic.value = '';
  }

  // Poblar centros
  const centros = [...new Set(datosEnriquecidos.map(d => d.centro))].sort();
  const fCen = fCentro();
  if (fCen && fCen.options.length <= 1) {
    fCen.innerHTML = '<option value="">Todos los centros</option>' +
      centros.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  _actualizando = false;
}

// ── Reset ─────────────────────────────────────────────────────
export function resetFilters() {
  ['f-municipio','f-nivel','f-familia','f-ciclo','f-centro','f-tipologia']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  actualizarFiltrosCascada();
  requestUpdate();
}

// ── Inicializar listeners ─────────────────────────────────────
export function initFilters() {
  const on = (id, fn) => document.getElementById(id)?.addEventListener('change', fn);

  on('f-municipio', () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-nivel',     () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-familia',   () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-ciclo',     requestUpdate);
  on('f-centro',    requestUpdate);
  on('f-tipologia', requestUpdate);
  document.getElementById('btn-reset')?.addEventListener('click', resetFilters);
}
