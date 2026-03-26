// ============================================================
// MAIN — orquestador principal
// ============================================================
import { applyUILang, setLang, currentLang }           from './ui/language.js';
import { initFilters, actualizarFiltrosCascada,
         fNivel, fFamilia, fCiclo, fComarca, poblarComarcas } from './ui/filters.js';
import { updateView, setTab }                          from './ui/render-cards.js';
import { initInfoPanel }                               from './ui/render-info.js';

// ── Detectar idioma del navegador ─────────────────────────────
function detectarIdioma() {
  const lang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
  if (lang.startsWith('ca') || lang.startsWith('val') || lang === 'ca-es') return 'val';
  return 'es';
}

// ── Ir a una familia+ciclo concreto ──────────────────────────
function gotoFamiliaConCiclo({ familia, ciclo, nivel }) {
  setTab('familias', document.getElementById('tab-familias'));
  if (nivel) fNivel().value = nivel;
  fFamilia().value = familia;
  actualizarFiltrosCascada();
  setTimeout(() => { fCiclo().value = ciclo; updateView(); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 60);
}

function init() {
  const idioma = detectarIdioma();

  // ── Eventos personalizados ────────────────────────────────
  document.addEventListener('fp:update',      updateView);
  document.addEventListener('fp:cascade',     actualizarFiltrosCascada);
  document.addEventListener('fp:goto-ciclo',  e => gotoFamiliaConCiclo(e.detail));
  document.addEventListener('fp:goto-nivel',  e => {
    const { fn, familia, ciclo } = e.detail;
    gotoFamiliaConCiclo({ familia, ciclo, nivel: fn === 'irAGM' ? 'GM' : 'GS' });
  });
  // Canvi de tab automàtic quan s'activa un filtre trigger
  document.addEventListener('fp:switch-tab', e => {
    const tabEl = document.getElementById(`tab-${e.detail}`);
    if (tabEl) setTab(e.detail, tabEl);
  });

  // ── Filtros ───────────────────────────────────────────────
  initFilters();

  // ── Info panel ────────────────────────────────────────────
  initInfoPanel();

  // ── Tabs ──────────────────────────────────────────────────
  document.getElementById('tab-centros')?.addEventListener('click',  e => setTab('centros',  e.currentTarget));
  document.getElementById('tab-familias')?.addEventListener('click', e => setTab('familias', e.currentTarget));
  document.getElementById('tab-mapa')?.addEventListener('click',     e => setTab('mapa',     e.currentTarget));

  // ── Idioma ────────────────────────────────────────────────
  document.getElementById('btn-es')?.addEventListener('click',  () => setLang('es'));
  document.getElementById('btn-val')?.addEventListener('click', () => setLang('val'));

  // ── Primer render ─────────────────────────────────────────
  setLang(idioma);
}

document.addEventListener('DOMContentLoaded', init);
