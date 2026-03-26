import { datos } from '../data/cycles.js';
import { centrosInfo } from '../data/centres.js';
import { comarcaMunicipis, comarques, provincies } from '../data/comarques.js';
import { t, tFam, tCicle, currentLang } from './language.js';

function requestUpdate() { document.dispatchEvent(new CustomEvent('fp:update')); }

const safe = (txt) => txt ?? '';

// Enriquim datos amb info de centre (municipio, comarca, lat, lng, privado)
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
// Funció compartida per getFiltered i actualizarFiltrosCascada
// per evitar duplicació de lògica de filtratge geogràfic.
function getBaseFiltrada(prov, com, mun, niv) {
  return datosEnriquecidos.filter(d => {
    if (prov && comarcaMunicipis[d.comarca]?.provincia !== prov) return false;
    if (com  && d.comarca   !== com)  return false;
    if (mun  && d.municipio !== mun)  return false;
    if (niv  && d.nivel     !== niv)  return false;
    return true;
  });
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

  if (!prov && !com) return [];

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
  const placeholder = currentLang === 'val' ? 'Totes les províncies' : 'Todas las provincias';
  sel.innerHTML = `<option value="">${placeholder}</option>` +
    Object.entries(provincies).map(([key, nom]) =>
      `<option value="${key}">${currentLang === 'val' ? nom.val : nom.es}</option>`
    ).join('');
}

// ── Poblar comarcas (filtradas por provincia) ─────────────────
export function poblarComarcas() {
  const sel  = fComarca();
  if (!sel) return;
  const prov = safe(fProvincia()?.value);
  const placeholder = currentLang === 'val' ? 'Selecciona una comarca…' : 'Selecciona una comarca…';

  const comarquesFiltrades = comarques.filter(c =>
    !prov || comarcaMunicipis[c]?.provincia === prov
  );

  sel.innerHTML = `<option value="">${placeholder}</option>` +
    comarquesFiltrades.map(c => {
      const nom = currentLang === 'val' ? comarcaMunicipis[c].val : comarcaMunicipis[c].es;
      return `<option value="${c}">${nom}</option>`;
    }).join('');
}

// ── Cascada ───────────────────────────────────────────────────
let _actualizando = false;
export function actualizarFiltrosCascada() {
  if (_actualizando) return;
  _actualizando = true;

  const prov = safe(fProvincia()?.value);
  const com  = safe(fComarca()?.value);
  const niv  = safe(fNivel()?.value);
  const fam  = safe(fFamilia()?.value);

  // Repoblar comarcas según provincia
  poblarComarcas();
  // Restaurar valor comarca si sigue siendo válido
  const comarcaValida = comarques.find(c =>
    c === com && (!prov || comarcaMunicipis[c]?.provincia === prov)
  );
  if (fComarca()) fComarca().value = comarcaValida ?? '';

  const comActual = fComarca()?.value ?? '';

  // Poblar municipios
  const fMun = fMunicipio();
  if (fMun) {
    const munActual = fMun.value;
    const municipisDeComarca = comActual
      ? Object.keys(comarcaMunicipis[comActual]?.municipis ?? {})
      : [];
    fMun.innerHTML = `<option value="">${t('allMunicipis')}</option>` +
      municipisDeComarca.map(m => {
        const nom = currentLang === 'val'
          ? (comarcaMunicipis[comActual]?.municipis[m]?.val ?? m)
          : m;
        return `<option value="${m}"${m === munActual ? ' selected' : ''}>${nom}</option>`;
      }).join('');
    if (munActual && !municipisDeComarca.includes(munActual)) fMun.value = '';
  }

  // Base filtrada
  const munActual2 = safe(fMunicipio()?.value);
  const baseFam = getBaseFiltrada(prov, comActual, munActual2, niv);
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

  // Poblar centros
  const centros = [...new Set(
    getBaseFiltrada(prov, comActual, '', '').map(d => d.centro)
  )].sort();
  const fCen = fCentro();
  if (fCen) {
    const cenActual = fCen.value;
    fCen.innerHTML = `<option value="">${t('allCentres') ?? 'Todos los centros'}</option>` +
      centros.map(c => `<option value="${c}"${c === cenActual ? ' selected' : ''}>${c}</option>`).join('');
  }

  _actualizando = false;
}

// ── Reset (mantiene provincia) ────────────────────────────────
export function resetFilters() {
  const provActual = fProvincia()?.value ?? '';
  ['f-comarca','f-municipio','f-nivel','f-familia','f-ciclo','f-centro','f-tipologia']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  if (fProvincia()) fProvincia().value = provActual;
  actualizarFiltrosCascada();
  requestUpdate();
}

// ── Init ──────────────────────────────────────────────────────
export function initFilters() {
  const on = (id, fn) => document.getElementById(id)?.addEventListener('change', fn);

  on('f-provincia', () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-comarca',   () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-municipio', () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-nivel',     () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-familia',   () => { actualizarFiltrosCascada(); requestUpdate(); });
  on('f-ciclo',     requestUpdate);
  on('f-centro',    requestUpdate);
  on('f-tipologia', requestUpdate);
  document.getElementById('btn-reset')?.addEventListener('click', resetFilters);

  poblarProvincies();
  poblarComarcas();
}
